class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.string :gender
      t.string :age
      t.string :location
      t.text :bio
      t.string :horoscope

      t.timestamps
    end
  end
end
