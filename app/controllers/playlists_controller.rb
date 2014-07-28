class PlaylistsController < ApplicationController
  before_action :correct_user, only: [:edit, :update, :destroy]
  before_action :authenticate_user!, except: [:show]

  def index
    @playlists = current_user.playlists.all_recent
  end

  def show
    playlist = Playlist.find_by(unique_id: params[:id])

    if playlist.nil?
      flash[:error] = "Playlist does not exists."
      redirect_to root_path
    else
      @playlist = playlist

      query = playlist.videos.empty? ? "K5fOYZcv_0U" : playlist.videos.first.unique_id
      @related  = yt_client.video_by(query).related.videos
    end
  end

  def new
    @playlist = current_user.playlists.build
  end

  def create
    @playlist           = current_user.playlists.build(playlist_params)
    @playlist.unique_id = rand(2**41).to_s(20)

    if @playlist.save
      redirect_to playlists_path
    else
      redirect_to new_playlist_path
    end
  end

  def destroy
    @playlist.destroy
    redirect_to playlists_path
  end

private
  def playlist_params
    params.require(:playlist).permit(:name)
  end

  def correct_user
    @playlist = current_user.playlists.find_by(id: params[:id]) if user_signed_in?
    redirect_to root_path, notice: "Not authorized to edit this playlist" if @playlist.nil?
  end
end