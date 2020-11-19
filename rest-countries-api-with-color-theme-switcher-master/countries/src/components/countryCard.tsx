import React from 'react'
import {Country} from './countriesList'


type Props = {
  country: Country
}

const CountryCard = (props:Props) => {
  return (
    <p>{props.country.name} is the name of this country</p>
  )
};
export default CountryCard;