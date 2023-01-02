import React from 'react'
import axios from "axios"

export default function Account() {
  return (
    <div id="accountPageContainer">

      <div id="logoutContainer">
      <button>LOGOUT</button>
      </div>

      <div id='userInfoContainer'>
        USER INFO
        <h4>USER NAME</h4>
        <h4>Account number</h4>
        <h6>user since</h6>
      </div>

      <div id='accountsContainer'>
        ACCOUNTS
        <h4>CHECKING</h4>
        <h4>SAVINGS</h4>
        <h4>OPEN A NEW ACCOUNT</h4>
      </div>
    
      <div id="transactionContainer">
        TRANSACTIONS
        <h4>DEPOSIT</h4>
        <h4>WITHDRAW</h4>
        <h4>TRANSFER</h4>
      </div>
      
      
    </div>
  )
}
