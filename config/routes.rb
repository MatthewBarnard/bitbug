Rails.application.routes.draw do
  resources :dashboard

  # scope :administrator do
  #   scope :css do
  #     get 'graph.css', to: 'administrator#index'
  #     get 'clndr.css', to: 'administrator#index'
  #     get 'owl.carousel.css', to: 'administrator#index'
  #     get 'demo.css', to: 'administrator#index'
  #     # get 'graph.css', to: '/'
  #   end
  #   scope :js do
  #
  #   end
  # end

  controller :dashboard do
    get '/administrator/dashboard' => :index
  end
end
