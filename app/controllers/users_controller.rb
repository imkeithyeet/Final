class UsersController < ApplicationController
    def index
        authorize
        users = @current_user.possible_matches
        render json: users, status: :ok
    end
  
    def show
        user = find_user
        render json: user
    end
    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    private 
    def user_params
        params.permit(:email,:password, :password_confirmation, :first_name, :last_name)
    end
    private
    def find_user
        User.find_by(id: params[:id])
    end
end

