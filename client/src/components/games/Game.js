import React from 'react';
import GameForm from './GameForm';
import Games from  './Games';
import { Card } from 'semantic-ui-react'
import ReviewForm from '../reviews/ReviewForm'


const Game = ({game}) => {
 
return(
  <>
 

  <a href={`/games/${game.id}`}>{game.gamename}</a>
  <h3>{game.gamereview}</h3>
  <h3>{game.genre}</h3>
  <h3>{game.description}</h3>

 
 </>
  )
    
}
  export default Game

