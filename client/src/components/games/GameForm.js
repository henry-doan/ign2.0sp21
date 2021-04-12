import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { GameConsumer } from '../../providers/GameProvider';



const GameForm = ({ addGame }) => {
  const [game, setGame] = useState({ gamename: "", description: "", studio: "", genre: "", releasedate: "", esrb: "",  coop: (false), multi: (false), single: (false) })

  
  const handleSubmit = (e) => {
    e.preventDefault();
    addGame(game)
    setGame({ gamename: "", description: "", studio: "", genre: "", releasedate: "", esrb: "", coop: (false), multi: (false), single: (false) })
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label='Gamename'
        placeholder="Name of Game"
        name='gamename'
        value={game.gamename}
        onChange={(e, {value}) => setGame({...game, gamename: value})}
      />
      <Form.Input
        label='Description'
        placeholder="Description of Game"
        name='description'
        value={game.description}
        onChange={(e, {value}) => setGame({...game, description: value})}
      />
      <Form.Input
        label='Studio'
        placeholder="Name of Studio"
        name='studio'
        value={game.studio}
        onChange={(e, {value}) => setGame({...game, studio: value})}
      />
      <Form.Select
        label='Genre'
        name='Genre'
        value={game.genre}
        onChange={(e, {value}) => setGame({...game, genre: value})}
        options={genreOpts}
      />
      <Form.Input
        label='ESRB'
        placeholder="ESRB"
        name='esrb'
        value={game.esrb}
        onChange={(e, {value}) => setGame({...game, esrb: value})}
      />
      <Form.Input
        label='releasedate'
        placeholder="released ate"
        name='releasedate'
        value={game.releasedate}
        onChange={(e, {value}) => setGame({...game, releasedate: value})}
      />
      <Form.Select
        label='coop'
        placeholder="Co-op Play"
        name='coop'
        value={game.coop}
        onChange={(e, {value}) => setGame({...game, coop: value})}
        options={true,false}
      /> <Form.Select
      label='multi'
      placeholder="Multiplayer Play"
      name='multi'
      value={game.multi}
      onChange={(e, {value}) => setGame({...game, multi: value})}
      options={(true,false)}
    />
      <Form.Select
        label='single'
        placeholder="Single Player"
        name='single'
        value={game.single}
        onChange={(e, {value}) => setGame({...game, single: value})}
        options={true,false}
      />
      <Form.Button>Save</Form.Button>
    </Form>
  )
}

const ConnectedGameForm = (props) => (
  <GameConsumer>
    { value => (
      <GameForm {...props} {...value} />
    )}
  </GameConsumer>
)
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

export default ConnectedGameForm;