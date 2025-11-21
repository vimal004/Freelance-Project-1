import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  CubeIcon,
  ShoppingCartIcon,
  BriefcaseIcon,
  ClockIcon,
  BuildingLibraryIcon,
  CalculatorIcon,
  DocumentTextIcon,
  ChevronRightIcon,
  PlusIcon,
  ChartPieIcon,
  XMarkIcon, 
} from "@heroicons/react/24/outline";

const IconMap = {
  Home: HomeIcon,
  Items: CubeIcon,
  Sales: ShoppingCartIcon,
  Purchases: BriefcaseIcon,
  TimeTracking: ClockIcon,
  Banking: BuildingLibraryIcon,
  Accountant: CalculatorIcon,
  Reports: ChartPieIcon, // Using ChartPie for Reports
  Documents: DocumentTextIcon,
};

const navItems = [
  { name: "Home", path: "/home", icon: "Home", isSingle: true }, // Corrected path to /home
  {
    name: "Items",
    icon: "Items",
    path: "/items", // Added path for top-level navigation
    subItems: [
      { name: "Items", path: "/items" },
      // Add other sub-items from your HTML snippet if needed
    ],
  },
  {
    name: "Sales",
    icon: "Sales",
    subItems: [
      { name: "Customers", path: "/sales/customers" }, // Corrected to new Customers path
      { name: "Quotes", path: "/sales/quotes" },
      { name: "Sales Orders", path: "/sales/salesorders" }, // Added Sales Orders from original plan
      { name: "Invoices", path: "/sales/invoices" },
      { name: "Recurring Invoices", path: "/sales/recurringinvoices" },
      { name: "Delivery Challans", path: "/sales/deliverychallans" },
      { name: "Payments Received", path: "/sales/paymentsreceived" },
      { name: "Credit Notes", path: "/sales/creditnotes" },
    ],
  },
  {
    name: "Purchases",
    icon: "Purchases",
    subItems: [
      { name: "Vendors", path: "/purchases/vendors" },
      { name: "Bills", path: "/purchases/bills" },
      // ... more purchase items
    ],
  },
  {
    name: "Time Tracking",
    icon: "TimeTracking",
    subItems: [
      { name: "Projects", path: "/time-tracking/projects" },
      { name: "Timesheet", path: "/time-tracking/timesheet" },
    ],
  },
  {
    name: "Banking",
    path: "/banking",
    icon: "Banking",
    isSingle: true,
    separator: true,
  },
  {
    name: "Accountant",
    icon: "Accountant",
    subItems: [
      { name: "Manual Journals", path: "/accountant/journals" },
      { name: "Chart of Accounts", path: "/accountant/accounts" },
      // ... more accountant items
    ],
  },
  { name: "Reports", path: "/reports", icon: "Reports", isSingle: true },
  {
    name: "Documents",
    path: "/documents",
    icon: "Documents",
    isSingle: true,
    hasRightElement: true,
  },
];

const SidebarItem = ({ item }) => {
  const location = useLocation();
  // Check if current location starts with any sub-item path (for parent highlighting)
  const isParentActive =
    item.path === location.pathname ||
    (item.subItems &&
      item.subItems.some((sub) => location.pathname.startsWith(sub.path)));

  const [isOpen, setIsOpen] = useState(isParentActive);
  const Icon = IconMap[item.icon] || HomeIcon;
  const isCollapsible = item.subItems && item.subItems.length > 0;

  const toggleOpen = (e) => {
    e.preventDefault();
    if (isCollapsible) {
      setIsOpen(!isOpen);
    }
  };
  
  // Check if this item or a direct child is the current active route
  const isCurrentActiveLink = location.pathname === item.path;
  const isSubItemActive = item.subItems && item.subItems.some(sub => location.pathname.startsWith(sub.path));

  return (
    <>
      {item.separator && <li className="h-[1px] bg-gray-200 my-2"></li>}
      <li className="relative">
        <Link
          to={item.path || "#"}
          onClick={isCollapsible ? toggleOpen : null}
          className={`
            flex items-center p-3 text-sm font-semibold transition duration-200 rounded-lg 
            ${
              isCurrentActiveLink || isSubItemActive
                ? "bg-blue-600 text-white shadow-md-2" // Use custom shadow
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
            }
            ${isCollapsible ? "justify-between" : ""}
          `}
        >
          <div className="flex items-center">
            <Icon className="w-5 h-5 mr-3" />
            <span className="truncate">{item.name}</span>
          </div>

          {isCollapsible && (
            <ChevronRightIcon
              className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                isOpen ? "rotate-90" : "rotate-0"
              } ${isCurrentActiveLink || isSubItemActive ? "text-white" : "text-gray-500"}`}
            />
          )}
          {item.hasRightElement && (
            <PlusIcon className={`w-4 h-4 absolute right-3 ${isCurrentActiveLink || isSubItemActive ? "text-white hover:text-blue-200" : "text-gray-500 hover:text-blue-600"}`} />
          )}
        </Link>

        {isCollapsible && isOpen && (
          // Adjusted nested UL background for better contrast
          <ul className="pl-6 py-1 space-y-1 bg-gray-50 border-l-2 border-blue-100 ml-4">
            {item.subItems.map((sub, index) => (
              <li key={index}>
                <Link
                  to={sub.path}
                  className={`
                    flex justify-between items-center py-2 px-3 text-sm rounded-lg transition duration-200
                    ${
                      location.pathname.startsWith(sub.path)
                        ? "text-blue-700 font-semibold bg-blue-100" // Use startsWith for nested routes
                        : "text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  <span className="truncate">{sub.name}</span>
                  {/* Plus Icon only for New/Add actions (like New Customer, New Quote) */}
                  {['Customers', 'Quotes', 'Sales Orders', 'Invoices', 'Recurring Invoices', 'Delivery Challans', 'Payments Received', 'Credit Notes', 'Bills', 'Vendors', 'Manual Journals'].includes(sub.name) && (
                    <PlusIcon className="w-4 h-4 text-gray-400 hover:text-blue-600 ml-auto" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

// Updated Sidebar component to handle responsive props
const Sidebar = ({ isOpen, onClose }) => {
  return (
    // Use fixed width on large screens, or full screen overlay on small screens
    <div 
        className={`
            fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50 
            transition-transform duration-300 ease-in-out 
            ${isOpen ? 'translate-x-0 shadow-xl-2' : '-translate-x-full'} 
            lg:translate-x-0 lg:static lg:w-64 lg:flex-shrink-0
        `}
    >
      <div className="p-4 flex flex-col h-full w-64">
        {/* Header with Close Button for Mobile */}
        <div className="flex justify-between items-center mb-8 px-2 py-1">
            <Link to="/home" className="flex items-center text-2xl font-black text-blue-700 tracking-wider">
              <ChartPieIcon className="w-7 h-7 mr-2 text-blue-500" />
              Kayaa ERP
            </Link>
            <button onClick={onClose} className="lg:hidden p-1 rounded-full text-gray-500 hover:bg-gray-100">
                <XMarkIcon className="w-6 h-6" />
            </button>
        </div>

        <ul className="space-y-1 flex-1 overflow-y-auto">
          {navItems.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </ul>

        {/* Apps Section - Moved to bottom area */}
        <div className="mt-auto pt-4 border-t border-gray-200">
          <h4 className="text-xs font-bold text-gray-500 uppercase mb-3 px-2">
            Settings & Help
          </h4>
         
          {/* Configure Features Button - Enhanced Style */}
          <button className="w-full flex items-center justify-center p-3 text-sm font-semibold text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-lg transition duration-200">
            Configure Features
            <ChevronRightIcon className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;