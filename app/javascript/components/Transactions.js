import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Transactions({userEmail, amount}) {
  return (
    <div className="row">
      <div className="col-md">
        <div className="card">
          <div className="card-header text-center">
            Transactions
          </div>
          <div className="card-body">
            <div className="row">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Transactions.propTypes = {
  userEmail: PropTypes.string,
  amount: PropTypes.string,
}
export default Transactions
