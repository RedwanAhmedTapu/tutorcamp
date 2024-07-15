import { useState, useEffect } from "react";
import Profile from "./Profile";
import HowToaddVideoImg from "../../../../assets/howtoAddvideo.png";
import { useUserContext } from "../../../../context/UserContext";

const HowToAddVideo = () => {
  const [profile, setProfile] = useState(false);
  const [showvideoProcess, setShowvideoProcess] = useState(false);
  const [singleTeacher, setSingleTeacher] = useState(null);
  const { allTeachers } = useUserContext().state;
  const loggedTeacher = JSON.parse(localStorage.getItem("loggedUser"));

  useEffect(() => {
    const fetchVideos = async () => {
      if (allTeachers.length > 0) {
        const teacher = allTeachers.find(
          (teacher) => teacher.email === loggedTeacher.email
        );
        setSingleTeacher(teacher);
      }
    };

    fetchVideos();
  }, [loggedTeacher.email, allTeachers]);

  const profileToggling = () => {
    setProfile(!profile);
  };

  const showVideoProcessToggling = () => {
    setShowvideoProcess(!showvideoProcess);
  };

  return (
    <div>
      <p
        className="text-slate-600 p-4 mb-2 text-xl font-[700]  hover:text-slate-800   w-fit cursor-pointer"
        onClick={profileToggling}
      >
        {profile ? (
          <div className="w-44 h-16 flex_center bg-slate-700 text-sm text-white shadow-md rounded-sm">
            close profile
          </div>
        ) : (
          <div className="w-48  h-16 flex_center bg-slate-700 text-sm text-white shadow-sm rounded-sm">
            see public view
          </div>
        )}
      </p>
      {profile && (
       
          <Profile singleTeacher={singleTeacher} />
       
      )}
      <p
        className="text-slate-600 p-4 mb-2 text-xl font-[700]  hover:text-slate-800   w-fit cursor-pointer"
        onClick={showVideoProcessToggling}
      >
        {showvideoProcess ? (
          <div className="w-44  h-16 flex_center bg-slate-500 text-sm text-white shadow-md rounded-sm">
            Close{" "}
          </div>
        ) : (
          <div className="w-48  h-16 flex_center bg-slate-500 text-sm text-white shadow-md rounded-sm">
            see how to add video
          </div>
        )}
      </p>

      {showvideoProcess && (
        <div className="bg-slate-800 shadow-lg rounded-lg p-4 mb-4-auto py-4">
          <img src={HowToaddVideoImg} className="w-auto h-auto" alt="How to add video" />
        </div>
      )}
    </div>
  );
};

export default HowToAddVideo;
