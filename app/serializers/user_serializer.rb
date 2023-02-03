class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :gender, :age, :location, :bio, :horoscope
  has_many :photos
end
