Rails.application.routes.draw do
  devise_for :users, :controllers => { :registrations => "registrations" }

  resources :playlists do
    resources :videos
  end

  get  '/videos' => 'youtube#videos'

  root 'youtube#index'
end
