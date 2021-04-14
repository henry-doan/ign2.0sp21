import GameForm from './GameForm';
import Games from  './Games';

import { Card, List } from 'semantic-ui-react';

const Game = ({ games }) => (
    <List divided relaxed>
      { games.map( tweet =>
    <List.Item key={games.id}>
     <List.Content>
        <List.Content>{games.description}</List.Content>
        <List.Description>
        </List.Description>
      </List.Content>
    </List.Item > 

)
}
</List>
)
  
  export default Game;