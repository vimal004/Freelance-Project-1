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
  const isActive =
    location.pathname === item.path ||
    (item.subItems &&
      item.subItems.some((sub) => sub.path === location.pathname));
  const isParentActive =
    item.subItems &&
    item.subItems.some((sub) => location.pathname.startsWith(sub.path));

  const [isOpen, setIsOpen] = useState(isParentActive);
  const Icon = IconMap[item.icon] || HomeIcon;
  const isCollapsible = item.subItems && item.subItems.length > 0;

  const toggleOpen = (e) => {
    e.preventDefault();
    if (isCollapsible) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      {item.separator && <li className="h-[1px] bg-gray-200 my-2"></li>}
      <li className="relative">
        <Link
          to={item.path || "#"}
          onClick={isCollapsible ? toggleOpen : null}
          className={`
            flex items-center p-3 text-sm font-medium transition duration-200 rounded-md 
            ${
              isActive
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
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
              }`}
            />
          )}
          {item.hasRightElement && (
            <PlusIcon className="w-4 h-4 text-gray-500 hover:text-blue-600 absolute right-3" />
          )}
        </Link>

        {isCollapsible && isOpen && (
          <ul className="pl-6 py-1 space-y-1">
            {item.subItems.map((sub, index) => (
              <li key={index}>
                <Link
                  to={sub.path}
                  className={`
                    flex justify-between items-center py-2 px-3 text-sm rounded-md transition duration-200
                    ${
                      location.pathname === sub.path
                        ? "bg-blue-50 text-blue-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
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
    <div className="w-60 flex-shrink-0 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-4">
        {/* App Logo/Header placeholder */}
        <div className="text-xl font-extrabold text-blue-700 mb-6">
          MERN Dashboard
        </div>

        <ul className="space-y-1">
          {navItems.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </ul>

        {/* Apps Section */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">
            Apps
          </h4>
         
        </div>

        {/* Configure Features Button */}
        <div className="mt-4">
          <button className="w-full flex items-center justify-center p-3 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg">
            Configure Features
            <ChevronRightIcon className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
