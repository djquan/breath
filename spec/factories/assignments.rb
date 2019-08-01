# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryBot.define do
  factory :assignment do
    user_id { 1 }
    task_id { 1 }
  end
end
