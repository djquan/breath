object @task

attributes( *Task.column_names )
child(:comments) { attributes *Comment.column_names }
child(@assigned_users => :assigned_users) { attributes :id, :name, :email }
child(@subtasks => :subtasks) { attributes *Task.column_names }
child(@tags => :tags) { attributes :id, :name }
child(@attachments => :attachments) {
  attributes *Attachment.column_names
  node(:url) { |attachment| attachment.task_attachment.url }
  node(:file_name) { |attachment| attachment.task_attachment.original_filename }
}
