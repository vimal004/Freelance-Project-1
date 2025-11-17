import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Side-bar";
import {
  BellIcon,
  Cog8ToothIcon,
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon, 
  Bars3Icon, // New import for the mobile menu icon
} from "@heroicons/react/24/outline";

const Header = ({ onMenuClick }) => (
  // Subtle border, clean background, slight shadow for elevation (shadow-md-2)
  <header className="flex items-center justify-between h-16 bg-white border-b border-gray-100 px-4 sm:px-6 shadow-md-2 z-10">
    
    {/* Left Side: Mobile Menu Button + Company Info */}
    <div className="flex items-center space-x-3">
        {/* Mobile Menu Button - Visible only on small screens */}
        <button 
            onClick={onMenuClick} 
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition duration-150"
        >
            <Bars3Icon className="w-6 h-6 text-gray-600" />
        </button>

        {/* Company Info - Adjusted for mobile spacing */}
        <div className="flex flex-col">
          <div className="font-extrabold text-gray-900 text-lg">Hello, Arulmani.G</div>
          <div className="text-xs text-gray-500 font-medium">Kayaa Electronics Pvt Ltd</div>
        </div>
    </div>

    {/* Right Side: User Actions / Help */}
    <div className="flex items-center space-x-3 sm:space-x-4">
        {/* Search Input - Rounded, subtle look, hidden on small screens */}
        <div className="relative hidden md:block">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
                type="text" 
                placeholder="Search..." 
                className="pl-9 pr-3 py-1.5 text-sm border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500 w-48 transition duration-150"
            />
        </div>

        {/* Action Buttons */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition duration-150 hidden sm:block">
          <BellIcon className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition duration-150 hidden sm:block">
          <QuestionMarkCircleIcon className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition duration-150 hidden sm:block">
          <Cog8ToothIcon className="w-5 h-5 text-gray-600" />
        </button>
        
        {/* User Avatar */}
        <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold cursor-pointer ring-2 ring-offset-2 ring-blue-300">
            AG
        </div>
    </div>
  </header>
);

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
    
  return (
    <div className="flex h-screen overflow-hidden">
        {/* Sidebar and Overlay */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        {/* Mobile Overlay (Only visible when sidebar is open on small screens) */}
        {isSidebarOpen && (
            <div 
                className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden" 
                onClick={() => setIsSidebarOpen(false)}
            ></div>
        )}

        {/* Main Content Container */}
        <div className="flex-1 flex flex-col overflow-hidden">
            <Header onMenuClick={toggleSidebar} />

            {/* Main Content Area - Soft background */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
              <Outlet />
            </main>
        </div>
    </div>
  );
};

export default DashboardLayout;