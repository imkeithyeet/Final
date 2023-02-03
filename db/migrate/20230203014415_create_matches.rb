class CreateMatches < ActiveRecord::Migration[6.1]
  def change
    create_table :matches do |t|
      t.boolean :is_match
      t.integer :user_1_id, null: false, foreign_key: true
      t.integer :user_2_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
