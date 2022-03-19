class Tweetthread < ApplicationRecord
    belongs_to :user
    has_many :tweets 
    has_many :comments
    has_many :users, -> { distinct }, through: :comments
end
