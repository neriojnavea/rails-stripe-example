import React from 'react';
import {CardElement} from 'react-stripe-elements';

const CardSection = ({}) => {
  return(
    <div>
      <label>Card details</label>
      <CardElement />
    </div>
  );
}

export default CardSection;
