class VideosController < ApplicationController
  before_action :correct_user

  def create
    @playlist.videos << Video.create(video_params)
    render nothing: true, status: 200
  end

  def destroy
    @playlist.videos.find_by(unique_id: params[:id]).destroy
    render nothing: true, status: 200
  end

private
  def correct_user
    @playlist = current_user.playlists.find_by(unique_id: params[:playlist_id]) if user_signed_in?
    render nothing: true, status: 400 if @playlist.nil?
  end

  def video_params
    params.require(:video).permit(:name, :image_url, :unique_id, :playlist_id)
  end
end