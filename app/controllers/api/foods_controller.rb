class Api::FoodsController < ApplicationController
  before_action :set_food, only: [:show, :update, :destroy]
  # called when 'api/foods' is requested
  def index
    render json: Food.all
  end 

  def show
    # find food
    # params[:id] will be id given in the url by client
    # get 'api/foods/:id'
    food = Food.find(params[:id])
    # give back the food
    render json: food
  end

  def create
    food = Food.new(food_params)
    if(food.save)
      render json: food
    else
      render json: {errors: food.errors.full_messages}, status: 422
    end
  end

  def update
    if(@food.update(food_params))
      render json: @food
    else
      render json: {errors: food.errors.full_messages}, status: 422
    end
  end

  # delete 'api/foods/:id'
  def destroy
    render json: @food.destroy
  end 

  private
  def food_params
    params.require(:food).permit(:name, :price)
  end

  def set_food
    @food = Food.find(params[:id])
  end
end
