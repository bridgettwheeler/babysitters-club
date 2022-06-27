class AddMoreColumnsToKids3 < ActiveRecord::Migration[7.0]
  def change
    add_column :kids, :user_id, :integer
  end
end
