 require "faker"




    @u1 = User.create(
      email: "test321@test.com",
      name: "Test1",
      nickname: "testy",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FHyrevue-High-End-Retail-Official%2Fdp%2FB07YRYJZD2&psig=AOvVaw3eAAAD09UpVLHFATyL_O6O&ust=1618623611736000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDGhf3QgfACFQAAAAAdAAAAABAI",
      password: "password", 
      )

    @u2 = User.create(
      email: "test432@test.com",
      name: "jeffrey",
      nickname: "jeffers",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPA4GEBxjk9iD7_1nEwlpagBDAwLynzLBEQ&usqp=CAU",
      password: "password",
    )

    @u3 = User.create(
      email: "test567@test.com",
      name: "amber",
      nickname: "ams",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRix2u5gLmsVg9r_2KR29O_D4gMRHOufDQexQ&usqp=CAU",
      password: "password"
    )

    12.times do
      users = [1,2,3]
      game = Game.create(
          gamename: Faker::Games::SuperMario.game,
          studio: Faker::Games::Minecraft.biome,
          description: Faker::Restaurant.description,
          genre: Faker::Games::LeagueOfLegends.champion,
          coop: true,
          multi: true,
          single: true,
          esrb: "teen",
          releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
          image: "https://images.unsplash.com/photo-1602610411365-76e8c2a88e18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
          user_id: users.sample,
          )
  end
      12.times do
        users = [1,2,3]
        games = [1,2,3,4,5,6,7,8,9,10,11,12]
        rating = [1,2,3,4,5]
        review = Review.create(
          title: Faker::Food.fruits,
          gamereview: Faker::Games::ElderScrolls.city,
          body: Faker::TvShows::Seinfeld.quote,
          game_play: Faker::Games::HalfLife.character,
          visual: Faker::TvShows::SouthPark.quote,
          soundtrack: Faker::Music::Hiphop.artist,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtJOFxyMT9f5miPY8yndnzwutvjKbD8ahhw&usqp=CAU",
          rating: rating.sample,
          user_id: users.sample,
          game_id: games.sample,
          
      )
      puts "review seeded"
    end

      puts "seeded"

