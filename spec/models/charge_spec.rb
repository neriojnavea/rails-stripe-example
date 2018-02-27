require 'rails_helper'

RSpec.describe Charge, type: :model do
  describe ".amount" do
    subject(:charge) { build(:charge, amount: 100) }

    it 'be monetized' do
      expect(charge.amount).to eq(100.to_money)
    end
  end

  it { is_expected.to define_enum_for(:status).with([:succeeded, :pending, :failed]) }
end
