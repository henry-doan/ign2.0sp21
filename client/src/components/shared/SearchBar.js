import { useState, useEffect } from 'react'
import { Grid, Input, Header, Button, SearchCategory} from 'semantic-ui-react'
import axios from 'axios';
import Games from '../games/Games'
import {HomeHead, MainHead, Griddy} from './sharedComponets'

const SearchBar = () => {
    const [games, setGames] = useState([])
    const [visible, setVisible] = useState([])
    const [search, setSearch] = useState('')
    const [game, setGame] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
        updateVisible()
    }

    const updateVisible = () => {
        if (search.length === 0) {
            setVisible(games)
        }
        else if (search.length > 3) {
            axios.get('users/:user_id/games/:game_id/search')
            .then( res => setVisible(res.data))
            .catch( err => console.log(err))
        }
    }

    return (
        <Griddy>
            <Grid.Row>
                <Grid.Column mobile={16} tablet={16} computer={4}>
                    <MainHead>Search Games</MainHead>
                    <Input
                    value={search}
                    onChange={handleChange}
                    icon={{ name: 'search', circular: true, link: true, color: 'pink'}}
                    placeholder="search..."
                    />
                    
                </Grid.Column>
            </Grid.Row>
        </Griddy>
    );
} 
export default SearchBar;