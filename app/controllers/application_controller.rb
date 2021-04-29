class ApplicationController < ActionController::API 
    
  include DeviseTokenAuth::Concerns::SetUserByToken
        before_action :configure_permitted_parameters, if: :devise_controller?
      
        protected
          def configure_permitted_parameters
            devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
            devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
            devise_parameter_sanitizer.permit(:sign_up, keys: [:image])
            devise_parameter_sanitizer.permit(:sign_up, keys: [:email])
          end
         
        
      end