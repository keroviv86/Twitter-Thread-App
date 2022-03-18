class TweetSerializer < ActiveModel::Serializer
  attributes :id, :twitter_api_id, :thread_id, :order
end
