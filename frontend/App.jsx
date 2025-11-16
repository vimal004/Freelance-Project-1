import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./src/Components/DashboardLayout.jsx";
import DashboardPage from "./src/pages/DashboardPage.jsx";
import ItemsPage from "./src/pages/ItemsPage.jsx";
import NewItemPage from "./src/pages/NewItemPage.jsx";
import "./App.css";

// --- Placeholder Pages (Keep this simplified) ---
const PlaceholderPage = ({ title }) => (
  <div className="p-6">
    <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    <p className="mt-4 text-gray-600">
      Content for the {title} module goes here.
    </p>
  </div>
);
// --- End Placeholder Pages ---

function App() {
  return (
    <Routes>
      {/* Main Dashboard Layout Route: All other routes are children of this layout */}
      <Route path="/" element={<DashboardLayout />}>
        {/* Home/Dashboard Page */}
        <Route index element={<DashboardPage />} />

        {/* --- CORRECTED Item Routes --- */}
        {/* 1. Items List Page: /items */}
        <Route path="items" element={<ItemsPage />} />
        {/* 2. New Item Form Page: /items/new */}
        <Route path="items/new" element={<NewItemPage />} />
        {/* ------------------------------- */}

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

        {/* Catch-all route for 404 (optional) */}
        <Route path="*" element={<PlaceholderPage title="404 Not Found" />} />
      </Route>
    </Routes>
  );
}

export default App;
