import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import Game from './Game'
import GameForm from './GameForm'
import ReviewShow from '../reviews/ReviewShow'
import Review from '../reviews/Review'
import Reviews from '../reviews/Reviews'
import { GameContext } from '../../providers/GameProvider'
import { AuthContext } from '../../providers/AuthProvider'
import { Button, Image, Progress } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import ReviewForm from '../reviews/ReviewForm'
import { HomeHead } from '../shared/sharedComponets'



const GameShow = ({match}) => {
const [game,setGame] = useState([])
const [reviews, setReviews] = useState([])
const {user} = useContext(AuthContext)
const {deleteGame} = useContext(GameContext)

let history = useHistory()
const getGame = async() => {
    try{
      let res = await axios.get(`/api/games/${match.params.id}`)
      setGame(res.data)
      console.log('got Games', res.data)
    }catch(err){
      alert("Error Failed to get games")
    }
}
const getReviews = async() => {
  try{
    let res = await axios.get(`/api/games/${match.params.id}/reviews`)
    setReviews(res.data)
    console.log("got reviews", res.data)
  }catch(err){
    console.log("Error Failed to get Review")
  }
}
useEffect(()=>{
  getGame()
  getReviews()
},[])
const deleteView = () => {
  if (user.id === game.user_id) {
    return (
      <Button onClick={()=>deleteGame(game.id, history)}>
      Delete Game
      </Button>
      )
    }
}

const renderAverageRating = () => {
  let allRatings = []
  reviews.forEach(review => {
    allRatings.push(review.rating)
  })
  let sum = 0;
  for (var i = 0; i < allRatings.length; i++) {
    sum += allRatings[i]
  }
  let averageRating = (sum / allRatings.length)
  return (
    <div>
      <h1>
        Overall Rating: {averageRating.toFixed(1)}
      </h1>
    </div>
  )
}

const renderAverageVisual = () => {
  let allVisuals = []
  reviews.forEach(review => {
    allVisuals.push(review.visual)
  })
  let sum = 0;
  for (var i = 0; i < allVisuals.length; i++) {
    sum += allVisuals[i]
  }
  let averageVisual = (sum / allVisuals.length)
  let progressVisual = (averageVisual * 20)
  return (
    <div>
      <h3>
        Visuals: {averageVisual.toFixed(1)}/5
        <Progress percent={progressVisual} active />
      </h3>
    </div>
  )
}

const renderAverageSoundtrack = () => {
  let allSoundtracks = []
  reviews.forEach(review => {
    allSoundtracks.push(review.soundtrack)
  })
  let sum = 0;
  for (var i = 0; i < allSoundtracks.length; i++) {
    sum += allSoundtracks[i]
  }
  let averageSoundtrack = (sum / allSoundtracks.length)
  let progressSoundtrack = (averageSoundtrack * 20)
  return (
    <div>
      <h3>
        Soundtrack: {averageSoundtrack.toFixed(1)}/5
        <Progress percent={progressSoundtrack} active />
      </h3>
    </div>
  )
}

const renderAverageGameplay = () => {
  let allGameplays = []
  reviews.forEach(review => {
    allGameplays.push(review.game_play)
  })
  let sum = 0;
  for (var i = 0; i < allGameplays.length; i++) {
    sum =+ allGameplays[i]
  }
  let averageGameplay = (sum / allGameplays.length)
  let progressGameplay = (averageGameplay * 20)
  return (
    <div>
      <h3>
        Gameplay: {averageGameplay.toFixed(1)}/5
        <Progress percent={progressGameplay} active />
      </h3>
    </div>
  )
}

return(
<>
<HomeHead>

{deleteView()}
<Image src={game.image} />
<h3>Description: {game.description}</h3>
<h3>Release Date: {game.releasedate}</h3>
<h3>Studio: {game.studio}</h3>
<h3>Genre: {game.genre}</h3>
<h3>Esrb: {game.esrb}</h3>
<h3>Multiplayer: {game.multi}</h3>
<h3>Coop: {game.coop}</h3>
<h3>Single Player: {game.single}</h3>
{/* <GameForm/> */}
<br />
{renderAverageRating()}
<br />
<br />
<br />
{renderAverageVisual()}
{renderAverageSoundtrack()}
{renderAverageGameplay()}
<hr />








<Reviews reviews={reviews}/>
<ReviewForm gameId={game.id} user_id={user.id} />
</HomeHead>
</>
)




}
export default GameShow;