# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryBot.define do
  factory :team_list do
    team_id { 1 }
    user_id { 1 }
  end
end
