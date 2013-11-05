collection @users

attributes(:id, :name, :email)
child(:teams) { attributes :id, :name }
