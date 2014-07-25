Rails.application.routes.draw do
  devise_for :users
  resources :playlists

  root 'youtube#index'

  get  '/videos' => 'youtube#videos'
  get  '/video'  => 'youtube#show'

end
