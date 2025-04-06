// app/components/Layout/Sidebar.tsx
"use client"; // Mark this component as a client component

import { FaChartBar, FaFileAlt, FaUserPlus, FaChevronDown, FaChevronRight, FaUsers, FaFilm, FaCog, FaUsb, FaBorderAll, FaVideo } from "react-icons/fa";
import { ImFilm } from "react-icons/im";
import "./SidebarStyle.css"
import { FaHandshakeAngle, FaListCheck } from "react-icons/fa6";
import { LuBadgeIndianRupee } from "react-icons/lu";
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';

interface SidebarProps {
  isSidebarVisible: boolean;
  activeSubMenu: string | null;
  activeMenu: string | null;
  activeThirdLevel: { [key: string]: boolean };
  toggleSubMenu: (menu: string) => void;
  toggleThirdLevelMenu: (menu: string) => void;
}

const Sidebar = ({
  isSidebarVisible,
  activeSubMenu,
  activeMenu,
  activeThirdLevel,
  toggleSubMenu,
  toggleThirdLevelMenu,
}: SidebarProps) => {
  return (
    <div className="flex transition-all duration-300">
      {/* Sidebar */}
      <aside
        className="bg-gray-900 text-white h-full fixed top-0 left-0 pt-[52px] flex transition-all duration-300"
        style={{
          width: isSidebarVisible ? (activeSubMenu ? "350px" : "120px") : "0",
          opacity: isSidebarVisible ? 1 : 0,
        }}
      >
        {/* Main Menu */}
        <div id="main-menu" className="sidebar w-[120px] bg-gray-800 h-full overflow-y-auto">
          <ul className="p-1 space-y-6">
            {/* Dashboard Button */}
            <li className="text-center">
              <button
                onClick={() => toggleSubMenu("dashboard")}
                className={`flex flex-col items-center w-full p-4 hover:bg-gray-700 rounded focus:outline-none relative 
                  ${activeMenu === "dashboard" ? "mainActive" : ""}`}
              >
                <SettingsInputSvideoIcon className="text-3xl" />
                <span className="mt-2 text-[13px]">Dashboard</span>
              </button>
            </li>

             {/* Cabel Tv */}
             <li className="text-center">
              <button
                onClick={() => toggleSubMenu("cabeltv")}
                className={`flex flex-col items-center w-full p-4 hover:bg-gray-700 rounded focus:outline-none relative 
                  ${activeMenu === "cabeltv" ? "mainActive" : ""}`}
              >
                <SatelliteAltIcon className="text-3xl" />
                <span className="mt-2 text-[13px]">Cabel TV</span>
              </button>
            </li>

            {/* Users Button */}
            <li className="text-center">
              <button
                onClick={() => toggleSubMenu("users")}
                className={`flex flex-col items-center w-full p-4 hover:bg-gray-700 rounded focus:outline-none relative 
                  ${activeMenu === "users" ? "mainActive" : ""}`}
              >
                <FaUsers className="text-3xl" />
                <span className="mt-2 text-[13px]">Users</span>
              </button>
            </li>

            {/* Titles Button */}
            <li className="text-center">
              <button
                onClick={() => toggleSubMenu("videos")}
                className={`flex flex-col items-center w-full p-4 hover:bg-gray-700 rounded focus:outline-none relative 
                  ${activeMenu === "videos" ? "mainActive" : ""}`}
              >
                <ImFilm className="text-3xl" />
                <span className="mt-2 text-[13px]">Videos</span>
              </button>
            </li>

            {/* Partner Button */}
            <li className="text-center">
              <button
                onClick={() => toggleSubMenu("partners")}
                className={`flex flex-col items-center w-full p-4 hover:bg-gray-700 rounded focus:outline-none relative 
                  ${activeMenu === "partners" ? "mainActive" : ""}`}
              >
                <FaHandshakeAngle className="text-3xl" />
                <span className="mt-2 text-[13px]">Partners</span>
              </button>
            </li>

            {/* Billings Button */}
            <li className="text-center">
              <button
                onClick={() => toggleSubMenu("billings")}
                className={`flex flex-col items-center w-full p-4 hover:bg-gray-700 rounded focus:outline-none relative 
                  ${activeMenu === "billings" ? "mainActive" : ""}`}
              >
                <LuBadgeIndianRupee className="text-3xl" />
                <span className="mt-2 text-[13px]">Billings</span>
              </button>
            </li>

            {/* Settings Button */}
            <li className="text-center">
              <button
                onClick={() => toggleSubMenu("settings")}
                className={`flex flex-col items-center w-full p-4 hover:bg-gray-700 rounded focus:outline-none relative 
                  ${activeMenu === "settings" ? "mainActive" : ""}`}
              >
                <FaCog className="text-3xl" />
                <span className="mt-2 text-[13px]">Settings</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Sub-Menu */}
        <div
          id="sub-menu"
          className={`submenu overflow-y-auto bg-gray-700 border-l border-gray-600 transition-all duration-300 ${
            activeSubMenu ? "w-[230px] opacity-100" : "w-0 opacity-0"
          }`}
        >
          {activeSubMenu === "dashboard" && (
            <ul className="p-1 space-y-4 mt-2">
              <li>
                <button
                  className="flex justify-between items-center w-full p-3 hover:bg-gray-600 rounded text-sm"
                  onClick={() => toggleThirdLevelMenu("analytics")}
                >
                  <span className="mr-2 flex items-center">                    
                  <span className="mr-2 " >{activeThirdLevel["analytics"] ? <FaChevronDown /> : <FaChevronRight />}</span>
                     Analytics
                  </span>
                </button>

                {/* Third-Level Dropdown (Default Open) */}
                {activeThirdLevel["analytics"] && (
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/analytics/reports"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaFileAlt className="mr-2" /> Reports
                      </a>
                    </li>
                    <li>
                      <a
                        href="/analytics/charts"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaChartBar className="mr-2" /> Charts
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}

          {activeSubMenu === "cabeltv" && (
            <ul className="p-1 space-y-4 mt-2">
              <li>
                <button
                  className="flex justify-between items-center w-full p-3 hover:bg-gray-600 rounded text-sm"
                  onClick={() => toggleThirdLevelMenu("cabeltv")}
                >
                  <span className="flex items-center">                    
                  <span className="mr-2 " >{activeThirdLevel["cabeltv"] ? <FaChevronDown /> : <FaChevronRight />}</span>
                    Cabel TV
                  </span>
                </button>

                {/* Third-Level Dropdown (Default Open) */}
                {activeThirdLevel["cabeltv"] && (
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/cabeltv/active-listing"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaUsers className="mr-2" /> Active Listing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/cabeltv/manage-subscribers"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaUserPlus className="mr-2" /> Activate Subscriber
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button
                  className="flex justify-between items-center w-full p-3 hover:bg-gray-600 rounded text-sm"
                  onClick={() => toggleThirdLevelMenu("cabeltv")}
                >
                  <span className="flex items-center">                    
                  <span className="mr-2 " >{activeThirdLevel["cabeltv"] ? <FaChevronDown /> : <FaChevronRight />}</span>
                    Cabel Partners
                  </span>
                </button>

                {/* Third-Level Dropdown (Default Open) */}
                {activeThirdLevel["cabeltv"] && (
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/cabeltv/partner-listing"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaUsers className="mr-2" /> Partner Listing
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            
          )}

          {activeSubMenu === "users" && (
            <ul className="p-1 space-y-4 mt-2">
              <li>
                <button
                  className="flex justify-between items-center w-full p-3 hover:bg-gray-600 rounded text-sm"
                  onClick={() => toggleThirdLevelMenu("users")}
                >
                  <span className="flex items-center">                    
                  <span className="mr-2 " >{activeThirdLevel["users"] ? <FaChevronDown /> : <FaChevronRight />}</span>
                    Users
                  </span>
                </button>

                {/* Third-Level Dropdown (Default Open) */}
                {activeThirdLevel["users"] && (
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/users/subscribers"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaUsers className="mr-2" /> Subscriber List
                      </a>
                    </li>
                    <li>
                      <a
                        href="/users/adminstrators"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaUserPlus className="mr-2" /> Adminstrator List
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}

          {activeSubMenu === "videos" && (
            <ul className="p-1 space-y-4 mt-2">
              <li>
                <button
                  className="flex justify-between items-center w-full p-3 hover:bg-gray-600 rounded text-sm"
                  onClick={() => toggleThirdLevelMenu("videos")}
                >
                  <span className="flex items-center">                    
                  <span className="mr-2 " >{activeThirdLevel["videos"] ? <FaChevronDown /> : <FaChevronRight />}</span>
                    Videos
                  </span>
                </button>

                {/* Third-Level Dropdown (Default Open) */}
                {activeThirdLevel["videos"] && (
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/videos/titles"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaFilm className="mr-2" /> Titles
                      </a>
                    </li>
                    <li>
                      <a
                        href="/videos/episodes"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaVideo className="mr-2" /> Episodes
                      </a>
                    </li>
                    <li>
                      <a
                        href="/videos/category"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaListCheck className="mr-2" /> Category
                      </a>
                    </li>
                    <li>
                      <a
                        href="/videos/genres"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaListCheck className="mr-2" /> Genres
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="border-t-gray-50 border-t p-1">
                <button
                  className="flex justify-between items-center w-full p-3 hover:bg-gray-600 rounded text-sm"
                  onClick={() => toggleThirdLevelMenu("create")}
                >
                  <span className="flex items-center">                    
                  <span className="mr-2 " >{activeThirdLevel["create"] ? <FaChevronDown /> : <FaChevronRight />}</span>
                    Create New
                  </span>
                </button>

                {/* Third-Level Dropdown (Default Open) */}
                {activeThirdLevel["create"] && (
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/videos/titles/create"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaFilm className="mr-2" /> Create New Titles
                      </a>
                    </li>
                    <li>
                      <a
                        href="/videos/episodes/create"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaVideo className="mr-2" /> Create New Episodes
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
          {activeSubMenu === "partners" && (
            <ul className="p-1 space-y-4 mt-2">
              <li>
                <button
                  className="flex justify-between items-center w-full p-3 hover:bg-gray-600 rounded text-sm"
                  onClick={() => toggleThirdLevelMenu("partners")}
                >
                  <span className="flex items-center">                    
                  <span className="mr-2 " >{activeThirdLevel["partners"] ? <FaChevronDown /> : <FaChevronRight />}</span>
                    Partners
                  </span>
                </button>

                {/* Third-Level Dropdown (Default Open) */}
                {activeThirdLevel["partners"] && (
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/partner/titles"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaFilm className="mr-2" /> Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="/partner/episodes"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaVideo className="mr-2" /> Movie List
                      </a>
                    </li>
                    <li>
                      <a
                        href="/partner/category"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaListCheck className="mr-2" /> Episode List
                      </a>
                    </li>
                    <li>
                      <a
                        href="/videos/genres"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaListCheck className="mr-2" /> Payments
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}

          {activeSubMenu === "billings" && (
            <ul className="p-1 space-y-4 mt-2">
              <li>
                <button
                  className="flex justify-between items-center w-full p-3 hover:bg-gray-600 rounded text-sm"
                  onClick={() => toggleThirdLevelMenu("billings")}
                >
                  <span className="flex items-center">                    
                  <span className="mr-2 " >{activeThirdLevel["billings"] ? <FaChevronDown /> : <FaChevronRight />}</span>
                    Billings
                  </span>
                </button>

                {/* Third-Level Dropdown (Default Open) */}
                {activeThirdLevel["billings"] && (
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/billing/titles"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaFilm className="mr-2" /> Subscriber Invoices
                      </a>
                    </li>
                    <li>
                      <a
                        href="/billing/episodes"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaVideo className="mr-2" /> Partner Invoices
                      </a>
                    </li>
                    <li>
                      <a
                        href="/billing/category"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaListCheck className="mr-2" /> Reports
                      </a>
                    </li>
                    <li>
                      <a
                        href="/billing/genres"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaListCheck className="mr-2" /> Payments
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}

          {activeSubMenu === "settings" && (
            <ul className="p-1 space-y-4 mt-2">
              <li>
                <button
                  className="flex justify-between items-center w-full p-3 hover:bg-gray-600 rounded text-sm"
                  onClick={() => toggleThirdLevelMenu("settings")}
                >
                  <span className="flex items-center">                    
                  <span className="mr-2 " >{activeThirdLevel["settings"] ? <FaChevronDown /> : <FaChevronRight />}</span>
                    Settings
                  </span>
                </button>

                {/* Third-Level Dropdown (Default Open) */}
                {activeThirdLevel["settings"] && (
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/setting/general"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaFilm className="mr-2" /> General Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="/setting/general"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaVideo className="mr-2" /> Site Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="/setting/general"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaListCheck className="mr-2" /> Currency Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="/setting/general"
                        className="flex items-center p-2 pl-4 hover:bg-gray-500 rounded text-sm"
                      >
                        <FaListCheck className="mr-2" /> Tax Settings
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;