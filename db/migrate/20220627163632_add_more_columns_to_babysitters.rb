class AddMoreColumnsToBabysitters < ActiveRecord::Migration[7.0]
  def change
    add_column :babysitters, :first_name, :string
    add_column :babysitters, :last_name, :string
    add_column :babysitters, :pay_rate, :integer
    add_column :babysitters, :about_me, :string
  end
end
