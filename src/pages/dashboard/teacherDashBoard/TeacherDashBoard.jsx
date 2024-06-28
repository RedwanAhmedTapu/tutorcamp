import { useState, useEffect } from "react";
import axiosInstance from "../../../helper/api/axiosInstance";
import { useUserContext } from "../../../context/UserContext";
import TotalTeacherStudent from "./component/TotalTeacherStudent";
import Profile from "./component/Profile";

const TeacherDashboard = ({ userEmail }) => {
  const [subjects] = useState(["highermath", "biology"]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [videos, setVideos] = useState([]);
  const [profilePic, setProfilePic] = useState(null);
  const [idImage, setIdImage] = useState(null);
  const [university, setUniversity] = useState("");
  const [uploadError, setUploadError] = useState(null);
  const [profile, setProfile] = useState(false);

  const {  allTeachers } = useUserContext().state;

  const loggedTeacher = JSON.parse(localStorage.getItem("loggedUser"));

  const [singleTeacher, setSingleTeacher] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      if (allTeachers.length > 0) {
        const teacher = allTeachers.find(
          (teacher) => teacher.email === loggedTeacher.email
        );
        setSingleTeacher(teacher);
        if (teacher) {
          setSelectedSubject(teacher.subjects);
          setProfilePic(teacher.profileImage);
          setIdImage(teacher.idImage);
          setUniversity(teacher.institution);
        }
      }
      try {
        const response = await axiosInstance.get(
          `/teacher/${loggedTeacher.email}/videos`
        );
        setVideos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, [loggedTeacher.email, allTeachers]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePic", profilePic);
    formData.append("idImage", idImage);
    formData.append("university", university);

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

      // Fetch the updated teacher information
      const updatedTeacherResponse = await axiosInstance.get(
        `/teacher/${loggedTeacher.email}`
      );
      const updatedTeacher = updatedTeacherResponse.data;

      // Update the singleTeacher state
      setSingleTeacher(updatedTeacher);

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

  const handleAddVideo = async (e) => {
    e.preventDefault();
    try {
      const embedLink = getEmbedLink(videoLink);
      if (!embedLink) {
        alert("Invalid YouTube URL. Please enter a valid link.");
        return;
      }

      const response = await axiosInstance.post(
        `/teacher/${loggedTeacher.email}/videos`,
        {
          subject: selectedSubject,
          embedLink,
        }
      );
      setVideos(response.data);
      setVideoLink("");
      setSelectedSubject("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteVideo = async (subject) => {
    try {
      const response = await axiosInstance.delete(
        `/teacher/${loggedTeacher.email}/videos`,
        {
          data: { subject },
        }
      );
      setVideos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getEmbedLink = (link) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = link.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const profileToggling = () => {
    setProfile(!profile);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <div className="w-full md:w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Teacher Profile</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-dashed border-gray-300 group">
            {profilePic || (singleTeacher && singleTeacher.profileImage) ? (
              <div className="relative w-full h-full">
                <img
                  src={
                    singleTeacher && singleTeacher.profileImage
                      ? `http://localhost:5000/${singleTeacher.profileImage}`
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
                    ? `http://localhost:5000/${singleTeacher.idImage}`
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
            className="bg-blue-500 text-black p-2 rounded-md"
          >
            Update Info
          </button>
        </form>
      </div>
      <div className="flex-1 p-4">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <TotalTeacherStudent />
        </div>
        <p
          className="text-slate-900 p-4 mb-2 text-xl hover:text-dark-blue cursor-pointer"
          onClick={profileToggling}
        >
         {profile ?"hide profile":"see profile"}
        </p>
        {profile && (
          <div className="w-full h-auto py-4">
            <Profile singleTeacher={singleTeacher} />
          </div>
        )}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Add Demo Video Link</h2>
          <form onSubmit={handleAddVideo} className="space-y-4">
            <div>
              <label className="block text-gray-700">Select Subject:</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">YouTube Link:</label>
              <input
                type="text"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-black p-2 rounded-md"
            >
              Add Video
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-bold">
                Demo Video for {video.subject}
              </h3>
              <iframe
                width="100%"
                height="200"
                src={video.embedLink}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Demo Video for ${video.subject}`}
              ></iframe>
              <button
                onClick={() => handleDeleteVideo(video.subject)}
                className="bg-red-500 text-white mt-2 p-2 rounded-md w-full"
              >
                Delete Video
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
