import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Game from './Game'
import SearchBar from '../shared/SearchBar'
import { HomeHead } from '../shared/sharedComponets'
import Fade from 'react-reveal/Fade'
import { Button, Header, Image, Modal, Grid } from 'semantic-ui-react'
const Games = (match) => {
  const [games,setGames] = useState([])

  useEffect(()=>{
    getGames()
  },[])

  const getGames = async(match) => {
      try{
        let res = await axios.get(`/api/games/`)
        setGames(res.data)
      }catch(err){
        alert("Error Failed to get games")
      }
  }

const renderGames = () =>{
  return games.map((game)=> <Game key= {game.id} game={game} />)
}


return(
<>
<div>
    <SearchBar/>

      
      <HomeHead>
      <Grid columns={3} divided>
     
      <Grid.Row>
       
          {renderGames(games)} 
          </Grid.Row>
          
          </Grid>
      </HomeHead>
    
  
</div>
</>
)
}

export default Games;