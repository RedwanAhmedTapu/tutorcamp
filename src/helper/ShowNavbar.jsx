import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShowNavbar = ({ children }) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true); // Initialize with true to show navbar by default

  useEffect(() => {
    console.log('Current location: ', location.pathname);
    switch (location.pathname) {
      case '/login':
      case '/signup':
      case '/dashboard/teacher-dashoard':
      case '/dashboard/student-dashoard':
      case '/dashboard/admin-dashoard':
        setShowNavbar(false);
        break;
      default:
        setShowNavbar(true);
        break;
    }
  }, [location.pathname]);

  return (
    <div>
      {showNavbar && children}
    </div>
  );
};

export default ShowNavbar;