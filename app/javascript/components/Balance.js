import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Balance({userEmail, amount}) {
  return (
    <div className="row">
      <div className="col-md">
        <div className="card">
          <div className="card-header text-center">
            Balance
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md">
                <h4>{userEmail}</h4>
                <p>
                  In this example app you can add example money to your account using a stripe 
                  testing account
                </p>
                <Link className="btn btn-primary" to="/charges">Charge Example Money</Link>
              </div>
              <div className="col-md text-right">
                <h4>{amount}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Balance.propTypes = {
  userEmail: PropTypes.string,
  amount: PropTypes.string,
}
export default Balance
