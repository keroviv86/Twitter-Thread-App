class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:login]

    def login
        user = User.find_by(name:params[:name])
       
        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            render json: user, status: :ok
        else 
            render json: {error: "Username or Password is incorrect"}, status: :unauthorized
        end 
    end 

    def logout
        session.delete :current_user
        head :no_content
    end
end