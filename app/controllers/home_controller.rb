class HomeController < ApplicationController
  def index
    search_query = params[:q] || "top music 2014 lyrics"
    @youtube     = yt_client.videos_by(:query => "#{search_query} lyrics")
  end
end
