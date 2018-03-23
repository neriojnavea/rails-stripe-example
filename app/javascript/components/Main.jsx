import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import axios from 'axios';
import Dashboard from './Dashboard';
import Customers from './Customers';
import NewCustomer from './Customers/New';
import Documents from './Documents';

export default class Main extends React.Component {
  handleLogOut = () => {
    const { formAuthenticityToken } = this.props;
    axios.delete(`/users/sign_out`)
      .then(() => window.location = '/users/sign_in')
      .catch(() => window.location = '/users/sign_in')
  }

  render() {
    const { userEmail, formAuthenticityToken, customers, docs, user } = this.props;
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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.handleLogOut}>Cerrar sesion</a>
              </li>
            </ul>
          </nav>
          <div className="container-fluid">
            <Route exact path="/" render={() => <Dashboard userEmail={userEmail} />} />
            <Route
              path="/documents"
              formAuthenticityToken={formAuthenticityToken}
              render={() => <Documents docs={docs} customers={customers} user={user} />}
            />
            <Route
              path="/customers"
              formAuthenticityToken={formAuthenticityToken}
              render={() => <Customers customers={customers} user={user}/>}
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
