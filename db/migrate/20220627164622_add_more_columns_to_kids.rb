class AddMoreColumnsToKids < ActiveRecord::Migration[7.0]
  def change
    add_column :kids, :first_name, :string
    add_column :kids, :last_name, :string
    add_column :kids, :age, :integer
    add_column :kids, :parent_id, :integer
    add_column :kids, :babysitter_id, :integer
  end
end
