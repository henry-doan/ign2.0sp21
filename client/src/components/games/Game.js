
import { Divider, Segment, Image, Grid } from 'semantic-ui-react'
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
  <Fade left>
  <Segment>
  <a href={`/games/${game.id}`} style={{color: '#fc8787'}}><h1>{game.gamename}</h1></a>
  <Divider style={{backgroundColor: '#fc8787'}}/>
  <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
      <Image height="auto" width="200px" centered src={game.image} />
      </Grid.Column>
      <Grid.Column>
      <h3>{game.description}</h3>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3} style={{backgroundColor: '#fc8787'}}>
      <Grid.Column>
      <h3 style={{color: 'white'}}>{renderAverageRating()}</h3>
      </Grid.Column>
      <Grid.Column>
        <h3 style={{color: 'white'}}>{game.genre}</h3>
      </Grid.Column>
      <Grid.Column>
        <h3 style={{color: 'white'}}>{game.esrb}</h3>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Segment>
  </Fade>
  <Divider tyle={{backgroundColor: '#fc8787'}} />

  </>
  )

}
  export default Game

