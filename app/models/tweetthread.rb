class Tweetthread < ApplicationRecord
    belongs_to :user
    has_many :tweets, dependent: :destroy 
    has_many :comments, dependent: :destroy
    has_many :users, -> { distinct }, through: :comments

    validates :description, length: {minimum: 10}
end
