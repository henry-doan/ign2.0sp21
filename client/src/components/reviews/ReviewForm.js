import axios from 'axios';
import React, {useContext, useState} from 'react';
import {Form} from 'semantic-ui-react';
import {AuthContext} from '../../providers/AuthProvider';
import {ReviewConsumer} from '../../providers/ReviewProvider';



const ReviewForm = ({ addReview, gameId, user_id }) => {
    const user = useContext(AuthContext)
  const [ review, setReview ] = useState({title:"", rating:(5.0), gamereview:"", image:"", body:"", game_play:"",  visual:"", soundtrack:"", user_id: user_id, game_id: gameId })
  
 

    const handleSubmit = (e) => {
      e.preventDefault();
      addReview(review, user_id, gameId)
    setReview({ title:"", rating:(""), gamereview:"", image:"", body:"", game_play:"", visual:"", soundtrack:"", user_id: user_id, game_id: gameId }) 
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
     
      label="Title"
      name="title"
      value={review.title}
      onChange={(e, {value}) => setReview({...review, title: value})}
      />
        <Form.Input
      
      label="Gamereview"
      placeholder="GameReview"
      name="gamereview"
      value={review.gamereview}
      onChange={(e, {value}) => setReview({...review, gamereview: value})}
      />
      <Form.Input
     
      label="body"
      placeholder="body"
      name="body"
      value={review.body}
      onChange={(e, {value}) => setReview({...review, body: value})}
      />
      
      <Form.Input
     
      label="image"
      placeholder="image"
      name="image"
      value={review.image}
      onChange={(e, {value}) => setReview({...review, image: value})}
      />
     <Form.Dropdown
        label='Rating'
        name='rating'
        placeholder="Stars"
        value={review.rating}
        onChange={(e, {value}) => setReview({...review, rating: value})}
        options={ratingOpts}
      />
    
        <Form.Dropdown
   
      label="game_play"
      placeholder="game_play"
      name="game_play"
      value={review.game_play}
      onChange={(e, {value}) => setReview({...review, game_play: value})}
      options={ratingOpts}
      />
      <Form.Dropdown

      label="visual"
      placeholder="Visual"
      name="visual"
      value={review.visual}
      onChange={(e, {value}) => setReview({...review, visual: value})}
      options={ratingOpts}
      />
     <Form.Dropdown
     
      label="Soundtrack"
      placeholder="SoundTrack"
      name="soundtrack"
      value={review.soundtrack}
      onChange={(e, {value}) => setReview({...review, soundtrack: value})}
      options={ratingOpts}
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
    {key: "1", text: "1 Star", value:1},
    {key: "2", text: "2 Star", value:2 },
    {key: "3", text: "3 Star", value:3},
    {key: "4", text: "4 Star", value:4},
    {key: "5", text: "5 Star", value:5},
  ]


export default ConnectedReviewForm;