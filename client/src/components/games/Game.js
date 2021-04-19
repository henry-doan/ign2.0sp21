import React from 'react';
import GameForm from './GameForm';
import Games from  './Games';
import { Card } from 'semantic-ui-react'


const Game = ({game}) => {
 
return(
  <>
  <h1>{game.gamename} </h1>
  <h3>{game.gamereview}</h3>
  <h3>{game.genre}</h3>
  <h3>{game.description}</h3>
  <a href={`/games/${game.id}`}>View Game</a>
 </>
  )
    
}
  export default Game

