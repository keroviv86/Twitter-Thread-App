class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :description, :website, :admin, :location, :profile_photo, :interest
end
