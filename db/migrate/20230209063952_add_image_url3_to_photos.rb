class AddImageUrl3ToPhotos < ActiveRecord::Migration[6.1]
  def change
    add_column :photos, :image_url3, :string
  end
end
