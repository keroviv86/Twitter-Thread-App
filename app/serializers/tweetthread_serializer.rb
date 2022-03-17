class TweetthreadSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :author
end
