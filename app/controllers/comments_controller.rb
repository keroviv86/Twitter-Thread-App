class CommentsController < ApplicationController
    def index
        comment = Comment.all
        render json: comment, status: :ok
    end

    def show
        comment = find_comment
        render json: comment, status: :ok
    end

    def update
        comment = find_comment
        comment.update!(comment_params)
        render json: comment, status: :ok
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def destroy
        comment = find_comment
        comment.destroy
        head :no_content
    end
    
    private
    def find_comment
        comment = Comment.find(params[:id])
    end

    def comment_params
        params.permit(:comment, :user_id, :tweetthread_id, :parent_comment_id)
    end
end
