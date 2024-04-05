class UsersController < ApplicationController
  def index
    render :json => User.generate.to_json
  end
end
