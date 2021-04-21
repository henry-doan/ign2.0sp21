import axios from 'axios';
import React, {useContext, useState} from 'react';
import {Form, Button, Label} from 'semantic-ui-react';
import {AuthContext} from "../../providers/AuthProvider";
import {ReviewConsumer} from '../../providers/ReviewProvider';



const ReviewForm = ({ addReview, gameId, user_id }) => {
    const auth = useContext(AuthContext)
  const [ review, setReview ] = useState({title:"", rating:"", gamereview:"", image:"", body:"", game_play:"",  visual:"", soundtrack:""})
  
  

    const handleSubmit = (e) => {
      e.preventDefault();
      addReview(review, user_id, gameId)
    setReview({ title:"", 
    rating:"",
    gamereview:"",
    image:"",
    body:"",
    game_play:"",
    visual:"",
    soundtrack:"",
   }) 
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
      autoFocus
      label="Title"
      name="title"
      value={review.title}
      onChange={(e, {value}) => setReview({...review, title: value})}
      />
     <Form.Input
        label='Rating'
        name='rating'
        value={review.rating}
        onChange={(e, {value}) => setReview({...review, rating: value})}
        options={ratingOpts}
      />
      <Form.Input
      autoFocus
      label="Gamereview"
      placeholder="GameReview"
      name="gamereview"
      value={review.gamereview}
      onChange={(e, {value}) => setReview({...review, gamereview: value})}
      />
        <Form.Input
      autoFocus
      label="game_play"
      placeholder="game_play"
      name="game_play"
      value={review.game_play}
      onChange={(e, {value}) => setReview({...review, game_play: value})}
      />
      <Form.Input
      autoFocus
      label="visual"
      placeholder="Visual"
      name="visual"
      value={review.visual}
      onChange={(e, {value}) => setReview({...review, visual: value})}
      options={ratingOpts}
      />
     <Form.Input
      autoFocus
      label="Soundtrack"
      placeholder="SoundTrack"
      name="soundtrack"
      value={review.soundtrack}
      onChange={(e, {value}) => setReview({...review, soundtrack: value})}
      />
    <Form.Input
      autoFocus
      label="body"
      placeholder="body"
      name="body"
      value={review.body}
      onChange={(e, {value}) => setReview({...review, body: value})}
      />
      
      <Form.Input
      autoFocus
      label="image"
      placeholder="image"
      name="image"
      value={review.image}
      onChange={(e, {value}) => setReview({...review, image: value})}
      />

      
      <Form.Button>Save</Form.Button>
    </Form>
  )
  }


const ConnectedReviewForm = (props) => (
  <ReviewConsumer>
    { value => (
      <ReviewForm {...props} {...value} />
    )}
  </ReviewConsumer>
)

const ratingOpts = [
    {key: "1", text: "1 Star"},
    {key: "2", text: "2 Star"},
    {key: "3", text: "3 Star"},
    {key: "4", text: "4 Star"},
    {key: "5", text: "5 Star"},
  ]


export default ConnectedReviewForm;