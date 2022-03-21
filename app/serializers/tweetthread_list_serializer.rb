class TweetthreadListSerializer < ActiveModel::Serializer
    has_one :user, key: :author  
    has_many :tweets
    attributes :id, :title, :description, :tweets
  end
  