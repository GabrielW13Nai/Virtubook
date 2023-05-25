class CreateReaderBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :reader_books do |t|
      t.integer :book_id
      t.integer :reader_id

      t.timestamps
    end
  end
end
