import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SingUpLogic(props) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
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

    // logica para mandar los datos al servidor (por revisar dependiendo del nombre de la api)

    try {
      // Enviar datos al servidor
      const response = await fetch('/api/guests', {
        method: 'POST', // guardar los datos
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // pasar la data a json
      });

      if (response.ok) {
        // respuesta exitosa (podemos agregar un link to a la pagina SingIn, para que inice sesion)
        <Link to='/singin'/>
        console.log('Registro exitoso');
        // error por si mal algun dato
      } else {
        console.error('Error al registrar');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }

  };

  // propiedades
  return props.children(formData, handleFormChange, handleFormSubmit);
}

export default SingUpLogic;
