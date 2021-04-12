import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const GameContext = React.createContext();

export const GameConsumer = GameContext.Consumer;

const GameProvider = ({ children }) => {
  const [games, setGames] = useState([])

  useEffect( () => {
    axios.get('/api/games')
      .then( res => setGames(res.data))
      .catch( err => console.log(err))
  }, [])

  const addGame = (game) => {
    axios.post('/api/games', { game })
      .then( res => {
        setGames([...games, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateGame = (id, game) => {
    axios.put(`/api/games/${id}`, { game })
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

  const deleteGame = (id) => {
    axios.delete(`/api/games/${id}`)
      .then( res => {
        setGames(games.filter(t => t.id !== id))
      })
  }

  return(
    <GameContext.Provider value={{
      games,
      addGame: addGame,
      updatedGame: updateGame,
      deleteGame: deleteGame,
    }}>
      { children }
    </GameContext.Provider>
  )

}
export default GameProvider;