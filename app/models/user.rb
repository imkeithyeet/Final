class User < ApplicationRecord
    has_secure_password
    has_many :photos, dependent: :destroy
    has_many :matches
    has_many :liked_by_matches, class_name: "Match", foreign_key: :liked_user
    has_many :is_match_matches, -> {where(is_match: true)}, foreign_key: :user_id, class_name: "Match"
    has_many :is_match_liked_by_matches, -> {where(is_match: true)}, class_name: "Match", foreign_key: :liked_user
    has_many :is_match_liked_users, through: :is_match_matches, source: :liked_user
    has_many :is_match_liked_by_users, through: :is_match_liked_by_matches, source: :user

    validates_presence_of :first_name, :last_name, :password,length: {in: 4..25}


    validates :email,presence: true, uniqueness: true, format:{with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i}
    validates :password, length: {in: 6..25}


    def possible_matches
        User.all - liked_by_matches - [self]
    end

    def matched_users
        is_match_liked_by_users & is_match_liked_users
    end



end


# if a user likes another user:
# first, check if there's an existing match in liked_by_matches, where is_match is not false
# if so, set is_match to true. these users have now liked each other
# if you did find one, but is_match is false, do nothing

# if no match exists, then make a new Match
# Match.create(user_1: the_user_who_liked_someone, user_2: the_user_they_like)

#if a user dislikes another user:
# first, check if there's an existing match in liked_by_matches
# if so, set is_match to false. at least one user disliked the other

# if not, create a new Match
# Match.create(user_1: the_user_disliking, user_2: user_being_disliked, is_match: false)