import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import BookingPage from './Pages/BookingPage'
import MyBookings from './Pages/MyBookings'
import BookNow from './Pages/BookNow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/ >}></Route>
          <Route path='/booking' element={<BookingPage />}></Route>
          <Route path='/mybookings' element={<MyBookings />}></Route>
          <Route path='/booknow' element={<BookNow />}></Route>
          <Route path='/mybookings/:userId' element={<MyBookings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
