import { useState, useEffect } from "react";
import axiosInstance from "../../../../helper/api/axiosInstance";
import { useUserContext } from "../../../../context/UserContext";

const TeacherProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [idImage, setIdImage] = useState(null);
  const [university, setUniversity] = useState("");
  const [uploadError, setUploadError] = useState(null);
  const { allTeachers } = useUserContext().state;
  const loggedTeacher = JSON.parse(localStorage.getItem("loggedUser"));
  const [singleTeacher, setSingleTeacher] = useState(null);

  useEffect(() => {
    const fetchTeacherData = async () => {
      if (allTeachers.length > 0) {
        const teacher = allTeachers.find(
          (teacher) => teacher.email === loggedTeacher.email
        );
        setSingleTeacher(teacher);
      }
    };

    fetchTeacherData();
  }, [loggedTeacher.email, allTeachers]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (profilePic) {
      formData.set("profilePic", profilePic, profilePic.name);
    }
    if (idImage) {
      formData.set("idImage", idImage, idImage.name);
    }
    formData.set("institution", university);

    try {
      const response = await axiosInstance.post(
        `/teacher/info/update/${loggedTeacher.email}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedTeacherResponse = await axiosInstance.get(
        `/teacher/${loggedTeacher.email}`
      );
      const updatedTeacher = updatedTeacherResponse.data;
      setSingleTeacher(updatedTeacher);
      console.log(response.data);
    } catch (error) {
      console.error("Error while uploading the data:", error);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setUploadError("File size exceeds 5MB. Please choose a smaller file.");
      return;
    }
    setProfilePic(file);
    setUploadError(null);
  };

  const handleIdImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
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
    <div className="w-full md:w-1/4 bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Teacher Profile</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-dashed border-gray-300 group">
          {profilePic || (singleTeacher && singleTeacher.profileImage) ? (
            <div className="relative w-full h-full">
              <img
                src={
                  singleTeacher && singleTeacher.profileImage
                    ? `${process.env.REACT_APP_SERVER_URL}/${singleTeacher.profileImage}`
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
          {idImage || (singleTeacher && singleTeacher.idImage) ? (
            <img
              src={
                singleTeacher && singleTeacher.idImage
                  ? `${process.env.REACT_APP_SERVER_URL}/${singleTeacher.idImage}`
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
          className="w-full bg-gray-500 text-white p-2 rounded-md"
        >
          Update Info
        </button>
      </form>
    </div>
  );
};

export default TeacherProfile;
