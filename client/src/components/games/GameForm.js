import { useState, useContext } from 'react';
import { Form, Segment } from 'semantic-ui-react';
import { AuthConsumer, AuthContext } from '../../providers/AuthProvider';
import { GameConsumer } from '../../providers/GameProvider';
import { HomeHead } from '../shared/sharedComponets';
import Dropzone from 'react-dropzone';
import styling from '../styledComponents/index.module.css'

const GameForm = ({ addGame }) => {
  const auth = useContext (AuthContext)
  const [game, setGame] = useState({ gamename: "", description: "", studio: "", genre: "", releasedate: (null), esrb: "",  coop: (null), multi: (null), single: (null), auth })
  

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addGame(game)
    setGame({ gamename: "", description: "", studio: "", genre: "", releasedate: (null), esrb: "", coop: (null), multi: (null), single:(null) })
  }
  const handleChangeCoop = (e) => {
    if (e.target.checked){ 
      setGame({...game, coop: (true)})
        } 
      }
  const handleChangeMulti = (e) => {
    if (e.target.checked){ 
       setGame({...game, multi: (true)})
        } 
      }
  const handleChangeSingle = (e) => {
    if (e.target.checked){ 
        setGame({...game, single: (true)})
          } 
        }
  return(
    <Segment className={styling.formShadow} style={{backgroundColor: '#fc8787'}}>
      <HomeHead>

    <Form onSubmit={handleSubmit} style={{backgroundColor: '#fc8787'}}>

    <Dropzone
            // onDrop={onDrop}
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

      <Form.Input
        
        label={'Name of Game'}
        placeholder="Name of Game"
        name='gamename'
        required
        value={game.gamename}
        onChange={(e, {value}) => setGame({...game, gamename: value})}
      />
      <Form.Input
        label='Description'
        placeholder="Description of Game"
        name='description'
        required
        value={game.description}
        onChange={(e, {value}) => setGame({...game, description: value})}
      />
      <Form.Input
        label='Studio'
        placeholder="Name of Studio"
        name='studio'
        required
        value={game.studio}
        onChange={(e, {value}) => setGame({...game, studio: value})}
      />
      <Form.Select
        label='Genre'
        name='Genre'
        required
        placeholder="Genre"
        value={game.genre}
        onChange={(e, {value}) => setGame({...game, genre: value})}
        options={genreOpts}
      />
      <Form.Select
        label='ESRB'
        placeholder="ESRB"
        name='esrb'
        value={game.esrb}
        onChange={(e, {value}) => setGame({...game, esrb: value})}
        options={esrbOpts}
      />
      <Form.Input
        label='image'
        name='image'
        value={game.image}
        onChange={(e, {value}) => setGame({...game, image: value})}
      />
     
      <Form.Field label='coop' control='input' type='checkbox' 
        label='Co-op Play'
        name='coop'
        value={game.coop}
        onChange={handleChangeCoop}
        />
      <Form.Field label='single' control='input' type='checkbox' 
        label='Single Player'
        placeholder="Single Player"
        name='single'
        value={game.single}
        onChange={handleChangeSingle}
        />
        <Form.Field label='multi' control='input' type='checkbox' 
        label='Multi Player Online'
        name='multi'
        value={game.multi}
        onChange={handleChangeMulti}
         />
      
      <Form.Button>Save</Form.Button>
    </Form>
      </HomeHead>
    </Segment>
  )
}

const ConnectedGameForm = (props) => (
  <GameConsumer>
    { value => (
      <GameForm {...props} {...value} />
    )}
  </GameConsumer>
)
const esrbOpts = [
  {key: "1", text: "Everyone", value:"everyone"},
  {key: "2", text: "Everyone 10+", value:"everyone10"},
  {key: "3", text: "Teen", value:"teen"},
  {key: "4", text: "Mature", value:"mature"},
  {key: "5", text: "Pending", value:"pending"},

]
const genreOpts = [
    {key: "1", text: "Action", value:"Action"},
    {key: "2", text: "Adventure", value:"Adventure"},
    {key: "3", text: "Fighting", value:"Fighting"},
    {key: "4", text: "Role-play", value:"Role-play"},
    {key: "5", text: "Simulation", value:"Simulation"},
    {key: "6", text: "Strategy", value:"Strategy"},
    {key: "7", text: "Sports", value:"Sports"},
    {key: "8", text: "MMO", value:"MMO"},
    {key: "9", text: "Puzzle/Board", value:"Puzzle"},
]
// handleChange = e => {
//   if (document.getElementByClassName("period").checked) {
//       // box is checked
//   } else {
//       // box is unchecked
//   }
// }

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

export default ConnectedGameForm;