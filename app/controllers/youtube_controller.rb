class YoutubeController < ApplicationController
  respond_to :json

  def index
    search_query = params[:q] || "top music 2014 lyrics"
    @youtube     = yt_client.videos_by(:query => "#{search_query} lyrics")
  end

  # def index
  #   result  = yt_client.videos_by(query: params[:q])
  #   respond_with result
  # end

  def show
    video    = params[:watch] || "FQK1URcxmb4"
    @video   = yt_client.video_by(video)
  end
end
