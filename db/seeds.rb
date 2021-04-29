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
  description: "Super Smash Bros. Ultimate is a fighting game for up to eight players in which characters from Nintendo games and other third-party franchises must try to knock each other out of an arena. Each player has a percentage meter, which raises when they take damage, making them easier to launch in the air and out of the arena. Standard battles use one of three victory conditions: Timed, where players aim to win the most points by defeating opponents within a time limit; Stock, where players have a set number of lives and must aim to be the last player standing; and Stamina, where players must simply reduce their opponent's health down to zero to defeat them. Players can adjust the rules to their liking and save them as presets for future matches.",
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
  description: "As with previous Monster Hunter titles, Monster Hunter Rise has the player take the role of a Hunter, tasked with slaying or capturing large monsters using a variety of weapons, tools, and environmental features to damage and weaken them while surviving their attacks. Successful completion of the offered quests provides loot, typically in the form of various monster parts from the monster, which are used to forge new armor and weapons that can be used to take on more powerful monsters, forming the series' notable core loop. Several of the series' monsters return along with a host of new monsters developed for Rise.",
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
  description: "Shovel Knight is a 2D side-scrolling platformer with an 8-bit graphical style. In the game's first campaign, Shovel of Hope, players control the eponymous protagonist as he collects treasure and fights against the Order of No Quarter. Shovel Knight's primary means of attack is his shovel, which he can either use to attack enemies head-on and dig up treasure, or aim below him while jumping to bounce on enemies, similar to the pogo jump from DuckTales or the downward thrust from Zelda II: The Adventure of Link.",
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
  description: "The game plays similarly to the NES original. Players control the SOPHIA vehicle in the side-scrolling levels, exploring environments and defeating enemies using the tank's various weapons. The player character Jason can also hop out of the tank to enter various passages and doors, where the view switches to an overhead perspective. Players can find various upgrades to the tank that may allow access to previously inaccessible areas. Throughout the game the player also encounters various boss characters that must be defeated to progress to later levels.",
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
  description: "South Park: The Fractured but Whole is a role-playing video game that is viewed from a 2.5D, third-person perspective. The player controls the New Kid as they explore the fictional Colorado town of South Park, around which the player-character can be freely moved. A fast-travel system allows the character to be moved between unlocked travel points.",
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
  description: "Hollow Knight is a 2D Metroidvania action-adventure game, that takes place in Hallownest, a fictional ancient kingdom. The player controls an insect-like, silent, and nameless knight while exploring the underground world. The knight wields a nail, which is a type of sword, used both in combat and environmental interaction.",
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
  description: "Celeste is a platform game in which players control a girl named Madeline as she makes her way up a mountain while avoiding various deadly obstacles. Along with jumping and climbing up walls for a limited amount of time, Madeline has the ability to perform a mid-air dash in eight directions",
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
  description: "Halo 3 is a shooter game where players primarily experience gameplay from a first-person perspective. Much of the gameplay takes place on foot, but also includes segments focused on vehicular combat. The balance of weapons and objects in the game was adjusted to better adhere to the Golden Triangle of Halo: these are weapons, grenades, and melee attacks, which are available to a player in most situations. Players may dual-wield some weapons, forgoing the use of grenades and melee attacks in favor of the combined firepower of two weapons.",
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
  description: "Much like in Diablo and Diablo II, the quality and attributes of equipment are randomized. In addition to base stats (such as damage and attack speed for weapon or armor points on armor) higher-quality items have additional properties such as extra damage, attribute bonuses, bonuses to critical hit chance, or sockets, which allow items to be upgraded and customized by adding gems for various stat bonuses.",
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