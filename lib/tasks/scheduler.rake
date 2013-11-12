namespace :scheduler do
  desc "TODO"
  task reset: :environment do
    User.destroy_all
    Task.destroy_all
    Project.destroy_all
    Team.destroy_all
    TeamList.destroy_all
    Comment.destroy_all
    Tag.destroy_all
    Attachment.destroy_all
    Assignment.destroy_all
    TagTask.destroy_all
    `rake db:seed`
  end
end
