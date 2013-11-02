# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :task do
    description "MyString"
    name "MyString"
    completed false
    due "2013-11-02 16:21:19"
    project_id 1
    parent_id 1
    creator_id 1
  end
end
