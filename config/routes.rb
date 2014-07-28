Rails.application.routes.draw do
  devise_for :users

  resources :playlists do
    resources :videos
  end

  get  '/videos' => 'youtube#videos'

  root 'youtube#index'
end
