import {useState} from "react";
import {Link} from "react-router-dom";
import {
    FaCar,
    FaDesktop,
    FaHome,
    FaLeaf,
    FaToolbox,
    FaTractor,
    FaUsers,
} from "react-icons/fa";

export const SidebarComponent = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="flex">
            <div
                className={`min-h-screen transition-all duration-300 bg-blue-900 ${
                    isSidebarOpen ? "w-64" : "w-16"
                }`}
            >
                <div className="flex items-center justify-between p-4">
                    <span
                        className={`font-bold text-xl text-white ${
                            !isSidebarOpen && "hidden"
                        }`}
                    >
                        Green Shadow
                    </span>
                    <button
                        onClick={toggleSidebar}
                        className="text-white p-2 rounded hover:bg-white hover:text-blue-900 transition-colors duration-300"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={
                                    isSidebarOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu */}
                <ul className="space-y-2 mt-10">
                    {[
                        {to: "/", icon: FaHome, label: "Dashboard"},
                        {to: "/fields", icon: FaTractor, label: "Field"},
                        {to: "/crops", icon: FaLeaf, label: "Crop"},
                        {to: "/vehicles", icon: FaCar, label: "Vehicle"},
                        {to: "/staffs", icon: FaUsers, label: "Staff"},
                        {to: "/logs", icon: FaDesktop, label: "Monitoring Log"},
                        {to: "/equipments", icon: FaToolbox, label: "Equipment"},
                    ].map(({to, icon: Icon, label}) => (
                        <li key={to}>
                            <Link
                                to={to}
                                className={`flex items-center ${
                                    isSidebarOpen ? "space-x-3" : "justify-center"
                                } w-full p-3 rounded-md text-white transition-all duration-300 hover:bg-white hover:text-blue-900`}
                            >
                                <Icon size={24}/>
                                {isSidebarOpen && (
                                    <span className="text-lg">{label}</span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-grow p-6"></div>
        </div>
    );
};
