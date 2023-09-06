import React, { useState } from 'react';
import SingIn from '../Pages/SingIn';
import { withRouter } from 'react-router-dom';

function SingInLogic({ history }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar datos de inicio de sesión al servidor para autenticar (a revisar segun la base de datos)
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {

        const userData = await response.json()
        const userId = userData.id
        
        // Inicio de sesión exitoso
        // Redirigir a my bookings
        history.push(`/mybookings/${userId}`); 
      } else {
        // Inicio de sesión fallido
        console.error('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <SingIn
      formData={formData}
      handleFormChange={handleFormChange}
      handleFormSubmit={handleFormSubmit}
    />
  );
}

export default withRouter(SingInLogic);
