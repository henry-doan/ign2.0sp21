import React from 'react';
import GameForm from './GameForm';
import Games from  './Games';
import { Card } from 'semantic-ui-react'
import ReviewForm from '../reviews/ReviewForm'


const Game = ({game}) => {
 
return(
  <>
  <div>
   <Card>
      <Card.Content>
      <Card.Header>Game: {game.gamename}</Card.Header>
      <h3>Genre: {game.genre}</h3>
      <h3>Release Date: {game.releasedate}</h3>
      <h3>Studio: {game.studio}</h3>
      <h3>Esrb: {game.esrb}</h3>
      {/* <h5>Multiplayer: {game.multi}</h5>
      <h5>Coop: {game.coop}</h5>
      <h5>Single Player: {game.single}</h5> */}
      <a href={`/games/${game.id}`}>View Game</a>
      </Card.Content>
    </Card>
</div>
  
 
 
 </>
  )
    
}
  export default Game

