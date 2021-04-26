import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import Game from './Game'
import GameForm from './GameForm'
import ReviewShow from '../reviews/ReviewShow'
import Review from '../reviews/Review'
import Reviews from '../reviews/Reviews'
import { GameContext } from '../../providers/GameProvider'
import { AuthContext } from '../../providers/AuthProvider'
import { Button, Card, Container, } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import ReviewForm from '../reviews/ReviewForm'
import { HomeHead } from '../shared/sharedComponets'

const GameShow = ({match, current_user}) => {
const [game,setGame] = useState([])
const [reviews, setReviews] = useState([])
const {user} = useContext(AuthContext)
const {deleteGame} = useContext(GameContext)
const {updateGame} = useContext(GameContext)
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
const updateView = () => {
  if (user.id === game.user_id) {

    return (
      <Button onClick={()=>updateGame(game.id, history)}>
      Update Game
      </Button>
      )
    }
  }
return(
<>
<HomeHead>

{deleteView()}
{updateView()}
<Reviews reviews={reviews}/>
<ReviewForm gameId={game.id} user_id={user.id} />
</HomeHead>
</>
)
}
export default GameShow;