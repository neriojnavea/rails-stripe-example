require 'rails_helper'

RSpec.describe 'Charges Request', type: :request do
  let(:user) { create(:user) }
  before do 
    sign_in user 
  end 
  describe '.create' do
    let(:charge_params) { { amount_cents: "10000", token: 'test_token' } }

    before { allow(Charges::Create).to receive(:call).with(charge_params.merge(user: user)) }
    it 'send the request to create a charge' do
      post charges_path, params: { charge: charge_params }
      expect(response.status).to eq(201)
      expect(Charges::Create).to have_received(:call).with(charge_params.merge(user: user))
    end
  end
end
