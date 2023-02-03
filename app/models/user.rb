class User < ApplicationRecord
    has_many :photos, dependent: :destroy
    has_many :liked_matches, class_name: "Match", foreign_key: :user_1
    has_many :liked_by_matches, class_name: "Match", foreign_key: :user_2

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