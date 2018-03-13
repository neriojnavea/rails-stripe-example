import React from 'react';
import PropTypes from 'prop-types';
import Balance from './Balance';
import Transactions from './Transactions';

const Dashboard = ({ userEmail }) => (
  <div>
  </div>
);

Dashboard.defaultProps = {
  userEmail: '',
};

Dashboard.propTypes = {
  userEmail: PropTypes.string,
};
export default Dashboard;
