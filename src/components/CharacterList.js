import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [apiData, setApiData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = apiData.filter(character => 
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, apiData]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

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
      <SearchForm   onChange={handleChange} />
    {/* <input style={characterSearchStyles} onChange={handleChange} placeholder='search character' type='text'></input> */}
      {searchResults.map(character => <CharacterCard key={character.id} img={character.image} name={character.name} status={character.status} species={character.species} />)}

    </section>
  );
}
