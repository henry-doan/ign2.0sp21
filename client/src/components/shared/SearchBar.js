import { useState, useEffect } from 'react'
import { Grid, Input, Header, Button, SearchCategory} from 'semantic-ui-react'
import axios from 'axios';
import Games from '../games/Games'

const SearchBar = () => {
    const [games, setGames] = useState([])
    const [visible, setVisible] = useState([])
    const [search, setSearch] = useState('')
    const [game, setGame] = useState('')

    useEffect( () => {
        axios.get('/api/games')
            .then( res => {
                setGames(res.data)
            })
            .catch( err => console.log(err))
    })
    const handleChange = (e) => {
        setSearch(e.target.value)
        updateVisible()
    }

    const updateVisible = () => {
        if (search.length === 0) {
            setVisible(games)
        }
        else if (search.length > 3) {
            axios.get('/api/search?term=${search}')
            .then( res => setVisible(res.data))
            .catch( err => console.log(err))
        }
    }

    const updateGame = () => {
        setGame(e.target.value)
    }

    const postGame = () => {
        if (game) {
            axios.post('/api/game', { game })
            .then( res => {
                setGame('')
                setGames([...visible, res.data])
            })
            .catch( err => console.log(err))
        }
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column mobile={16} tablet={16} computer={4}>
                    
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
} 