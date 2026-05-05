import { useParams, useNavigate } from 'react-router-dom'
import { doctors } from '../data/doctors';

function DoctorDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const doctor = doctors.find((d) => d.id === Number(id))
    return (
        <div className="max-w-lg mx-auto px-6 py-8">
            <button type='button' onClick={() => navigate(-1)} className='bg-gray-100 px-3 py-1 rounded text-sm mt-2' > Back </button>
            {doctor ?
                (<div className='shadow-md rounded-lg max-w-md mx-auto p-4 mt-4'>
                    <div className="w-24 h-24 text-4xl mx-auto rounded-full bg-blue-100 text-blue-600 font-bold text-xl flex items-center justify-center mb-3">
                        {doctor.name[0]}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 text-center mt-4">{doctor.name}</h2>
                    <div className="text-center mt-2">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm inline-block">
                            {doctor.specialty}
                        </span>
                    </div>
                    <p className="text-gray-600 text-center mt-3">⭐ {doctor.experience} years experience</p>                    <button type="button" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-blue-700 transition-colors" onClick={() => navigate(`/booking/${id}`)}>Book Appointment</button>
                </div>) :
                (
                    <div className='border border-solid shadow-md rounded-lg max-w-md mx-auto p-4'>
                        <p>Doctor not found</p>
                    </div>
                )}

        </div>
    )
}
export default DoctorDetail