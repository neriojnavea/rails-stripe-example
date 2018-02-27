FactoryBot.define do
  factory :user do
    email 'test@example.com'
    password 'password'
    password_confirmation 'password'
  end
  factory :charge do
    amount_cents 1000
  end
end
