class RemoveUserIdFromPlaylistVideos < ActiveRecord::Migration
  def change
    remove_column :playlist_videos, :user_id
  end
end
