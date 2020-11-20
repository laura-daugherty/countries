import React from 'react'
import {Country} from './countriesList'


type Props = {
  country: Country
}

const CountryCard = (props:Props) => {
  return (
    <p>{props.country.name}</p>
  )
};
export default CountryCard;