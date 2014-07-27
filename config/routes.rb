Rails.application.routes.draw do
  devise_for :users

  resources :playlists do
    resources :videos
  end

  get '/play/:playlist_id' => 'playlists#show'

  get  '/videos' => 'youtube#videos'

  root 'youtube#index'
end
