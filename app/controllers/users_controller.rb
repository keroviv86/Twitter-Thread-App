class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        # if current_user
            render json: current_user, status: :ok
        # else
        #     render json: "No current user set", status: :unauthorized
        # end
    end

    def selected_user_profile
        user = find_user
        render json: user, status: :ok
    end


    def create 
        user = User.create!(user_params)
        session[:current_user] = user.id
        render json: user, status: :created
    end 

    private
    def find_user 
        user= User.find_by(id: params[:id])
    end

    def user_params
        params.permit(:name, :password)
    end 

    
end