import React from "react";
import { Navigate } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import SignIn from "./pages/User/SignIn";
import SignUp from "./pages/User/SignUp";
import Home from "./pages/User/Home";
import CategoryDetails from "./pages/User/CategoryDetails";
import AnimeDetail from "./pages/User/AnimeDetail";
import AnimeWatch from "./pages/User/AnimeWatch";
import PageNotFound from "./pages/PageNotFound";
const routes = [
  {
    path: "admin",
    element: <AdminLayout />,
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "login", element: <SignIn /> },
      { path: "register", element: <SignUp /> },
      { path: "404", element: <PageNotFound /> },
      { path: "/", element: <Home /> },
      { path: "/anime/:title", element: <AnimeDetail /> },
      { path: "/watch/:title", element: <AnimeWatch /> },
      { path: "/category/:name", element: <CategoryDetails /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
