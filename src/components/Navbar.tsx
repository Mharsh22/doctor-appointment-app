import { Link, NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className="flex justify-between bg-[#2a4d69] px-8 py-4 text-[#e7eff6]">
            <div>
                <Link to={"/"} className="font-bold text-lg">Doctor's Hub</Link>
            </div>
            <div className="flex gap-6">
                <NavLink to={"/"} className={({ isActive }) =>
                    `text-sm font-medium hover:opacity-75 transition-opacity ${isActive ? "font-bold underline" : ""}`
                }>Home</NavLink>
                <NavLink to={"/appointment"} className={({ isActive }) =>
                    `text-sm font-medium hover:opacity-75 transition-opacity ${isActive ? "font-bold underline" : ""}`
                }>My Appointments</NavLink>
            </div>
        </nav>
    )
}
export default Navbar