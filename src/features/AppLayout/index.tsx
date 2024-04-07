import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavigation from '../TopNavigation';
import Footer from 'features/Footer';

const AppLayout = () => {
  return (
    <>
      <TopNavigation />
      <div id="mainContent">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
