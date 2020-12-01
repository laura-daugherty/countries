import React, { useState } from 'react'
import CountryCard from './countryCard'
import { Link } from "react-router-dom";
import SearchBar from "./searchbar"

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


export const CountriesList = () => {
  const [filteredCountries, setFilteredCountries] = useState([] as any)

  function displayCountries(countries: Array<Country>) {
    if (countries) {
      return countries.map(country => {
        return (
          <Link to={`/countries/${country.alpha3Code}`}>
            <CountryCard key={country.alpha3Code} country = {country}/>
          </Link>
        )
      })
    } else {
      console.log("no countries")
    }
  }

  console.log("props.countriesData", filteredCountries)

  return (
    <div>
      <SearchBar setFilteredCountries={setFilteredCountries} filteredCountries={filteredCountries}/>
      <div>{displayCountries(filteredCountries)}</div>
    </div>

  )
};