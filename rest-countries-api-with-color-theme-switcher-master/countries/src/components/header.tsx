import React, { Dispatch, SetStateAction } from 'react'


type Props = {
  isDarkmode: boolean
  setIsDarkmode: Dispatch<SetStateAction<boolean>>
}

const Header = (props:Props) => {
  return (
    <button>darkmode</button>
  )
};
export default Header;