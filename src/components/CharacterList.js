import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';



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

const characterListStyles = {
  display: 'flex',
  flexFlow: 'row wrap'
}



  return (
    <section style={characterListStyles} className="character-list">
      {apiData.map(character => <CharacterCard img={character.image} name={character.name} status={character.status} species={character.species} />)}

    </section>
  );
}
