class AddMoreColumnsToUsers2 < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :babysitter_id, :integer
    add_column :users, :booking_id, :integer
    add_column :users, :kid_id, :integer
  end
end
