class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :parent_comment_id
  has_one :user
  has_one :tweetthread
end
