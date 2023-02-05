class UsersController < ApplicationController
    def index 
        user = User.all 
        render json: user, status: :ok
    end
    def show
        user = find_user
        render json: user
    end
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    private 
    def user_params
        params.permit(:first_name, :email,:password, :password_confirmation)
    end
    private
    def find_user
        User.find_by(id: params[:id] )
    end
end

