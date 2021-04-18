import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { Link } from 'react-router-dom'
import Games from '../games/Games'

const Reviews = (match) => {
  const [reviews,setReviews] = useState([])
  const [games, setGames] = useState([])

  const getReviews = async(match) => {
      try{
        let res = await axios.get(`/api/games/:game_id/reviews`)
        setReviews(res.data)
      }catch(err){
        alert("Error Failed to get Review")
      }
  }


  useEffect(()=>{
    getReviews()
  },[])



  
const renderReviews = () =>{
  return reviews.map((review)=> <Review key= {games.review.id} review={games.review.title} />)
}


return(
<>

<h1>Reviews</h1>
{renderReviews(reviews)}

</>
)
}

export default Reviews;
