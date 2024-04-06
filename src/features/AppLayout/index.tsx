import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavigation from '../TopNavigation';

const AppLayout = () => {
  return (
    <>
      <TopNavigation />
      <div id="mainContent">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
