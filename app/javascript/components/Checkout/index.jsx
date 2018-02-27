import React from 'react';
import PropTypes from 'prop-types';
import { Elements } from 'react-stripe-elements';
import Form from './Form';
import './styles.scss';

const Checkout = ({ formAuthenticityToken }) => {
  <Elements><Form formAuthenticityToken={formAuthenticityToken}/></Elements>
};

Checkout.propTypes = {
  formAuthenticityToken: PropTypes.string,
}
export default Checkout;
