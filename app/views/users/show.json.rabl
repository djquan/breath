object @current

attributes(:id, :name, :email)
child(:projects) do
  attributes(:id, :name, :team_id) 
  child(:tasks) do 
    attributes *Task.column_names 
    child(:comments) { attributes *Comment.column_names }
    child(:tags) { attributes *Tag.column_names }
  end
end

child(@assigned_tasks => :assigned_tasks) do 
  attributes *Task.column_names 
  child(:comments) { attributes *Comment.column_names }
  child(:tags) { attributes *Tag.column_names }
end

child(:tasks) do 
  attributes *Task.column_names 
  child(:comments) { attributes *Comment.column_names }
  child(:tags) { attributes *Tag.column_names }
end

child(:teams) do
  attributes(:id, :name)
  child(:projects) do
    attributes(:id, :name, :team_id) 
    child(:tasks) do 
      attributes *Task.column_names 
      child(:comments) { attributes *Comment.column_names }
      child(:tags) { attributes *Tag.column_names }
    end
  end
  child(:users) { attributes :id, :name, :email }
end
