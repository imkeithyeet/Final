class MatchSerializer < ActiveModel::Serializer
  attributes :id, :is_match
  has_one :user
  # has_one :user2
end
