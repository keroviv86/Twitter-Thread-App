class TweetthreadListSerializer < ActiveModel::Serializer
    has_one :user, key: :author  
    attributes :id, :title, :description
  end
  