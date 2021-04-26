import React, { useContext, useEffect, useState } from "react";
import QueryProvider, {QueryContext} from './QueryProvider'
import axios from "axios";
import { Griddy } from "./sharedComponets";
import styled from 'styled-components'
import Card from 'semantic-ui-react'
import Game from '../games/Game'



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
                    
                      <h1>{r.gamename}</h1>
                      <h2>{r.studio}</h2>
                      <h3>{r.genre}</h3>
                      <p>{r.description}</p>
                      <a href={`/games/${r.id}`}>View Game</a>
                
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