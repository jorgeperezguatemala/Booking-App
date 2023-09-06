
/* const MyBookings = () => {
  return (
    <div>MyBookings</div>
  )
}

export default MyBookings */

// (Página Genérica)
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function MyBookings() {
  const { userId } = useParams(); // Obtener el ID de usuario de la URL
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // solicitar informacion basandonos en el id del usuario (tabla guest)
    fetch(`/api/guest/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error:', error));
  }, [userId]);

  return (

    <>
    <NavBar/>
    <div>
      <h2>User profile</h2>
      {userData ? (
        <div>
          <p>Name: {userData.first_name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
}

export default MyBookings;
