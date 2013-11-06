source 'https://rubygems.org'
ruby '2.0.0'

gem 'rails', '4.0.1'

group :production do
  gem 'pg'
  gem 'rails_12factor'
  gem 'newrelic_rpm'
end

gem 'sass-rails', '~> 4.0.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 1.2'
gem 'backbone-on-rails'
gem 'rabl'

group :doc do
  gem 'sdoc', require: false
end

gem 'bcrypt-ruby', '~> 3.1.2', require: 'bcrypt'

group :development, :test do 
  gem 'sqlite3'
  gem 'pry-rails'
  gem 'rspec-rails'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'debugger'
  gem 'factory_girl_rails'
  gem 'rails-erd'
end

group :test do
  gem 'capybara'
  gem 'faker'
  gem 'shoulda'
end
