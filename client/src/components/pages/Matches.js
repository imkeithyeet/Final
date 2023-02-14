import React,{useState} from 'react';
import Footer from '../Footer';
import NavBarLoggedIn from '../NavBarLoggedIn';
import  "../../styles/Matches.css";



const Matches = ({user, setUser}) => {
    const { matches = [], liked_users = [] } = user || {};
    const [users, setUsers] = useState([]);
  
    return (
      <div>
        <NavBarLoggedIn user={user} setUser={setUser} />
        <div className="Matches">Matches</div>
        <ul className="matches-list">
          {matches.length > 0 ? (
            matches.map((match) => (
              <li key={match.user} >
                {match.name}
              </li>
            ))
          ) : (
            <p>No matches found.</p>
          )}
        </ul>
        <div className="LikedUsers">Liked Users</div>
        <ul className="liked-users-list">
          {liked_users.length > 0 ? (
            liked_users.map((liked_user, index) => (
              <li key={index} >
                {liked_user.name}
              </li>
            ))
          ) : (
            <p>No liked users found.</p>
          )}
        </ul>
        <Footer/>
      </div>
    );
  };
  


export default Matches;
