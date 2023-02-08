import React from 'react';
import { Navigate } from 'react-router-dom'
import NavBarLoggedIn from './NavBarLoggedIn';
import UserList from './UserList';



const Dashboard = ({user, users}) => {
  if (user === null) {
    return <Navigate to="/login"/>;
  } else if (user === undefined) {
    return null;
  }
 
  return (
    <div>
      <NavBarLoggedIn />
      <UserList />

    </div>
  );
};

export default Dashboard;
