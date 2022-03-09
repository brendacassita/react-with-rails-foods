class Api::DrinksController < ApplicationController
  before_action :set_drink, only:[:show, :update, :destroy]

  def index
    render json: Drink.all
  end

  def show
    drink = Drink.find(params[:id])
    render json: @drink
  end

  def create
    drink = Drink.new(drink_params)
    if(drink.save)
      render json: drink
    else
      render json: {errors: drink.errors.full_messages}, status: 422
    end
  end

  def update
    if(@drink.update(drink_params))
      render json: @drink
    else
      render json: {errors: drink.errors.full_messages}, status: 422
    end
  end

  def destroy
    render json: @drink.destroy
  end

  private

  def drink_params
    params.require(:drink).permit(:name)
  end

  def set_drink
    @drink = Drink.find(params[:id])
  end

 
end

