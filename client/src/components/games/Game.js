
import { Divider, Segment, Image, Grid, Card, Icon } from 'semantic-ui-react'
import axios from 'axios'
import React,{useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade'
import styles from '../styledComponents/index.module.css'

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

  <Grid className={styles.cardEffect}>
    <Grid.Column width={3}>
    <Image height="auto" width="200px" centered src={game.image} />
    </Grid.Column>
    <Grid.Column width={9}>
    <a href={`/games/${game.id}`} className={styles.gameName} style={{color: '#fc8787'}}><h1>{game.gamename}</h1></a>
    <p style={{color: 'black'}}>Genre: {game.genre}</p>  
    <h3>{game.description}</h3>
    <span>Joined in 2015</span>
    <h3 style={{color: 'black'}}>{renderAverageRating()}</h3>
      
    </Grid.Column>
  </Grid>
  </Segment>
  <Divider tyle={{backgroundColor: '#fc8787'}} />
  
  </>
)

}
  export default Game

