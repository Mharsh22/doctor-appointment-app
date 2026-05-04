import { useParams, useNavigate } from 'react-router-dom'
import { doctors } from '../data/doctors';

function DoctorDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const doctor = doctors.find((d) => d.id === Number(id))
    return (
        <div>
            <button type='button' onClick={() => navigate(-1)} className='bg-gray-100 px-3 py-1 rounded text-sm mt-2' > Back </button>
            <h1 className='!mt-4'>Doctor Details</h1>
            {doctor ?
                (<div className='border border-solid shadow-md rounded-lg max-w-md mx-auto p-4'>
                    <p>Name - {doctor.name}</p>
                    <p>Speciality - {doctor.specialty}</p>
                    <p>Experience - {doctor.experience} years</p>
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