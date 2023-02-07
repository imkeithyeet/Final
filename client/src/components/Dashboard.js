import React from 'react';
import { Navigate } from 'react-router-dom'
import NavBarLoggedIn  from './NavBarLoggedIn';


const Dashboard = ({user}) => {
    if (user === null){
        return <Navigate to ="/login"/>
    } else if (user === undefined) {
        return null
    }
    return (
        <div>
            <NavBarLoggedIn /> 
           <h1>hgrg</h1>
        </div>
    );
}

export default Dashboard;
