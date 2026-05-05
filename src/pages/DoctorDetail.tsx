import { useParams, useNavigate } from 'react-router-dom'
import { doctors } from '../data/doctors';

function DoctorDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const doctor = doctors.find((d) => d.id === Number(id))
    return (
        <div className="max-w-lg mx-auto px-6 py-6">
            {doctor ?
                (<div className='shadow-md rounded-lg max-w-md mx-auto p-6'>
                                <button type='button' onClick={() => navigate(-1)} className='bg-gray-100 px-3 py-1 rounded text-sm mt-2' > Back </button>

                    <div className="w-24 h-24 text-4xl mx-auto rounded-full bg-blue-100 text-blue-600 font-bold text-xl flex items-center justify-center mb-3">
{doctor.name.split(' ')[1][0]}                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 text-center mt-4">{doctor.name}</h2>
                    <div className="text-center mt-2">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm inline-block">
                            {doctor.specialty}
                        </span>
                    </div>
                    <p className="text-gray-600 text-center mt-3">⭐ {doctor.experience} years experience</p>
                    <div className="flex justify-center gap-6 mt-3">
                        <span className="text-sm text-gray-600">⭐ {doctor.rating} Rating</span>
                        <span className="text-sm text-gray-600">💰 ₹{doctor.fee} per visit</span>
                        <span className="text-sm text-gray-600">📍 {doctor.location}</span>
                    </div>

                    <div className="text-center mt-3">
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${doctor.available ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                            {doctor.available ? '✅ Available for appointments' : '❌ Currently unavailable'}
                        </span>
                    </div>

                    <div className="mt-5 bg-blue-50 rounded-lg p-4">
                        <p className="text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">About</p>
                        <p className="text-sm text-gray-700">{doctor.bio}</p>
                    </div>

                    <div className="mt-3 bg-gray-50 rounded-lg p-4">
                        <p className="text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">Education</p>
                        <p className="text-sm text-gray-700">🎓 {doctor.education}</p>
                    </div>
                    <button
                        type="button"
                        disabled={!doctor.available}
                        className={`w-full py-3 rounded-lg font-semibold mt-6 transition-colors ${doctor.available ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                        onClick={() => doctor.available && navigate(`/booking/${id}`)}
                    >
                        {doctor.available ? 'Book Appointment' : 'Not Available'}
                    </button>
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