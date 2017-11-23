import React from 'react';
import PropTypes from "prop-types";
import {injectStripe} from 'react-stripe-elements';
import CardSection from './CardSection';
import NumberFormat from 'react-number-format';

class Form extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();

    this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
      console.log('Received Stripe token:', token);
    });
  }

  handleAmountChange = (values) => {
    this.setState({
      amountCents: values.floatValue * 100,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">
            Amount to Charge
          </label>
          <NumberFormat 
            id="amount"
            className='form-control form-control-lg'
            fixedDecimalScale
            prefix="$"
            decimalScale={2}
            onValueChange={this.handleAmountChange}
          />
        </div>
        <CardSection />
        <button className="btn btn-primary mt-4">Pay!</button>
      </form>
    );
  }
}
export default injectStripe(Form);
