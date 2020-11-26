import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import axios from "axios"
import './App.css';

import {CountriesList} from './components/countriesList'
import Header from './components/header'
import SearchBar from './components/searchbar'

function App() {
  const [isDarkmode, setIsDarkmode] = useState(false)
  const [filteredCountries, setFilteredCountries] = useState([] as any)



  console.log("countriesData", filteredCountries)
  return (
    <div className="App">
      <Header isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode}/>
      <SearchBar setFilteredCountries={setFilteredCountries} filteredCountries={filteredCountries}/>
      <Route exact path="/" render={(props) => <CountriesList {...props} filteredCountries={filteredCountries}/>} />
    </div>
  );
}

export default App;
