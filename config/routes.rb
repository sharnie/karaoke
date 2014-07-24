Rails.application.routes.draw do
  devise_for :users
  root 'home#index'

  get  '/videos' => 'youtube#index'
  get  '/video'  => 'youtube#show'

end
