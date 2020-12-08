import React, { useState } from 'react';
import { Route } from "react-router-dom";
import './App.css';

import {CountriesList} from './components/countriesList'
import Header from './components/header'
import CountryPage from './components/countryPage';

function App() {
  const [isDarkmode, setIsDarkmode] = useState(false)

  return (
    <div className={isDarkmode ? "App dark" : "App"}>
      <Header isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode}/>
      <Route exact path="/" render={(props) => <CountriesList {...props} isDarkmode={isDarkmode}/>}/>
      <Route
          path="/countries/:alpha3Code"
          render={(props) => <CountryPage {...props}/>}
        />
    </div>
  );
}

export default App;
