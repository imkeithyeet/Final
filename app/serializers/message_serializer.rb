class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body
  has_one :sender
  has_one :recipient
end
