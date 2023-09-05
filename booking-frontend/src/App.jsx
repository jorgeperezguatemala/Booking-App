import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import BookingPage from './Pages/BookingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/ >}></Route>
          <Route path='/booking' element={<BookingPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
