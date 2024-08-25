import MainLayout from "@/layout/MainLayout";
import Login from "@/pages/Auth/Login";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "@/pages/Auth/SignUp";
import AboutUs from "@/pages/AboutUs/AboutUs";
import ContactUs from "@/pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp/>
      }
    ],
  },
]);
