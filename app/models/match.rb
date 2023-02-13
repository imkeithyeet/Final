class Match < ApplicationRecord
    belongs_to :user
    belongs_to :liked_user, class_name: "User"

    validate :unique_users
    private

    def unique_users
      errors.add(:base, "user_1_id and user_2_id must be different") if user_id == liked_user_id
    end
end
