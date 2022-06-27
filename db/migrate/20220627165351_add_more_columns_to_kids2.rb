class AddMoreColumnsToKids2 < ActiveRecord::Migration[7.0]
  def change
    add_column :kids, :booking_id, :integer
  end
end
