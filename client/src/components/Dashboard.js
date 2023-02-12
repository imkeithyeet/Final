import React,{useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom'
import NavBarLoggedIn from './NavBarLoggedIn';
import DateCards from './DateCards';
import '../styles/DarkMode.css';



const Dashboard = ({user,setUser}) => {
  const [theme, setTheme] = useState(   
     localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');

    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');

    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  if (user === null) {
    return <Navigate to="/login"/>;
  } else if (user === undefined) {
    return null;
  }
  return (
    <div>
      <NavBarLoggedIn user={user} setUser={setUser} />
      <button className="toggle" onClick={toggleTheme}>{theme === 'dark' ? '𖤓' : '☽'}</button>

      <DateCards />
    </div>
  );
};

export default Dashboard;
