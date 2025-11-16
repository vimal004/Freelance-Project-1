import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  InformationCircleIcon,
  ChevronDownIcon,
  XMarkIcon, // Added for potential cleanup in a later stage
} from "@heroicons/react/24/outline";
// Assuming constants.js is correctly located at this path
import { UNIT_OPTIONS, ACCOUNT_OPTIONS } from "../data/constants";

// --- Reusable Input Component for consistency ---
const LabeledInput = ({
  id,
  label,
  required = false,
  type = "text",
  placeholder = "",
  currency = null,
}) => (
  <div className="flex flex-col space-y-1">
    <label
      htmlFor={id}
      className={`text-xs font-semibold ${
        required ? "text-red-600" : "text-gray-600"
      }`}
    >
      {label}
      {required && "*"}
    </label>
    <div className="flex items-center">
      {currency && (
        <span className="text-sm font-semibold text-gray-600 border border-r-0 border-gray-300 bg-gray-50 p-2 rounded-l-md">
          {currency}
        </span>
      )}
      <input
        id={id}
        type={type}
        className={`flex-1 border border-gray-300 p-2 text-sm focus:ring-blue-500 focus:border-blue-500 ${
          currency ? "rounded-r-md" : "rounded-md"
        }`}
        placeholder={placeholder}
      />
    </div>
  </div>
);

// --- Updated DropdownSelect Component (Simplified for UI look) ---
const DropdownSelect = ({
  label,
  options,
  groupOptions,
  required = false,
  defaultValue = "",
  placeholder = "Select or type to add", // Added placeholder prop
}) => {
  const [value, setValue] = useState(defaultValue);

  // Determine if grouped or simple options are used
  const renderOptions = () => {
    if (groupOptions) {
      return groupOptions.map((group, index) => (
        <optgroup key={index} label={group.group}>
          {group.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </optgroup>
      ));
    }
    return options.map((option) => (
      <option key={option.code} value={option.code}>
        {option.name}
      </option>
    ));
  };

  return (
    <div className="flex flex-col space-y-1">
      <label
        className={`text-xs font-semibold ${
          required ? "text-red-600" : "text-gray-600"
        }`}
      >
        {label}
        {required && "*"}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 text-sm appearance-none focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
        >
          {/* Display placeholder text when value is empty */}
          {!value && (
            <option value="" disabled className="text-gray-400">
              {placeholder}
            </option>
          )}

          {renderOptions()}

          {groupOptions && (
            <option value="new_account" className="font-semibold border-t">
              + New Account
            </option>
          )}
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};

const NewItemPage = () => {
  // Mock state for item type
  const [itemType, setItemType] = useState("goods");

  // Helper for consistent label display
  const LabelWithInfo = ({ children }) => (
    <div className="flex items-center space-x-1 text-sm text-gray-700">
      {children}
      <InformationCircleIcon className="w-4 h-4 text-gray-400 cursor-pointer" />
    </div>
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h1 className="text-3xl font-semibold text-gray-800">New Item</h1>
        <div className="flex space-x-3">
          <Link
            to="/items"
            className="py-2 px-4 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </Link>
          <button className="py-2 px-4 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Save
          </button>
        </div>
      </div>

      {/* Item Form Card */}
      <div className=" bg-white p-8 rounded-lg shadow-lg">
        {/* Type & Name Row */}
        <div className="space-y-6">
          <div className="flex items-center space-x-10">
            <LabelWithInfo>Type</LabelWithInfo>
            <div className="flex space-x-6">
              <label className="flex items-center text-sm">
                <input
                  type="radio"
                  name="itemType"
                  value="goods"
                  checked={itemType === "goods"}
                  onChange={() => setItemType("goods")}
                  className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Goods</span>
              </label>
              <label className="flex items-center text-sm">
                <input
                  type="radio"
                  name="itemType"
                  value="service"
                  checked={itemType === "service"}
                  onChange={() => setItemType("service")}
                  className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Service</span>
              </label>
            </div>
          </div>

          {/* Name Input */}
          <div className="w-1/2 pr-4">
            <LabeledInput
              id="itemName"
              label="Name"
              required={true}
              placeholder="Enter item name"
            />
          </div>

          {/* Unit Dropdown */}
          <div className="w-1/2 pr-4">
            <DropdownSelect
              label="Unit"
              options={UNIT_OPTIONS}
              defaultValue="KGS" // Set default value to 'kg' (code KGS) for visual matching
              required={false}
              placeholder="Select or type to add"
            />
          </div>
        </div>

        <div className="h-6 border-b border-gray-200 mt-10 mb-8"></div>

        {/* Sales & Purchase Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {/* LEFT COLUMN: Sales Information */}
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-gray-800">Sales Information</h4>
              <label className="flex items-center text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="form-checkbox h-4 w-4 text-blue-600 rounded mr-2 border-gray-400 focus:ring-blue-500"
                />
                Sellable
              </label>
            </div>

            {/* Selling Price */}
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-semibold text-red-600">
                Selling Price*
              </label>
              <div className="flex space-x-0">
                {/* INR Currency Box */}
                <div className="text-sm font-semibold text-gray-600 border border-r-0 border-gray-300 bg-gray-50 p-2 rounded-l-md w-16 flex items-center justify-center">
                  INR
                </div>
                <input
                  type="number"
                  className="flex-1 border border-gray-300 rounded-r-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Sales Account */}
            <DropdownSelect
              label="Account"
              groupOptions={ACCOUNT_OPTIONS}
              defaultValue="Sales" // Assuming 'Sales' is a revenue account, not listed in constants but common.
              required={true}
              placeholder="Sales"
            />

            {/* Description (Sales) */}
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-semibold text-gray-600">
                Description
              </label>
              <textarea
                rows="3"
                className="border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
          </div>

          {/* RIGHT COLUMN: Purchase Information */}
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-gray-800">
                Purchase Information
              </h4>
              <label className="flex items-center text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="form-checkbox h-4 w-4 text-blue-600 rounded mr-2 border-gray-400 focus:ring-blue-500"
                />
                Purchasable
              </label>
            </div>

            {/* Cost Price */}
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-semibold text-red-600">
                Cost Price*
              </label>
              <div className="flex space-x-0">
                {/* INR Currency Box */}
                <div className="text-sm font-semibold text-gray-600 border border-r-0 border-gray-300 bg-gray-50 p-2 rounded-l-md w-16 flex items-center justify-center">
                  INR
                </div>
                <input
                  type="number"
                  className="flex-1 border border-gray-300 rounded-r-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Purchase Account */}
            <DropdownSelect
              label="Account"
              groupOptions={ACCOUNT_OPTIONS}
              defaultValue="Cost of Goods Sold"
              required={true}
              placeholder="Cost of Goods Sold"
            />

            {/* Description (Purchase) */}
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-semibold text-gray-600">
                Description
              </label>
              <textarea
                rows="3"
                className="border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Preferred Vendor */}
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-semibold text-gray-600">
                Preferred Vendor
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Select or type to add"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItemPage;
