class AddAttachmentToTaskAttachment < ActiveRecord::Migration
  def self.up
    change_table :attachments do |t|
      t.attachment :task_attachment
    end 
  end

  def self.down
    drop_attached_file :attachments, :task_attachment
  end
end
