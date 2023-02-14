class UserSerializer < ActiveModel::Serializer
  attributes  :id,:first_name, :last_name, :email,:school, :occupation, :gender, :age, :location, :bio, :horoscope, :photos
  has_many :photos
  has_many :matched_users
  has_many :is_match_liked_users
end
 