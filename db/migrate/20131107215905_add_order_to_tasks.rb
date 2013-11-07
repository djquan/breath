class AddOrderToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :order, :integer, default: nil
  end
end
