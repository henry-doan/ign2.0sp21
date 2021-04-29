import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Grid, Image, Button, Header, Segment, Divider, Card } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import GameForm from '../games/GameForm'
import axios from 'axios';
import {Container} from '../shared/sharedComponets'
import Fade from 'react-reveal/Fade'
import imageSrc2 from '../shared/images/Jayden.jpg'

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

  const getReviews = async () => {
    try {
      let res = await axios.get(`api/reviews/user/${user.id}`);
      setReviews(res.data);
      console.log("reviews", res.data);
    } catch (err) {
      console.log(err)
    }
  }


  const renderGames = () => {
    return (games.map(game => {
      return (
        <div>
          <a href={`/games/${game.id}`} style={{color: '#fc8787'}}>
            <h1 align='center'>{game.gamename}</h1></a>
          <Grid divided='vertically' style={{color: '#fc8787'}}>
      <Grid.Row columns={2}>
       <Image src={game.image} size= 'tiny' ></Image>
       <Grid.Column>
      <p>{game.genre}<br/>
      <br/>
        {game.esrb}
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
            <h1 align='center'>{review.title}</h1></a>
          <Grid divided='vertically' style={{color: '#fc8787'}}>
      <Grid.Row columns={2}>
       <Grid.Column>
       <Image src={review.image} size= 'small' ></Image>
      </Grid.Column>
      <Grid.Column>
      <p>Rating:{review.rating}
      <br/>
      Visuals:{review.visual}
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


          <Header style={{color: '#fc8787', position: 'absolute', left: '80%'}}>{user.nickname}</Header>
          <Segment circular style={{position: 'absolute', left: '50%'}}>
          <Image  size='mini' src={user.image || defaultImage} />
          </Segment>
          <Header  style={{color: '#fc8787', position: 'absolute', left: '60%'}}>{user.name}</Header>
          <Header style={{color: '#fc8787', position: 'absolute', left: '30%'}}>{user.email}</Header>
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


          { editing ? editView() : profileView() }
     
      <Button style={{position: 'absolute', left: '50%', top: '50%' }}color= 'black' onClick={() => setEditing(!editing)}>
        { editing ? 'Cancel' : 'Edit Profile'}
      </Button>

        <Fade right>
          <br/>
          <Segment style={{color: '#fc8787', position: 'absolute', left: '5%'}}>
       <h3>Your Games{games && renderGames()}</h3>
       </Segment>
        </Fade>

      <Fade left>
      <br/>
      <Segment style={{color: '#fc8787', position: 'absolute', left: '70%',}}>

      <h3>Your Reviews{reviews && renderReviews()}</h3>
      </Segment>
      
      </Fade>
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
