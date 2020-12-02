import { useEffect, useState } from 'react'
import {Country} from './countriesList'
import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


type Props = {
  match: { params: { 
    alpha3Code: any
  }; }
  history: { goBack: () => void; }
}

const CountryPage = (props: Props) => {
  const countryNull: Country | null = null;

  const [country, setCountry] = useState(countryNull)

  useEffect(() => {
    console.log("props", props)
    const alpha3Code = props.match.params.alpha3Code;
    Axios
      .get(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
      .then(response => {
        console.log("response", response)
        setCountry(response.data)
        console.log("country", country)
      })
      .catch(error => {
        console.log(error)
      })
  }, [props.match.params.alpha3Code])
 
 function isCountry(country: Country | null) {
  if (country && country.flag && country.name && country.population && country.region && country.capital) {
    return (
      <div>
        <button onClick={() => {props.history.goBack()}}>Back</button>
        <div className="">
          <img src={country.flag}/>
          <div className="">
            <h2> {country.name}</h2>
            <p>Native Name: {country.nativeName}</p>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Sub Region: {country.subregion}</p>
            <p>Capital: {country.capital}</p>
            <p>Top Level Domain: {country.topLevelDomain}</p>
            <p>Currencies: {country.currencies.map(currency => {
              return (country.currencies.length > 1 ? <div>{currency.name}, </div> : <div> {currency.name}</div>)
              })}</p>
            <p>Languages: {country.languages.map(language => {
              return (country.languages.length > 1 ? <div>{language.name},</div> : <div>{language.name}</div>)
            })}</p>
            <p>Border Countries: {country.borders.map(border => {
              return (
                <Link to={`/countries/${border}`}>{border}</Link>
              )
            })}</p>
          </div>    
        </div>
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
