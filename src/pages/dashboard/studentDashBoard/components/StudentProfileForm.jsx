import { useState, useEffect } from "react";
import { useUserContext } from "../../../../context/UserContext";
import axiosInstance from "../../../../helper/api/axiosInstance";

const StudentProfileForm = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [idImage, setIdImage] = useState(null);
  const [university, setUniversity] = useState("");
  const [uploadError, setUploadError] = useState(null);
  const { allStudents } = useUserContext().state;
  const loggedStudent = JSON.parse(localStorage.getItem("loggedUser"));
  const [singleStudent, setSingleStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      if (allStudents.length > 0) {
        const student = allStudents.find(
          (student) => student.email === loggedStudent.email
        );
        setSingleStudent(student);
        if (student) {
          setProfilePic(student.profileImage);
          setIdImage(student.idImage);
          setUniversity(student.institution);
        }
      }
    };

    fetchStudent();
  }, [loggedStudent.email, allStudents]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePic", profilePic);
    formData.append("idImage", idImage);
    formData.append("university", university);

    try {
      const response = await axiosInstance.post(
        `/student/info/update/${loggedStudent.email}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedStudentResponse = await axiosInstance.get(
        `/student/${loggedStudent.email}`
      );
      const updatedStudent = updatedStudentResponse.data;
      setSingleStudent(updatedStudent);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("File size exceeds 5MB. Please choose a smaller file.");
      return;
    }
    setProfilePic(file);
    setUploadError(null);
  };

  const handleIdImageChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("File size exceeds 5MB. Please choose a smaller file.");
      return;
    }
    setIdImage(file);
    setUploadError(null);
  };

  const handleUniversityChange = (e) => {
    setUniversity(e.target.value);
  };

  return (
    <>
      <div className="w-full md:w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Student Profile</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-dashed border-gray-300 group">
            {profilePic || (singleStudent && singleStudent.profileImage) ? (
              <div className="relative w-full h-full">
                <img
                  src={
                    singleStudent && singleStudent.profileImage
                      ? `${process.env.SERVER_URL}/${singleStudent.profileImage}`
                      : URL.createObjectURL(profilePic)
                  }
                  alt="Profile Preview"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm">Change Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center w-full h-full">
                <span className="text-gray-400 text-2xl">+</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            )}
          </div>
          {uploadError && <p className="text-red-500">{uploadError}</p>}
          <div>
            <label className="block text-gray-700">ID Image:</label>
            {idImage || (singleStudent && singleStudent.idImage) ? (
              <img
                src={
                  singleStudent && singleStudent.idImage
                    ? `${process.env.SERVER_URL}/${singleStudent.idImage}`
                    : URL.createObjectURL(idImage)
                }
                alt="ID Image"
                className="mt-1 block w-full border border-gray-300 rounded-md"
              />
            ) : (
              <input
                type="file"
                accept="image/*"
                onChange={handleIdImageChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            )}
          </div>
          <div>
            <label className="block text-gray-700">Institution Name:</label>
            <input
              type="text"
              value={university}
              onChange={handleUniversityChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-500 w-full text-white p-2 rounded-md"
          >
            Update Info
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentProfileForm;
