import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Customers from './Customers';

export default class Main extends React.Component {
  render() {
    const customers = [
      {
        rif: '23444619',
        name: 'Nerio Navea',
        address: 'La Victoria',
        email: 'nnavea@pit.co.ve',
        phone: '04125491920',
      },
    ];
    const { useremail, formAuthenticityToken } = this.props;
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/" className="navbar-brand mb-0 h1" to="/">DocAdmin</Link>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link href="/customers" className="nav-link" to="/customers">
                    Clientes
                    <span role="img" aria-label="get-money">🏢</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link href="/" className="nav-link" to="/send">
                    Documentos
                    <span role="img" aria-label="send-money">📑</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="container-fluid">
            <Route exact path="/" render={() => <Dashboard userEmail={userEmail} />} />
            <Route
              exact
              path="/customers"
              formAuthenticityToken={formAuthenticityToken}
              render={() => <Customers customers={customers} />}
            />
          </div>
        </div>
      </Router>
    )
  }
}

Main.propTypes = {
  userEmail: PropTypes.string.isRequired,
  formAuthenticityToken: PropTypes.string.isRequired,
  customers: PropTypes.array.isRequired,
};
