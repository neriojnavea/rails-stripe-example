import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {

  render(){
    return(
      <div className="row">
        <div className="col-md">
          <div className="card">
            <div className="card-header text-center">
              Balance
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md">
                  <h4>user@example.com</h4>
                  <p>
                    In this example app you can add example money to your account using a stripe 
                    testing account
                  </p>
                  <Link className="btn btn-primary" to="/charges">Charge Example Money</Link>
                </div>
                <div className="col-md text-right">
                  <h4>$0.00</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Dashboard
