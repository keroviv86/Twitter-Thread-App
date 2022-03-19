class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :parent_comment_id, :commentor
  has_one :user
  has_one :tweetthread

  def commentor
    object.user.name
  end
end
