import { useState, useEffect } from "react";
import axiosInstance from "../../../helper/api/axiosInstance";
import { useUserContext } from "../../../context/UserContext";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import Sidebar from "./components/Sidebar";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("students");
  const [allStudents, setAllStudents] = useState([]);
  const [allTeachers, setAllTeachers] = useState([]);

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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <Sidebar onSelectTab={setActiveTab} />
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">{activeTab === "students" ? "All Students" : "All Teachers"}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === "students" &&
            allStudents.map((student, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <div className="flex flex-col items-center">
                  <img
                    src={`${process.env.SERVER_URL}/${student.profileImage}`}
                    alt={student.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h3 className="text-2xl font-bold">{student.name}</h3>
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
            allTeachers.map((teacher, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <div className="flex flex-col items-center">
                  <img
                    src={`${process.env.SERVER_URL}/${teacher.profileImage}`}
                    alt={teacher.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h3 className="text-2xl font-bold">{teacher.name}</h3>
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
    </div>
  );
};

export default AdminDashboard;
