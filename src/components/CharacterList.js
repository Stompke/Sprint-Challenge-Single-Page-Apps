import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';
import { Button } from 'reactstrap';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response)
      setApiData(response.data.results);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>

      {apiData.map(character => {
        return (
          <div>
            <h1>{character.name}</h1>
              <Button>React Button</Button>

          </div>

          )
      })}

    </section>
  );
}
