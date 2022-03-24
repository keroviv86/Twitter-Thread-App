class SubscriptionsController < ApplicationController
    def show
        user = find_subscriptions_for_user
        render json: user.subscribed_users, status: :ok
    end

    private
    def find_subscriptions_for_user
        current_user = User.find(params[:id])
    end
end
