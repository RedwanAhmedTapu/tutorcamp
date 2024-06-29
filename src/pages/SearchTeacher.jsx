import { useState, useEffect, useRef } from "react";
import { useUserContext } from "../context/UserContext";
import Profile from "../components/Profile";

const SearchTeacher = () => {
  const { allTeachers } = useUserContext().state;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const subjects = ["Bangla", "English", "ICT", "Higher Math", "Chemistry", "Biology"];
  const [circlePosition, setCirclePosition] = useState(0);
  const subjectRefs = useRef([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const universities = [...new Set(allTeachers.map((teacher) => teacher.institution))];
    setFilteredCategories(universities);
  }, [allTeachers]);

  useEffect(() => {
    const filtered = allTeachers.filter(
      (teacher) =>
        (selectedCategory === "All categories" || teacher.institution === selectedCategory) &&
        (teacher.subjects.some((subject) => subject.toLowerCase().includes(searchTerm)) ||
          teacher.institution.toLowerCase().includes(searchTerm)) &&
        (selectedSubject === "" || teacher.subjects.includes(selectedSubject.toLowerCase()))
    );
    setFilteredTeachers(filtered);
  }, [searchTerm, selectedCategory, selectedSubject, allTeachers]);

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
    setFilteredTeachers(
      allTeachers.filter(
        (teacher) =>
          selectedSubject === "" || teacher.subjects.includes(selectedSubject.toLowerCase())
      )
    );
  };

  const handleDragMove = (event) => {
    if (!isDragging) return;
    const line = subjectRefs.current[0].parentNode;
    const rect = line.getBoundingClientRect();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const newPosition = Math.min(Math.max(0, clientX - rect.left), rect.width);
    setCirclePosition(newPosition);

    const subjectIndex = Math.round((newPosition / rect.width) * (subjects.length - 1));
    const subjectDiv = subjectRefs.current[subjectIndex];
    if (subjectDiv) {
      const subjectRect = subjectDiv.getBoundingClientRect();
      if (newPosition >= subjectRect.left - rect.left && newPosition <= subjectRect.right - rect.left) {
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
      <Profile allTeachers={filteredTeachers || allTeachers} />
    </div>
  );
};

export default SearchTeacher;
