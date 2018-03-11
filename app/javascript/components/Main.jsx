import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Customers from './Customers';
import NewCustomer from './Customers/New';
import Documents from './Documents';

export default class Main extends React.Component {
  render() {
    const { userEmail, formAuthenticityToken, customers, docs } = this.props;
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/" className="navbar-brand mb-0 h1" to="/">DocAdmin</Link>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link href="/customers" className="nav-link" to="/customers">
                    Clientes
                    <span role="img" aria-label="clientes">🏢</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link href="/" className="nav-link" to="/documents">
                    Documentos
                    <span role="img" aria-label="documents">📑</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="container-fluid">
            <Route exact path="/" render={() => <Dashboard userEmail={userEmail} />} />
            <Route
              path="/documents"
              formAuthenticityToken={formAuthenticityToken}
              render={() => <Documents docs={docs} customers={customers} />}
            />
            <Route
              path="/customers"
              formAuthenticityToken={formAuthenticityToken}
              render={() => <Customers customers={customers} />}
            />
            <Route
              path="/customers/new"
              formAuthenticityToken={'aa'}
              component={NewCustomer}
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
