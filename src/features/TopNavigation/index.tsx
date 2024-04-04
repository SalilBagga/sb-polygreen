import React from 'react';
import Logo from '../../assets/Logo.webp';

const TopNavigation = () => {
  return (
    <nav className="py-4 px-12 bg-white flex items-center">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-[91.43px] h-16 mr-6" />
        <h1>Sali Balaji Polygreen Industries</h1>
      </div>
      <div></div>
    </nav>
  );
};

export default TopNavigation;
