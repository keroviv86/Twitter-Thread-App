class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :parent_comment_id, :commentor, :user_id

  def commentor
    object.user.name
  end
end
