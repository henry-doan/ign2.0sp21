import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import Reviews from '../reviews/Reviews'
import { GameContext } from '../../providers/GameProvider'
import { AuthContext } from '../../providers/AuthProvider'
import { Button, Image, Progress, Segment, Grid, Divider, Modal, Form } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import ReviewForm from '../reviews/ReviewForm'
import { HomeHead, MainHead, StyledSegment } from '../shared/sharedComponets'
import { Fade } from 'react-reveal'
import { ReviewContext } from '../../providers/ReviewProvider'
import UpdatingGame from './UpdatingGame'
import styles from '../styledComponents/index.module.css'
import imageSrc from '../shared/images/hexagonal.png'


const GameShow = ({match}) => {
const [game,setGame] = useState([])
const [reviews, setReviews] = useState([])
const {user} = useContext(AuthContext)
const {deleteGame} = useContext(GameContext)
const [open, setOpen] = React.useState(false)


let history = useHistory()

useEffect(()=>{
  getGame()
  getReviews()
},[])

const getGame = async() => {
    try{
      let res = await axios.get(`/api/games/${match.params.id}`)
      setGame(res.data)
      console.log('got Games', res.data)
    }catch(err){
      alert("Error Failed to get games")
    }
}
const deleteReview = async(gameId, id) => {
  axios.delete(`/api/games/${gameId}/reviews/${id}`)
    .then( res => {
      setReviews(reviews.filter(t => t.id !== id))
    })
}

const addReview = (review, user_id, id ) => {
  axios.post(`/api/users/${user_id}/games/${id}/reviews/`, { review })
    .then( res => {
      setReviews([...reviews, res.data])
    })
    .catch( err => console.log(err))
}

const updateReview =  (review, gameId, id) => {
  axios.put(`/api/games/${gameId}/reviews/${id}`, { review })
    .then(res => {
      const updatedReviews = reviews.map( t => {
        if (t.id === id) {
          return res.data
        }
        return t
      })
      setReviews(updatedReviews)
    })
}

// const updateGame =  (gameId, id) => {
//   axios.put(`/api/games/${game.id}`, { game })
//     .then(res => {
//       const updatedGames = game.map( t => {
//         if (t.id === id) {
//           return res.data
//         }
//         return t
//       })
//       setGame(updatedGames)
//     })
// }
const getReviews = async() => {
  try{
    let res = await axios.get(`/api/games/${match.params.id}/reviews`)
    setReviews(res.data)
    console.log("got reviews", res.data)
  }catch(err){
    console.log("Error Failed to get Review")
  }
}

const deleteView = () => {
  if (user.id === game.user_id) {
    return (
      <Button onClick={()=>deleteGame(game.id, history)}>
      Delete Game
      </Button>
      )
    }
}
const updateView = () => {
  if (user.id === game.user_id) {
    return (
      <Modal
      style={{backgroundColor: '#fc8778'}}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Update Game</Button>}>
        <Form.Input>
          {/* <UpdatingGame gameData={game} gameId={game.id} updateGame={updateGame} setOpen={setOpen}/> */}
        </Form.Input>
        </Modal>
      )
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
    <div className={styles.container}>
      {averageRating.toFixed(1)}
    </div>
  )
}

const renderAverageVisual = () => {
  let allVisuals = []
  reviews.forEach(review => {
    allVisuals.push(review.visual)
  })
  let sum = 0;
  for (var i = 0; i < allVisuals.length; i++) {
    sum += allVisuals[i]
  }
  let averageVisual = (sum / allVisuals.length)
  let progressVisual = (averageVisual * 20)
  return (
    <div>
      <h3>
        Visuals: {averageVisual.toFixed(1)}/5
        <Progress color="blue" percent={progressVisual} active />
      </h3>
    </div>
  )
}

const renderAverageSoundtrack = () => {
  let allSoundtracks = []
  reviews.forEach(review => {
    allSoundtracks.push(review.soundtrack)
  })
  let sum = 0;
  for (var i = 0; i < allSoundtracks.length; i++) {
    sum += allSoundtracks[i]
  }
  let averageSoundtrack = (sum / allSoundtracks.length)
  let progressSoundtrack = (averageSoundtrack * 20)
  return (
    <div>
      <h3>
        Soundtrack: {averageSoundtrack.toFixed(1)}/5
        <Progress color="blue" percent={progressSoundtrack} active />
      </h3>
    </div>
  )
}

const renderAverageGameplay = () => {
  let allGameplays = []
  reviews.forEach(review => {
    allGameplays.push(review.game_play)
  })
  let sum = 0;
  for (var i = 0; i < allGameplays.length; i++) {
    sum =+ allGameplays[i]
  }
  let averageGameplay = (sum / allGameplays.length)
  let progressGameplay = (averageGameplay * 20)
  return (
    <div>
      <h3>
        Gameplay: {averageGameplay.toFixed(1)}/5
        <Progress color="blue" percent={progressGameplay} active />
      </h3>
    </div>
  )
}

return(
<>
<HomeHead>


<Segment>
  <MainHead><h1 style={{color: 'black'}}>{game.gamename}</h1></MainHead>
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

      
    <Grid.Row columns={5} style={{backgroundColor: '#fc8787'}}>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
        <h3 style={{color: 'white'}}>Genre: {game.genre}</h3>
      </Grid.Column>
      <Grid.Column>
        <h3 style={{color: 'white'}}>ESRB: {game.esrb}</h3>
      </Grid.Column>
      <Grid.Column>
        <h3 style={{color: 'white'}}>Released: {game.releasedate}</h3>
      </Grid.Column>
      <Grid.Column>
        <h3 style={{color: 'white'}}>Production Studio: {game.studio}</h3>
      </Grid.Column>
      <Grid.Column>
        <h3 style={{color: 'white'}}>{game.muliplayer}</h3>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>
{deleteView()}
{updateView()}

<Segment>

<div className={styles.centered}>
<img className={styles.container}src={imageSrc} alt="hexagon" />
<div className={styles.centered}>
{renderAverageRating()}
</div>
</div>
<br /><br /><br /><br /><br /><br />
{renderAverageVisual()}
{renderAverageSoundtrack()}
{renderAverageGameplay()}

</Segment>



<Segment>
  <Reviews reviews={reviews} gameId={game.id} deleteReview={deleteReview} updateReview={updateReview}/>
  </Segment>
<Fade left>
<ReviewForm gameId={game.id} user_id={user.id} addReview={addReview}/>
</Fade>
</HomeHead>
</>
)

}



export default GameShow;