class CreateAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :admins do |t|
      t.string :name
      t.integer :age
      t.integer :phone_number

      t.timestamps
    end
  end
end
