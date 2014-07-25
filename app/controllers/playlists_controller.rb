class PlaylistsController < ApplicationController
  before_action :correct_user, only: [:edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @playlists = Playlist.all_recent
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def new
    @playlist = current_user.playlists.build
  end

  def create
    @playlist = current_user.playlists.build(playlist_params)

    if @playlist.save
      redirect_to playlists_path
    else
      redirect_to new_playlist_path
    end
  end

private
  def playlist_params
    params.require(:playlist).permit(:name)
  end

  def correct_user
    @playlist = current_user.playlists.find_by(id: params[:id]) if user_signed_in?
    redirect_to root_path if @playlist.nil?
  end
end