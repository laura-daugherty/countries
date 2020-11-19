import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import axios from "axios"
import './App.css';

import {CountriesList} from './components/countriesList'
import Header from './components/header'

function App() {
  const [isDarkmode, setIsDarkmode] = useState(false)
  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    axios
      .get ('https://restcountries.eu/rest/v2/all')
      .then(
        res => {
          console.log(res.data)
          setCountriesData(res.data)
        }
      )
      .catch(err => console.log(err))
  }, [])

  console.log("countriesData", countriesData)
  return (
    <div className="App">
      <Header isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode}/>
      <Route exact path="/" render={(props) => <CountriesList {...props} countriesData={countriesData}/>} />
    </div>
  );
}

export default App;
