import React, { useContext, useEffect, useState } from "react";
import QueryProvider, {QueryContext} from './QueryProvider'
import axios from "axios";
import { Griddy } from "./sharedComponets";
import styled from 'styled-components'
import {Grid, Segment, Image, Divider} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'



const SearchResults = () => {
  const { query, setQuery } = useContext(QueryContext);
  const [results, setResults] = useState([]);

  useEffect(() => {
    getResults(query);
  }, [])

  const getResults = (query) => {
    axios.get(`/api/search/?query=${query}`)
      .then((res) => {
        setResults(res.data);
        console.log("Results", res.data);
      })
      .catch((err) => {
        console.log("Result Eror", err);
      })
  }
  const renderResults = () => {
      if (results) {
          return results?.map((r) => {
              return (
                  <div>
                    <Fade left>
                    <Segment>
                    <a href={`/games/${r.id}`} style={{color: '#fc8787'}}><h1>{r.gamename}</h1></a>
                    <Grid>
                     <Grid.Column width={4} >
                        <Image size='small' centered src={r.image} />
                         </Grid.Column>
                        <Grid.Column width={9}>
                        <h3>{r.description}</h3>
                    </Grid.Column>
                <Grid.Column width={3}>
            </Grid.Column>
        </Grid>
    </Segment>
  <Divider style={{backgroundColor: '#fc8787'}} />
  </Fade>

                
                  </div>
              );
          });
      } else {
          return <h3 style={{ marginTop: 40 }}> No Results</h3>
      }
  };

  return(
    <div>
      <h1>Search Results</h1>
      {renderResults()}
    </div>
    
  )
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default SearchResults;