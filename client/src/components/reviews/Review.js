import React, {useContext} from 'react';
import Reviews from  './Reviews';
import { Card } from 'semantic-ui-react'
import ReviewForm from '../reviews/ReviewForm'
import { GameContext } from '../../providers/GameProvider'



const Review = ({review, game, id}) => {
  
return(
    <>
    <h1>GameReview: {review.gamereview}</h1>
    <h3>Title: {review.title}</h3>
    <h3>Visuals: {review.visual}</h3>
    <h3>Soundtrack: {review.soundtrack}</h3>
    <h3>Rating: {review.rating}</h3> 
  
  </>
    
  )
    
}
  export default Review
