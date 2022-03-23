class Tweet < ApplicationRecord
  belongs_to :tweetthread

  validates :tweetthread_id, presence: true
  validates :twitter_api_id, presence: true
end
