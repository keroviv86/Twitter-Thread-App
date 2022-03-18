class TweetSerializer < ActiveModel::Serializer
  attributes :id, :twitter_api_id, :order, :tweetthread_id
  has_one :tweetthread
end
