import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { doctors } from "../data/doctors";

function BookAppointment() {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: ""
    })
    const [error, setError] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();

    const bookDoctor = doctors.find((d) => d.id === Number(id));

    return (
        <div className="max-w-lg mx-auto px-6 py-8">
            <button type='button' onClick={() => navigate(-1)} className='bg-gray-100 px-3 py-1 rounded text-sm mt-2' > Back </button>
            <div className="bg-white rounded-2xl shadow-md p-8 mt-4">

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Book with Dr. {bookDoctor?.name}
                </h2>
                <form action="post" className="flex flex-col gap-2 justify-center m-5" onSubmit={(e) => {
                    e.preventDefault()

                    if (!formData.name || !formData.date || !formData.time) {
                        setError("Please fill the form details for booking.")
                        return
                    } else {
                        const appointment = {
                            id: Date.now(),
                            doctorName: bookDoctor?.name,
                            ...formData
                        }
                        const existing = JSON.parse(localStorage.getItem('appointments') || '[]')
                        localStorage.setItem('appointments', JSON.stringify([...existing, appointment]))
                        navigate('/appointment')
                    }
                }}>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">Patient Name</label>
                        <input
                            type="text"
                            placeholder="Enter Patient Name"
                            value={formData.name}
                            onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value })
                                setError('')
                            }}
                            className="px-2 py-1 rounded border-2 border border-solid" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">Appointment Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={(e) => {
                                setFormData({ ...formData, date: e.target.value })
                                setError('')
                            }}
                            className="px-2 py-1 rounded border-2 border border-solid"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">Appointment Time</label>
                        <select name="time" id="time"
                            value={formData.time}
                            onChange={(e) => {
                                setFormData({ ...formData, time: e.target.value })
                                setError('')
                            }}
                            className="px-2 py-1 rounded border-2 border border-solid">
                            <option value="" disabled>Select the time...</option>
                            <option value="9AM">9:00AM</option>
                            <option value="10AM">10:00AM</option>
                            <option value="11AM">11:00AM</option>
                            <option value="12PM">12:00PM</option>
                        </select>
                    </div>
                    {error && <span className="text-red-500 font-semibold">{error}</span>}
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mt-2 hover:bg-blue-700 transition-colors">
                        Confirm Booking
                    </button>
                </form>
            </div>
        </ div>
    )
}
export default BookAppointment