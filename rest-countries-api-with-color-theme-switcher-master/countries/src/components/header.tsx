import React, { Dispatch, SetStateAction } from 'react'
import "./header.css"

type Props = {
  isDarkmode: boolean
  setIsDarkmode: Dispatch<SetStateAction<boolean>>
}

function toggleTheme(props: Props) {
  const themeToggle = document.getElementById('theme-toggle');
  if (!props.isDarkmode) {
    props.setIsDarkmode(true)
    console.log("now it's true", props.isDarkmode)
  } else {
    props.setIsDarkmode(false)
    console.log("now its false", props.isDarkmode)
  }
}

const darkmode = (props:Props) => {
  if (props.isDarkmode) {
    document.getElementById("header")?.classList.add("dark")
  } else {
    document.getElementById("header")?.classList.remove("dark")
  }
}

const Header = (props:Props) => {
  return (
    <div>
      {darkmode(props)}
      <div className="header" id="header">
        <h1>Where in the world?</h1>
        <button id="theme-toggle" onClick={() => {toggleTheme(props)}}>Dark Mode</button>
      </div>
    </div>

  )
};
export default Header;