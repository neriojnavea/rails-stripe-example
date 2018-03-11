FactoryBot.define do
  factory :document do
    title "MyString"
    expiration_date "2018-03-06"
    customer nil
    done false
  end
  factory :customer do
    name "MyString"
    rif "MyString"
    email "MyString"
    address "MyString"
    phone "MyString"
  end
  factory :user do
    email 'test@example.com'
    password 'password'
    password_confirmation 'password'
  end
  factory :charge do
    amount_cents 1000
  end
end
