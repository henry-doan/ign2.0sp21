class Api::ReviewsController < ApplicationController
    before_action :set_game, except: [:user_reviews]
    before_action :set_review, only: [:show, :update, :destroy]
    before_action :set_user, except: [:update]
  def index
    render json: @game.reviews
  end
  
  def user_reviews
    render json: @user.reviews
  end

  def show
    render json: @review
  end
  def create
    @review = @game.reviews.new(review_params)
      if @review.save
        render json: @review
      else
        render json: { errors: @review.errors}, status: :unprocessable_entity
      end
  end
    
  def update
    
    if @review.update(review_params)
      render json: @review
    else
      render json: { errors: @review.errors}, status: :unprocessable_entity
    end
  end
    
  def destroy

    @review.destroy
    render json: { message: 'Review is gone' }
  end
    
  private

  def set_game
    @game = Game.find(params[:game_id])
  end
  
  def set_review
    @review = @game.reviews.find(params[:id])
  end
  
  def review_params
    params.require(:review).permit(:title, :rating, :gamereview, :user_id, :body, :image, :game_play, :visual, :soundtrack, :game_id)
  end

  def set_user
    @user = current_user
  end
end 