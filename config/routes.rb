Rails.application.routes.draw do
  devise_for :users
  root 'youtube#index'

  get  '/videos' => 'youtube#index'
  get  '/video'  => 'youtube#show'

end
