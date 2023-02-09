import React,{Fragment,useState, useEffect} from 'react'
import  "../../styles/Profile.css";
import NavBarLoggedIn from '../NavBarLoggedIn';



const Profile = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("/users")
          .then((r) => r.json())
          .then(setUsers);
      }, []);
    
  return (
    
    <Fragment>
        <NavBarLoggedIn />
    <section className="center">
    <div className="h4">
    <h4>Picks ✴</h4>
    </div>
    <div className="p4">
    <p4>Featured Profiles of the day, picked just for you!</p4>
    </div>

    <div className="row">

    {
        users.map((user)=>{
            return(
                <div className="column">
          <div className="single">
            <div className="card">

                <div className="picture">
                    <img src={user.photos[0].image_url} alt="image" />
                    <img src={user.photos[0].image_url2} alt="image" />
                    <img src={user.photos[0].image_url3} alt="image" />
                </div>
                    <wrapper className="captions">
                <div className="name">
                    <h1>{user.first_name} {user.last_name}</h1>          
                    <div className="mark">
                      <i class="fa-solid fa-location-dot"></i>
                       <p1>{user.gender}</p1>
                    </div>
                    <p1>{user.age}</p1>
                    <p>📍 {user.location}</p> 
                    <p>	🔮 {user.horoscope}</p> 
                </div>
                </wrapper>
                <div className="property-content">
                    <div className="mark">
                      <i class="fa-solid fa-location-dot"></i>
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