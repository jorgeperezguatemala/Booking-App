import 'react-datepicker/dist/react-datepicker.css';

import React, { useState } from 'react';

const BookingForm = () => {

  return (

    <div className="max-w-md mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl justify-center items-center">
      <div className="md:flex">
        <div className='w-full'>
          <div className="uppercase tracking-wide text-xl font-semibold mb-1 text-center text-black">
            Make a new booking
          </div>
          <form action="/booknowconfirm">
            <div className='flex justify-content-between justify-center items-center'>
              <label htmlFor="">Check in</label>
              <input placeholder='' type="date" name="Check in" id="" className='shadow appearance-none border rounded m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
              <label htmlFor="">Check out</label>
              <input placeholder='' type="date" name="" id="" className='shadow appearance-none border rounded m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            </div>

            <div className='flex justify-content-between justify-center items-center'>
              <input placeholder='Number of guests' type="number" name="" id="" className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                <select placeholder='Type of room'name="Type of room" id="" className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                  <option value="" disabled selected>Type of room</option>
                  <option value="opcion1">Suite 1 King Size bed</option>
                  <option value="opcion2">Double 2 Queen beds</option>
                  <option value="opcion3">Single Room</option>
                  <option value="opcion4">Family Room</option>
                </select>
                <select placeholder='Breakfast'name="Type of room" id="" className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                  <option value="" disabled selected>Breakfast</option>
                  <option value="opcion1">Breakfast included</option>
                  <option value="opcion2">Breakfast not included</option>
                </select>
            </div>
            <button type="submit" className='bg-black text-white font-bold py-1 px-5 my-5 rounded w-full'>Search</button>
          </form>
          <img src="https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
      </div>
    </div>

  )
}

export default BookingForm
