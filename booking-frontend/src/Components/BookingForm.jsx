import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {
  return (
    <>

    <div className="max-w-md mx-auto bg-gray-40 rounded-xl shadow-md overflow-hidden md:max-w-2xl justify-center items-center">
      <div className="md:flex">
        <div className='p-8 w-full'>
          <div className="uppercase tracking-wide text-xl font-semibold mb-1 text-center text-black">
            Make a new booking
          </div>
          <form action="">
            <input placeholder='Age' type="date" name="" id="" className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            <input placeholder='Number of guests' type="number" name="" id="" className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            <select placeholder='Type of room'name="Type of room" id="" className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
              <option value="" disabled selected>Type of room</option>
              <option value="opcion1">Suite 1 King Size bed</option>
              <option value="opcion2">Double 2 Queen beds</option>
              <option value="opcion3">Single Room</option>
              <option value="opcion4">Family Room</option>
            </select>
            <input placeholder='Number of rooms' type="number" name="" id="" className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            <button className='bg-black hover:bg-cyan-800 text-white font-bold py-2 px-3 rounded m-3 w-full focus:outline-none focus:shadow-outline' type='submit'>
              <i class="fa-solid fa-magnifying-glass fa-beat"></i>
            </button>

          </form>
        </div>
      </div>
    </div>

    </>
  )
}

export default BookingForm
