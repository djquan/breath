source "https://rubygems.org"

gem 'rails', '4.2.11'
gem 'puma', '~> 3.11'

gem 'pg', '~> 0.18', require: true, group: [:production, :development]

group :production do
  gem 'newrelic_rpm'
end

gem "rails_12factor"
gem "nokogiri", ">= 1.10.4"
gem 'sass-rails', '~> 4.0.4'
gem 'uglifier', '>= 2.5.3'
gem 'coffee-rails', '~> 4.1.0'
gem 'jquery-rails'
gem 'jquery-ui-rails'
gem 'turbolinks'
gem 'jbuilder'
gem 'backbone-on-rails'
gem 'rabl'
gem 'twitter-bootstrap-rails',  '2.2.8'
gem 'therubyracer', '0.12.3'
gem "less-rails", "~> 2.8.0"
gem 'figaro'
gem 'paperclip'
gem 'aws-sdk'
gem 'font-awesome-rails'

group :doc do
  gem 'sdoc', require: false
end

gem 'bcrypt-ruby', '~> 3.1.5', require: 'bcrypt'

group :development, :test do 
  gem 'pry-rails'
  gem 'rspec-rails'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'factory_bot_rails'
  gem 'rails-erd'
end

group :test do
  gem 'sqlite3'
  gem 'capybara'
  gem 'simplecov', :require => false
  gem 'faker'
  gem 'shoulda'
end

