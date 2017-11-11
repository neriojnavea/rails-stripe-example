import React from "react"
import PropTypes from "prop-types"
import Balance from "./Balance"
import Transactions from "./Transactions"

class Dashboard extends React.Component {

  render(){
    return(
      <div>
        <Balance userName="user@example.com" amount="0.00"/>
        <Transactions/>
      </div>
    )
  }
}
export default Dashboard
