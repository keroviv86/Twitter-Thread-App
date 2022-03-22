class TweetthreadsController < ApplicationController
    def index
        threads = Tweetthread.all
        render json: threads, each_serializer: TweetthreadListSerializer, status: :ok
    end

    def show
        thread = find_thread
        render json: thread, status: :ok
    end
    def create
        tweetthread = Tweetthread.create!(tweetthread_params)
        render json: tweetthread, status: :created
    end

    private 
    def find_thread
        thread = Tweetthread.find(params[:id])
    end
    def tweetthread_params
        params.permit(:title, :description, :user_id)
    end
end
