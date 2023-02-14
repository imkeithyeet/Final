class MatchesController < ApplicationController


  def index
    matches = Match.all
    render json: matches
  end

  def create
    authorize
    @match = @current_user.matches.new(match_params)
    if @match.save
      recipient = @match.liked_user
      render json: @match, status: :created
    else
      render json: @match.errors, status: :unprocessable_entity
    end
  end
      private
      def match_params
        params.permit(:liked_user_id, :is_match)
      end
end
