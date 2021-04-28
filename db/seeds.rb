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
      genre = ["Action", "Adventure", "Fighting", "Role-play", "Simulation", "Sports", "MMO", "Puzzle" ]
      esrb = ["Everyone", "Every 10+", "Teen", "Mature", ]
      game = Game.create(
          gamename: Faker::Game.title,
          studio: Faker::GreekPhilosophers.name,
          description: Faker::Lorem.paragraphs(number: 3), 
          genre: genre.sample,
          coop: true,
          multi: true,
          single: true,
          image: "https://images-na.ssl-images-amazon.com/images/I/81bH3%2BDbvNL._SL1500_.jpg",
          esrb: esrb.sample,
          releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
          user_id: users.sample,
          )
          3.times do
            users = [1,2,3]
            rating = [1,2,3,4,5]
            review = Review.create(
              title: Faker::TvShows::GameOfThrones.house,
              gamereview: Faker::Restaurant.review,
              body: Faker::TvShows::Seinfeld.quote,
              game_play: rating.sample,
              visual: rating.sample,
              soundtrack: rating.sample,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtJOFxyMT9f5miPY8yndnzwutvjKbD8ahhw&usqp=CAU",
              rating: rating.sample,
              user_id: users.sample,
              game_id: game.id,
            )
            puts "review seeded"
          end
        end

      puts "seeded"

