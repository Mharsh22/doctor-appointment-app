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
            <h1>Doctor's Hub</h1>
            <input type="text" value={searchText} placeholder='Search doctors...' onChange={(e) => setSearchText(e.target.value)} className='border m-5 p-1' />
            {filteredDoctors.length === 0 ?
                (<p>No Doctors found</p>) :
                (<div className='flex gap-20 m-5'>
                    {filteredDoctors.map((doctor) => (
                        <DoctorCard
                            key={doctor.id}
                            id={doctor.id}
                            name={doctor.name}
                            specialty={doctor.specialty}
                            experience={doctor.experience} />
                    ))}
                </div>)
            }

        </>
    )
}
export default Home