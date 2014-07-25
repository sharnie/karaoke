class PlaylistVideo < ActiveRecord::Base
  belongs_to :playlist, dependent: :destroy
  belongs_to :video,    dependent: :destroy
end
