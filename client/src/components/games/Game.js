import { Card } from 'semantic-ui-react';
import Games from  './Games'

const Game = ({games}) => (
  
    <Card.Group centered>
      {games.map (h =>
        <Card>
          <Games
              key={h.id}
          
            {...h}
              />
        </Card>
        )}
    </Card.Group>
  )
  
  export default Game