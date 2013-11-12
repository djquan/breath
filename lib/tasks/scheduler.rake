namespace :scheduler do
  desc "TODO"
  task reset: :environment do
    `heroku pg:reset DATABASE_URL --confirm breath-io`
    `heroku run rake db:migrate`
    `heroku run rake db:seed`
    `heroku restart`
  end
end
