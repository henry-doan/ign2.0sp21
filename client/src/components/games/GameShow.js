import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import Game from './Game'
import GameForm from './GameForm'
import ReviewShow from '../reviews/ReviewShow'
import Review from '../reviews/Review'
import Reviews from '../reviews/Reviews'
import { GameContext } from '../../providers/GameProvider'
import { AuthContext } from '../../providers/AuthProvider'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import ReviewForm from '../reviews/ReviewForm'
import { HomeHead } from '../shared/sharedComponets'

const GameShow = ({match, current_user}) => {
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
return(
<>
<HomeHead>

{deleteView()}
<h3>Description: {game.description}</h3>
<h3>Release Date: {game.releasedate}</h3>
<h3>Studio: {game.studio}</h3>
<h3>Genre: {game.genre}</h3>
<h3>Esrb: {game.esrb}</h3>
<h3>Multiplayer: {game.multi}</h3>
<h3>Coop: {game.coop}</h3>
<h3>Single Player: {game.single}</h3>
{/* <GameForm/> */}
<Reviews reviews={reviews}/>
<ReviewForm gameId={game.id} user_id={user.id} />
</HomeHead>
</>
)
}
export default GameShow;