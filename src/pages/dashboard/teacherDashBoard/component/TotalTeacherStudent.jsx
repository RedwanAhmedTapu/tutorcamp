// src/components/TotalTeacherStudent.js
import React from 'react';
import { useUserContext } from '../../../../context/UserContext';


const TotalTeacherStudent = () => {
const { totalStudents,totalTeachers } = useUserContext().state;

  const stats = [
    { label: 'Total Students', value: totalStudents },
    { label: 'Total Teachers', value: totalTeachers },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center"
        >
          <p className="text-4xl font-bold text-gray-800">{stat.value}</p>
          <p className="text-lg text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default TotalTeacherStudent;
