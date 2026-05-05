import { useNavigate } from 'react-router-dom';
import type { DoctorCardProps } from '../types/doctor'

function DoctorCard({ id, name, specialty, experience, available }: DoctorCardProps) {
    const navigate = useNavigate()
    return (

<div
    className="relative flex gap-2 border border-gray-200 rounded-lg p-4 shadow-sm mb-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400"
    onClick={() => navigate(`/doctor/${id}`)}
>
    <span className={`absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-medium ${available ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
        {available ? 'Available' : 'Unavailable'}
    </span>

    <div>
        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl flex items-center justify-center mb-3">
            {name.split(' ')[1][0]}
        </div>
    </div>
    <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">{specialty}</p>
        <p className="text-sm text-gray-600">Experience: {experience} years</p>
    </div>
</div>

    )
}

export default DoctorCard