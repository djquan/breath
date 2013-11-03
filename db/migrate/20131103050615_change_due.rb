class ChangeDue < ActiveRecord::Migration
  def change
    change_column :tasks, :due, :date
  end
end
