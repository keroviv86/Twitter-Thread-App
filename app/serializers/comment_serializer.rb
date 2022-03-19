class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :parent_comment_id, :commentor

  def commentor
    object.user.name
  end
end
