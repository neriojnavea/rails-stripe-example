import React from 'react'
import PropTypes from "prop-types"
import Form from './Form'
import { Elements } from 'react-stripe-elements'
import './styles'

const Checkout = ({}) => {
  return(
    <Elements>
      <Form />
    </Elements>
  );
}

export default Checkout;
