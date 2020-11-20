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
    console.log("search value", search);
  };

  const handleSubmit = (event: any) => {
    const filterCountries: Country[] = []
    props.countriesData.map(country => {
      console.log("country name", country.name)
      console.log("search country", search.country)
      if (country.name.toLowerCase().includes(search.country.toLowerCase())) {
        filterCountries.push(country)
      } else {
        console.log("not a match", country)
      }
    })
    setCountriesData(filterCountries)
    console.log(props.countriesData)
    console.log("filterCountries", filterCountries)
    // setCountriesData(filterCountries)
    }

  return (
    <div>
      <button onClick={(e) => handleSubmit(e)}>Search</button>
      {/* <form onSubmit={handleSubmit}> */}
      <label> Country Search </label>
        <input 
          className=""
          type="text"
          name="country"
          onChange={changeHandler}>
        </input>
      {/* </form> */}
    </div>

  )
};
export default Searchbar;