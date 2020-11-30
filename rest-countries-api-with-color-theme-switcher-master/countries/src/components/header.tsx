import React, { Dispatch, SetStateAction } from 'react'


type Props = {
  isDarkmode: boolean
  setIsDarkmode: Dispatch<SetStateAction<boolean>>
}
function toggleTheme() {
  const themeToggle = document.getElementById('theme-toggle');

  if (themeToggle) {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  }
}


if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

const Header = (props:Props) => {
  return (
    <div className="header">
      <h1>Where in the world?</h1>
      <button id="theme-toggle" onClick={() => {toggleTheme()}}>Switch to dark mode</button>
    </div>
  )
};
export default Header;