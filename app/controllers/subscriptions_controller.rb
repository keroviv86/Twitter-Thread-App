class SubscriptionsController < ApplicationController
    def show
        user = find_subscriptions_for_user
        render json: user.subscribed_users, status: :ok
    end

    def create
        subscription = Subscription.create!(subscription_params)
        render json: subscription, status: :created
    end

    private
    def find_subscriptions_for_user
        current_user = User.find(params[:id])
    end
    def subscription_params
        params.permit(:user_id, :subscriber_id)
    end
end
