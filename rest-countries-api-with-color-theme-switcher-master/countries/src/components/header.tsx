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
  } else {
    props.setIsDarkmode(false)
  }
}

const Header = (props:Props) => {
  return (
    <div>
      <div className={props.isDarkmode?"header dark": "header"} id="header">
        <h1>Where in the world?</h1>
        <button id="theme-toggle" onClick={() => {toggleTheme(props)}}>Dark Mode</button>
      </div>
    </div>
  )
};
export default Header;