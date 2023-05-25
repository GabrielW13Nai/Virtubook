# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts"seeding......."

# 5.times {Admin.create(
#   { name: Faker::Name.first_name,
#     age: rand(20..50),
#     phone_number:Faker::PhoneNumber.cell_phone }
#   )}


  75.times {
    Reader.create(
    {name: Faker::Name.first_name,
      age: rand(10..75),
      phone_number:Faker::PhoneNumber.cell_phone_in_e164,
      hometown: Faker::Nation.capital_city}
    )}


    60.times {Book.create({title: Faker::Book.title,author: Faker::Book.author,publisher:Faker::Book.publisher,year_published:rand(1895..2002)})}

    100.times do
      book = Book.order('RANDOM()').first
      reader = Reader.order('RANDOM()').first

    1.times {ReaderBook.create(
        book_id: book.id,
        reader_id: reader.id
      )
    }
    end

puts "seeded"
