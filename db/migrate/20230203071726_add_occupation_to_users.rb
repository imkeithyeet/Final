class AddOccupationToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :occupation, :string
  end
end
