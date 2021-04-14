require "faker"


  3.times do
  game = Game.create(
      gamename: Faker::Games::SuperMario.game,
      studio: Faker::Restaurant.description,
      # description: Faker::Restaurant.description,
      # genre: Faker::Restaurant.description,
      # coop: true,
      # multi: true,
      # single: true,
      # esrb: "teen",
      # releasedate: Faker::Restaurant.description
      user_id: 1,
      reviews_id: 1
      )

      puts "seeded"
  end