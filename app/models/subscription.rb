class Subscription < ApplicationRecord
  belongs_to :user, class_name: "User", foreign_key: "user_id"
  belongs_to :subscriber, class_name: "User", foreign_key: "subscriber_id"
end
