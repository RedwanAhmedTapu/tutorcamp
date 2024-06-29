import React from "react";

const Profile = ( student ) => {
  console.log(student, "profile");

  // Ensure student is not undefined before accessing its properties
  if (!student || !student.singleStudent) {
    return null; // or handle the loading state/error state accordingly
  }

  const { singleStudent } = student;

  return (
    <div className="min-w-3xl mx-auto bg-gradient-to-r from-slate-700 to-slate-800 shadow-lg rounded-lg p-6 text-white">
      <div className="flex flex-col md:flex-row items-center  md:space-x-4 mb-6">
        <img
          src={`${process.env.SERVER_URL}/../${singleStudent.profileImage}`}
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full border-4 border-slate-500"
        />
        <div>
          <h2 className="text-2xl font-bold">{singleStudent.fname} {singleStudent.lname}</h2>
          <p className="text-lg">{singleStudent.email}</p>
          <p className="text-lg">{singleStudent.userType}</p>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Institution</h3>
        <p>{singleStudent.institution}</p>
      </div>
    </div>
  );
};

export default Profile;
