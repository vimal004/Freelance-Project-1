import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
// --- Existing Imports ---
import DashboardLayout from "./src/Components/DashboardLayout.jsx";
import DashboardPage from "./src/pages/DashboardPage.jsx";
import ItemsPage from "./src/pages/ItemsPage.jsx";
import NewItemPage from "./src/pages/NewItemPage.jsx";
import "./App.css";

// --- New Imports ---
import LoginPage from "./src/pages/LoginPage.jsx";
import { isAuthenticated } from "./src/utils/auth.js";
// --- End New Imports ---

// --- Protected Route Wrapper ---
// This component checks for authentication and renders the layout/children if true
const ProtectedRoute = () => {
  // If the user is NOT authenticated, redirect them to the login page (/).
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  // If authenticated, render the Dashboard Layout which contains the <Outlet /> for nested routes.
  return <DashboardLayout />;
};
// --- End Protected Route Wrapper ---

// --- Placeholder Pages (Used for other navigation items) ---
const PlaceholderPage = ({ title }) => (
  <div className="p-6">
    <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    <p className="mt-4 text-gray-600">
      Content for the {title} module goes here.
    </p>
  </div>
);

// --- 404 Page Component ---
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <h1 className="text-4xl font-bold text-red-600">404 - Not Found</h1>
    <p className="mt-4 text-gray-600">
      The page you requested could not be found.
    </p>
    <Link
      to="/"
      className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
      Go to Login
    </Link>
  </div>
);
// --- End 404 Page Component ---

function App() {
  return (
    <Routes>
      {/* 1. Public Route: Login Page (Root Route) */}
      <Route path="/" element={<LoginPage />} />

      {/* 2. Protected Routes: All dashboard content nested under the ProtectedRoute */}
      <Route element={<ProtectedRoute />}>
        {/* The index route for authenticated users is /home */}
        <Route path="/home" index element={<DashboardPage />} />

        {/* --- Item Routes --- */}
        <Route path="items" element={<ItemsPage />} />
        <Route path="items/new" element={<NewItemPage />} />
        {/* --------------------- */}

        {/* Nested Routes matching the sidebar structure */}
        <Route
          path="sales/customers"
          element={<PlaceholderPage title="Customers" />}
        />
        <Route
          path="sales/quotes"
          element={<PlaceholderPage title="Quotes" />}
        />
        <Route
          path="sales/invoices"
          element={<PlaceholderPage title="Invoices" />}
        />
        <Route
          path="purchases/vendors"
          element={<PlaceholderPage title="Vendors" />}
        />
        <Route
          path="purchases/bills"
          element={<PlaceholderPage title="Bills" />}
        />
        <Route
          path="time-tracking/projects"
          element={<PlaceholderPage title="Time Tracking Projects" />}
        />
        <Route
          path="time-tracking/timesheet"
          element={<PlaceholderPage title="Timesheet" />}
        />
        <Route path="banking" element={<PlaceholderPage title="Banking" />} />
        <Route
          path="accountant/journals"
          element={<PlaceholderPage title="Manual Journals" />}
        />
        <Route
          path="accountant/accounts"
          element={<PlaceholderPage title="Chart of Accounts" />}
        />
        <Route path="reports" element={<PlaceholderPage title="Reports" />} />
        <Route
          path="documents"
          element={<PlaceholderPage title="Documents" />}
        />
      </Route>

      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
