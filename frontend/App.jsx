import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
// --- Existing Imports ---
import DashboardLayout from "./src/Components/DashboardLayout.jsx";
import DashboardPage from "./src/pages/DashboardPage.jsx";
import ItemsPage from "./src/pages/ItemsPage.jsx";
import NewItemPage from "./src/pages/NewItemPage.jsx";
import LoginPage from "./src/pages/LoginPage.jsx";
import { isAuthenticated } from "./src/utils/auth.js";
// --- New Sales Imports ---
import CustomersPage from "./src/pages/sales/CustomersPage.jsx";
import NewCustomerPage from "./src/pages/sales/NewCustomerPage.jsx";
import QuotesPage from "./src/pages/sales/QuotesPage.jsx";
import NewQuotePage from "./src/pages/sales/NewQuotePage.jsx";
import SalesOrdersPage from "./src/pages/sales/SalesOrdersPage.jsx";
import NewSalesOrderPage from "./src/pages/sales/NewSalesOrderPage.jsx";
import InvoicesPage from "./src/pages/sales/InvoicesPage.jsx";
import NewInvoicePage from "./src/pages/sales/NewInvoicePage.jsx";
import RecurringInvoicesPage from "./src/pages/sales/RecurringInvoicesPage.jsx";
import NewRecurringInvoicePage from "./src/pages/sales/NewRecurringInvoicePage.jsx";
// --- End New Sales Imports ---
import "./App.css";

// --- Protected Route Wrapper (Same as before) ---
const ProtectedRoute = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return <DashboardLayout />;
};

// --- Placeholder Pages (Used for non-implemented navigation items) ---
const PlaceholderPage = ({ title }) => (
  <div className="p-6">
    <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    <p className="mt-4 text-gray-600">
      Content for the {title} module goes here.
    </p>
  </div>
);

// --- 404 Page Component (Same as before) ---
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

        {/* --- Sales Routes --- */}
        <Route path="sales/customers" element={<CustomersPage />} />
        <Route path="sales/customers/new" element={<NewCustomerPage />} />
        <Route path="sales/quotes" element={<QuotesPage />} />
        <Route path="sales/quotes/new" element={<NewQuotePage />} />
        <Route path="sales/salesorders" element={<SalesOrdersPage />} />
        <Route path="sales/salesorders/new" element={<NewSalesOrderPage />} />
        <Route path="sales/invoices" element={<InvoicesPage />} />
        <Route path="sales/invoices/new" element={<NewInvoicePage />} />
        <Route path="sales/recurringinvoices" element={<RecurringInvoicesPage />} />
        <Route path="sales/recurringinvoices/new" element={<NewRecurringInvoicePage />} />
        <Route path="sales/deliverychallans" element={<PlaceholderPage title="Delivery Challans List" />} />
        <Route path="sales/paymentsreceived" element={<PlaceholderPage title="Payments Received List" />} />
        <Route path="sales/creditnotes" element={<PlaceholderPage title="Credit Notes List" />} />
        {/* --------------------- */}


        {/* Nested Routes (Placeholders) matching the sidebar structure */}
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