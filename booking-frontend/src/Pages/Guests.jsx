import { useState } from "react";
import NavBar from "../Components/NavBar";

const Guests = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/guests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al agregar al huésped");
      }

      // Limpiar el formulario después de agregar al huésped
      setFormData({
        first_name: "",
        last_name: "",
        email_address: "",
        phone: "",
      });

      alert("Huésped agregado exitosamente.");
    } catch (error) {
      console.error("Error al agregar al huésped:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="max-w-md mx-auto p-4">
        <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-4">Add a new guest</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="first_name" className="block text-gray-600">
                  First Name:
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full border rounded py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="last_name" className="block text-gray-600">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full border rounded py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email_address" className="block text-gray-600">
                  E-mail address:
                </label>
                <input
                  type="email"
                  id="email_address"
                  name="email_address"
                  value={formData.email_address}
                  onChange={handleChange}
                  className="w-full border rounded py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-600">
                  phone:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded py-2 px-3"
                  required
                />
              </div>
              <button
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-3 rounded m-3 w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guests;
