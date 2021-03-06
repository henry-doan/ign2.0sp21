import { Divider, Segment, Image, Grid, Card, Icon,} from 'semantic-ui-react'
import axios from 'axios'
import React,{useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade'
import imageSrc from '../shared/images/hexagonal.png'
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
        <h2 style={{fontSize:'5rem'}}>
        {averageRating.toFixed(1)}
        </h2>
      </div>
    )
  }

return(
  <>
  

  <Grid className={styles.cardEffect}>
    <Grid.Column width={3}>
    <Image height="auto" width="200px" centered src={game.image} />
    </Grid.Column>
    <Grid.Column width={4}>
    <a href={`/games/${game.id}`} className={styles.gameName} style={{color: '#fc8787'}}><h1>{game.gamename}</h1></a>
    <p style={{color: '#c75c7b'}}>Genre: {game.genre}</p>  
    <Image size='small'src={imageSrc} style={{position: 'absolute', left: '50%', top: '45%'}}  />
    <h3 style={{fontSize:'7rem', color: 'white', position: 'absolute', left: '58%', top: '55%'}}>{renderAverageRating()}</h3>
    <h2 style={{fontSize:'1rem', color: 'white', position: 'absolute', left: '60%', top: '50%'}}>Overall Rating</h2>
      
    </Grid.Column>
    <Grid.Column width={9}>
    <h3 style={{color: 'black'}}>{game.description}</h3>
    </Grid.Column>
  </Grid>
  <Divider style={{backgroundColor: '#fc8787'}} />
  
  </>
)

}
  export default Game