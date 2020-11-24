import React, { useState, Dispatch, SetStateAction, FormEvent, useEffect } from 'react'
import { Country } from './countriesList';
import axios from 'axios'


type Props = {
  countriesData: Array<Country>
  setCountriesData: Dispatch<any>
}

const Searchbar = (props:Props) => {

  const [search, setSearch] = useState({
    country: "",
    region: ""
  })
  const [allCountries, setAllCountries] = useState([] as any)

  const setCountriesData = props.setCountriesData
  const countriesData = props.countriesData

  useEffect(() => {
    axios
      .get ('https://restcountries.eu/rest/v2/all')
      .then(
        res => {
          console.log(res.data)
          setCountriesData(res.data)
          setAllCountries(res.data)
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
    allCountries.map((country:Country) => {
      if (country.name.toLowerCase().includes(search.country.toLowerCase())) {
        filterCountries.push(country)
        setCountriesData(filterCountries)
      } else {
        console.log("not a match", country)
      }
    })
  };

  const regionHandler = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value
    });
    const filterCountries: Country[] = []
    setCountriesData(allCountries)
    allCountries.map((country:Country) => {
      if (country.region.includes(search.region)) {
        filterCountries.push(country)
        setCountriesData(filterCountries)
      } else {
        console.log("")
      }
    })
  }

  return (
    <div>
      <input 
        placeholder="Search for a country..."
        className=""
        type="text"
        name="country"
        onChange={changeHandler}>
      </input>
      <select name="region" id="region" onChange={regionHandler}>
        <option value="Filter by Region">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>

  )
};
export default Searchbar;