import React,{Fragment,useState, useEffect} from 'react'
import '../styles/DateCards.css';


const Property = () => {

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
            return(
                <div className="column">
          <div className="single-property">
            <div className="card">

                <div className="property-thumb">
                    <div className="property-tag"> For Sale </div>
                    <img src={user.image_url} alt="image" />
                </div>

                <div className="name">
                    <h1>{user.first_name} {user.last_name}</h1>           
                    <div className="mark">
                      <i class="fa-solid fa-location-dot"></i>
                       <p1>{user.gender}</p1>
                    </div>
                    <p1>{user.age}</p1>
                </div>

                <div className="property-content">
                    <div className="mark">
                      <i class="fa-solid fa-location-dot"></i>
                       <h3>{user.location}</h3>
                    </div>
                    <h3>{user.bio}</h3>
                </div>
                <div>
                    <p>{user.horoscope}</p>
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

export default Property