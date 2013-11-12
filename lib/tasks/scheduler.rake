# Not done yet
namespace :scheduler do
  desc "TODO"
  task reset: :environment do
    `rake db:reset`
    `rake db:migrate`
    `rake db:seed`
  end
end
