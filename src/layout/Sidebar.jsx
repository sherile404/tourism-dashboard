import {
  FaHome,
  FaTasks,
  FaProjectDiagram,
  FaClock,
  FaCarAlt,
} from "react-icons/fa";
import { FaLocationPin, FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="hidden  text-slate-400 w-60 h-full md:flex flex-col fixed border-r">
      <div className="flex items-center justify-center text-lg text-white font-semibold py-4 border-b border-slate-600">
         TOURISM
      </div>

      <div className="flex-grow mt-6 uppercase">
        {/* Dashboard */}
        <Link to="/dashboard">
          <div className="group py-6 pl-6 flex items-center cursor-pointer transition hover:text-sky-400 hover:bg-slate-700 hover:border-l-4 hover:border-sky-500">
            <FaHome className="text-2xl mr-3" />
            <h6 className="text-sm group-hover:translate-x-2 transition">
              Intro
            </h6>
          </div>
        </Link>

        {/* Categories */}
        <Link to="/categories">
          <div className="group py-6 pl-6 flex items-center cursor-pointer transition hover:text-sky-400 hover:bg-slate-700 hover:border-l-4 hover:border-sky-500">
            <FaTasks className="text-2xl mr-3" />
            <h6 className="text-sm group-hover:translate-x-2 transition">
              Categories
            </h6>
          </div>
        </Link>

        {/* Aspects */}
        <Link to="/aspects">
          <div className="group py-6 pl-6 flex items-center cursor-pointer transition hover:text-sky-400 hover:bg-slate-700 hover:border-l-4 hover:border-sky-500">
            <FaProjectDiagram className="text-2xl mr-3" />
            <h6 className="text-sm group-hover:translate-x-2 transition">
              Aspects
            </h6>
          </div>
        </Link>

        {/* Timeline */}
        <Link to="/timeline">
          <div className="group py-6 pl-6 flex items-center cursor-pointer transition hover:text-sky-400 hover:bg-slate-700 hover:border-l-4 hover:border-sky-500">
            <FaClock className="text-2xl mr-3" />
            <h6 className="text-sm group-hover:translate-x-2 transition">
              Timeline
            </h6>
          </div>
        </Link>

        {/* Locations */}
        <Link to="/locations">
          <div className="group py-6 pl-6 flex items-center cursor-pointer transition hover:text-sky-400 hover:bg-slate-700 hover:border-l-4 hover:border-sky-500">
            <FaLocationPin className="text-2xl mr-3" />
            <h6 className="text-sm group-hover:translate-x-2 transition">
              Locations
            </h6>
          </div>
        </Link>

        {/*explore */}
        <Link to="/explore-regions">
          <div className="group py-6 pl-6 flex items-center cursor-pointer transition hover:text-sky-400 hover:bg-slate-700 hover:border-l-4 hover:border-sky-500">
            <FaCarAlt className="text-2xl mr-3" />
            <h6 className="text-sm group-hover:translate-x-2 transition">
              Explore
            </h6>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
