import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DoctorDetail from './pages/DoctorDetail'
import BookAppointment from './pages/BookAppointment'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking/:id" element={<BookAppointment />} />
      <Route path="/doctor/:id" element={<DoctorDetail />} />
      <Route path="/appointment" element={<Appointments/>} />
    </Routes>
    </>
  )
}

export default App
