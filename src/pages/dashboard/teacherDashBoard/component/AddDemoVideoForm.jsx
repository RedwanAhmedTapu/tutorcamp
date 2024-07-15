import { useState,useEffect } from "react";
import axiosInstance from "../../../../helper/api/axiosInstance";
import { useUserContext } from "../../../../context/UserContext";


const AddDemoVideoForm = () => {
  const [subjects] = useState([
    "highermath",
    "biology",
    "physics",
    "chemistry",
    "ict",
    "bangla",
    "english",
  ]);
  const [videos, setVideos] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const { allTeachers } = useUserContext().state;
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
         
          JSON.stringify({ ...loggedTeacher, image: teacher.profileImage });
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


  return (
   <>
    <div className="mb-4">
          <h2 className="text-2xl font-bold">Add Demo Video Link</h2>
          <form onSubmit={handleAddVideo} className="space-y-4">
            <div>
              <label className="block text-gray-700">Select Subject:</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="mt-1 block w-full p-2 border gap-y-2  border-gray-300 rounded-md"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjects.map((subject, index) => (
                  <option
                    key={index}
                    value={subject}
                    className="w-96 h-24 text-white text-2xl bg-gray-600 hover:bg-gray-500 shadow-lg"
                  >
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
              className="w-64  bg-slate-500 text-white p-2 rounded-md"
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
   </>
  );
};

export default AddDemoVideoForm;
