import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await fetch('http://localhost:8000/api/bookings');
        if (!response.ok) {
          throw new Error('Error al obtener las reservas');
        }
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error al obtener las reservas:', error);
      }
    }

    fetchBookings();
  }, []);

  return (
    <>
    <NavBar/>
    <div>
    <header className="bg-black text-white py-6">
        <h1 className="text-3xl font-semibold text-center">Reservations</h1>
      </header>
    <div className="container mx-auto p-4">
      <table className="min-w-full table-auto">
      <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Huésped ID</th>
            <th className="px-4 py-2">Habitación ID</th>
            <th className="px-4 py-2">Check-In</th>
            <th className="px-4 py-2">Check-Out</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2">Tipo de Pago</th>
            <th className="px-4 py-2">Actualizado en</th>
            <th className="px-4 py-2">Creado en</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td className="border px-4 py-2">{booking.id}</td>
              <td className="border px-4 py-2">{booking.guest_id}</td>
              <td className="border px-4 py-2">{booking.room_id}</td>
              <td className="border px-4 py-2">{booking.check_in}</td>
              <td className="border px-4 py-2">{booking.check_out}</td>
              <td className="border px-4 py-2">{booking.status}</td>
              <td className="border px-4 py-2">{booking.payment_type}</td>
              <td className="border px-4 py-2">{booking.updated_at}</td>
              <td className="border px-4 py-2">{booking.created_at}</td>
            </tr>
          ))}
        </tbody>      </table>
    </div>
    </div>
    </>
  );
};

export default MyBookings;

