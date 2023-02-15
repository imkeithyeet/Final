class MatchSerializer < ActiveModel::Serializer
  attributes :id, :is_match, :liked_user, :user
  has_one :user
  has_one :liked_user
  
  # has_one :user2
end
