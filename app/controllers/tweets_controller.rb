class TweetsController < ApplicationController
    def index
        tweets = Tweet.all
        render json: tweets, status: :ok
    end

    def show
        tweet = find_tweet
        render json: tweet, status: :ok
    end

    private 
    def find_tweet
        tweet = Tweet.find(params[:id])
    end
end
