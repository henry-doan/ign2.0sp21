require "faker"


  3.times do
  current_user.game = Game.create(
      gamename: Faker::Games::SuperMario.game,
      studio: Faker::Restaurant.description,
      description: Faker::Restaurant.description,
      genre: Faker::Restaurant.description,
      coop: true,
      multi: true,
      single: true,
      esrb: "teen",
      releasedate: Faker::Restaurant.description
      user_id: user.id,
      reviews_id: reviews.id,
    )
end
end