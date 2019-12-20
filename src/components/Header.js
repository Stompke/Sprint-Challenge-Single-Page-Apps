import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {

  const headerStyles = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    marginBottom: '50px'
  }

  const titleStyle = {
    width: '100%'
  }




  return (
    <header style={headerStyles} className="ui centered">
      <h1 style={titleStyle} className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to='/' >Home</Link>
      <Link to='/character-list'>Characters</Link>
      <Link to='/location-list'>Locations</Link>

    </header>
  );
}
