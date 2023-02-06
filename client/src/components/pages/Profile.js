import React from 'react';
import { Navigate } from 'react-router-dom'


const Profile = ({authorized}) => {
    if (!authorized){
        return <Navigate to ="/login"/>
    }
    return (
        <div>
            If you are here
        </div>
    );
}

export default Profile;
