# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Food.destroy_all
Drink.destroy_all

Food.create(name: "Tacos", price: 2.99)
Food.create(name: "Pizza", price: 5.99)
Food.create(name: "Burger", price: 15.99)
Food.create(name: "Pasta", price: 18.99)
Food.create(name: "Steak", price: 29.99)
puts "seeded foods size: #{Food.all.size}"


Drink.create(name:"Water")
Drink.create(name:"Juice")
Drink.create(name:"Soda")
Drink.create(name:"Wine")
Drink.create(name:"Beer")
end


puts "seeded drinks size: #{Drink.all.size}"


# in terminal
# rails db:seed
# seeded foods size 5
