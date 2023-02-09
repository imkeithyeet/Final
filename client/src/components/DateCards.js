import React,{Fragment,useState, useEffect} from 'react'
import '../styles/DateCards.css';


const DateCards = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("/users")
          .then((r) => r.json())
          .then(setUsers);
      }, []);
    
  return (
    
    <Fragment>

    <section className="property">

    <div className="center">
    <h3>Start Finding your Match</h3>
    </div>

    <div className="row">

    {
        users.map((user)=>{
            if (user.id === 2|| user.id === 3 || user.id === 4  || user.id === 5 || user.id === 6  || user.id === 7 || user.id === 8 || user.id === 9 || user.id === 10) {
            return(
                <div className="column">
          <div className="single-property">
            <div className="card">

                <div className="picture">
                    <img src={user.photos[0].image_url} alt="image" />
                    <img src={user.photos[0].image_url2} alt="image" />
                    <img src={user.photos[0].image_url3}/>
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