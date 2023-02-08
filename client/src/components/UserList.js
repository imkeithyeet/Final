import { useEffect, useState } from "react";
import '../styles/UserList.css'


function UserList ()  {
    const [users, setUsers]=useState([])
    useEffect(() => {
        fetch("/users")
          .then((r) => r.json())
          .then(setUsers);
      }, []);
    
    return (
        <div>
            <ul className="names">
        {users.map(user => (
          <ul key={user.id}>{user.first_name}{user.last_name}</ul>
        ))}
      </ul>
        </div>
    );
}

export default UserList;
