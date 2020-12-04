import React, { Dispatch, SetStateAction } from 'react'
import "./header.css"

type Props = {
  isDarkmode: boolean
  setIsDarkmode: Dispatch<SetStateAction<boolean>>
}

function toggleTheme() {
  const themeToggle = document.getElementById('theme-toggle');

  if (themeToggle) {
      let countryCards = document.getElementsByClassName("countryCard");
      for (const card of Array.from(countryCards)) {
        card.classList.toggle("dark")
      }
      document.getElementById("header")?.classList.toggle('dark')
      document.getElementById("select__select")?.classList.toggle('dark')
      document.getElementById("searchbar__input")?.classList.toggle('dark')

      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  }
}

const Header = (props:Props) => {
  return (
    <div className="header" id="header">
      <h1>Where in the world?</h1>
      <button id="theme-toggle" onClick={() => {toggleTheme()}}>Dark Mode</button>
    </div>
  )
};
export default Header;