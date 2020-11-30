import React from 'react'
import { Url } from 'url';
import CountryPage from './countryPage';
import CountryCard from './countryCard'
import { Link } from "react-router-dom";


export type Country = {
  name: string,
  region: string,
  population: number,
  capital: string,
  flag: string
}

type Props = {
  filteredCountries: Array<Country>
}

export const CountriesList = (props:Props) => {

  function displayCountries(countries: Array<Country>) {
    if (countries) {
      return countries.map(country => {
        return (
          <Link to={`/countries/${country.name}`}>
            <CountryCard key={country.name} country = {country}/>
          </Link>
        )
      })
    } else {
      console.log("no countries")
    }
  }

  console.log("props.countriesData", props.filteredCountries)

  return (
    <div>{displayCountries(props.filteredCountries)}</div>
  )
};