class CreateTeamLists < ActiveRecord::Migration
  def change
    create_table :team_lists do |t|
      t.integer :team_id
      t.integer :user_id

      t.timestamps
    end
    add_index :team_lists, :team_id
    add_index :team_lists, :user_id
    add_index :team_lists, [:team_id, :user_id], unique: true
  end
end
