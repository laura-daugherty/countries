import React, { useState } from 'react'
import CountryCard from './countryCard'
import { Link } from "react-router-dom";
import SearchBar from "./searchbar"
import './countriesList.css'

type Props = {
  isDarkmode: boolean
}

type Currency = {
  code: string,
  name: string,
  symbol: string
}

type Language = {
  name: string
}

export type Country = {
  name: string,
  region: string,
  population: number,
  capital: string,
  flag: string,
  borders: string[],
  nativeName: string,
  subregion: string,
  topLevelDomain: string[],
  currencies: Currency[],
  languages: Language[],
  alpha3Code: string
}


export const CountriesList = (props: Props) => {
  const [filteredCountries, setFilteredCountries] = useState([] as any)

  function displayCountries(countries: Array<Country>) {
    if (countries) {
      return countries.map(country => {
        return (
          <Link className="linkToCountry"to={`/countries/${country.alpha3Code}`}>
            <CountryCard key={country.alpha3Code} country = {country} isDarkmode = {props.isDarkmode}/>
          </Link>
        )
      })
    } else {
      console.log("no countries")
    }
  }


  return (
    <div className="countriesList">
      <SearchBar isDarkmode={props.isDarkmode} setFilteredCountries={setFilteredCountries} filteredCountries={filteredCountries}/>
      <div className="countriesList__div">{displayCountries(filteredCountries)}</div>
    </div>

  )
};