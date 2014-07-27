class YoutubeController < ApplicationController
  respond_to :json

  def index
    search_query = params[:q] || "top music 2014 lyrics"
    @youtube     = search_videos(search_query)
  end

  def videos
    respond_with search_videos(params[:q])
  end

private
  def search_videos query
    yt_client.videos_by(query: "#{query} lyrics")
  end
end
