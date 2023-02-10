class User < ApplicationRecord
    has_secure_password
    has_many :photos, dependent: :destroy
    has_many :matches
    has_many :liked_by_matches, class_name: "Match", foreign_key: :liked_user
    has_many :liked_users, through: :matches
    validates_presence_of :first_name, :last_name, :password,length: {in: 4..25}


    validates :email,presence: true, uniqueness: true, format:{with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i}
    validates :password, length: {in: 6..25}


    def possible_matches
        User.all - liked_users - [self]
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