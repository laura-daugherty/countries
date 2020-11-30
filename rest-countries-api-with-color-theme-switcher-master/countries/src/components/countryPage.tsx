import { useEffect, useState } from 'react'
import {Country} from './countriesList'
import React from 'react';
import Axios from 'axios';

type Props = {
  match: { params: { name: any; }; }
}

const CountryPage = (props: Props) => {
  const countryNull: Country | null = null;
  const [country, setCountry] = useState(countryNull)

  useEffect(() => {
    console.log("props.match", props.match)
    const name = props.match.params.name;
    Axios
      .get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(response => {
        console.log("response", response)
        setCountry(response.data[0])
        console.log("country", country)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  
 function isCountry(country: Country | null) {
  if (country && country.flag && country.name && country.population && country.region && country.capital) {
    return (
      <div className="countryCard">
        <img src={country.flag}/>
        <div className="countryCardInfo">
          <h2> {country.name}</h2>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>    
      </div>
    )
  } else {
    return (
      <div>
        there is no country!
      </div>
    )
  }
 }
  
  return (
    <div>
      {isCountry(country)}
    </div>
  )

};
export default CountryPage;
