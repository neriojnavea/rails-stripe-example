import React from "react"
import PropTypes from "prop-types"
import Dashboard from "./Dashboard"
import ChargeMoney from "./ChargeMoney"
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class Main extends React.Component {

  render(){
    return(
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand mb-0 h1" to="/">EWallet Example</Link>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/charges">Charge Money 💰</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/send">Send Money 💸</Link>
              </li>
            </ul>
          </nav>
          <div className="container-fluid">
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/charges" component={ChargeMoney}/>
          </div>
        </div>
      </Router>
    )
  }
}
export default Main 
