class Playlist < ActiveRecord::Base
  validates_presence_of :name
  
  has_many :playlist_videos
  has_many :videos, through: :playlist_videos

  def self.all_recent
    Playlist.all.order('created_at DESC')
  end
end
