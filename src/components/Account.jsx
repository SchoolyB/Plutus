import React from 'react'

export default function Account() {
  return (
    <div id="accountPageContainer" style={{
      color: "black",
      backgroundColor: "white",
      borderRadius: "50px",
      display: "flex",
      justifyContent: "center",
      padding:"1rem",
      marginTop: "10em",

    }}>
{/* 
      <div id="logoutContainer"
      style={}>
        <button>LOGOUT</button>
        </div> */}

      <div id='leftSide' style={{display:"flex",flexDirection:"column", width:"50%"}}>
      <div id='userInfoContainer'>
          <h4>Hello: Test User </h4>
          <h4>Account Number: 123456790 </h4>
          <h6>User Since: Dec 2022</h6>
        </div>

        <div id='accountsContainer'>
          <h2>Accounts</h2>
          <div>
            <h4>Checking</h4>
            <input type="text" value="$1234.56"readOnly></input>
          </div>
          <div>
            <h4>Savings</h4>
            <input type="text" value="$789.00"readOnly></input>
          </div>
          {/* <h4>OPEN A NEW ACCOUNT might add open new account feature in the future</h4>  */}
        </div>
      </div>  


        <div id="transactionContainer" style={{
        backgroundColor: "gray",
        // alignSelf: "flex-end",
        borderRadius: '50px',
        padding: "1em",
        textAlign: "center",
        flexDirection: "column",
        // position: "relative",
        // bottom: "23em"

      }}>
        <h1 style={{ textAlign: "center"  }}>TRANSACTIONS</h1>
        

        <div id='depositContainer'>
            <h4>Deposit</h4>
            <form>
              <label>Select an account
              <select>
                  {/* all accounts should have last four digits of that users accounts numbers */}
                <option>Checking</option>
                <option>Savings</option>
              </select>
              </label>
              <label>
              <input placeholder='Enter the amount you would like to deposit'></input>
              </label>
              <button type='submit'>Submit</button>
            </form>
        </div>
        

          <div id='withdrawContainer'>
          <h4>Withdraw</h4>
          <form>
              <label>Select an account
              <select>
                  {/* all accounts should have last four digits of that users accounts numbers */}
                <option>Checking</option>
                <option>Savings</option>
              </select>
              </label>
              <label>
              <input placeholder='Enter the amount you would like to withdraw'></input>
              </label>
              <button type='submit'>Submit</button>
            </form>
        </div>
        

          <div id='transferContainer'>
          <h4>Transfer</h4>
          <form>
              <label>Select an account to transfer money from
              <select>
                  {/* all accounts should have last four digits of that users accounts numbers */}
                <option>Checking</option>
                <option>Savings</option>
              </select>
              </label>

              <label>Select an account to transfer money to
              <select>
                  {/* all accounts should have last four digits of that users accounts numbers */}
                <option>Checking</option>
                <option>Savings</option>
              </select>
              </label>

              <label>
              <input placeholder='Enter the amount you would like to transfer'></input>
              </label>
              <button type='submit'>Submit</button>
            </form>

          </div>
        </div>
        
        
    </div>
  )
}
