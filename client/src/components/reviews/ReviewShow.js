import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Review from './Review'
import Games from '../games/Games'

const ReviewShow = ({match}) => {  

const [reviews,setReviews] = useState([])

const getReviews = async() => {
    try{
      let res = await axios.get(`/api/games/:game_id/reviews`)
      setReviews(res.data)
    }catch(err){
      alert("Error Failed to get Reviews")
    }
}
useEffect(()=>{
  getReviews()
},[])

const [games,] = useState([])
const renderReviews = (reviews, games) =>{

}
return(
 <>
  <h1>Game Name: {games.gamename}</h1>
  <h1>GameReview: {reviews.gamereview}</h1>
  <h3>Title: {reviews.title}</h3>
  <h3>Visuals: {reviews.visuals}</h3>
  <h3>Soundtrack: {reviews.soundtrack}</h3>
  <h3>Rating: {reviews.rating}</h3> 

{renderReviews()}
</>
)
}


export default ReviewShow;