class AddUniqueIdentifierToPlaylist < ActiveRecord::Migration
  def change
    add_column :playlists, :unique_id, :text
  end
end
