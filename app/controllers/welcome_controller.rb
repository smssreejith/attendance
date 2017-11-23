class WelcomeController < ApplicationController
  before_action :authenticate_user
  skip_before_action :verify_authenticity_token

  def index
  end

  def details
    Detail.create(details_params)
  end

  def manager
    @dse = Detail.all
  end

  private 

  def details_params
    params.permit(:msisdn,:date,:latitude,:longitude,:photo,:stock,:add,:comment)
  end
end
