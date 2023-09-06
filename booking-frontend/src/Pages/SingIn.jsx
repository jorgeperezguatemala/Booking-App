import { Link } from "react-router-dom"
import NavBar from "../Components/NavBar"

const SingIn = () => {
  return (
    <>
    <NavBar/>
    <body className="bg-gray-200 flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <form>
                <div className="mb-4">
                    <label for="email" className="block text-gray-600">E-mail:</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-black" placeholder="correo@example.com" required/>
                </div>
                <div className="mb-4">
                    <label for="password" className="block text-gray-600">Password:</label>
                    <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-black" placeholder="********" required/>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:bg-gray-800">
                        Log In
                    </button>
                    <a href="#" className="text-gray-600 hover:underline">Forgote password?</a>
                </div>
            </form>
            <div className="text-center">
                <p className="text-gray-600">Not registered yet?</p>
                <Link to="/singup" className="text-black font-semibold hover:underline">Sing Up</Link>
            </div>
        </div>
    </body>

    </>
  )
}

export default SingIn