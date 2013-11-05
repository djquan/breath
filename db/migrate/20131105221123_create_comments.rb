class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :commenter_id
      t.integer :task_id

      t.timestamps
    end
    add_index :comments, :commenter_id
    add_index :comments, :task_id
  end
end
