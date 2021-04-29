class Api::GamesController < ApplicationController
  before_action :set_user, execpt: [:update]
  before_action :set_game, only: [:show, :destroy]  
 
   def index
        render json: Game.all
      end

  def user_games
    render json: @user.games
  end

    def search 
      render json: Game.search(params[:query])
    end

    def show
     
      render json: @game
    end
    
      def create 
        game = current_user.games.new(game_params)
        if game.save
           
            render json: game
        else
          
          render json: { errors: @game.errors}, status: :unprocessable_entity
        end
      end
    
      def update 
        
        game = current_user.games.find(params[:id]) 
        if file && file != ''
          begin
            ext = File.extname(file.tempfile)
            cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
            game.image = cloud_image['secure_url']
           
            if game.save
              render json: game
            else
              render json: { errors: user.errors.full_messages }, status: 422
            end
        return
      end
    end

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
      def set_game
        @game = Game.find(params[:id])
      end
        def game_params
          params.require(:game).permit(:gamename, :studio, :description, :genre, :coop, :multi, :single, :esrb, :releasedate, :user_id, :id, :created_at, :updated_at, :image, :file)
        end
      def set_user
        @user = current_user
      end
  end
