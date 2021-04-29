import React,{ useState, useContext, useHistory, useEffect } from 'react';
import axios from 'axios'
import Reviews from  './Reviews';
import { Card, Segment, Grid, Divider, Button, Modal, Form } from 'semantic-ui-react'
import ReviewForm from '../reviews/ReviewForm'
import { Image } from "semantic-ui-react"
import Fade from 'react-reveal/Fade'
import UpdatingReview from './UpdatingReview'

import { AuthContext } from '../../providers/AuthProvider'
import {ReviewContext} from '../../providers/ReviewProvider';
import { GameContext } from '../../providers/GameProvider';

const Review = ({review, user_id, gameId, deleteReview, updateReview}) => {    
  const [game,setGame] = useState([])
  // const [reviews, setReviews] = useState([])
  const {user} = useContext(AuthContext)
  // const {updateReview} = useContext(ReviewContext)
  const [open, setOpen] = React.useState(false)

  // const getReviews = async(match) => {
  //   console.log("review game id", gameId)
  //   try{
  //     let res = await axios.get(`/api/games/${match.params.id}/reviews`)
  //     setReviews(res.data)
  //     console.log("got reviews", res.data)
  //   }catch(err){
  //     console.log("Error Failed to get Review")
  //   }
  // }
  useEffect(()=>{
    
    // getReviews()
  },[])
  const deleteView = () => {
    if (user.id === review.user_id) {
      return (
        <Button onClick={()=>deleteReview(gameId, review.id)}>
        Delete Review
        </Button>
        )
      }
  }
  const updateView = () => {
    if (user.id === review.user_id) {
      return (
        <Modal
      style={{backgroundColor: '#fc8778'}}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='black'>Update Review</Button>}>
        <Form.Input>
          <UpdatingReview reviewData={review} updateReview={updateReview} gameId={gameId} reviewId={review.id} setOpen={setOpen}/>
        </Form.Input>
        </Modal>
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
    <h3 style={{color: 'white'}}>Overall Score: {review.rating}</h3> 
    </Grid.Column>
      <Grid.Column>
      <h3 style={{color: 'white'}}>Graphics: {review.visual}</h3>
      </Grid.Column>
      <Grid.Column>
      <h3 style={{color: 'white'}}>Soundtrack: {review.soundtrack}</h3>
      </Grid.Column>
      <Grid.Column>
      <h3 style={{color:'white'}}>Gameplay: {review.game_play}</h3>
      </Grid.Column>
    </Grid.Row>
  </Grid>

    </Segment>
    </Fade>
      {deleteView(user_id, gameId)}
       {updateView()}

  </>
    
  )
  
  }

  export default Review