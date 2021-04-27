import React from 'react';
import GameForm from './GameForm';
import Games from  './Games';
import { Card } from 'semantic-ui-react'
import ReviewForm from '../reviews/ReviewForm'
import { Divider, Segment, Image } from 'semantic-ui-react'


const Game = ({game}) => {
 
return(
  <>
 
  <Segment>

  <a href={`/games/${game.id}`}><h1>{game.gamename}</h1></a>
  <Image src={game.image} />
  <h3>{game.gamereview}</h3>
  <h3>{game.genre}</h3>
  <h3>{game.description}</h3>
  </Segment>
  <Divider/>

 
 </>
  )
    
}
  export default Game

