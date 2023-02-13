import React,{useState, useEffect} from 'react';
import Footer from '../Footer';
import NavBarLoggedIn from '../NavBarLoggedIn';
import  "../../styles/Matches.css";



const Matches = ({user, setUser}) => {
    const { matches = [], liked_users = [] } = user || {};
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetch("/users")
        .then((r) => r.json())
        .then(setUsers);
    }, []);
  
    return (
      <div>
        <NavBarLoggedIn user={user} setUser={setUser} />
        <h className="Matches">Matches</h>
        <ul className="matches-list">
          {matches.length > 0 ? (
            matches.map((match, index) => (
              <li key={index} className="match">
                {match.name}
              </li>
            ))
          ) : (
            <p>No matches found.</p>
          )}
        </ul>
        <h className="LikedUsers">Liked Users</h>
        <ul className="liked-users-list">
          {liked_users.length > 0 ? (
            liked_users.map((liked_user, index) => (
              <li key={index} className="liked-user">
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
