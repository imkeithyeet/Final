class PhotosController < ApplicationController
    def index 
        photo = Photo.all 
        render json: photo, status: :ok
    end
    def show
        photo = find_photo
        render json: photo
    end
    private
    def find_photo
        Photo.find_by(id: params[:id])
    end
end
