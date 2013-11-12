# Not done yet
namespace :scheduler do
  desc "TODO"
  task reset: :environment do
    `pg:reset DATABASE_URL --confirm breath-io`
    `rake db:migrate`
    `rake db:seed`
    `restart`
  end
end
