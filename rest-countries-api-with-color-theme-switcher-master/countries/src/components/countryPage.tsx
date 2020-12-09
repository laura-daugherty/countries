import { useEffect, useState } from 'react'
import {Country} from './countriesList'
import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import "./countrypage.css"
type Props = {
  match: { params: { 
    alpha3Code: any
  }; }
  history: { goBack: () => void; },
  isDarkmode: boolean,
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
      <div className="country_page">
        <button className={props.isDarkmode ? "country_page__button dark":"country_page__button"}onClick={() => {props.history.goBack()}}>
          <i className="country_page__icon fas fa-arrow-left"></i> 
          Back
        </button>
        <div className="country_page__container">
          <img className="country_page__img"src={country.flag} alt={country.name}/>
          <div className="country_page__div">
            <h2 className="country_page__h2"> {country.name}</h2>
            <div className="country_info">
              <div className="country_info__div1">
                <p className="country_info__p"><b>Native Name:</b> {country.nativeName}</p>
                <p className="country_info__p"><b>Population:</b> {country.population}</p>
                <p className="country_info__p"> <b>Region:</b> {country.region}</p>
                <p className="country_info__p"><b>Sub Region:</b> {country.subregion}</p>
                <p className="country_info__p"><b>Capital:</b> {country.capital}</p>
              </div>
              <div className="country_info__div2">
                <p className="country_info__p"><b>Top Level Domain:</b> {country.topLevelDomain}</p>
                <p className="country_info__p"><b>Currencies:</b> {country.currencies.map(currency => {
                  return (country.currencies.length > 1 ? <div>{currency.name}, </div> : <div> {currency.name}</div>)
                  })}</p>
                <p className="country_info__p"><b>Languages:</b> {country.languages.map(language => {
                  return (country.languages.length > 1 ? <div>{language.name},</div> : <div>{language.name}</div>)
                })}</p>
              </div>
            </div>
            <p className="country_info__p country_info__border"><b>Border Countries:</b> {country.borders.map(border => {
              return (
                <Link className={props.isDarkmode ? "country_info__Link dark" : "country_info__Link"} to={`/countries/${border}`}>{border}</Link>
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
