import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import Review from './Review'
import Games from '../games/Games'
import { ReviewContext } from '../../providers/ReviewProvider'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import { AuthContext } from '../../providers/AuthProvider'

const ReviewShow = ({match}) => {  

const [review,setReviews] = useState([])
const {user} = useContext(AuthContext)
const {deleteReview} = useContext(ReviewContext)
const {updateReview} = useContext(ReviewContext)
let history = useHistory()
const getReviews = async() => {
    try{
      let res = await axios.get(`/api/games/${match.params.id}/reviews`)
      setReviews(res.data)
    }catch(err){
      alert("Error Failed to get Reviews")
    }
}
useEffect(()=>{
  getReviews()
},[])
const deleteView = () => {
    if (user.id === review.user_id) {
  
      return (
        <Button onClick={()=>deleteReview(review.id, history)}>
        Delete Review
        </Button>
        )
      }
  }
  const updateView = () => {
    if (user.id === review.user_id) {
  
      return (
        <Button onClick={()=>updateReview(review.id, history)}>
        Update Review
        </Button>
        )
      }
    }
const [game] = useState([])
const renderReviews = (reviews, game) =>{

}
return(
 <>
 
  <h1>Reviews</h1>
    {renderReviews()}
    {deleteView()}
    {updateView()}

  </>
)
}


export default ReviewShow;