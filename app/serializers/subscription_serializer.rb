class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :subscriber_id
  has_one :user
end
