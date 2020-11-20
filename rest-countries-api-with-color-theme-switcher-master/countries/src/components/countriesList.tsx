import React from 'react'
import CountryCard from './countryCard'

export type Country = {
  name: string
}

type Props = {
  countriesData: Array<Country>
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

  console.log("props.countriesData", props.countriesData)

  return (
    <div>{displayCountries(props.countriesData)}</div>
  )
};