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


    60.times {Book.create(title: Faker::Book.title,
      author: Faker::Book.author,
      publisher: Faker::Book.publisher,
      year_published: rand(1895..2002),
      category: ['Action', 'Science-Fiction', 'Fantasy', 'Animation', 'Drama'].sample,
      image_url:[ 'https://images.pexels.com/photos/821139/pexels-photo-821139.jpeg',
      'https://media.istockphoto.com/id/1411029939/photo/top-view-on-colorful-stacked-books-education-and-learning-concept-background.jpg?s=1024x1024&w=is&k=20&c=_CWMq9RS-uzK0oAGpHDA_4BSez_JlA2IYG3zPGZmX4w=', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwR_qwwP-PgM2uGa5crh8YvIhpV_yc7LNXA&usqp=CAU','https://media.istockphoto.com/id/1335708681/photo/stacks-of-books-for-teaching-knowledge-college-library-green-background.jpg?s=612x612&w=0&k=20&c=xsqB09d-hvAbJrnVASDyEd27fn11jSxpgRBDy-eaET0=', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3LvNkVQQSXAnkienwI9Ox-B3aGsLqNrmnJw&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihHs27RhbEozWAS9KzYQI-g_0vcjJh0WGlw&usqp=CAU', 'https://images.pexels.com/photos/4039747/pexels-photo-4039747.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' ].sample)}

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
