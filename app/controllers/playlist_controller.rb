class PlaylistController < ApplicationController
  before_action :correct_user, only: [:edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  def index
  end

  def show
  end

private

  def correct_user
    @playlists = current_user.playlists.find_by(id: params[:id]) if user_signed_in?
    redirect_to root_path if @playlist.nil?
  end
end