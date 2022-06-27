class AddMoreColumnsToBookings2 < ActiveRecord::Migration[7.0]
  def change
    add_column :bookings, :babysitter_id, :integer
    add_column :bookings, :user_id, :integer
    add_column :bookings, :kid_id, :integer
  end
end
