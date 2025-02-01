import { createBrowserRouter, Navigate } from "react-router-dom";

// Private Route Handler
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Signup from "./../pages/Signup";
import PageNotFound from "./../pages/PageNotFound/PageNotFound";
import AdminDashboard from "./../admin/AdminDashboard";
import VendorDashboard from "./../vendor/VendorDashboard";
import PrivateRoute from "./../auth/PrivateRoute";
import UserDashboard from "../user/UserDashBoard/UserDashboard";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Signup /> },

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
  { path: "*", element: <PageNotFound /> },
]);

export default router;
