class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :description
      t.string :name
      t.boolean :completed, default: false
      t.datetime :due
      t.integer :project_id, default: nil
      t.integer :parent_id, default: nil
      t.integer :creator_id

      t.timestamps
    end
    add_index :tasks, :name
    add_index :tasks, :project_id
    add_index :tasks, :parent_id
    add_index :tasks, :creator_id
  end
end
