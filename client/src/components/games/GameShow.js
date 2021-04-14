
import React,{useState,useEffect} from 'react'

import axios from 'axios'
import Game from './Game'

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
<h1>Game: {games.gamename}</h1>
<h1>Description: {games.description}</h1>
<h1>Release Date: {games.releasedate}</h1>
<h1>Studio: {games.studio}</h1>
<h1>Genre: {games.genre}</h1>
<h1>Multiplayer: {games.multi}</h1>
<h1>Esrb: {games.esrb}</h1>
<h1>Coop: {games.coop}</h1>
<h1>Single Player: {games.single}</h1>

{renderGames()}
</>
)
}


export default GameShow;