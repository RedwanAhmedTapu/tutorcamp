const VideoList = ({ videos, handleDeleteVideo }) => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Uploaded Videos</h2>
      {videos.length > 0 ? (
        <ul>
          {videos.map((video, index) => (
            <li key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <iframe
                  width="560"
                  height="315"
                  src={video.embedLink}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded YouTube Video"
                ></iframe>
                <button
                  onClick={() => handleDeleteVideo(video.subject)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No videos uploaded yet.</p>
      )}
    </div>
  );
  
  export default VideoList;
  