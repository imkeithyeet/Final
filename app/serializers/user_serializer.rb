class UserSerializer < ActiveModel::Serializer
  attributes  :id,:first_name, :last_name, :email, :password_digest,:school, :occupation, :gender, :age, :location, :bio, :horoscope, :photos
  has_many :photos
end
