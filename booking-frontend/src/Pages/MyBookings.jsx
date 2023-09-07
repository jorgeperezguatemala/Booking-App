import { useState, useEffect} from "react";
import NavBar from "../Components/NavBar";

const MyBookings = () => {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // carga de datos desde la api
    const fetchData = async () => {
      // Llamada a la API para obtener datos de reservas
      const response = await fetch('http://localhost:8000/api/bookings'); // reemplazar con la url correcta
      const data = await response.json();
      setBookings(data);
    };

    fetchData();
  }, []);

  return (

    <>
    <NavBar/>
    <div>
      <h2>User profile</h2>
        <p>Loading...</p>
    </div>
    </>

  );
}

export default MyBookings;
