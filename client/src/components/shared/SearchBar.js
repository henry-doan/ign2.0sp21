import { useState, useEffect, useContext } from 'react'
import { Grid, Input, Header, Button, SearchCategory, Icon} from 'semantic-ui-react'
import axios from 'axios';
import Games from '../games/Games'
import {HomeHead, MainHead, ContainerSec, StyledInput, StyledIcon} from './sharedComponets'
import { useHistory } from "react-router-dom"
import { QueryContext } from "./QueryProvider"


const SearchBar = () => {
    const [games, setGames] = useState([])
    const [visible, setVisible] = useState([])
    const { query, setQuery } = useContext(QueryContext);
    const [game, setGame] = useState('')

    let history = useHistory();

    const handleChange = (e) => {
        setQuery(e.target.value)
        // updateVisible()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/results`);
    }

    // const updateVisible = () => {
    //     if (search.length === 0) {
    //         setVisible(games)
    //     }
    //     else if (search.length > 3) {
    //         axios.get('users/:user_id/games/:game_id/search')
    //         .then( res => setVisible(res.data))
    //         .catch( err => console.log(err))
    //     }
    // }

    return (
        <>
            <ContainerSec>

                    <MainHead></MainHead>
                    <form onSubmit={handleSubmit}>
                    <StyledInput
                    size='huge'
                    value={query}
                    onChange={(e) => handleChange(e)}
                    icon={<StyledIcon name='search' circular link onClick={handleSubmit}/>}
                    placeholder={"search..."}
                    />
                    </form>
            </ContainerSec>
        </>
    );
} 
export default SearchBar;