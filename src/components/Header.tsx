import React from 'react'
import mainLogo from  "../assets/images/logos/logo-no-background.png"
export default function header() {
  return (
    <div>
      <header>
        <img src={mainLogo}  alt="The plutus bank logo" id="headerLogo"/>
      </header>
    </div>
  )
}
