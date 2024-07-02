import { useState, useEffect, useRef } from "react";
import { useUserContext } from "../context/UserContext";

const IntroVideos = () => {
  const { allTeachers } = useUserContext().state;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const subjects = [
    "Bangla",
    "English",
    "ICT",
    "Higher Math",
    "Chemistry",
    "Biology",
  ];
  const [circlePosition, setCirclePosition] = useState(0);
  const subjectRefs = useRef([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const universities = [
      ...new Set(allTeachers.map((teacher) => teacher.institution)),
    ];
    setFilteredCategories(universities);
  }, [allTeachers]);

  useEffect(() => {
    console.log("All Teachers:", allTeachers);
    let filtered = allTeachers.flatMap((teacher) =>
      teacher.subjects
        .filter((subject) => subject.toLowerCase().includes(searchTerm))
        .map((subject) => ({ subject, videos: teacher.videos }))
    );

    if (selectedSubject) {
      filtered = filtered.filter(
        (video) => video.subject === selectedSubject.toLowerCase()
      );
    }

    setFilteredVideos(filtered);
  }, [searchTerm, allTeachers, selectedSubject]);
  console.log(filteredVideos);
  console.log(selectedSubject);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownVisible(false);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (event) => {
    if (!isDragging) return;
    const line = subjectRefs.current[0].parentNode;
    const rect = line.getBoundingClientRect();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const newPosition = Math.min(Math.max(0, clientX - rect.left), rect.width);
    setCirclePosition(newPosition);

    const subjectIndex = Math.round(
      (newPosition / rect.width) * (subjects.length - 1)
    );
    const subjectDiv = subjectRefs.current[subjectIndex];
    if (subjectDiv) {
      const subjectRect = subjectDiv.getBoundingClientRect();
      if (
        newPosition >= subjectRect.left - rect.left &&
        newPosition <= subjectRect.right - rect.left
      ) {
        setSelectedSubject(subjects[subjectIndex].replace(/\s+/g, ""));
      }
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto relative top-16">
      <div className="mb-6 w-full">
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative w-full md:w-auto mb-4 md:mb-0 md:mr-4">
            <button
              id="dropdown-button"
              className="inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 w-full md:w-auto"
              type="button"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              {selectedCategory}
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l4 4 4-4"
                />
              </svg>
            </button>
            {dropdownVisible && (
              <div
                id="dropdown"
                className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li
                    onClick={() => handleCategorySelect("All categories")}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    All categories
                  </li>
                  {filteredCategories.map((category, index) => (
                    <li
                      key={index}
                      onClick={() => handleCategorySelect(category)}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by subject or institution..."
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-6">
        <div
          className="relative w-full flex items-center h-1 bg-gray-300 cursor-pointer"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseMove={handleDragMove}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          onTouchMove={handleDragMove}
        >
          <div
            className="absolute w-3 h-3 bg-slate-500 rounded-full cursor-pointer"
            style={{
              left: `${circlePosition}px`,
              transform: "translateX(-50%)",
            }}
          />
        </div>
        <div className="flex justify-between w-full mt-2">
          {subjects.map((subject, index) => (
            <div
              key={index}
              ref={(el) => (subjectRefs.current[index] = el)}
              className="text-[0.6rem] md:text-sm text-center w-1/6 px-2"
            >
              {subject}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 ">
        {filteredVideos.map((video, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded-lg shadow-lg flex_col_center gap-x-4 overflow-y-scroll"
          >
            <h2 className="text-lg  flex self-start font-semibold text-white mb-2">
              {video.subject}
            </h2>
            {video.videos.length > 0 ? (
              video.videos.map((vid, idx) => (
                <div key={idx} className="mt-4 md:w-[80%] h-auto">
                  <h3 className="text-lg font-medium text-gray-200">
                    {vid.title}
                  </h3>
                  <p className="text-sm text-gray-400">{vid.description}</p>
                  {/* Example of rendering iframe for embed link */}
                  <div className="w-full h-64">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={vid.embedLink}
                      title={`Video for ${video.subject}`}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-2xl text-slate-300 font-[500]">
                {video.subject} related no video founds
              </p>
            )}
          </div>
        ))}
        {filteredVideos.length === 0 && (
          <p className="text-2xl text-slate-900 font-[500]">
            No videos found for the selected filters
          </p>
        )}
      </div>
    </div>
  );
};

export default IntroVideos;
