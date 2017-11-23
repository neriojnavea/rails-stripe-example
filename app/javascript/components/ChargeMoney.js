import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { StripeProvider } from 'react-stripe-elements'
import Checkout from './Checkout';

function ChargeMoney({userEmail, amount}) {
  return (
    <div className="row">
      <div className="col-md">
        <div className="card text-center">
          <div className="card-header">
            Charge Money
          </div>
          <div className="card-body">
            <div className="row justify-content-center">
              <div className='col-4'>
                <StripeProvider apiKey="changeMe">
                  <Checkout />
                </StripeProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ChargeMoney.propTypes = {
}
export default ChargeMoney
