class CreateMatches < ActiveRecord::Migration[6.1]
  def change
    create_table :matches do |t|
      t.boolean :is_match
      t.references :user, null: false, foreign_key: true, index: false
      t.references :liked_user, null: false, foreign_key: {to_table: :users}, index: false
      t.index [:user_id, :liked_user_id], unique: true
      t.timestamps
    end
  end
end
