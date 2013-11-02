class AddTeamIdToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :team_id, :integer, default: 0
    add_index :projects, :team_id
  end
end
