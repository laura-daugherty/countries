import React from 'react'
import {Country} from './countriesList'
import './countryCard.css'

type Props = {
  country: Country
}

const CountryCard = (props:Props) => {
  return (
    <div className="countryCard" id="countryCard">
      <img className="countryCard__img" src={props.country.flag}/>
      <div className="countryCard__div">
        <h2 className="countryCard__h2"> {props.country.name}</h2>
        <div className="info">
          <div className="info__div">Population:</div> <div className=" info__div info__div--props">{props.country.population}</div> 
        </div>
        <div className="info">
          <div className="info__div">Region:</div> <div className="info__div--props"> {props.country.region}</div>
        </div>
        <div className="info">
          <div className="info__div">Capital:</div><div className="info__div--props"> {props.country.capital}</div>
        </div>
      </div>
    </div>


  )
};
export default CountryCard;