require 'rails_helper'

RSpec.describe Charges::Create do
  describe '.call' do
    let(:user) { create(:user) } 
    let(:amount_cents) { 10000 }
    let(:token) { 'test_token' }
    let(:arguments) do 
      {
        amount: amount_cents,
        source: token,
        currency: 'usd',
        description: "Charge for #{user.email}"
      } 
    end 
    let(:response) { Stripe::Event.construct_from({status: 'succeeded', id: 'test_id'}) }
    before { allow(Stripe::Charge).to receive(:create).with(arguments).and_return(response) }

    subject(:created_charge) do 
      described_class.call(amount_cents: amount_cents, token: token, user: user)
    end

    it 'creates a charge' do 
      expect{created_charge}.to change{Charge.count}.by(1)
      expect(created_charge.status).to eq('succeeded')
      expect(created_charge.amount_cents).to eq(10000)
      expect(created_charge.user).to eq(user)
      expect(created_charge).to be_a(Charge)
    end 
  end
end
