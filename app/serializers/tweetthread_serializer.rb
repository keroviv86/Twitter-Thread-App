class TweetthreadSerializer < ActiveModel::Serializer
  has_many :tweets
  has_many :comments
  has_one :user, key: :author

  attributes :id, :title, :description

  # def commenters
  #   object.users.map do |user|
  #     user.slice(:id, :name)
  #   end
  # end
end
