class Api::ReviewsController < ApplicationController
    def index
        render json: current_user.reviews
      end
    
      def create 
        @review = current_user.reviews.new(review_params)
        if @review.save
          render json: @review
        else
          render json: { errors: @review.errors}, status: :unprocessable_entity
        end
      end
    
      def update 
        @review = current_user.review.find(params[:id])
        if @review.update(review_params)
          render json: @review
        else
          render json: { errors: @review.errors}, status: :unprocessable_entity
        end
      end
    
      def destroy 
        @review = current_user.reviews.find(params[:id])
        @review.destroy
        render json: { message: 'Review is gone' }
      end
    
      private 
        def review_params
          params.require(:review).permit(:title, :rating:, :gamereview, :user_id)
        end
    
