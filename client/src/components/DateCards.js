import React,{Fragment,useState, useEffect} from 'react'
import '../styles/DateCards.css';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import NotInterestedOutlinedIcon from '@mui/icons-material/NotInterestedOutlined';
import IconButton from '@mui/material/IconButton';


const DateCards = () => {
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([]);
 
  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  const handleLike = (user) => {
    fetch("/matches", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({liked_user_id: user.id, is_match: true })
    })
    setUsers(users.filter((u) => u.id !== user.id))
    setMatches([...matches, user]);
  };

  
  const handleDislike = (user) => {
    fetch("/matches", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({liked_user_id: user.id, is_match: false})
    })
    setUsers(users.filter((u) => u.id !== user.id))
    setMatches(matches.filter((u) => u.id !== user.id));
  };

  return (
    <Fragment>
      <section className="property">
        <div className="center">
          <h3>Start Finding your Match</h3>
        </div>

        <div className="row">
          {users.map((user) => {
            if (
              user.id === 1 ||
              user.id === 2 ||
              user.id === 3 ||
              user.id === 4 ||
              user.id === 5 ||
              user.id === 6 ||
              user.id === 7 ||
              user.id === 8 ||
              user.id === 9 ||
              user.id === 10 
            ) {
              return (
                <div
                  key={`card_user_${user.id}`}
                  className="column"
                >
                  <div className="single-property">
                    <div className="card">
                      <div className="picture">
                        <img src={user.photos[0].image_url} alt="pic" />
                        <img src={user.photos[0].image_url2} alt="pic" />
                        <img src={user.photos[0].image_url3} alt="pic" />
                      </div>
                      <div className="captions">
                        <div className="name">
                          <h1>
                            {user.first_name} {user.last_name}
                          </h1>
                          <div className="mark">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>{user.gender}</p>
                          </div>
                          <p>{user.age}</p>
                          <p>???? {user.location}</p>
                          <p>???? {user.horoscope}</p>
                        </div>
                      </div>
                      <div className="property-content">
                        <div className="mark">
                          <i className="fa-solid fa-location-dot"></i>
                          <h3 className="h3"> ???? {user.occupation}</h3>
                          <h3 className="h3">???? {user.school}</h3>
                        </div>

                    <h3 className="h3">?????? {user.bio}</h3>
                </div>
                <div className="heart">
  <div className="icon-container">
    <IconButton onClick={() => handleDislike(user)}>
      <NotInterestedOutlinedIcon />
    </IconButton>
  </div>
  <div className="icon-container">
    <IconButton onClick={() => handleLike(user)}>
      <FavoriteOutlinedIcon />
    </IconButton>
  </div>
</div>
            </div>
          </div>
        </div>
            )
            }
            return null
        })
    }     
    </div>
    </section>
    </Fragment>
  )
}

export default DateCards