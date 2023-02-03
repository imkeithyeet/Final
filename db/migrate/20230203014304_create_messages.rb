class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :body
      t.integer :sender_id,null: false, foreign_key: true
      t.integer :recipient_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
