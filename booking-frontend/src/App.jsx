import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import BookingPage from './Pages/BookingPage'
import SingIn from './Pages/SingIn'
import SingUp from './Pages/SingUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/ >}></Route>
          <Route path='/SingIn' element={<SingIn />}></Route>
          <Route path='/SingUp' element={<SingUp />}></Route>
          <Route path='/booking' element={<BookingPage />}/></Routes>
      </BrowserRouter>
    </>
  )
}

export default App
