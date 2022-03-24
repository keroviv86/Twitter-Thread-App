class User < ApplicationRecord
    has_many :comments
    has_many :likes
    has_many :tweetthreads
    has_many :subscriptions, foreign_key: "subscriber_id", class_name: "Subscription"
    has_many :subscribed_users, through: :subscriptions, source: :user
    has_many :subscribed_threads, through: :subscribed_users, source: :tweetthreads
    has_secure_password

    validates :password, presence: true
    validates :name, uniqueness: true
end
