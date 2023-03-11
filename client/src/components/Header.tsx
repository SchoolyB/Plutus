import React from 'react'
import mainLogo from  "../assets/images/logos/plutus/png/plutus_text_logo.png"
export default function header() {
  return (
    <div>
      <header>
        <img src={mainLogo}  alt="The plutus bank logo" id="headerLogo"/>
      </header>
    </div>
  )
}
