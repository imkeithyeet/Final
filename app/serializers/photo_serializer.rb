class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :image_url2
  has_one :user
end
