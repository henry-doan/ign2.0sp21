
import { Divider, Segment, Image, Grid, Card, Icon } from 'semantic-ui-react'
import axios from 'axios'
import React,{useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade'


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
  
  <Card.Group>
  <Card>
  <Card.Content>
  <Card.Header><a href={`/games/${game.id}`} style={{color: '#fc8787'}}><h1>{game.gamename}</h1></a></Card.Header>
  <Image height="auto" width="200px" centered src={game.image} />
      
       <Card.Meta>
        <span>Joined in 2015</span>
        </Card.Meta>
          <Card.Description>
          <h3>{game.description}</h3>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
       <h3 style={{color: 'black'}}>{renderAverageRating()}</h3>
       <h3 style={{color: 'black'}}>Genre: {game.genre}</h3>      
       <h3 style={{color: 'black'}}>ESRB: {game.esrb}</h3>
      </Card.Content>
  
     
    
   
 
   
 </Card>
  </Card.Group>
  <Divider tyle={{backgroundColor: '#fc8787'}} />
  
  </>
)

}
  export default Game

