Rails.application.routes.draw do
  devise_for :users
  root 'youtube#index'

  get  '/videos' => 'youtube#videos'
  get  '/video'  => 'youtube#show'

end
