class Match < ApplicationRecord
    belongs_to :user_1, class_name: "User"
    belongs_to :user_2, class_name: "User"
    validate :unique_users
    private

    def unique_users
      errors.add(:base, "user_1_id and user_2_id must be different") if user_1_id == user_2_id
    end

end
