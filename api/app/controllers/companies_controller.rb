class CompaniesController < ApplicationController
  def index
    render :json => Company.generate(params.fetch(:min, 1),
                                     params.fetch(:max, 5)).map(&:to_hash).to_json
  end
end
