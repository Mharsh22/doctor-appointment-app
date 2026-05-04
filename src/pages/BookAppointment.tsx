import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { doctors } from "../data/doctors";

function BookAppointment() {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: ""
    })
    const { id } = useParams();
    const navigate = useNavigate();

    const bookDoctor = doctors.find((d) => d.id === Number(id));

    return (
        <div>
            <button type='button' onClick={() => navigate(-1)} className='bg-gray-100 px-3 py-1 rounded text-sm mt-2' > Back </button>

            <h1>Appointment with Doctor : {bookDoctor?.name}</h1>
            <form action="post" className="flex flex-col gap-2 justify-center m-5" onSubmit={(e) => {
                e.preventDefault()
                const appointment = {
                    id: Date.now(),
                    doctorName: bookDoctor?.name,
                    ...formData
                }
                const existing = JSON.parse(localStorage.getItem('appointments') || '[]')
                localStorage.setItem('appointments', JSON.stringify([...existing, appointment]))
                navigate('/appointment')
            }}>
                <input
                    type="text"
                    placeholder="Enter Patient Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-2 py-1 rounded border-2 border border-solid" />
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="px-2 py-1 rounded border-2 border border-solid"
                />
                <select name="time" id="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="px-2 py-1 rounded border-2 border border-solid">
                    <option value="" disabled>Select the time...</option>
                    <option value="9AM">9:00AM</option>
                    <option value="10AM">10:00AM</option>
                    <option value="11AM">11:00AM</option>
                    <option value="12PM">12:00PM</option>
                </select>
                <button type="submit" className="bg-blue-500 text-white px-2 rounded">Sumbit</button>
            </form>
        </ div>
    )
}
export default BookAppointment