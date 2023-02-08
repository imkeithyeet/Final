import React from 'react';
import { Navigate } from 'react-router-dom'
import NavBarLoggedIn from './NavBarLoggedIn';
import DateCards from './DateCards';




const Dashboard = ({user, users,setUser}) => {
  if (user === null) {
    return <Navigate to="/login"/>;
  } else if (user === undefined) {
    return null;
  }
 
  return (
    <div>
      <NavBarLoggedIn setUser={setUser} />
      <DateCards />      
    </div>
  );
};

export default Dashboard;
