import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import axios from "axios"
import './App.css';

import {CountriesList, Country} from './components/countriesList'
import Header from './components/header'
import CountryPage from './components/countryPage';

function App() {
  const [isDarkmode, setIsDarkmode] = useState(false)

  return (
    <div className="App">
      <Header isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode}/>
      <Route exact path="/" render={() => <CountriesList/>}/>
      <Route
          path="/countries/:alpha3Code"
          render={(props) => <CountryPage {...props}/>}
        />
    </div>
  );
}

export default App;
