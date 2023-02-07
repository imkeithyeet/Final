import React from 'react';
import { Navigate } from 'react-router-dom'
import NavBarLoggedIn  from './NavBarLoggedIn';


const Dashboard = ({authorized}) => {
    if (!authorized){
        return <Navigate to ="/login"/>
    }
    return (
        <div>
            <NavBarLoggedIn /> 
           <h1>hgrg</h1>
        </div>
    );
}

export default Dashboard;
