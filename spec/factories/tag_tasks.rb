# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryBot.define do
  factory :tag_task do
    task_id { 1 }
    tag_id { 1 }
  end
end
