# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
rating_range = (1..5).to_a

  3.times do
    game = Game.create(

      gamename: Faker::Games::SuperMario.game,
      studio: Faker::Games::SonicTheHedgehog.game,
      description: Faker::Games::StreetFighter.quote,
      genre: Faker::Games::Witcher.school,
      coop = true
      multi = true
      single = true
      esrb: Faker::Games::SuperMario.character,
      releasedate: '2014-09-23',
    )

    5.times do
      Review.create(
        title: Faker::TvShows::MichaelScott.quote,
        gamereview: Faker::ChuckNorris.fact,
        rating: rating_range.sample,
        user_id: user.id
      )
    end
  end