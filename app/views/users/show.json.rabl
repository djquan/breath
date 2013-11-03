object @current

attributes(:id, :name, :email)
child(:projects) { attributes(:id, :name, :team_id) }
child(:tasks) { attributes *Task.column_names }
