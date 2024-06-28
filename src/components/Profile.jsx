import React from 'react';

const Profile = ( teachers ) => {


    const {allTeachers}=teachers;
  if (!allTeachers || allTeachers.length === 0) {
    return <p className="text-center text-gray-500 mt-20">No teachers found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-12 h-[35rem] relative top-20 space-y-8 overflow-y-scroll">
      {allTeachers.map((singleTeacher, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <img
              src={`http://localhost:5000/${singleTeacher.profileImage}`}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">
                {singleTeacher.fname} {singleTeacher.lname}
              </h2>
              <p className="text-lg text-gray-600">{singleTeacher.email}</p>
              <p className="text-gray-600">{singleTeacher.userType}</p>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Institution</h3>
            <p className="text-gray-600">{singleTeacher.institution}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Subjects</h3>
            <ul className="list-disc list-inside text-gray-600">
              {singleTeacher.subjects && singleTeacher.subjects.length > 0 ? (
                singleTeacher.subjects.map((subject, subjectIndex) => (
                  <li key={subjectIndex}>{subject}</li>
                ))
              ) : (
                <li>No subjects found</li>
              )}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Videos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {singleTeacher.videos && singleTeacher.videos.length > 0 ? (
                singleTeacher.videos.map((video, videoIndex) => (
                  <div key={videoIndex} className="bg-white shadow-lg rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {video.subject}
                    </h3>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src={video.embedLink}
                        title={`Video for ${video.subject}`}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No videos found</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
