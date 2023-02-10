class MatchesController < ApplicationController
    def create
        @match = Match.new(match_params)
        if @match.save
          render json: @match, status: :created
        else
          render json: @match.errors, status: :unprocessable_entity
        end
      end
    
      private
    
      def match_params
        params.require(:match).permit(:user_1_id, :user_2_id, :is_match)
      end
end
