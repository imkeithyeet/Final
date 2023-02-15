import React,{useState,useEffect} from 'react';
import Footer from '../Footer';
import NavBarLoggedIn from '../NavBarLoggedIn';
import  "../../styles/Matches.css";
import  "../../styles/DarkMode.css";






const Matches = ({ user, setUser }) => {
   const [theme, setTheme] = useState(   
     localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');

    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');

    }
  };
   useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const matches = user?.matched_users
  return (
    <div>
      <NavBarLoggedIn user={user} setUser={setUser} />
      <div className="Matches">Matches ✴</div>
      <div className="matches-list">
        {matches?.length > 0 ? (
          matches.map((match) => (
            <div key={`card_user_${match.id}`} className="column">
              <div className="single">
                <div className="card">
                  <div className="Images">
                    <img src={match.photos[0].image_url} alt="pic" />
                    <img src={match.photos[0].image_url2} alt="pic" />
                    <img src={match.photos[0].image_url3} alt="pic" />
                  </div>
                  <div className="captions">
                    <div className="name">
                      <h1>
                        {match.first_name} {match.last_name}
                      </h1>
                      <div className="mark">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>{match.gender}</p>
                      </div>
                      <p>{match.age}</p>
                      <p>📍 {match.location}</p>
                      <p>🔮 {match.horoscope}</p>
                    </div>
                  </div>
                  <div className="property-content">
                    <div className="mark">
                      <i className="fa-solid fa-location-dot"></i>
                      <h3 className="h3"> 💼 {match.occupation}</h3>
                      <h3 className="h3">🏫 {match.school}</h3>
                    </div>

                    <h3 className="h3">✍️ {match.bio}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no">No Matches Found.</p>
        )}
      </div>
      {/* <div className="LikedUsers">Liked Users</div> */}
      <ul className="liked-users-list">
        {/* {liked_users.length > 0 ? (
          liked_users.map((liked_user, index) => (
            <li key={index}>{liked_user.name}</li>
          ))
        ) : (
          <p>No liked users found.</p>
        )} */}
      </ul>
      <button className="toggle" onClick={toggleTheme}>{theme === 'dark' ? '𖤓' : '☽'}</button>

      <Footer />
    </div>
  );
};

export default Matches;
