class AddStarsToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :starred, :boolean,  default: false
    add_index :tasks, :starred
  end
end
