import  { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShowSubject = ({ children }) => {
  const location = useLocation();
  const [showSubject, setShowSubject] = useState(true); // Initialize with true to show navbar by default

  useEffect(() => {
    console.log('Current location: ', location.pathname);
    switch (location.pathname) {
      case '/sub/javascript':
      case '/signup':
      case '/dashboard/teacher-dashoard':
      case '/dashboard/student-dashoard':
      case '/dashboard/admin-dashoard':
      case '/sub/':
        setShowSubject(true);
        break;
      default:
        setShowSubject(false);
        break;
    }
  }, [location.pathname]);

  return (
    <div>
      {showSubject && children}
    </div>
  );
};

export default ShowSubject;
