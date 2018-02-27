import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import ChargeMoney from './ChargeMoney';

const Main = ({ userEmail }) => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/" className="navbar-brand mb-0 h1" to="/">EWallet Example</Link>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href="/charges" className="nav-link" to="/charges">
                Charge Money
                <span role="img" aria-label="get-money">💰</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/" className="nav-link" to="/send">
                Send Money
                <span role="img" aria-label="send-money">💸</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <Route exact path="/" render={() => <Dashboard userEmail={userEmail} />} />
        <Route
          exact
          path="/charges"
          component={ChargeMoney}
          formAuthenticityToken={formAuthenticityToken}
        />
      </div>
    </div>
  </Router>
);

Main.propTypes = {
  userEmail: PropTypes.string.isRequired,
  formAuthenticityToken: PropTypes.string.isRequired,
};
export default Main;
