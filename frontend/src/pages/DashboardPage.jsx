import React from "react";
import {
  CurrencyRupeeIcon,
  PlusIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const DashboardPage = () => {
  return (
    <div className="p-6">
      {/* Tabs / Navigation */}
      <div className="flex space-x-6 border-b border-gray-200 mb-6">
        <h2 className="py-2 px-1 text-sm font-semibold border-b-2 border-blue-600 text-blue-600 cursor-pointer">
          Dashboard
        </h2>
        
      </div>

      {/* Receivables & Payables Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Total Receivables Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Total Receivables
            </h3>
            <button className="flex items-center text-blue-600 text-sm font-semibold">
              <PlusIcon className="w-4 h-4 mr-1" />
              New
            </button>
          </div>
          <div className="bg-gray-100 h-10 mb-4 rounded-md flex items-center px-4 text-sm text-gray-500">
            Total Unpaid Invoices: ₹0.00
          </div>

          <div className="flex justify-between space-x-4">
            <div className="flex-1 p-3 bg-white border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-500">CURRENT</p>
              <div className="flex items-center text-2xl font-bold mt-1">
                <CurrencyRupeeIcon className="w-5 h-5 mr-1" />
                0.00
              </div>
            </div>
            <div className="flex-1 p-3 bg-white border border-gray-200 rounded-lg">
              <p className="text-sm text-red-500">OVERDUE</p>
              <div className="flex items-center text-2xl font-bold text-red-600 mt-1 cursor-pointer">
                <CurrencyRupeeIcon className="w-5 h-5 mr-1" />
                0.00
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Total Payables Card - Styled similarly */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Total Payables
            </h3>
            <button className="flex items-center text-blue-600 text-sm font-semibold">
              <PlusIcon className="w-4 h-4 mr-1" />
              New
            </button>
          </div>
          <div className="bg-gray-100 h-10 mb-4 rounded-md flex items-center px-4 text-sm text-gray-500">
            Total Unpaid Bills: ₹0.00
          </div>

          <div className="flex justify-between space-x-4">
            <div className="flex-1 p-3 bg-white border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-500">CURRENT</p>
              <div className="flex items-center text-2xl font-bold mt-1">
                <CurrencyRupeeIcon className="w-5 h-5 mr-1" />
                0.00
              </div>
            </div>
            <div className="flex-1 p-3 bg-white border border-gray-200 rounded-lg">
              <p className="text-sm text-red-500">OVERDUE</p>
              <div className="flex items-center text-2xl font-bold text-red-600 mt-1 cursor-pointer">
                <CurrencyRupeeIcon className="w-5 h-5 mr-1" />
                0.00
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cash Flow Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Cash Flow</h3>
          <select className="text-sm text-gray-600 border border-gray-300 rounded-md p-1">
            <option>This Fiscal Year</option>
            <option>Last 30 Days</option>
          </select>
        </div>

        {/* Placeholder for the chart/graph area */}
        <div className="flex h-64 border border-gray-100 rounded-md">
          <div className="w-1/6 py-2 pr-4 flex flex-col justify-between text-xs text-gray-500 border-r">
            <p className="text-right">5 K</p>
            <p className="text-right">4 K</p>
            <p className="text-right">3 K</p>
          </div>
          <div className="flex-1 relative p-4">
            <div className="absolute top-4 right-4 text-sm text-gray-600 text-right">
              <p className="text-xs text-gray-500">Cash as on 01/04/2025</p>
              <div className="flex items-center justify-end font-bold text-xl">
                <CurrencyRupeeIcon className="w-5 h-5 mr-1" />
                0.00
              </div>
            </div>
            <p className="text-gray-400 text-center mt-20">Chart Placeholder</p>
          </div>
        </div>
      </div>
      {/* Floating Help/Assistance Button */}
      <div className="fixed bottom-6 right-6 z-10">
        <button className="flex items-center bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300">
          <img
            src="path/to/chat-icon.svg"
            alt="Chat"
            className="w-5 h-5 mr-2"
          />
          Need Assistance?
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
