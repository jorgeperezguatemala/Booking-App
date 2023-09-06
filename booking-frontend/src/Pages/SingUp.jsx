import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import SingUpLogic from '../Components/SingUpLogic'

const SingUp = () => {

  return (
    <>
      <NavBar/>
      <body className="bg-gray-200 flex justify-center items-center h-screen">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
              <h1 className="text-2xl font-semibold mb-4">Sing Up</h1>

              <SingUpLogic>
                 {(formData, handleFormChange, handleFormSubmit) => (
              
              <form onSubmit={handleFormSubmit}>
                  <div className="mb-4">
                      <label for="nombre" className="block text-gray-600">Name:</label>
                      <input type="text" id="first_name" name="first_name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-black" placeholder="Nombre" required value={formData.first_name} onChange={handleFormChange}/>
                  </div>
                  <div className="mb-4">
                      <label for="apellido" className="block text-gray-600">Last Name:</label>
                      <input type="text" id="last_name" name="last_name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-black" placeholder="Apellido" required value={formData.last_name} onChange={handleFormChange}/>
                  </div>
                  <div className="mb-4">
                      <label for="telefono" className="block text-gray-600">Phone:</label>
                      <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-black" placeholder="Número de Teléfono" required value={formData.phone} onChange={handleFormChange}/>
                  </div>
                  <div className="mb-4">
                      <label for="email" className="block text-gray-600">E-mail:</label>
                      <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-black" placeholder="correo@example.com" required value={formData.email} onChange={handleFormChange}/>
                  </div>
                  <div className="mb-4">
                      <label for="password" className="block text-gray-600">Password:</label>
                      <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-black" placeholder="********" required value={formData.password} onChange={handleFormChange}/>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                      <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:bg-gray-800">Sing Up</button>
                      <Link to="/singin" className="text-gray-600 hover:underline">already have an accont? Sing In</Link>
                  </div>
              </form>
                 )}
              </SingUpLogic>
          </div>
      </body>

    </>
  )
}

export default SingUp