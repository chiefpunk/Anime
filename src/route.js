import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import UserLayout from './layouts/UserLayout';
import SignIn from './pages/User/SignIn';
import SignUp from './pages/User/SignUp';
import Home from './pages/User/Home';
import PageNotFound from './pages/PageNotFound';
const routes = [
  {
    path: 'admin',
    element: <AdminLayout />,
    // children: [
    //   { path: 'account', element: <AccountView /> },
    //   { path: 'customers', element: <CustomerListView /> },
    //   { path: 'dashboard', element: <DashboardView /> },
    //   { path: 'products', element: <ProductListView /> },
    //   { path: 'settings', element: <SettingsView /> },
    //   { path: '*', element: <Navigate to="/404" /> }
    // ]
  },
  {
    path: '/',
    element: <UserLayout />,
    children: [
      { path: 'login', element: <SignIn /> },
      { path: 'register', element: <SignUp /> },
      { path: '404', element: <PageNotFound /> },
      { path: '/', element: <Home /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;