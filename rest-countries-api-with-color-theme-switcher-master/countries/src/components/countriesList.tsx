import React from 'react'
import CountryCard from './countryCard'

export type Country = {
  name: string,
  region: string,
  population: number,
  capital: string
}

type Props = {
  filteredCountries: Array<Country>
}

export const CountriesList = (props:Props) => {

  function displayCountries(countries: Array<Country>) {
    if (countries) {
      return countries.map(country => {
        return <CountryCard key={country.name} country = {country}/>
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