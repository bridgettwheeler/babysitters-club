class CreateKids < ActiveRecord::Migration[7.0]
  def change
    create_table :kids do |t|

      t.timestamps
    end
  end
end
