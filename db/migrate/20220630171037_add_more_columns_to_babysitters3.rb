class AddMoreColumnsToBabysitters3 < ActiveRecord::Migration[7.0]
  def change
    add_column :babysitters, :age, :integer
  end
end
