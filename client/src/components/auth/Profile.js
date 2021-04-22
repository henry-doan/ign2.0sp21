import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Grid, Image, Button, Header, Container } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import GameForm from '../games/GameForm'
// import Modal from 'react-bootstrap/Modal'



const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

const Profile = ({ user, updateUser }) => {
  const [editing, setEditing] = useState(false)
  const [formVals, setFormVals] = useState({ name: '', email: '', file: '', nickname: '', image: '' })

  useEffect ( () => {
    const { name, email, image, nickname } = user
    setFormVals({ name, email, image, nickname })
  }, [])

  const onDrop = (files) => {
    setFormVals({ ...formVals, file: files[0]})
  }

  const profileView = () => {
    return(
      <>
        <Grid.Column width={4}>
          <Image src={user.image || defaultImage} />
        </Grid.Column>
        <Grid.Column width={12}>
          <Header>{user.nickname}</Header>
          <Header>{user.name}</Header>
          <Header>{user.email}</Header>
          <GameForm />
        </Grid.Column>
      </>
    )
  }
  // function Example() {
  //   const [show, setShow] = useState(false);
  
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  
  //   return (
  //     <>
  //       <Button variant="primary" onClick={handleShow}>
  //         Launch demo modal
  //       </Button>
  
  //       <Modal show={show} onHide={handleClose} animation={false}>
  //         <Modal.Header closeButton>
  //           <Modal.Title>Modal heading</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
  //         <Modal.Footer>
  //           <Button variant="secondary" onClick={handleClose}>
  //             Close
  //           </Button>
  //           <Button variant="primary" onClick={handleClose}>
  //             Save Changes
  //           </Button>
  //         </Modal.Footer>
  //       </Modal>
  //     </>
  //   );
  // }

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
          <Button>Update</Button>
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
    <Container>
      <Grid>
        <Grid.Row>
          { editing ? editView() : profileView() }
          <Grid.Column>
            <Button onClick={() => setEditing(!editing)}>
              { editing ? 'Cancel' : 'Edit'}
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
   
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