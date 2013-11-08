class CreateTagTasks < ActiveRecord::Migration
  def change
    create_table :tag_tasks do |t|
      t.integer :task_id
      t.integer :tag_id

      t.timestamps
    end
    add_index :tag_tasks, :task_id
    add_index :tag_tasks, :tag_id
  end
end
