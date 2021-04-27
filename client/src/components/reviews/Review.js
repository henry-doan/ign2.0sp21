import React from 'react';
import Reviews from  './Reviews';
import { Card, Segment, Grid, Divider } from 'semantic-ui-react'
import ReviewForm from '../reviews/ReviewForm'
import { Image } from "semantic-ui-react"
import Fade from 'react-reveal/Fade'


const Review = ({review}) => {
 
return(
    <>
    <Fade left>
    <Segment>
    <h1>{review.title}</h1>
    <Divider/>
    <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
      <Image height="auto" width="200px" centered src={review.image} />
      </Grid.Column>
      <Grid.Column>
      <p>{review.body}</p>
      </Grid.Column>
    </Grid.Row>

    <h1>Review: {review.gamereview}</h1>
    <Grid.Row columns={4} style={{backgroundColor: '#fc8787'}}>
      <Grid.Column>
      <h3 style={{color: 'white'}}>Graphics: {review.visual}</h3>
      </Grid.Column>
      <Grid.Column>
      <h3 style={{color: 'white'}}>Soundtrack: {review.soundtrack}</h3>
      </Grid.Column>
      <Grid.Column>
      <h3 style={{color: 'white'}}>Rating: {review.rating}</h3> 
      </Grid.Column>
    </Grid.Row>
  </Grid>

    </Segment>
    </Fade>
   
  </>
    
  )
    
}
  export default Review
