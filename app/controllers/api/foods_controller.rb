class Api::FoodsController < ApplicationController

  # called when api/foods is requested
  def index
    render json: Food.all
  end 

  def show
    # find food
    # params[:id] will be id given in the url by client
    food = Food.find(params[:id])
    # give back the food
    render json: food
  end

  def create
  end

  def update
  end

  def destroy
  end 

end
