import { useEffect, useState } from "react";
type Appointment = {
  id: number
  doctorName: string
  name: string
  date: string
  time: string
}
function Appointments(){
const [appointments, setAppointments] = useState<Appointment[]>([])
    useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('appointments') ?? '[]')
    setAppointments(saved)    
}, [])
    
    return(
        <div>
            <h1>My Appointments</h1>
            <ul className='flex gap-20 m-5'>
            {appointments.map((appointment) => (
                <li key={appointment.id} className="border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <p>Doctor's Name: {appointment.doctorName}</p>
                    <p>Apppointment Date: {appointment.date}</p>
                    <p>Apppointment Time: {appointment.time}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}
export default Appointments