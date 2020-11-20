import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import axios from "axios"
import './App.css';

import {CountriesList} from './components/countriesList'
import Header from './components/header'
import SearchBar from './components/searchbar'

function App() {
  const [isDarkmode, setIsDarkmode] = useState(false)
  const [countriesData, setCountriesData] = useState([] as any)



  console.log("countriesData", countriesData)
  return (
    <div className="App">
      <Header isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode}/>
      <SearchBar setCountriesData={setCountriesData} countriesData={countriesData}/>
      <Route exact path="/" render={(props) => <CountriesList {...props} countriesData={countriesData}/>} />
    </div>
  );
}

export default App;
