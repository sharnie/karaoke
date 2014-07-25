Rails.application.routes.draw do
  devise_for :users
  resources :playlist

  root 'youtube#index'

  get  '/videos' => 'youtube#videos'
  get  '/video'  => 'youtube#show'

end
