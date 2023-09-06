import { Link } from "react-router-dom"
import { Modal } from "./modal"
import { useState } from "react"

const NavBar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


  return (
    <>
    <div className="container">

        <div className='w-full bg-black text-white flex justify-between items-center px-2'>
            <p className="bg-black">When was the last time you get awesome?</p>
            <div className='flex' >
                <p className='px-2 bg-black' >Contact us for more information:</p>
                <p className='px-2 bg-black' ><i class="fa-solid fa-phone bg-black"></i> +503 9876 1234</p>
                <p className='px-2 bg-black' ><i class="fa-solid fa-envelope bg-black"></i> info@surfsivarlodge.com</p>
            </div>
            <Link className='uppercase bg-black' to="/singin">Sing in</Link>
        </div>

        <nav className='w-full bg-white text-white text-center relative'>
            <div className='flex justify-between items-center px-4 py-4'>
                <img src="/public/Resources/Logo.png" alt="Logo" />
                <ul className='flex'>
                    <li>
                        <Link to="/" className='text-black hover:text-yellow-500 px-4 uppercase' >HOME</Link>
                    </li>   
                    <li>
                        <Link to="/" className='text-black hover:text-yellow-500 px-4 uppercase' >surf trips</Link>
                    </li>
                    <li>
                        <Link to="/mybookings" className='text-black hover:text-yellow-500 px-4 uppercase' >My bookings</Link>
                    </li>
                    <li>
                        <Link to="/" className='text-black hover:text-yellow-500 px-4 uppercase' >ABOUT US</Link>
                    </li>
                </ul>
                    <button type='submit' className='bg-black text-white hover:bg-zinc-900 hover:text-white font-bold py-3 px-5 rounded animate-bounce' onClick={openModal}>BOOK NOW</button>
                    {isModalOpen && (
                    <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
                    )}
            </div>
        </nav>

    </div>
    </>
  )
}

export default NavBar