require "faker"




    @u1 = User.create(
      email: "devpoint@test.com",
      name: "Simon",
      nickname: "Simon Sez",
      image: "https://media-exp1.licdn.com/dms/image/C4E03AQHvaNesNx6Fyg/profile-displayphoto-shrink_200_200/0/1609702182817?e=1623283200&v=beta&t=8E0bvHxPKg932BhrKQ8D_Tp8Aow78W7Dcyo72twC4NM",
      password: "password",
      )

    @u2 = User.create(
      email: "devpoint2@test.com",
      name: "Henry",
      nickname: "Papa Wolf",
      image: "https://avatars.githubusercontent.com/u/12537202?v=4",
      password: "password",
    )

    @u3 = User.create(
      email: "devpoint3@test.com",
      name: "Taylor",
      nickname: "Tay Tay",
      image: "https://res.cloudinary.com/henry-devpoint-labs/image/upload/v1612498265/DevPoint%20Launch%20Winter20/TaylorCollins_w167ix.jpg",
      password: "password"
    )


1.times do game = Game.create(
  gamename: "Rivals of Aether",
  studio: "Aether Studios",
  description: "Rivals of Aether is the spiritual sequel to Super Smash Land, a fan-made remake of Super Smash Bros., and therefore its gameplay mechanics are heavily based on the latter game. Each character must try to knock the others out of a two-dimensional arena. In addition to fighting game-style moves, characters can also use elemental-based attacks or passive abilities that also affect the stage. This creates a meta game of not only attacking other players but also affecting the arena itself.",
  genre: "Fighting",
  coop: true,
  multi: true,
  single: true,
  image: "https://www.mobygames.com/images/covers/l/462426-rivals-of-aether-xbox-one-front-cover.png",
  esrb: "Everyone",
  releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
  user_id: 1,
  )
  3.times do
  users = [1,2,3]
  rating = [1,2,3,4,5]
  image = ["https://store-images.s-microsoft.com/image/global.50863.acentoprodimg.f9ef396f-be99-4dc1-88e2-15405a3d51b5.57fa1d64-398b-47dc-845f-608fdf700d56?mode=crop&q=90&h=195&w=348", "https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", "https://st.depositphotos.com/1013230/2210/i/950/depositphotos_22104925-stock-photo-game-controller-and-blue-light.jpg", "https://media.wired.com/photos/60303d8eb1e4e27662365aa3/master/pass/Game-Cracking.jpg", "https://media.gamestop.com/i/gamestop/Nav_Switch_2.jpeg", "https://g.foolcdn.com/editorial/images/499797/group-of-men-and-women-playing-video-games.jpg", "https://www.uae.campusfrance.org/sites/pays/files/uae/styles/mobile_visuel_principal_page/public/Sans%20titre.png?itok=JDmQeA2O", "https://cdn.vox-cdn.com/thumbor/BJnbAzdEjThAoTFptofYwMFtpBU=/0x0:3840x2160/1200x800/filters:focal(1563x518:2177x1132)/cdn.vox-cdn.com/uploads/chorus_image/image/69204054/Returnal_20210424011831.0.jpg"]
  review = Review.create(
    title: Faker::TvShows::GameOfThrones.house,
    gamereview: Faker::Restaurant.review,
    body: Faker::TvShows::Seinfeld.quote,
    game_play: rating.sample,
    visual: rating.sample,
    soundtrack: rating.sample,
    image: image.sample,
    rating: rating.sample,
    user_id: users.sample,
    game_id: game.id,
  )
end
end

1.times do game = Game.create(
  gamename: "The Binding of Isaac",
  studio: "Edmund McMillen",
  description: "The Binding of Isaac is an indie roguelike video game designed by Edmund McMillen and Florian Himsl, initially released in 2011 for Microsoft Windows; the game was later ported for OS X, and Linux operating systems. The game's title and plot are inspired by the Biblical story of the Binding of Isaac. In the game, Isaac's mother receives a message from God demanding the life of her son as proof of her faith, and Isaac, fearing for his life, flees into the monster-filled basement of their home where he must fight to survive.",
  genre: "Rogue-like",
  coop: true,
  multi: false,
  single: true,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtZKKjxprJ-cPpS2-Chp03dfT1o51TYdzxw&usqp=CAU",
  esrb: "Teen",
  releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
  user_id: 2,
  )
  3.times do
  users = [1,2,3]
  rating = [1,2,3,4,5]
  image = ["https://store-images.s-microsoft.com/image/global.50863.acentoprodimg.f9ef396f-be99-4dc1-88e2-15405a3d51b5.57fa1d64-398b-47dc-845f-608fdf700d56?mode=crop&q=90&h=195&w=348", "https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", "https://st.depositphotos.com/1013230/2210/i/950/depositphotos_22104925-stock-photo-game-controller-and-blue-light.jpg", "https://media.wired.com/photos/60303d8eb1e4e27662365aa3/master/pass/Game-Cracking.jpg", "https://media.gamestop.com/i/gamestop/Nav_Switch_2.jpeg", "https://g.foolcdn.com/editorial/images/499797/group-of-men-and-women-playing-video-games.jpg", "https://www.uae.campusfrance.org/sites/pays/files/uae/styles/mobile_visuel_principal_page/public/Sans%20titre.png?itok=JDmQeA2O", "https://cdn.vox-cdn.com/thumbor/BJnbAzdEjThAoTFptofYwMFtpBU=/0x0:3840x2160/1200x800/filters:focal(1563x518:2177x1132)/cdn.vox-cdn.com/uploads/chorus_image/image/69204054/Returnal_20210424011831.0.jpg"]
  review = Review.create(
    title: Faker::TvShows::GameOfThrones.house,
    gamereview: Faker::Restaurant.review,
    body: Faker::TvShows::Seinfeld.quote,
    game_play: rating.sample,
    visual: rating.sample,
    soundtrack: rating.sample,
    image: image.sample,
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
  image = ["https://store-images.s-microsoft.com/image/global.50863.acentoprodimg.f9ef396f-be99-4dc1-88e2-15405a3d51b5.57fa1d64-398b-47dc-845f-608fdf700d56?mode=crop&q=90&h=195&w=348", "https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", "https://st.depositphotos.com/1013230/2210/i/950/depositphotos_22104925-stock-photo-game-controller-and-blue-light.jpg", "https://media.wired.com/photos/60303d8eb1e4e27662365aa3/master/pass/Game-Cracking.jpg", "https://media.gamestop.com/i/gamestop/Nav_Switch_2.jpeg", "https://g.foolcdn.com/editorial/images/499797/group-of-men-and-women-playing-video-games.jpg", "https://www.uae.campusfrance.org/sites/pays/files/uae/styles/mobile_visuel_principal_page/public/Sans%20titre.png?itok=JDmQeA2O", "https://cdn.vox-cdn.com/thumbor/BJnbAzdEjThAoTFptofYwMFtpBU=/0x0:3840x2160/1200x800/filters:focal(1563x518:2177x1132)/cdn.vox-cdn.com/uploads/chorus_image/image/69204054/Returnal_20210424011831.0.jpg"]
  review = Review.create(
    title: Faker::TvShows::GameOfThrones.house,
    gamereview: Faker::Restaurant.review,
    body: Faker::TvShows::Seinfeld.quote,
    game_play: rating.sample,
    visual: rating.sample,
    soundtrack: rating.sample,
    image: image.sample,
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
  image = ["https://store-images.s-microsoft.com/image/global.50863.acentoprodimg.f9ef396f-be99-4dc1-88e2-15405a3d51b5.57fa1d64-398b-47dc-845f-608fdf700d56?mode=crop&q=90&h=195&w=348", "https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", "https://st.depositphotos.com/1013230/2210/i/950/depositphotos_22104925-stock-photo-game-controller-and-blue-light.jpg", "https://media.wired.com/photos/60303d8eb1e4e27662365aa3/master/pass/Game-Cracking.jpg", "https://media.gamestop.com/i/gamestop/Nav_Switch_2.jpeg", "https://g.foolcdn.com/editorial/images/499797/group-of-men-and-women-playing-video-games.jpg", "https://www.uae.campusfrance.org/sites/pays/files/uae/styles/mobile_visuel_principal_page/public/Sans%20titre.png?itok=JDmQeA2O", "https://cdn.vox-cdn.com/thumbor/BJnbAzdEjThAoTFptofYwMFtpBU=/0x0:3840x2160/1200x800/filters:focal(1563x518:2177x1132)/cdn.vox-cdn.com/uploads/chorus_image/image/69204054/Returnal_20210424011831.0.jpg"]
  review = Review.create(
    title: Faker::TvShows::GameOfThrones.house,
    gamereview: Faker::Restaurant.review,
    body: Faker::TvShows::Seinfeld.quote,
    game_play: rating.sample,
    visual: rating.sample,
    soundtrack: rating.sample,
    image: image.sample,
    rating: rating.sample,
    user_id: users.sample,
    game_id: game.id,
  )
end
end

1.times do game = Game.create(
  gamename: "Ori and the Will of the Wisps",
  studio: "Moon Studios",
  description: "Ori and the Will of the Wisps is a 2D Metroidvania; a platform game with an emphasis on exploration, collecting items and upgrades, and backtracking to previously inaccessible areas. The player controls the titular Ori, a white guardian spirit. As Ori, players must jump, climb, glide, and swim between various platforms to solve intricate puzzles. Gameplay unfolds in the form of a Metroidvania, with new abilities and upgrades allowing players to unlock previously inaccessible areas of the map. ",
  genre: "Platform-adventure",
  coop: false,
  multi: false,
  single: true,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaw4vih5ep0tCYV-ol2PCebidWk1a17YnbA&usqp=CAU",
  esrb: "Everyone",
  releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
  user_id: 2,
  )
  3.times do
  users = [1,2,3]
  rating = [1,2,3,4,5]
  image = ["https://store-images.s-microsoft.com/image/global.50863.acentoprodimg.f9ef396f-be99-4dc1-88e2-15405a3d51b5.57fa1d64-398b-47dc-845f-608fdf700d56?mode=crop&q=90&h=195&w=348", "https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", "https://st.depositphotos.com/1013230/2210/i/950/depositphotos_22104925-stock-photo-game-controller-and-blue-light.jpg", "https://media.wired.com/photos/60303d8eb1e4e27662365aa3/master/pass/Game-Cracking.jpg", "https://media.gamestop.com/i/gamestop/Nav_Switch_2.jpeg", "https://g.foolcdn.com/editorial/images/499797/group-of-men-and-women-playing-video-games.jpg", "https://www.uae.campusfrance.org/sites/pays/files/uae/styles/mobile_visuel_principal_page/public/Sans%20titre.png?itok=JDmQeA2O", "https://cdn.vox-cdn.com/thumbor/BJnbAzdEjThAoTFptofYwMFtpBU=/0x0:3840x2160/1200x800/filters:focal(1563x518:2177x1132)/cdn.vox-cdn.com/uploads/chorus_image/image/69204054/Returnal_20210424011831.0.jpg"]
  review = Review.create(
    title: Faker::TvShows::GameOfThrones.house,
    gamereview: Faker::Restaurant.review,
    body: Faker::TvShows::Seinfeld.quote,
    game_play: rating.sample,
    visual: rating.sample,
    soundtrack: rating.sample,
    image: image.sample,
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
  image = ["https://store-images.s-microsoft.com/image/global.50863.acentoprodimg.f9ef396f-be99-4dc1-88e2-15405a3d51b5.57fa1d64-398b-47dc-845f-608fdf700d56?mode=crop&q=90&h=195&w=348", "https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", "https://st.depositphotos.com/1013230/2210/i/950/depositphotos_22104925-stock-photo-game-controller-and-blue-light.jpg", "https://media.wired.com/photos/60303d8eb1e4e27662365aa3/master/pass/Game-Cracking.jpg", "https://media.gamestop.com/i/gamestop/Nav_Switch_2.jpeg", "https://g.foolcdn.com/editorial/images/499797/group-of-men-and-women-playing-video-games.jpg", "https://www.uae.campusfrance.org/sites/pays/files/uae/styles/mobile_visuel_principal_page/public/Sans%20titre.png?itok=JDmQeA2O", "https://cdn.vox-cdn.com/thumbor/BJnbAzdEjThAoTFptofYwMFtpBU=/0x0:3840x2160/1200x800/filters:focal(1563x518:2177x1132)/cdn.vox-cdn.com/uploads/chorus_image/image/69204054/Returnal_20210424011831.0.jpg"]
  review = Review.create(
    title: Faker::TvShows::GameOfThrones.house,
    gamereview: Faker::Restaurant.review,
    body: Faker::TvShows::Seinfeld.quote,
    game_play: rating.sample,
    visual: rating.sample,
    soundtrack: rating.sample,
    image: image.sample,
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
  image = ["https://store-images.s-microsoft.com/image/global.50863.acentoprodimg.f9ef396f-be99-4dc1-88e2-15405a3d51b5.57fa1d64-398b-47dc-845f-608fdf700d56?mode=crop&q=90&h=195&w=348", "https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", "https://st.depositphotos.com/1013230/2210/i/950/depositphotos_22104925-stock-photo-game-controller-and-blue-light.jpg", "https://media.wired.com/photos/60303d8eb1e4e27662365aa3/master/pass/Game-Cracking.jpg", "https://media.gamestop.com/i/gamestop/Nav_Switch_2.jpeg", "https://g.foolcdn.com/editorial/images/499797/group-of-men-and-women-playing-video-games.jpg", "https://www.uae.campusfrance.org/sites/pays/files/uae/styles/mobile_visuel_principal_page/public/Sans%20titre.png?itok=JDmQeA2O", "https://cdn.vox-cdn.com/thumbor/BJnbAzdEjThAoTFptofYwMFtpBU=/0x0:3840x2160/1200x800/filters:focal(1563x518:2177x1132)/cdn.vox-cdn.com/uploads/chorus_image/image/69204054/Returnal_20210424011831.0.jpg"]
  review = Review.create(
    title: Faker::TvShows::GameOfThrones.house,
    gamereview: Faker::Restaurant.review,
    body: Faker::TvShows::Seinfeld.quote,
    game_play: rating.sample,
    visual: rating.sample,
    soundtrack: rating.sample,
    image: image.sample,
    rating: rating.sample,
    user_id: users.sample,
    game_id: game.id,
  )
end
end

1.times do game = Game.create(
  gamename: "Gris",
  studio: "Nomada Studio",
  description: "The game follows a girl named Gris, who wakes up in the palm of a crumbling statue of a woman. She attempts to sing out, but quickly becomes choked up and the statue's hands crumble, dropping her to the colourless earth below. After landing, the girl continues walking forward and discovers a number of strange structures that seem to be powered by mysterious points of light resembling stars. The girl can collect these lights to gain new abilities, such as turning into a block of stone, and creating new pathways made of constellations.",
  genre: "Platform-adventure",
  coop: false,
  multi: false,
  single: true,
  image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTtwYAQu2KnLqarzI2QEkL1pipC5SXNnl3baTdV50moyJvAo02nJWqb2kIS58PJdBAiRnZEwZHXt4ya84e5g6y0W1lmE-Zx_w&usqp=CAE",
  esrb: "Everyone",
  releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
  user_id: 2,
  )
  3.times do
  users = [1,2,3]
  rating = [1,2,3,4,5]
  image = ["https://store-images.s-microsoft.com/image/global.50863.acentoprodimg.f9ef396f-be99-4dc1-88e2-15405a3d51b5.57fa1d64-398b-47dc-845f-608fdf700d56?mode=crop&q=90&h=195&w=348", "https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", "https://st.depositphotos.com/1013230/2210/i/950/depositphotos_22104925-stock-photo-game-controller-and-blue-light.jpg", "https://media.wired.com/photos/60303d8eb1e4e27662365aa3/master/pass/Game-Cracking.jpg", "https://media.gamestop.com/i/gamestop/Nav_Switch_2.jpeg", "https://g.foolcdn.com/editorial/images/499797/group-of-men-and-women-playing-video-games.jpg", "https://www.uae.campusfrance.org/sites/pays/files/uae/styles/mobile_visuel_principal_page/public/Sans%20titre.png?itok=JDmQeA2O", "https://cdn.vox-cdn.com/thumbor/BJnbAzdEjThAoTFptofYwMFtpBU=/0x0:3840x2160/1200x800/filters:focal(1563x518:2177x1132)/cdn.vox-cdn.com/uploads/chorus_image/image/69204054/Returnal_20210424011831.0.jpg"]
  review = Review.create(
    title: Faker::TvShows::GameOfThrones.house,
    gamereview: Faker::Restaurant.review,
    body: Faker::TvShows::Seinfeld.quote,
    game_play: rating.sample,
    visual: rating.sample,
    soundtrack: rating.sample,
    image: image.sample,
    rating: rating.sample,
    user_id: users.sample,
    game_id: game.id,
  )
end
end

1.times do game = Game.create(
  gamename: "Cuphead",
  studio: "Studio MDHR",
  description: "Cuphead's gameplay is centered around continual boss fights, interspersed with run-and-gun levels. All worlds but the final one include a mausoleum where the player has to parry ghosts before they touch an urn, which rewards them with a Super move for completing the challenge. Each of these boss fights and run-and-gun levels is housed in one of four different worlds, with the fourth world containing the final fight against the Devil himself. Each boss fight includes a simple, normal, and expert difficulty mode (with the exception of the final two bosses, which lack a simple mode). ",
  genre: "Run and gun",
  coop: true,
  multi: false,
  single: true,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpY1TpfN5Kx_276lLMZ1X6b0_GnDujAvfj_g&usqp=CAU",
  esrb: "Everyone",
  releasedate: Faker::Date.between(from: 365.days.ago, to: Date.today),
  user_id: 3,
  )
  3.times do
  users = [1,2,3]
  rating = [1,2,3,4,5]
  image = ["https://store-images.s-microsoft.com/image/global.50863.acentoprodimg.f9ef396f-be99-4dc1-88e2-15405a3d51b5.57fa1d64-398b-47dc-845f-608fdf700d56?mode=crop&q=90&h=195&w=348", "https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", "https://st.depositphotos.com/1013230/2210/i/950/depositphotos_22104925-stock-photo-game-controller-and-blue-light.jpg", "https://media.wired.com/photos/60303d8eb1e4e27662365aa3/master/pass/Game-Cracking.jpg", "https://media.gamestop.com/i/gamestop/Nav_Switch_2.jpeg", "https://g.foolcdn.com/editorial/images/499797/group-of-men-and-women-playing-video-games.jpg", "https://www.uae.campusfrance.org/sites/pays/files/uae/styles/mobile_visuel_principal_page/public/Sans%20titre.png?itok=JDmQeA2O", "https://cdn.vox-cdn.com/thumbor/BJnbAzdEjThAoTFptofYwMFtpBU=/0x0:3840x2160/1200x800/filters:focal(1563x518:2177x1132)/cdn.vox-cdn.com/uploads/chorus_image/image/69204054/Returnal_20210424011831.0.jpg"]
  review = Review.create(
    title: Faker::TvShows::GameOfThrones.house,
    gamereview: Faker::Restaurant.review,
    body: Faker::TvShows::Seinfeld.quote,
    game_play: rating.sample,
    visual: rating.sample,
    soundtrack: rating.sample,
    image: image.sample,
    rating: rating.sample,
    user_id: users.sample,
    game_id: game.id,
  )
end
end

puts "data seeded"