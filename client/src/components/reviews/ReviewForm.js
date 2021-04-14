import axios from 'axios';
import React, {useContext, useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import {AuthContext} from "../../providers/AuthProvider";

const ReviewForm = ({post,add,reviewProp,afterUpdate}) =>{
    const auth = useContext(AuthContext);
  const [ review, setReview ] = useState(
    reviewProp ? 
    {title: reviewProp.title,
     rating: reviewProp.rating, 
     gamereview: reviewProp.gamereview,
     body: reviewProp.body,
     image: reviewProp.image,
     gameplay: reviewProp.gameplay,
     visual: reviewProp.visual,
     soundtrack: reviewProp.soundtrack,
     user_id: auth.user.id,}
    :
    {title:"", 
     rating:"",
     gamereview:"",
     image:"",
     body:"",
     gameplay:"",
     visual:"",
     soundtrack:"",
     user_id: auth.user.id,}
    )


    
    const addReview = async () => {
      debugger;
        try{
            let res = await axios.post(`/api/games/${game}/reviews`, review);
            add(res.data);
        }
          catch(err){
            alert("Your Review Couldnt Be Submitted")
        }
      }
    


    const editReview = async () => {
      debugger
      try{
        let res = await axios.put(`/api/games/${game}/reviews/${reviewProp.id}`, review);
        if(typeof afterUpdate === "function") afterUpdate(res.data);
      } 
        catch (err){
          alert('Your review ran into some issues')
      }
    }


    const handleChange = (e) => {
      setReview({...review, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(reviewProp){
        editReview();
      }else{
        addReview();
      }

      }
    


  return(
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control
      autoFocus
      name="title"
      value={review.title}
      onChange={handleChange}
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
      onChange={handleChange}
      />
      </Form.Group>
      <Form.Group>
      <Form.Label>Tell us about the Graphics</Form.Label>
      <Form.Control
      autoFocus
      placeholder="Visual"
      name="visual"
      value={review.visual}
      onChange={handleChange}
      />
      </Form.Group>
      <Form.Group>
      <Form.Label>Tell us about the Sound Track</Form.Label>
      <Form.Control
      autoFocus
      placeholder="SoundTrack"
      name="soundtrack"
      value={review.soundtrack}
      onChange={handleChange}
      />
      </Form.Group>

      
      <Button varient="success" type="submit" onClick={handleSubmit}>Submit</Button>
    </Form>
    </>
  )
}
const ratingOpts = [
    {key: "1", text: "1 Star"},
    {key: "2", text: "2 Star"},
    {key: "3", text: "3 Star"},
    {key: "4", text: "4 Star"},
    {key: "5", text: "5 Star"},
  ]


export default CommentForm;