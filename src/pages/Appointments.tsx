import { useEffect, useState } from "react";
type Appointment = {
    id: number
    doctorName: string
    name: string
    date: string
    time: string
}
function Appointments() {
    const [appointments, setAppointments] = useState<Appointment[]>([])
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('appointments') ?? '[]')
        setAppointments(saved)
    }, [])

    const cancelAppointment = (id: number) => {
        const updated = appointments.filter((a) => a.id !== id)
        localStorage.setItem('appointments', JSON.stringify(updated))
        setAppointments(updated)
    }

    return (
        <div className="max-w-3xl mx-auto px-6 py-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">My Appointments</h1>
            {appointments.length === 0 && <p>No appointments booked yet.</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {appointments.map((appointment) => (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                        <p className="font-semibold text-lg text-gray-800 mb-2">Dr. {appointment.doctorName}</p>
                        <p className="text-gray-500 text-sm">👤 Patient: {appointment.name}</p>
                        <p className="text-gray-500 text-sm">📅 {appointment.date}</p>
                        <p className="text-gray-500 text-sm">🕐 {appointment.time}</p>
                        <button className="mt-4 text-sm text-red-500 border border-red-300 px-4 py-1 rounded-lg hover:bg-red-50 transition-colors" onClick={() => cancelAppointment(appointment.id)}>
                            Cancel
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Appointments