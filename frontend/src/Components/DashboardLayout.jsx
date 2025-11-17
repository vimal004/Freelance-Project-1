import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Side-bar";
import {
  BellIcon,
  Cog8ToothIcon,
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon, 
} from "@heroicons/react/24/outline";

const Header = () => (
  // Subtle border, clean background, slight shadow for elevation (shadow-md-2)
  <header className="flex items-center justify-between h-16 bg-white border-b border-gray-100 px-6 shadow-md-2 z-10">
    {/* Company Info - Use bolder font for premium look */}
    <div className="flex flex-col">
      <div className="font-extrabold text-gray-900 text-lg">Hello, Arulmani.G</div>
      <div className="text-xs text-gray-500 font-medium">Kayaa Electronics Pvt Ltd</div>
    </div>

    {/* User Actions / Help */}
    <div className="flex items-center space-x-3">
        {/* Search Input - Rounded, subtle look */}
        <div className="relative hidden sm:block">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
                type="text" 
                placeholder="Search..." 
                className="pl-9 pr-3 py-1.5 text-sm border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-200 focus:border-blue-500 w-48 transition duration-150"
            />
        </div>

        {/* Action Buttons - Slightly larger and rounded */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition duration-150">
          <BellIcon className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition duration-150">
          <QuestionMarkCircleIcon className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition duration-150">
          <Cog8ToothIcon className="w-5 h-5 text-gray-600" />
        </button>
        
        {/* User Avatar - Clean ring */}
        <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold cursor-pointer ring-2 ring-offset-2 ring-blue-300">
            AG
        </div>
    </div>
  </header>
);

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Main Content Area - Soft background */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;