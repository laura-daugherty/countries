import React from 'react'
import {Country} from './countriesList'


type Props = {
  country: Country
}

const CountryCard = (props:Props) => {
  return (
    <div>
      <h2> {props.country.name}</h2>
      <p>Population: {props.country.population}</p>
      <p>Region: {props.country.region}</p>
      <p>Capital: {props.country.capital}</p>
    </div>


  )
};
export default CountryCard;