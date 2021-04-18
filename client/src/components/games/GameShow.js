import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Game from './Game'
import GameForm from './GameForm'
import ReviewShow from '../reviews/ReviewShow'
import Review from '../reviews/Review'
import ReviewForm from '../reviews/ReviewForm'

const GameShow = ({match}) => {  

const [games,setGames] = useState([])

const getGames = async() => {
    try{
      let res = await axios.get(`/api/games/${match.params.id}`)
      setGames(res.data)
    }catch(err){
      alert("Error Failed to get games")
    }
}

useEffect(()=>{
  getGames()
},[])

const renderGames = (games) =>{

}
return(
<>

<h3>Description: {games.description}</h3>
<h3>Release Date: {games.releasedate}</h3>
<h3>Studio: {games.studio}</h3>
<h3>Genre: {games.genre}</h3>
<h3>Esrb: {games.esrb}</h3>
<h3>Multiplayer: {games.multi}</h3>
<h3>Coop: {games.coop}</h3>
<h3>Single Player: {games.single}</h3>
{/* <GameForm/> */}
<ReviewShow/>

{renderGames()}

</>
)


}

export default GameShow;