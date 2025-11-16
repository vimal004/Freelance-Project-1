import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Side-bar";
import {
  BellIcon,
  Cog8ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const Header = () => (
  <header className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-6">
    {/* Company Info */}
    <div className="flex flex-col text-sm">
      <div className="font-semibold text-gray-900">Hello, arulmani.g</div>
      <div className="text-xs text-gray-500">Kayaa Electronics Pvt Ltd</div>
    </div>

    {/* User Actions / Help */}
   
  </header>
);

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <Outlet /> {/* Renders the current page component */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
