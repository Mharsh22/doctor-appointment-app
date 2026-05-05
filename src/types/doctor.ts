export type Doctor = {
  id: number
  name: string
  specialty: string
  experience: number
  fee: number
  rating: number
  location: string
  available: boolean
  bio: string
  education: string
}

export type DoctorCardProps = {
  id: number
  name: string
  specialty: string
  experience: number
  available: boolean
}