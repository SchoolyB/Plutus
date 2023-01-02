import React from 'react';


export default function Footer() {
  return (

    <div>
      <footer>
        <div id='footerElementsContainer'>
         {/* <div id='footerTextContainer'>
          <ul id="footerText">
              <li>
              Plutus Banking Union
              </li>
              <li>
            Author: Marshall Burns  
              </li>
          </ul>
        </div>
           */}
          <div id="footerLogosContainer">
            
          </div>

        <div id='footerLinksContainer'>
          <ul>
            <li >
              <a href="/Contact" className='footerLinks'>Contact</a>
            </li>
            <li>
              <a href="/About" className='footerLinks'>About</a>
            </li>
            <li>
              <a href="https://github.com/SchoolyB" className='footerLinks' >GitHub</a>
            </li>
              </ul>
          </div>
    </div>
      </footer>
    </div>
  )
}
