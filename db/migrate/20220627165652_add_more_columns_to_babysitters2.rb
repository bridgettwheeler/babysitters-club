class AddMoreColumnsToBabysitters2 < ActiveRecord::Migration[7.0]
  def change
    add_column :babysitters, :booking_id, :integer
  end
end
