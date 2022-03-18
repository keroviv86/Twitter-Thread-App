class TweetthreadSerializer < ActiveModel::Serializer
  has_many :tweets
  attributes :id, :title, :description, :author
end
