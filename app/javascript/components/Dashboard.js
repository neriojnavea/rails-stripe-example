import React from "react"
import PropTypes from "prop-types"
import Balance from "./Balance"

class Dashboard extends React.Component {

  render(){
    return(
      <div>
        <Balance userName="user@example.com" amount="0.00"/>
      </div>
    )
  }
}
export default Dashboard
