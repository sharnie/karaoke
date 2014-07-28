class YoutubeController < ApplicationController
  respond_to :json

  def index
    search_query = params[:q] || "karaoke"
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
