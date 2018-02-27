class Charges::Create
  def self.call(amount_cents:, token:, user:)
    # Send request to Stripe to create the charge
    # https://stripe.com/docs/quickstart#using-payment-information
    stripe_charge = Stripe::Charge.create(amount: amount_cents,
                                          source: token,
                                          currency: 'usd',
                                          description: "Charge for #{user.email}")
    # Creates the charge in app database,
    # in this particular app it doesn't matter if the charge is failed
    Charge.create!(amount_cents: amount_cents,
                  user: user,
                  status: Charge.statuses[stripe_charge.status],
                  gateway_id: stripe_charge.id,
                  gateway: 'Stripe')
  end
end
