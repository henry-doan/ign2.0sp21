import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import Game from './Game'
import GameForm from './GameForm'
import ReviewShow from '../reviews/ReviewShow'
import Review from '../reviews/Review'
import Reviews from '../reviews/Reviews'
import ReviewForm from '../reviews/ReviewForm'
import { Card, Container, Divider } from 'semantic-ui-react'
import {AuthContext} from '../../providers/AuthProvider' 

const GameShow = ({match}) => {  
const {user} = useContext(AuthContext)
const [games,setGames] = useState([])
const [reviews, setReviews] = useState([])
const getGames = async() => {
    try{
      let res = await axios.get(`/api/games/${match.params.id}`)
      setGames(res.data)
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
  getGames()
  getReviews()
},[])

const renderGames = (games) =>{

}
return(
<>
<div>
  <Container>
    
        <h3>Description: {games.description}</h3>
        <h3>Release Date: {games.releasedate}</h3>
        <h3>Studio: {games.studio}</h3>
        <h3>Genre: {games.genre}</h3>
        <h3>Esrb: {games.esrb}</h3>
        <h3>Multiplayer: {games.multi}</h3>
        <h3>Coop: {games.coop}</h3>
        <h3>Single Player: {games.single}</h3>
  
  </Container>
</div>
<Reviews reviews={reviews}/>
<ReviewForm gameId={games.id} user_id={user.id} />



</>
)


}

export default GameShow;