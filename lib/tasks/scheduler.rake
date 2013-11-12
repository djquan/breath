namespace :scheduler do
  desc "TODO"
  task reset: :environment do
    `pg:reset DATABASE_URL --confirm breath-io`
    `run rake db:migrate`
    `run rake db:seed`
    `restart`
  end
end
