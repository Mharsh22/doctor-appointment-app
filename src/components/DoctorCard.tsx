import { useNavigate } from 'react-router-dom';

type DoctorCardProps = {
    id: number
    name: string
    specialty: string
    experience: number
}
function DoctorCard({ id, name, specialty, experience }: DoctorCardProps) {
    const navigate = useNavigate()
    return (

        <div
            className="flex gap-2 border border-gray-200 rounded-lg p-4 shadow-sm mb-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400"
            onClick={() => navigate(`/doctor/${id}`)}
        >
            <div>
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl flex items-center justify-center mb-3">
                    {name[0]}
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-500 text-sm">{specialty}</p>
                <p>Experience: {experience} years</p>
            </div>
        </div>

    )
}

export default DoctorCard