import React from 'react';
import { Navigate } from 'react-router-dom'
import NavBarLoggedIn from './NavBarLoggedIn';
import DateCards from './DateCards';




const Dashboard = ({user, users}) => {
  if (user === null) {
    return <Navigate to="/login"/>;
  } else if (user === undefined) {
    return null;
  }
 
  return (
    <div>
      <NavBarLoggedIn />
      <DateCards />      
    </div>
  );
};

export default Dashboard;
