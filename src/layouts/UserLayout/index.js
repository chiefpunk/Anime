import React from "react";
import { Outlet } from 'react-router-dom';
import Preloader from 'components/Preloader';
import Header from 'components/Header'
import Footer from 'components/Footer'
export default function AdminLayout(props) {
    console.log('user');
  return (
    <>
      <Preloader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
