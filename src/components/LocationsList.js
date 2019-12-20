import React, { useEffect, useState } from "react";
import axios from 'axios';

import LocationCard from './LocationCard';
import SearchForm from './SearchForm';



export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [apiData, setApiData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = apiData.filter(location => 
      location.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, apiData]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/location/')
    .then(response => {
      console.log(response)
      setApiData(response.data.results);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);



const locationListStyles = {
  display: 'flex',
  flexFlow: 'row wrap'
}





  return (
    <section style={locationListStyles} className="location-list">
      <SearchForm   onChange={handleChange} />
    {/* <input style={characterSearchStyles} onChange={handleChange} placeholder='search character' type='text'></input> */}
      {searchResults.map(location => <LocationCard key={location.id} residents={location.residents}  name={location.name} dimension={location.dimension} type={location.type} />)}

    </section>
  );
}
