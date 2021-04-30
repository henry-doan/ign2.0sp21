import React,{ useState, useContext, useHistory, useEffect } from 'react';
import axios from 'axios'
import Reviews from  './Reviews';
import { Card, Segment, Grid, Divider, Button, Modal, Form } from 'semantic-ui-react'
import ReviewForm from '../reviews/ReviewForm'
import { Image } from "semantic-ui-react"
import Fade from 'react-reveal/Fade'
import UpdatingReview from './UpdatingReview'
import imageSrc from '../shared/images/hexagonal.png'
import { AuthContext } from '../../providers/AuthProvider'
import {ReviewContext} from '../../providers/ReviewProvider';
import { GameContext } from '../../providers/GameProvider';
import styles from '../styledComponents/index.module.css'

const Review = ({review, user_id, gameId, deleteReview, updateReview}) => {    
  const [game,setGame] = useState([])
  // const [reviews, setReviews] = useState([])
  const {user} = useContext(AuthContext)
  // const {updateReview} = useContext(ReviewContext)
  const [open, setOpen] = React.useState(false)

 
  useEffect(()=>{
    
    // getReviews()
  },[])
  const deleteView = () => {
    if (user){

      if (user.id === review.user_id) {
        return (
          <Button onClick={()=>deleteReview(gameId, review.id)}>
          Delete Review
          </Button>
          )
        }
    }
  }
  const updateView = () => {
    if (user) {

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
  }
return(
    <>
    <Fade left>
    <Divider/>
    <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
    <h1 style={{color: '#c75c7b'}}>{review.title}</h1>
      <Image height="auto" width="200px" centered src={review.image} />
      </Grid.Column>
      <Grid.Column>
      <Image size='small'src={imageSrc} style={{position: 'absolute', left: '3%', top: '33%'}}  /><Image size='tiny'src={imageSrc} style={{position: 'absolute', left: '55%', top: '34%'}}  />
      <Image size='tiny'src={imageSrc} style={{position: 'absolute', left: '35%', top: '34%'}}  />
      <Image size='tiny'src={imageSrc} style={{position: 'absolute', left: '75%', top: '34%'}}  />
      <h3 style={{fontSize:'7rem', color: 'white', position: 'absolute', left: '10%', top: '30%'}}>{review.rating}</h3> 
      <h3 style={{fontSize:'3rem', color: 'white', position: 'absolute', left: '39.5%', top: '29%'}}>{review.visual}</h3>
      <h3 style={{fontSize:'3rem', color: 'white', position: 'absolute', left: '59.5%', top: '29%'}}>{review.game_play}</h3>
      <p style={{fontSize:'1rem', color: 'white', position: 'absolute', left: '12%', top: '39%'}}>Rating</p>
      <p style={{fontSize:'.5rem', color: 'white', position: 'absolute', left: '58.5%', top: '39%'}}>Game Play</p>
      <p style={{fontSize:'.5rem', color: 'white', position: 'absolute', left: '39.5%', top: '39%'}}>Graphics</p>
      <h3 style={{fontSize:'3rem', color: 'white', position: 'absolute', left: '80%', top: '29%'}}>{review.soundtrack}</h3>
      <p style={{fontSize:'.5rem', color: 'white', position: 'absolute', left: '79%', top: '39%'}}>Soundtrack</p>
      </Grid.Column>
    </Grid.Row>
    <h1 style={{color: 'black'}}>{review.gamereview}</h1>

      {deleteView(user_id, gameId)}
       {updateView()}
</Grid>
</Fade>
  </>
    
  )
  
  }
  export default Review