import { useEffect, useState } from "react";

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
          <li key={user.id}>{user.first_name}{user.last_name}</li>
        ))}
      </ul>
        </div>
    );
}

export default UserList;
