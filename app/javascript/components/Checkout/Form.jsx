import React from 'react';
import NumberFormat from 'react-number-format';
import { injectStripe } from 'react-stripe-elements';
import axios from 'axios';
import CardSection from './CardSection';

class Form extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();

    const { formAuthenticityToken } = this.props;

    // eslint-disable-next-line react/prop-types
    this.props.stripe.createToken({ name: 'Jenny Rosen' })
      .then(({ token }) => {
        const data = { token, amount_cents: this.state.amountCents }
        axios.post('/charges', data, headers: { 'X-CSRF-Token', formAuthenticityToken});
      });
  }

  handleAmountChange = (values) => {
    this.setState({
      amountCents: values.floatValue * 100,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">
            Amount to Charge
            <NumberFormat
              id="amount"
              className="form-control form-control-lg"
              fixedDecimalScale
              prefix="$"
              decimalScale={2}
              onValueChange={this.handleAmountChange}
            />
          </label>
        </div>
        <CardSection />
        <button className="btn btn-primary mt-4">Pay!</button>
      </form>
    );
  }
}

export default injectStripe(Form);
