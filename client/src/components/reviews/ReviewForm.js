import axios from 'axios';
import React, {useContext, useState} from 'react';
import {Form,Button} from 'semantic-ui-react';
import {AuthContext} from "../../providers/AuthProvider";
import {ReviewConsumer} from '../../providers/ReviewProvider';



const ReviewForm = ({ addReview }) => {
    const auth = useContext(AuthContext);
  const [ review, setReview ] = useState({title:"", rating:"", gamereview:"", image:"",
     body:"",
     gameplay:"",
     visual:"",
     soundtrack:"",})
  
  

    const handleSubmit = (e) => {
      e.preventDefault();
      addReview(review)
    setReview({ title:"", 
    rating:"",
    gamereview:"",
    image:"",
    body:"",
    gameplay:"",
    visual:"",
    soundtrack:"",
   }) 
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control
      autoFocus
      name="title"
      value={review.title}
      onChange={(e, {value}) => setReview({...review, title: value})}
      />
      </Form.Group>
      <Form.Select
        label='Genre'
        name='Genre'
        value={review.rating}
        onChange={(e, {value}) => setReview({...review, rating: value})}
        options={ratingOpts}
      />
      <Form.Group>
      <Form.Label>Game Review</Form.Label>
      <Form.Control
      autoFocus
      placeholder="GameReview"
      name="gamereview"
      value={review.gamereview}
      onChange={(e, {value}) => setReview({...review, gamereview: value})}
      />
      </Form.Group>
      <Form.Group>
      <Form.Label>Tell us about the Graphics</Form.Label>
      <Form.Control
      autoFocus
      placeholder="Visual"
      name="visual"
      value={review.visual}
      onChange={(e, {value}) => setReview({...review, visuals: value})}
      />
      </Form.Group>
      <Form.Group>
      <Form.Label>Tell us about the Sound Track</Form.Label>
      <Form.Control
      autoFocus
      placeholder="SoundTrack"
      name="soundtrack"
      value={review.soundtrack}
      onChange={(e, {value}) => setReview({...review, soundtrack: value})}
      />
      </Form.Group>

      
      <Button varient="success" type="submit" onClick={handleSubmit}>Submit</Button>
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