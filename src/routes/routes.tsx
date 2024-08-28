import MainLayout from "@/layout/MainLayout";
import AboutUs from "@/pages/AboutUs/AboutUs";
import { Dashboard } from "@/pages/Admin/Dashboard";
import Login from "@/pages/Auth/Login";
import LoginModal from "@/pages/Auth/LoginModal";
import SignUp from "@/pages/Auth/SignUp";
import ContactUs from "@/pages/ContactUs/ContactUs";
import FacilityDetails from "@/pages/FacilityDetails/FacilityDetails";
import FacilityListing from "@/pages/FacilityListing/FacilityListing";
import UserProfile from "@/pages/User/UserProfile";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import { adminPaths } from "./admin.routes";
import AdminRoutes from "./AdminRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "facilities",
        element: <FacilityListing />,
      },
      {
        path: `facilities/:id`,
        element: <FacilityDetails />,
      },
      {
        path: "contact",
        element: (
          <ProtectedRoutes>
            <ContactUs />
          </ProtectedRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoutes>
            <UserProfile />
          </ProtectedRoutes>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "login1",
        element: <LoginModal />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoutes>
        <Dashboard />
      </AdminRoutes>
    ),
    children: adminPaths,
  },
]);
