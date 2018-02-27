class Charge < ApplicationRecord
  enum status: [:succeeded, :pending, :failed]
  belongs_to :user

  monetize :amount_cents
end
