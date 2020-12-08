import React, { useState, Dispatch, SetStateAction, FormEvent, useEffect } from 'react'
import { Country } from './countriesList';
import axios from 'axios'
import "./searchbar.css"

type Props = {
  isDarkmode: boolean,
  filteredCountries: Array<Country>
  setFilteredCountries: Dispatch<any>
}

const Searchbar = (props:Props) => {

  const [search, setSearch] = useState({
    country: "",
    region: "Filter by Region"
  })
  const [allCountries, setAllCountries] = useState([] as any)

  const {filteredCountries, setFilteredCountries} = props

  useEffect(() => {
    axios
      .get ('https://restcountries.eu/rest/v2/all')
      .then(
        res => {
          setFilteredCountries(res.data)
          setAllCountries(res.data)
        }
      )
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setFilteredCountries(allCountries.filter((country: Country) => {
      if (search.region !== "Filter by Region") {
        if (!country.region.includes(search.region)) {
          return false
        }
      } 

      if (search.country !== "") {
        if (!country.name.includes(search.country)) {
          return false
        }
      }

      return true
    }))
  }, [search])

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  };

  const regionHandler = (event:React.ChangeEvent<HTMLSelectElement>) => {
   setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  }



  return (
    <div>
      <div className="searchbar">
        <input 
          placeholder="Search for a country..."
          className={props.isDarkmode ? "searchbar__input dark" : "searchbar__input"}
          type="text"
          name="country"
          onChange={changeHandler}>
        </input>
        <div className="select">
          <select className={props.isDarkmode ? "select__select dark" : "select__select"}  name="region" onChange={regionHandler}>
            <option value="Filter by Region">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  )
};
export default Searchbar;