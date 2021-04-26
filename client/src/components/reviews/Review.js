import React from 'react';
import Reviews from  './Reviews';
import { Card, Grid } from 'semantic-ui-react'
import ReviewForm from '../reviews/ReviewForm'


const Review = ({review}) => {
 
return(
    <>
    <div>
   <Card>
      <Card.Content>
      <Card.Header>
    <h1>GameReview: {review.gamereview}</h1>
    <h3>Title: {review.title}</h3>
    <h3>Visuals: {review.visual}</h3>
    <h3>Soundtrack: {review.soundtrack}</h3>
    <h3>Rating: {review.rating}</h3> 
    </Card.Header>
    </Card.Content>
    </Card>

    </div>
   
  </>
    
  )
    
}
  export default Review
