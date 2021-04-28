import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Grid, Image, Button, Header, Segment, Divider, Card } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import GameForm from '../games/GameForm'
import axios from 'axios';
import {Container} from '../shared/sharedComponets'
import Fade from 'react-reveal/Fade'

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

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
      let res = await axios.get(`api/users/${user.id}/games`);
      setGames(res.data);
      console.log("games", res.data);
    } catch (err) {
      console.log(err)
    }
  }

  const getReviews = async() => {
    try {
      let res = await axios.get(`/api/games/1/reviews`)
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
          <Segment>
          <a href={`/games/${game.id}`} style={{color: '#fc8787'}}>
            <h1 align='center'>{game.gamename}</h1></a>
          <Grid divided='vertically' style={{color: '#fc8787'}}>
      <Grid.Row columns={2}>
       <Grid.Column>
       <Image src={game.image} size= 'tiny' ></Image>
      </Grid.Column>
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
    </Segment>
        </div>
      )
    }))
  }

  const renderReviews = () => {
    return (reviews.map(review => {
      return(
        <div>
          <Segment>
          <h1>{review.title}</h1>
          <p>{review.rating}</p>
          <body>{review.body}</body>
          </Segment>
        </div>
      )
    }))
  }

  const profileView = () => {
    return(
      <>
      <br/>
      <br/>
      <br/>
      <br/>
      <Container>
        <Card >
        <Grid.Column width={4}>
          <Image src={user.image || defaultImage} />
        </Grid.Column>
        <Grid.Column width={4} style={{color: '#fc8787'}}>
          <Header style={{color: '#fc8787'}}>{user.nickname}</Header>
          <Header style={{color: '#fc8787'}}>{user.name}</Header>
          <Header style={{color: '#fc8787'}}>{user.email}</Header>
        </Grid.Column>
        </Card>
      </Container>
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
      <Fade left>
      <Button color= 'black' onClick={() => setEditing(!editing)}>
        { editing ? 'Cancel' : 'Edit Profile'}
      </Button>
      </Fade>
      <Grid divided='vertically' style={{color: '#fc8787'}}>
      <Grid.Row columns={2}>
       <Grid.Column>
        <Fade right>

       <h2>{games && renderGames()}</h2>
        </Fade>
      </Grid.Column>
      <Fade left>
      <Grid.Column>
      <h3>{reviews && renderReviews()}</h3>
      </Grid.Column>
      </Fade>
    </Grid.Row>
      
    </Grid>
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
