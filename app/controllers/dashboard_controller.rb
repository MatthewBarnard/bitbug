class DashboardController < ApplicationController
  def index
    require 'identicon'
    @identicon = Identicon.data_url_for 'matthew@bitcube.co.za'
  end
end
