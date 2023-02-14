import React from 'react';
import Footer from '../Footer';
import NavBarLoggedIn from '../NavBarLoggedIn';
import  "../../styles/Matches.css";



const Matches = ({user, setUser}) => {
    const matches = user?.matched_users
    // console.log("matches: ", matches);
    // console.log("liked_users: ", liked_users);

    return (
      <div>
        <NavBarLoggedIn user={user} setUser={setUser} />
        <div className="Matches">Matches</div>
        <ul className="matches-list">
          {matches?.length > 0 ? (
            matches.map((match) => (
              <li key={match.id} >
                {match.first_name}
                {match.last_name}
                {match.school}
                {match.occupation}
                {match.gender}
                {match.age}
                {match.location}
                {match.bio}
                {match.horoscope}
                {match.photos}
              </li>
            ))
          ) : (
            <p className="no">No Matches Found.</p>
          )}
        </ul>
        {/* <div className="LikedUsers">Liked Users</div> */}
        <ul className="liked-users-list">
          {/* {liked_users.length > 0 ? (
            liked_users.map((liked_user, index) => (
              <li key={index} >
                {liked_user.name}
              </li>
            ))
          ) : (
            <p>No liked users found.</p>
          )} */}
        </ul>
        <Footer/>
      </div>
    );
  };
  


export default Matches;
