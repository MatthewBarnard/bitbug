Rails.application.routes.draw do
  get 'projects/index'

  resources :dashboard

  namespace :administrator do
    controller :dashboard do
      get 'dashboard' => :index
    end

    controller :projects do
      scope :projects do
        get 'all' => :index
        get 'create' => :create
      end

    end

  end
end
