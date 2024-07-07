import React, { useState, useEffect } from "react";
import axiosInstance from "../../../helper/api/axiosInstance";
import { useUserContext } from "../../../context/UserContext";
import { FiUserCheck, FiUserX, FiSearch } from "react-icons/fi";
import Sidebar from "./components/Sidebar";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("students");
  const [allStudents, setAllStudents] = useState([]);
  const [allTeachers, setAllTeachers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false); // State for showing the modal
  const [modalMessage, setModalMessage] = useState(""); // Message to display in the modal
  const { state } = useUserContext();

  useEffect(() => {
    setAllStudents(state.allStudents);
    setAllTeachers(state.allTeachers);
  }, [state.allStudents, state.allTeachers]);

  const handleDeleteUser = async (email, role) => {
    try {
      await axiosInstance.delete(`/admin/delete/${role}/${email}`);
      if (role === "student") {
        setAllStudents(allStudents.filter((student) => student.email !== email));
      } else if (role === "teacher") {
        setAllTeachers(allTeachers.filter((teacher) => teacher.email !== email));
      }
      setShowModal(true);
      setModalMessage(`${role === "student" ? "Student" : "Teacher"} deleted successfully!`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVerifyTeacher = async (email) => {
    try {
      const response = await axiosInstance.post(`/admin/verify-teacher/${email}`);
      const updatedTeacher = response.data;
      setAllTeachers(allTeachers.map((teacher) =>
        teacher.email === email ? updatedTeacher : teacher
      ));
      setShowModal(true);
      setModalMessage("Teacher verified successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  const filteredStudents = allStudents.filter((student) => {
    if (!student || !student.fname || !student.institution || !student.email) return false; // Check for existence of properties
    const lowerCaseQuery = searchQuery && searchQuery.toLowerCase();
    const nameIncludes = student.fname.toLowerCase().includes(lowerCaseQuery);
    const institutionIncludes = student.institution.toLowerCase().includes(lowerCaseQuery);
    const emailIncludes = student.email.toLowerCase().includes(lowerCaseQuery);
    return nameIncludes || institutionIncludes || emailIncludes;
  });

  const filteredTeachers = allTeachers.filter((teacher) => {
    if (!teacher || !teacher.fname || !teacher.institution || !teacher.email) return false; // Check for existence of properties
    const lowerCaseQuery = searchQuery && searchQuery.toLowerCase();
    const nameIncludes = teacher.fname.toLowerCase().includes(lowerCaseQuery);
    const institutionIncludes = teacher.institution.toLowerCase().includes(lowerCaseQuery);
    const emailIncludes = teacher.email.toLowerCase().includes(lowerCaseQuery);
    if (lowerCaseQuery === "verified" && teacher.verified) return true;
    if (lowerCaseQuery === "unverified" && !teacher.verified) return true;
    return nameIncludes || institutionIncludes || emailIncludes;
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    setAllStudents(state.allStudents);
  }, [state.allStudents]);

  useEffect(() => {
    setAllTeachers(state.allTeachers);
  }, [state.allTeachers]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <Sidebar onSelectTab={setActiveTab} />
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by name, email, institution, or status (e.g., verified)"
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none"
          />
          <FiSearch className="text-gray-400 ml-2" />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center">{activeTab === "students" ? "All Students" : "All Teachers"}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === "students" &&
            filteredStudents.map((student, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <div className="flex flex-col items-center">
                  <img
                    src={`${process.env.SERVER_URL}/${student.profileImage}`}
                    alt={student.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h3 className="text-2xl font-bold">{student.fname}</h3>
                  <p className="text-gray-700">{student.email}</p>
                  <p className="text-gray-500 mt-2">{student.institution}</p>
                  <button
                    onClick={() => handleDeleteUser(student.email, "student")}
                    className="bg-red-500 text-white mt-4 py-2 px-4 rounded-md w-full flex items-center justify-center"
                  >
                    <FiUserX className="mr-2" />
                    Delete Student
                  </button>
                </div>
              </div>
            ))}
          {activeTab === "teachers" &&
            filteredTeachers.map((teacher, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <div className="flex flex-col items-center">
                  <img
                    src={`${process.env.SERVER_URL}/${teacher.profileImage}`}
                    alt={teacher.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h3 className="text-2xl font-bold">{teacher.fname}</h3>
                  <p className="text-gray-700">{teacher.email}</p>
                  <p className="text-gray-500 mt-2">{teacher.institution}</p>
                  <img
                    src={`${process.env.SERVER_URL}/${teacher.idImage}`}
                    alt="ID"
                    className="w-full h-auto mt-4"
                  />
                  <button
                    onClick={() => handleDeleteUser(teacher.email, "teacher")}
                    className="bg-red-500 text-white mt-4 py-2 px-4 rounded-md w-full flex items-center justify-center"
                  >
                    <FiUserX className="mr-2" />
                    Delete Teacher
                  </button>
                  {!teacher.isVerified && (
                    <button
                      onClick={() => handleVerifyTeacher(teacher.email)}
                      className="bg-green-500 text-white mt-4 py-2 px-4 rounded-md w-full flex items-center justify-center"
                    >
                      <FiUserCheck className="mr-2" />
                      Verify Teacher
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-semibold mb-4">{modalMessage}</p>
            <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
