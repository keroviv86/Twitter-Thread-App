class User < ApplicationRecord
    has_many :comments
    has_many :likes
    has_many :tweetthreads
    has_secure_password

    validates :password, presence: true
    validates :name, uniqueness: true
end
