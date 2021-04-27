import GameForm from './GameForm';
import Games from  './Games';
import { Card } from 'semantic-ui-react'
import ReviewForm from '../reviews/ReviewForm'
import { Divider, Segment, Image } from 'semantic-ui-react'
import axios from 'axios'
import React,{useState, useEffect} from 'react'


const Game = ({game}) => {
  const [reviews,setReviews] = useState([])

  useEffect(()=>{
    getReviews()
  },[])

  const getReviews = async() => {
    try{
      let res = await axios.get(`/api/games/${game.id}/reviews`)
      setReviews(res.data)
      console.log("got reviews", res.data)
    }catch(err){
      console.log("Error Failed to get Review")
    }
  }

  const renderAverageRating = () => {
    let allRatings = []
    reviews.forEach(review => {
      allRatings.push(review.rating)
    })
    let sum = 0;
    for (var i = 0; i < allRatings.length; i++) {
      sum += allRatings[i]
    }
    let averageRating = (sum / allRatings.length)
    return (
      <div>
        <h2>
          Rating: {averageRating.toFixed(1)}
        </h2>
      </div>
    )
  }

return(
  <>

  <Segment>

  <a href={`/games/${game.id}`}><h1>{game.gamename}</h1></a>
  <Image src={game.image} />
  {renderAverageRating()}
  <h3>{game.gamereview}</h3>
  <h3>{game.genre}</h3>
  <h3>{game.description}</h3>
  </Segment>
  <Divider/>

  </>
  )

}
  export default Game

