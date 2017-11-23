require 'rails_helper'

RSpec.describe Charge, type: :model do
  describe ".amount" do
    subject(:charge) { build(:charge, amount: 100) }

    it 'should be monetized' do
      expect(charge.amount).to eq(100.to_money)
    end
  end
end
