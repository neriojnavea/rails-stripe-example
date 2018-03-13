import React from 'react';
import PropTypes from 'prop-types';
import Balance from './Balance';
import Transactions from './Transactions';

const Dashboard = ({ userEmail }) => (
  <div className="text-center mt-5">
    <h1>🗂</h1>
    <h1 className="mt-5"> Bienvenido al Administrador de Documentos </h1>
    <h3 className="mt-5">
      Por favor seleccione una opcion del menu para utilizar la aplicacion
    </h3>
  </div>
);

Dashboard.defaultProps = {
  userEmail: '',
};

Dashboard.propTypes = {
  userEmail: PropTypes.string,
};
export default Dashboard;
