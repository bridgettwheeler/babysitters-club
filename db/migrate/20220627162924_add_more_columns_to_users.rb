class AddMoreColumnsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :budget, :integer
    add_column :users, :about_us, :string
  end
end
