import { useNavigate } from 'react-router-dom';

type DoctorCardProps = {
    id: number
    name: string
    specialty: string
    experience: number
}
function DoctorCard({id,name,specialty,experience}: DoctorCardProps) {
    const navigate = useNavigate()
    return (

        <div className="border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-gray-500 text-sm">{specialty}</p>
            <p>Experience: {experience} years</p>
            <button type="button" className="bg-blue-500 text-white px-2 rounded" onClick={() => navigate(`/booking/${id}`)}>Book</button>
        </div>

    )
}

export default DoctorCard