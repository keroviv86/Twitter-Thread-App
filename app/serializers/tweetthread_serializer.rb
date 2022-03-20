class TweetthreadSerializer < ActiveModel::Serializer
  has_many :tweets do
    object.tweets.order(:order)
  end
  has_one :user, key: :author

  attributes :id, :title, :description
end
