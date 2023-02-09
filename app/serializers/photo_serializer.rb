class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :image_url2, :image_url3
  has_one :user
end
