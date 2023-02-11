import React,{Fragment,useState, useEffect} from 'react'
import  "../../styles/Profile.css";
import NavBarLoggedIn from '../NavBarLoggedIn';


const Profile = ({user,setUser}) => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("/users")
          .then((r) => r.json())
          .then(setUsers);
      }, []);
    
    const filteredUsers = users.filter(user => user.id !== 2  && user.id !== 6 && user.id !== 7 && user.id !== 10);
    const [randomUserList, setRandomUserList] = useState([]);

    useEffect(() => {
        if (filteredUsers.length) {
            let list = [];
            for (let i = 0; i < 5; i++) {
                let randomIndex = Math.floor(Math.random() * filteredUsers.length);
                list.push(filteredUsers[randomIndex]);
                filteredUsers.splice(randomIndex, 1);
            }
            setRandomUserList(list);
        }
    }, [users]);

  return (
    
    <Fragment>
        <NavBarLoggedIn user={user} setUser={setUser} />
    <section className="center">
    <div className="h4">
    <h4>Picks ✴</h4>
    </div>
    <div className="features">
    <p>Featured Profiles of the day, picked just for you!</p>
    </div>

    <div className="row">

    {
        randomUserList.map((user) => {
            return (
                <div 
                key={`card_user_${user.id}`}
                className="column">
                    <div className="single">
                        <div className="card">
                            <div className="picture">
                                <img src={user.photos[0].image_url} alt="pic" />
                                <img src={user.photos[0].image_url2} alt="pic" />
                                <img src={user.photos[0].image_url3} alt="pic"/>
                            </div>
                            <div className="captions">
                                <div className="name">
                                    <h1>{user.first_name} {user.last_name}</h1>          
                                    <div className="mark">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <p>{user.gender}</p>
                                    </div>
                                    <p>{user.age}</p>
                                    <p>📍 {user.location}</p> 
                                    <p>🔮 {user.horoscope}</p> 
                                </div>
                            </div>
                            <div className="property-content">
                                <div className="mark">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <h3 className="h3"> 💼 {user.occupation}</h3>
                                    <h3 className="h3">🏫 {user.school}</h3>
                                </div>
                    <h3 className="h3">✍️ {user.bio}</h3>
                </div>
                
            </div>
          </div>
        </div>
            )
        })
    }     
    </div>
    </section>
    </Fragment>
  )
}

export default Profile