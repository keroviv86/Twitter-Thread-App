class TweetthreadsController < ApplicationController
    def index
        threads = Tweetthread.all
        render json: threads, status: :ok
    end

    def show
        thread = find_thread
        render json: thread, status: :ok
    end

    private 
    def find_thread
        thread = Tweetthread.find(params[:id])
    end
end
