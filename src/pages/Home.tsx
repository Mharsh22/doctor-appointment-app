import { useState } from 'react'
import DoctorCard from '../components/DoctorCard'
import { doctors } from '../data/doctors';

function Home() {
    const [searchText, setSearchText] = useState("");
    const filteredDoctors = doctors.filter((doctor) => (
        doctor.name.toLowerCase().includes(searchText.toLowerCase()) || doctor.specialty.toLowerCase().includes(searchText.toLowerCase())
    ))
    return (
        <>
            <div className="bg-blue-50 py-12 text-center px-4">
            <h1 className="text-4xl font-bold text-gray-800">Doctor's hub</h1>
            <p className="text-gray-500 mt-2 text-lg">Find and book doctors near you.</p>
            </div>
<div className="flex justify-center my-8">
            <input type="text" className="w-full max-w-md border border-gray-300 rounded-full px-5 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300" value={searchText} placeholder='Search doctors...' onChange={(e) => setSearchText(e.target.value)} />
            </div>
            {filteredDoctors.length === 0 ?
                (<p>No Doctors found</p>) :
                (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-10">
                    {filteredDoctors.map((doctor) => (
                        <DoctorCard
                            key={doctor.id}
                            id={doctor.id}
                            name={doctor.name}
                            specialty={doctor.specialty}
                            experience={doctor.experience}
                            available = {doctor.available} />
                    ))}
                </div>)
            }

        </>
    )
}
export default Home