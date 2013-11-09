class CreateAttachments < ActiveRecord::Migration
  def change
    create_table :attachments do |t|
      t.integer :task_id

      t.timestamps
    end
    add_index :attachments, :task_id
  end
end
