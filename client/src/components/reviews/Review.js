import React,{ useState, useContext, useHistory, useEffect } from 'react';
import axios from 'axios'
import Reviews from  './Reviews';
import { Card, Segment, Grid, Divider } from 'semantic-ui-react'
import ReviewForm from '../reviews/ReviewForm'
import { Image } from "semantic-ui-react"
import Fade from 'react-reveal/Fade'
import { Image } from "semantic-ui-react"
import { AuthContext } from '../../providers/AuthProvider'
import {ReviewContext} from '../../providers/ReviewProvider';
import { GameContext } from '../../providers/GameProvider';

const Review = ({review, user_id, game_id}) => {    
  const [game,setGame] = useState([])
  const [reviews, setReviews] = useState([])
  const {user} = useContext(AuthContext)
  const {deleteReview} = useContext(ReviewContext)
  const {updateReview} = useContext(ReviewContext)

  const getReviews = async(match) => {
    try{
      let res = await axios.get(`/api/games/${match.params.id}/reviews`)
      setReviews(res.data)
      console.log("got reviews", res.data)
    }catch(err){
      console.log("Error Failed to get Review")
    }
  }
  useEffect(()=>{
    
    getReviews(game_id, user_id)
  },[])
  const deleteView = (game_id) => {
    if (user.id === review.user_id) {
      return (
        <Button onClick={()=>deleteReview(review.id, game.id)}>
        Delete Review
        </Button>
        )
      }
  }
  const updateView = (user_id, game_id) => {
    if (user.id === review.user_id) {
      return (
        <Button onClick={()=>updateReview(review.id, game.id)}>
        Update Review
        </Button>
        )
      }
  }
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