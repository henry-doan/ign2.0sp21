class Api::GamesController < ApplicationController
    def index
        render json: current_user.games
      end
    
      def create 
        @game = current_user.games.new(game_params)
        if @game.save
          render json: @game
        else
          render json: { errors: @game.errors}, status: :unprocessable_entity
        end
      end
    
      def update 
        @game = current_user.game.find(params[:id])
        if @game.update(game_params)
          render json: @game
        else
          render json: { errors: @game.errors}, status: :unprocessable_entity
        end
      end
    
      def destroy 
        @game = current_user.games.find(params[:id])
        @game.destroy
        render json: { message: 'Game is gone' }
      end
    
      private 
        def game_params
          params.require(:game).permit(:gamename, :studio, :description, :genre, :coop, :multi, :single, :esrb, :releasedate, :user_id)
        end
      end
