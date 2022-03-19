class TweetthreadSerializer < ActiveModel::Serializer
  has_many :tweets
  has_one :user, key: :author

  attributes :id, :title, :description
end
