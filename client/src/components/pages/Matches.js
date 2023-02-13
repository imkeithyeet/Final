import React,{useState, useEffect} from 'react';
import io from 'socket.io-client';
import NavBarLoggedIn from '../NavBarLoggedIn';
import  "../../styles/Matches.css";



const Matches = ({user, setUser}) => {
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        const socket = io('/matches');
    
        socket.on('match', data => {
            setNotification(data);
        });
        return () => {
            socket.disconnect();
        };
    }, []);
    return (
        <div>
     <NavBarLoggedIn  user={user} setUser={setUser}/>
        { notification && <p>You have a new match!</p> }
        <h  className="Matches">Matches</h>
        </div>
    );
}


export default Matches;
