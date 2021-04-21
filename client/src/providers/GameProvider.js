import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext  from './AuthProvider';
import { useHistory } from 'react-router';

export const GameContext = React.createContext();

export const GameConsumer = GameContext.Consumer;

const GameProvider = ({ children }) => {
  const [games, setGames] = useState([])
  const auth = useContext (AuthContext)
  let history = useHistory()

  useEffect( () => {
    axios.get('/api/games')
      .then( res => setGames(res.data))
      .catch( err => console.log(err))
  }, [])

  const addGame = (game, match) => {
    axios.post(`/api/games/`, { game })
      .then( res => {
        setGames([...games, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateGame = (id, game, match) => {
    axios.put(`/api/games/${match.params.id}`, { game })
      .then(res => {
        const updatedGames = games.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setGames(updatedGames)
      })
  }

  const deleteGame = (id, history) => {
    axios.delete(`/api/games/${id}`)
      .then( res => {
        setGames(games.filter(t => t.id !== id))
        history.push('/')
      })
  }

  return(
    <GameContext.Provider value={{
      games,
      addGame: addGame,
      updateGame: updateGame,
      deleteGame: deleteGame,
    }}>
      { children }
    </GameContext.Provider>
  )

}
export default GameProvider;