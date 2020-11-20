import React, { useState, Dispatch, SetStateAction, FormEvent, useEffect } from 'react'
import { Country } from './countriesList';
import axios from 'axios'


type Props = {
  countriesData: Array<Country>
  setCountriesData: Dispatch<any>
}

const Searchbar = (props:Props) => {

  const [search, setSearch] = useState({
    country: ""
  })

  const setCountriesData = props.setCountriesData

  useEffect(() => {
    axios
      .get ('https://restcountries.eu/rest/v2/all')
      .then(
        res => {
          console.log(res.data)
          setCountriesData(res.data)
        }
      )
      .catch(err => console.log(err))
  }, [])


  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value
    });
    const filterCountries: Country[] = []
    props.countriesData.map(country => {
      if (country.name.toLowerCase().includes(search.country.toLowerCase())) {
        filterCountries.push(country)
        setCountriesData(filterCountries)
      } else {
        console.log("not a match", country)
      }
    })
  };

  return (
    <div>
      <input 
        placeholder="Search for a country..."
        className=""
        type="text"
        name="country"
        onChange={changeHandler}>
      </input>
    </div>

  )
};
export default Searchbar;