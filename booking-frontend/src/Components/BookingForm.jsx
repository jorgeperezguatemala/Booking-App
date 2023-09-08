import React from 'react'
import Amenities from './Amenities'

const BookingForm = () => {
  return (
    <>
      <div className='container bg-gray-200 rounded-xl'>

        <div className='flex'><Amenities /></div>
        
        <form action="/booknowconfirm" className='pt-5'>
          <div className='flex justify-center items-center bg-black rounded-2 text-white'>
            <label htmlFor="">Check in</label>
            <input placeholder='Check in' type="date" name="Check in" id="" className='shadow appearance-none border rounded m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            <label htmlFor="">Check out</label>
            <input placeholder='' type="date" name="" id="" className='shadow appearance-none border rounded m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
          </div>

        <div name='Cards' className='flex justify-center items-center rounded-2 text-black pt-2 pb-2 justify-content-between px-1'>
         
          <div className="bg-white shadow-lg rounded-3">
	          <img src="../../public/Resources/Rooms/Suite King size.jpg" alt="" className='w-full h-48 object-cover rounded-2'/>
	          <div className="p-4">
		        <h5 className="text-2xl font-semibold">Suit King Bed</h5>
		        <p className="text-gray-500">Description</p>
	          </div>
	          <div className="p-2 flex justify-content-between">
		        <button type="submit" className="bg-black w-full text-white item-aling-center rounded-3 p-1">Book</button>
	          </div>
          </div>

        </div>




      </form>
      

      



        
      </div>
    </>
  )
}

export default BookingForm
