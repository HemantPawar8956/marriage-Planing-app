import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFound from "../components/NotFound";

// Role-based Dashboards
import AdminDashboard from "../components/AdminDashboard";
import UserDashboard from "../components/UserDashboard";
import VendorDashboard from "../components/VendorDashboard";

// Private Route Handler
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  // Admin Routes (Protected)
  {
    path: "/admin",
    element: <PrivateRoute allowedRoles={["admin"]} />,
    children: [{ index: true, element: <AdminDashboard /> }],
  },

  // User Routes (Protected)
  {
    path: "/user",
    element: <PrivateRoute allowedRoles={["user"]} />,
    children: [{ index: true, element: <UserDashboard /> }],
  },

  // Vendor Routes (Protected)
  {
    path: "/vendor",
    element: <PrivateRoute allowedRoles={["vendor"]} />,
    children: [{ index: true, element: <VendorDashboard /> }],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
