class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :tweetthread

  validates :comment, length: {minimum: 4}
end
