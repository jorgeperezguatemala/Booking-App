import React from 'react'

const BookingPage = () => {
  return (
    <>

      <main class="container mx-auto mt-8">

        <section class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold mb-4 flex items-center justify-center h-full" style={{color: 'black'}}>Make a reservation</h2>
            <form>
                <div class="grid grid-cols-2 gap-4">

                    <div class="col-span-1">
                        <label for="nombre" class="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="nombre" name="nombre" class="mt-1 p-2 w-full border rounded-md" required/>
                    </div>
                    <div class="col-span-1">
                        <label for="fecha-checkin" class="block text-sm font-medium text-gray-700">Date of check-in</label>
                        <input type="date" id="fecha-checkin" name="fecha-checkin" class="mt-1 p-2 w-full border rounded-md" required/>
                    </div>
                    <label for="habitacion" class="block text-sm font-medium text-gray-700">Room Type</label>
                        <select id="habitacion" name="habitacion" class="block text-sm font-medium text-gray-700">
                          <option value="individual">Single Room</option>
                          <option value="doble">Double 2 Queen</option>
                          <option value="suite">Suite King size</option>
                          <option value="familiar">Family Room</option>
                        </select>

                </div>

                <div class="mt-4">
                    <button type="submit" class="bg-black text-white px-4 py-2 rounded-md mt-4 font-bold">Reserve</button>
                </div>
            </form>
        </section>

      </main>

    </>
  )
}

export default BookingPage