import axios from 'axios';
import React, {useContext, useState} from 'react';
import {Form, GridColumn, Grid, Container} from 'semantic-ui-react';
import {AuthContext} from '../../providers/AuthProvider';
import {ReviewConsumer} from '../../providers/ReviewProvider';
import { Button, Header, Image, Modal } from 'semantic-ui-react'




const ReviewForm = ({ addReview, gameId, user_id }) => {
  const user = useContext(AuthContext)
  const [ review, setReview ] = useState({title:"", rating:(4.0), gamereview:(4.0), image:"", body:"", game_play:(5.0),  visual:(5.0), soundtrack:(5.0), user_id: user_id, game_id: gameId })
  const [open, setOpen] = React.useState(false)
 

    const handleSubmit = (e) => {
      setOpen(false);
      e.preventDefault();
      addReview(review, user_id, gameId)
    setReview({ title:"", rating:(""), gamereview:"", image:"", body:"", game_play:"", visual:"", soundtrack:"", user_id: user_id, game_id: gameId }) 
  }
  return(

    <Modal
      style={{backgroundColor: '#fc8778'}}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='black'>New Review</Button>}
    >

  
<Container>
    <Grid>
        <Grid.Row centered>
            <Grid.Column width={6}>
                <Form onSubmit={handleSubmit} style={{backgroundColor: '#fc8778'}}>
      <Form.Input
     
     label="Title"
     name="title"
     placeholder="Review Title"
     value={review.title}
     onChange={(e, {value}) => setReview({...review, title: value})}
     />
        <Form.Input
      
      label="Gamereview"
      placeholder="Game Review"
      name="gamereview"
      value={review.gamereview}
      onChange={(e, {value}) => setReview({...review, gamereview: value})}
      />
    
      
      {/* <Form.Input
     
     label="image"
     placeholder="image"
     name="image"
     value={review.image}
     onChange={(e, {value}) => setReview({...review, image: value})}
     /> */}
     <Form.Dropdown
        label='Rating'
        name='rating'
        placeholder="Select a Rating"
        value={review.rating}
        onChange={(e, {value}) => setReview({...review, rating: value})}
        options={ratingOpts}
        />
    
        <Form.Dropdown
   
   label="Game Play"
   placeholder="Select a Rating"
   name="game_play"
   value={review.game_play}
   onChange={(e, {value}) => setReview({...review, game_play: value})}
   options={ratingOpts}
   />
      <Form.Dropdown

label="Visuals"
placeholder="Select a Rating"
name="visual"
value={review.visual}
onChange={(e, {value}) => setReview({...review, visual: value})}
options={ratingOpts}
/>
     <Form.Dropdown
     
     label="Sound Track"
     placeholder="Sound Track"
     name="soundtrack"
     value={review.soundtrack}
     onChange={(e, {value}) => setReview({...review, soundtrack: value})}
     options={ratingOpts}
     />
      
    

      
      <Button color='black'>Save</Button>
        </Form>
      </Grid.Column>
     </Grid.Row>
     </Grid>
     </Container>
  </Modal>
  )
  }


// const ConnectedReviewForm = (props) => (
//   <ReviewConsumer>
//     { value => (
//       <ReviewForm {...props} {...value} />
//     )}
//   </ReviewConsumer>
// )

const ratingOpts = [
    {key: "1", text: "1 Star", value:1},
    {key: "2", text: "2 Star", value:2 },
    {key: "3", text: "3 Star", value:3},
    {key: "4", text: "4 Star", value:4},
    {key: "5", text: "5 Star", value:5},
  ]


export default ReviewForm;