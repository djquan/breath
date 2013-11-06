object @task

attributes( *Task.column_names )
child(:comments) { attributes *Comment.column_names }
child(:assigned_users) { attributes :id, :name, :email }
