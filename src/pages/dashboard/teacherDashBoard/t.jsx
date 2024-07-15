// import React, { useState, useEffect } from 'react';
// import Sidebar from './component/Sidebar';
// import Navbar from './component/Navbar';
// // import Dashboard from './components/DashBoard';
// import Loader from './component/Loader';
// import T from "./t";

// const TeacherDashBoard = () => {
//   const [isExpanded, setIsExpanded] = useState(true);
//   const [isMobileIndex, setIsMobileIndex] = useState(true);

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="grid grid-cols-12  h-screen bg-transparent">
//           {/* Sidebar */}
//           <div className="col-span-2 fixed top-0 left-0 z-10">
//             <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} isMobileIndex={isMobileIndex} setIsMobileIndex={setIsMobileIndex} />
//           </div>

//           {/* Main Content */}
//           <div className={`col-span-10 col-start-2 flex flex-col transition-all duration-300 `}>
//             {/* Navbar */}
//             <div className={`fixed top-0 left-0 md:left-20 w-full col-span-10 bg-gray-300 transition-all duration-300 ${isExpanded && "ml-28"} `}>
//               <Navbar isExpanded={isExpanded} setIsExpanded={setIsExpanded} isMobileIndex={isMobileIndex} setIsMobileIndex={setIsMobileIndex} />
//             </div>

//             {/* Main Content Area */}
//             <div className={` mt-16  w-full  ${isExpanded && "ml-28"}`}>
//               <T/>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default TeacherDashBoard;
