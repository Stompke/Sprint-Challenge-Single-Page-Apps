import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import axios from "axios";
import { Route } from 'react-router-dom';

import WelcomePage from './components/WelcomePage'; 
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';


export default function App() {

  useEffect(() => {

  },[]);



  return (
    <main>
      <Header />
      
      <Route exact path="/" component={WelcomePage} />
      <Route path='/character-list' component={CharacterList} />
      <Route path='/location-list' component={LocationsList} />
    </main>
  );
}
