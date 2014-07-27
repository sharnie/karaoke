class Video < ActiveRecord::Base
  validates_presence_of :name

  belongs_to :playlist, dependent: :destroy
end
