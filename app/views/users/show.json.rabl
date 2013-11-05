object @current

attributes(:id, :name, :email)
child(:projects) do
  attributes(:id, :name, :team_id) 
  child(:tasks) do 
    attributes *Task.column_names 
    child(:comments) { attributes *Comment.column_names }
  end
end

child(:tasks) do 
  attributes *Task.column_names 
  child(:comments) { attributes *Comment.column_names }
end

child(:teams) do
  attributes(:id, :name)
  child(:projects) do
    attributes(:id, :name, :team_id) 
    child(:tasks) do 
      attributes *Task.column_names 
      child(:comments) { attributes *Comment.column_names }
    end
  end
  child(:users) { attributes :id, :name, :email }
end
