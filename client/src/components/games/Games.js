import React,{useState,useEffect} from 'react'
import axios from 'axios'
import GameForm from './GameForm'
import Game from './Game'
import SearchBar from '../shared/SearchBar'
import { Link } from 'react-router-dom'
import { Card, Container, } from 'semantic-ui-react'
import { CardContainer } from '../styledComponents/appStyles'
import { HomeHead } from '../shared/sharedComponets'
const Games = (match) => {
  const [games,setGames] = useState([])

  const getGames = async(match) => {
      try{
        let res = await axios.get(`/api/games/`)
        setGames(res.data)
      }catch(err){
        alert("Error Failed to get games")
      }
  }


  useEffect(()=>{
    getGames()
  },[])



  
const renderGames = () =>{
  return games.map((game)=> <Game key= {game.id} game={game} />)
}


return(
<>
<div>
    <SearchBar/>

      <CardContainer>

      <HomeHead>

      < h1 style={{ fontSize: '50px', textUnderlinePosition: 'pink'}}>Games</h1>  
          {renderGames(games)}, 
      </HomeHead>
      </CardContainer>
  
</div>
</>
)
}

export default Games;