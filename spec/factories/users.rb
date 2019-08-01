# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryBot.define do
  factory :user do
    name { "MyString" }
    password_digest { "MyString" }
    email { "MyString" }
  end
end
