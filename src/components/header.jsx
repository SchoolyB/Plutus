import React from 'react'
import mainLogo from  "../assets/images/logos/png/logo-black.png"
export default function header() {
  return (
    <div>
      <header>
        <img src={mainLogo}  alt="The plutus bank logo" id="headerLogo"/>
      </header>
    </div>
  )
}
