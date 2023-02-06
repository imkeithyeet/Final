import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

function Dashboard({user, setUser}) {
    useEffect(() => {
        if (user) {
          fetch("/users" + user.id)
            .then((res) => res.json())
            .then((data) => {
              setUser(data);
            });
        }
      }, []);
    return (
        <div className="profile">
            <Link to={`/listing?id=${user.id}`}>
                    <h3>Hi</h3>
                </Link>
        </div>
    );
}

export default Dashboard;
