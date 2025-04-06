"use client";

import { useState } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Sidebar from "./components/Layout/Sidebar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({
    analytics: true,
    users: true,
    videos: true,
    create: true,
    partners: true,
    settings: true
  });

  const toggleSidebar = () => {
    setIsSidebarVisible(prev => {
      if (prev && activeMenu) {
        setActiveMenu(null); // Close active menu first
        return true; // Keep sidebar open
      }
      return !prev;
    });
  };

  const toggleSubMenu = (menuId: string) => {
    setActiveMenu(prev => prev === menuId ? null : menuId);
  };

  const toggleSubMenuItem = (subMenuId: string) => {
    setOpenSubMenus(prev => ({
      ...prev,
      [subMenuId]: !prev[subMenuId]
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <Sidebar
          isSidebarVisible={isSidebarVisible}
          activeMenu={activeMenu}
          openSubMenus={openSubMenus}
          toggleSubMenu={toggleSubMenu}
          toggleSubMenuItem={toggleSubMenuItem}
        />

        {/* Page Content */}
        <main 
          className="flex-1 overflow-y-auto mt-[52px] transition-all duration-300" 
          style={{ 
            marginLeft: isSidebarVisible ? (activeMenu ? "350px" : "120px") : "0" 
          }}
        >
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ClientLayout;