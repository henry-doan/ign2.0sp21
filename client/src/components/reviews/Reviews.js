import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { Link } from 'react-router-dom'
import Games from '../games/Games'

const Reviews = ({match, reviews}) => {
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
