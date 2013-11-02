class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :description
      t.string :name
      t.boolean :completed
      t.datetime :due
      t.integer :project_id
      t.integer :parent_id
      t.integer :creator_id

      t.timestamps
    end
    add_index :tasks, :name
    add_index :tasks, :project_id
    add_index :tasks, :parent_id
    add_index :tasks, :creator_id
  end
end
