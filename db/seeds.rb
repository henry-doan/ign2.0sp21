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


1.times do game = Game.create(
  gamename: "Super Smash Bros",
  studio: "Nintendo",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  genre: "Fighting",
  coop: true,
  multi: true,
  single: true,
  image: "https://images-na.ssl-images-amazon.com/images/I/81bH3%2BDbvNL._SL1500_.jpg",
  esrb: "Everyone",
  releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
  user_id: 1,
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
end
end

1.times do game = Game.create(
  gamename: "Monster Hunter Rise",
  studio: "Capcom",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  genre: "Action, Role-playing",
  coop: false,
  multi: true,
  single: true,
  image: "https://media.gamestop.com/i/gamestop/11108989/Monster-Hunter-Rise-Deluxe-Edition",
  esrb: "Teen",
  releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
  user_id: 2,
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
end
end

1.times do game = Game.create(
  gamename: "Shovel Knight",
  studio: "Yacht Club Games",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  genre: "Action, Platform",
  coop: true,
  multi: false,
  single: true,
  image: "https://upload.wikimedia.org/wikipedia/en/c/c8/Shovel_knight_cover.jpg",
  esrb: "Everyone",
  releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
  user_id: 3,
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
end
end

1.times do game = Game.create(
  gamename: "Blaster Master Zero",
  studio: "Inti Creates",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  genre: "Action-Adventure",
  coop: true,
  multi: false,
  single: true,
  image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438903_sd.jpg;maxHeight=640;maxWidth=550",
  esrb: "Everyone",
  releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
  user_id: 1,
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
end
end

1.times do game = Game.create(
  gamename: "South Park: The Fractured But Whole",
  studio: "Ubisoft",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  genre: "Role-Playing",
  coop: true,
  multi: false,
  single: true,
  image: "https://images-na.ssl-images-amazon.com/images/I/71GuWTKKDcL._SL1321_.jpg",
  esrb: "Mature",
  releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
  user_id: 2,
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
end
end

1.times do game = Game.create(
  gamename: "Hollow Knight",
  studio: "Team Cherry",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  genre: "Action-Adventure",
  coop: false,
  multi: false,
  single: true,
  image: "https://images-na.ssl-images-amazon.com/images/I/71UQZy7HEjL._SL1500_.jpg",
  esrb: "Everyone",
  releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
  user_id: 3,
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
end
end

1.times do game = Game.create(
  gamename: "Celeste",
  studio: "Extremely OK Games",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  genre: "Platform",
  coop: false,
  multi: false,
  single: true,
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Celeste_box_art_final.png/1200px-Celeste_box_art_final.png",
  esrb: "Everyone",
  releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
  user_id: 1,
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
end
end

1.times do game = Game.create(
  gamename: "Halo 3",
  studio: "Bungie",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  genre: "First-person Shooter",
  coop: false,
  multi: false,
  single: true,
  image: "https://images-na.ssl-images-amazon.com/images/I/813gXz6Vi0L._SL1500_.jpg",
  esrb: "Mature",
  releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
  user_id: 2,
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
end
end

1.times do game = Game.create(
  gamename: "Diablo 3",
  studio: "Blizzard Entertainment",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  genre: "Action, Role-playing",
  coop: false,
  multi: false,
  single: true,
  image: "https://media.gamestop.com/i/gamestop/10163515/Diablo-III-Eternal-Collection",
  esrb: "Mature",
  releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
  user_id: 3,
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
end
end

puts "seeded"