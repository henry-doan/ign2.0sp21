import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Grid, Image, Button, Header, Segment, Divider, Card } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import GameForm from '../games/GameForm'
import axios from 'axios';
import {Container} from '../shared/sharedComponets'
import Fade from 'react-reveal/Fade'
import imageSrc2 from '../shared/images/Jayden.jpg'
// import styles from '../styledComponents/index.module.css'

const defaultImage = {imageSrc2};

const Profile = ({ user, updateUser, match}) => {
  const [editing, setEditing] = useState(false)
  const [formVals, setFormVals] = useState({ name: '', email: '', file: '', nickname: '', image: '' })
  const [games, setGames] = useState();
  const [reviews, setReviews] = useState();

  useEffect ( () => {
    getGames();
    getReviews();
    const { name, email, image, nickname } = user
    setFormVals({ name, email, image, nickname })
  }, [])

  const onDrop = (files) => {
    setFormVals({ ...formVals, file: files[0]})
  }

  const getGames = async () => {
    try {
      let res = await axios.get(`api/games/user/${user.id}`);
      setGames(res.data);
      console.log("games", res.data);
    } catch (err) {
      console.log(err)
    }
  }

  const getReviews = async() => {
    try {
      let res = await axios.get(`api/reviews/user/${user.id}`);
      setReviews(res.data);
      console.log("got reviews", res.data);
    }catch(err){
      console.log("Error Failed to get Review")
    }
  }

  const renderGames = () => {
    return (games.map(game => {
      return (
        <div>
          <a href={`/games/${game.id}`} style={{color: '#fc8787'}}>
            <h2 align='center'>{game.gamename}</h2></a>
          <Grid divided='vertically' style={{color: "#c75c7b"}} >
      <Grid.Row columns={2} style={{paddingLeft: "3em"}}>
       <Image src={game.image} size= 'tiny' ></Image>
       <Grid.Column>
      <p>{game.genre}<br/>
      <br/>
        ESRB: {game.esrb}
        <br/>
        <br/>
        {game.releasedate}
      </p>
      </Grid.Column>
    </Grid.Row>
      
    </Grid>
    <Divider/>
        </div>
      )
    }))
  }

  const renderReviews = () => {
    return (reviews.map(review => {
      return(
        <div>
            <a href={`games/1`} style={{color: '#fc8787'}}>
            <h2 align='center'>{review.title}</h2></a>
          <Grid divided='vertically' style={{color: '#c75c7b'}}>
      <Grid.Row columns={2}>
       <Grid.Column>
       <Image src={review.image} size= 'small' ></Image>
      </Grid.Column>
      <Grid.Column>
      <p>Overall Rating:{review.rating}
      <br/>
      Visuals:{review.visual}
      <br/>
      Soundtrack: {review.soundtrack}
      <br/>
      Gameplay: {review.game_play}
      </p>
      </Grid.Column>
    </Grid.Row>
    </Grid>
    <Divider/>
      
    
        </div>
      )
    }))
  }

  const profileView = () => {
    return(
      <>
      <br/>

        <Grid style={{marginLeft: "250px"}}>
          <Grid.Row>
            <div style={{
              display: "flex",
              justifyContent: "space-evenly"

            }}>
              <Header style={{color: '#fc8787', margin: "20px"}}>Nickname:{user.nickname}</Header>
              {/* <Segment circular style={{margin: "20px"}}> */}
              <Image  size='small' src={user.image || defaultImage} style={{
                
                objectFit: "cover",
                borderRadius: "50%",
                height: "200px",
                width: "200px"

              }}/>


          
              {/* </Segment> */}
              <Header  style={{color: '#fc8787', margin: "20px"}}>{user.name}</Header>
              <Header style={{color: '#fc8787', margin: "20px"}}>{user.email}</Header>
            </div>

            </Grid.Row>
          </Grid>
        <br/>
        <br/>
        <br/>
      </>
    )
  }

  const editView = () => {
    return(
      <Form onSubmit={handleSubmit}>
        <Grid.Column width={4}>
          <Dropzone
            onDrop={onDrop}
            multiple={false}
          >
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  style={styles.dropzone}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                    <p>File grabbed</p>
                    : <p>Drop Files here</p>
                  }
                </div>
              )
            }}
          </Dropzone>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            label="Name"
            name="name"
            value={formVals.name}
            required
            onChange={(e, inputAttr) => setFormVals({ ...formVals, name: inputAttr.value})}
          />
          <Form.Input
            label="Nickname"
            name="nickname"
            value={formVals.nickname}
            required
            onChange={(e, inputAttr) => setFormVals({ ...formVals, nickname: inputAttr.value})}
          />
          <Button color= 'black'>Update</Button>
          <br/>
        </Grid.Column>
      </Form>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user.id, formVals)
    setEditing(false)
    setFormVals({ ...formVals, file: "" })
  }

  return (
<>
    <div style={{
      zIndex: "-1",
      backgroundColor: "#eee",
      width: "1100px",
      height: "100%",
     
     

    }}>


          { editing ? editView() : profileView() }
     
      <Button style={{marginLeft: "26em" }}color= 'black' onClick={() => setEditing(!editing)}>
        { editing ? 'Cancel' : 'Edit Profile'}
      </Button>
      <Grid divided='vertically' style={{
        paddingTop: "40px"
      }}>
        <Grid.Row>

          <Grid.Column width={8}>
        <Fade right>
          <br/>
       <div><h1 style={{color: "#c75c7b", fontSize: "42px", paddingLeft: "1em"}}>Your Games</h1>{games && renderGames()}</div>
       <Divider/>
        </Fade>
        </Grid.Column>

      <Grid.Column width={8}>
      <Fade left>
      <br/>


      <div><h1 style={{color: "#c75c7b", fontSize: "42px"}}>Your Reviews</h1>{reviews && renderReviews()}</div>
      
      </Fade>
      </Grid.Column>
      </Grid.Row>
      </Grid>
  </div>
    </>
  )
}

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}



const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth =>
      <Profile { ...props } { ...auth } />
    }
  </AuthConsumer>
)

export default ConnectedProfile;
