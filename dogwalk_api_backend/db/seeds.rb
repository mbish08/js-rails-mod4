# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#* Owner seeds
harry = Owner.create(name: "Harry")
ron = Owner.create(name: "Ron")
hermione = Owner.create(name: "Hermione")

# * Dog seeds
hedwig = Dog.create(name: "Hedwig", breed: "pointer", weight: 15, allergies: "none", behaviors: "none", meds: "none", vet_info: "VECC", age: "2", owner_id: harry.id)
bailey = Dog.create(name: "Bailey", breed: "hound mix", weight: 85, behaviors: "separation anxiety", vet_info: "Creature Comforts", age: "3", owner_id: harry.id)
scabbers = Dog.create(name: "Scabbers", breed: "terrier", weight: 2, allergies: "snakes", behaviors: "steals food", age: "45", owner_id: ron.id)