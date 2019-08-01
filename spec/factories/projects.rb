# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryBot.define do
  factory :project do
    name { "MyString" }
    owner_id { 1 }
  end
end
