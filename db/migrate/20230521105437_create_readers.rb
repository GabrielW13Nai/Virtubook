class CreateReaders < ActiveRecord::Migration[7.0]
  def change
    create_table :readers do |t|
      t.string :name
      t.integer :age
      t.integer :phone_number
      t.string :hometown

      t.timestamps
    end
  end
end
