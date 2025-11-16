import React from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const ItemsPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">All Items</h1>
        <div className="flex items-center space-x-3">
          <Link
            to="/items/new"
            className="flex items-center bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            <PlusIcon className="w-4 h-4 mr-1" />
            New
          </Link>
          <EllipsisVerticalIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 min-h-[70vh]">
        {/* Table Header Structure from image_f160e7.png */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-3 text-sm font-medium text-gray-500">
          <div className="flex items-center w-full">
            <input type="checkbox" className="mr-4 text-blue-600 rounded" />
            <span className="w-1/6 cursor-pointer hover:text-gray-700">
              NAME &uarr;
            </span>
            <span className="w-1/6">PURCHASE DESCRIPTION</span>
            <span className="w-1/6">PURCHASE RATE</span>
            <span className="w-1/6">DESCRIPTION</span>
            <span className="w-1/6">RATE</span>
            <span className="w-1/6">USAGE UNIT</span>
          </div>
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        </div>

        {/* Empty State / Placeholder Content */}
        <div className="flex items-center justify-center h-full pt-20">
          <p className="text-gray-500 text-center">
            Goods and Services, if they have a price tag, put them here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemsPage;
