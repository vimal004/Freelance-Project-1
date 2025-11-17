import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
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
} from "@heroicons/react/24/outline";

// Simplified icons for demonstration (replace with your custom SVGs later)
const IconMap = {
  Home: HomeIcon,
  Items: CubeIcon,
  Sales: ShoppingCartIcon,
  Purchases: BriefcaseIcon,
  TimeTracking: ClockIcon,
  Banking: BuildingLibraryIcon,
  Accountant: CalculatorIcon,
  Reports: DocumentTextIcon,
  Documents: DocumentTextIcon,
};

const navItems = [
  { name: "Home", path: "/Home", icon: "Home", isSingle: true },
  {
    name: "Items",
    icon: "Items",
    subItems: [
      { name: "Items", path: "/items" },
      // Add other sub-items from your HTML snippet if needed
    ],
  },
  {
    name: "Sales",
    icon: "Sales",
    subItems: [
      { name: "Customers", path: "/sales/customers" },
      { name: "Quotes", path: "/sales/quotes" },
      { name: "Invoices", path: "/sales/invoices" },
      // ... more sales items
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
  
  const isCurrentActive = location.pathname === item.path || (item.subItems && item.subItems.some((sub) => sub.path === location.pathname));
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
              isCurrentActive || isSubItemActive
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
              } ${isCurrentActive || isSubItemActive ? "text-white" : "text-gray-500"}`}
            />
          )}
          {item.hasRightElement && (
            <PlusIcon className={`w-4 h-4 absolute right-3 ${isCurrentActive || isSubItemActive ? "text-white hover:text-blue-200" : "text-gray-500 hover:text-blue-600"}`} />
          )}
        </Link>

        {isCollapsible && isOpen && (
          <ul className="pl-6 py-1 space-y-1 bg-white border-l-2 border-blue-100 ml-4">
            {item.subItems.map((sub, index) => (
              <li key={index}>
                <Link
                  to={sub.path}
                  className={`
                    flex justify-between items-center py-2 px-3 text-sm rounded-lg transition duration-200
                    ${
                      location.pathname === sub.path
                        ? "text-blue-700 font-semibold bg-blue-100" // Sub-item active style
                        : "text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  <span className="truncate">{sub.name}</span>
                  <PlusIcon className="w-4 h-4 text-gray-400 hover:text-blue-600 ml-auto" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

const Sidebar = () => {
  return (
    // Enhanced Sidebar shadow (shadow-xl-2)
    <div className="w-64 flex-shrink-0 bg-white border-r border-gray-200 h-full overflow-y-auto shadow-xl-2"> 
      <div className="p-4 flex flex-col h-full">
        {/* App Logo/Header placeholder - Premium Look */}
        <Link to="/home" className="flex items-center text-2xl font-black text-blue-700 mb-8 px-2 py-1 tracking-wider">
          <ChartPieIcon className="w-7 h-7 mr-2 text-blue-500" />
          Kayaa ERP
        </Link>

        <ul className="space-y-1 flex-1">
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