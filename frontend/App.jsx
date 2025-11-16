import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./src/Components/DashboardLayout.jsx";
import DashboardPage from "./src/pages/DashboardPage.jsx";
import "./App.css";

// --- Placeholder Pages (You will build these later) ---
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
      {/* Main Dashboard Layout Route */}
      <Route path="/" element={<DashboardLayout />}>
        {/* Home/Dashboard Page */}
        <Route index element={<DashboardPage />} />

        {/* Nested Routes matching the sidebar structure */}
        <Route path="items" element={<PlaceholderPage title="Items" />} />
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
