class TweetsController < ApplicationController
    def index
        tweets = Tweet.all
        render json: tweets, status: :ok
    end

    def show
        tweet = find_tweet
        render json: tweet, status: :ok
    end

    def create
        newTweet = Tweet.create!(tweet_params)
        render json: newTweet, status: :created
    end

    private 
    def find_tweet
        tweet = Tweet.find(params[:id])
    end
    def tweet_params
        params.permit(:tweetthread_id, :twitter_api_id, :order)
    end
end
