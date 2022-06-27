class AddMoreColumnsToBookings < ActiveRecord::Migration[7.0]
  def change
    add_column :bookings, :date, :datetime
    add_column :bookings, :status, :string
  end
end
