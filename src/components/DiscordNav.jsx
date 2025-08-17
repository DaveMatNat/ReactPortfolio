import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs"
import { FaFire, FaPoo } from "react-icons/fa"

function DiscordNav() {
    const lst = [
        <FaFire size={28} />,
        <BsPlus size={32} />,
        <BsFillLightningFill size={20} />,
        <FaPoo size={20} />,
        <FaFire size={28} />,
        <BsPlus size={32} />,
        <BsFillLightningFill size={20} />,
        <FaPoo size={20} />

    ]

    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg">
                {lst.map((icons, iconIndex) => {
                    return (
                        <NavIcon icon={icons} />
                    )
                })}
            </div>
        </>
    )
}

function NavIcon({ icon, text = ' tooltip 💡' }) {
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {icon}
            </span>
        </div>
    )
}

export default DiscordNav