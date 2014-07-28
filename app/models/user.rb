class User < ActiveRecord::Base
  attr_accessor :current_password
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates_presence_of :full_name

  has_many :playlists
  has_many :videos, through: :playlists
  
end
