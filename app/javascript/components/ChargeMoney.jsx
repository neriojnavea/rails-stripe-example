import React from 'react';
import { StripeProvider } from 'react-stripe-elements';
import Checkout from './Checkout';

function ChargeMoney() {
  return (
    <div className="row">
      <div className="col-md">
        <div className="card text-center">
          <div className="card-header">
            Charge Money
          </div>
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-4">
                <StripeProvider apiKey="changeMe">
                  <Checkout />
                </StripeProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChargeMoney;
