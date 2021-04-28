import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {ReviewContext} from '../../providers/ReviewProvider';
import { GameContext } from '../../providers/GameProvider';
import Review from './Review'

const Reviews = ({match, reviews}) => {
  const {deleteReview} = useContext(ReviewContext)
  const {updateReview} = useContext(ReviewContext)
//   const [reviews,setReviews] = useState([])
//   const [games, setGames] = useState([])

//   useEffect(()=>{
//     getReviews()
//   },[])
//   const getReviews = async() => {
//       try{
//         let res = await axios.get(`/api/games/${match.params.id}/reviews`)
//         setReviews(res.data)
//         console.log("got reviews", res.data)
//       }catch(err){
//         console.log("Error Failed to get Review")
//       }
//   }





  
const renderReviews = () =>{
  return reviews.map((review)=> <Review key= {review.id} review={review} />)
}


return(
<>

<h1>Reviews</h1>
{renderReviews()}

</>
)
}

export default Reviews;
