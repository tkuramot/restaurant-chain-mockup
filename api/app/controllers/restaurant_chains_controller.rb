class RestaurantChainsController < ApplicationController
  def index
    render json: RestaurantChain.generate(params.fetch(:min, 1),
                                          params.fetch(:max, 5)).map(&:to_hash).to_json
  end
end
