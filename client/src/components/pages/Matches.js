import React,{useState, useEffect} from 'react';
import io from 'socket.io-client';
import NavBarLoggedIn from '../NavBarLoggedIn';


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
        </div>
    );
}


export default Matches;
