import  { useState, useEffect } from 'react';
import { useUserContext } from "../context/UserContext";
import Profile from '../components/Profile';

const SearchTeacher = () => {
  const { allTeachers } = useUserContext().state;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTeachers, setFilteredTeachers] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    const universities = [...new Set(allTeachers.map(teacher => teacher.institution))];
    setFilteredCategories(universities);
  }, [allTeachers]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = allTeachers.filter((teacher) =>
      (selectedCategory === 'All categories' || teacher.institution === selectedCategory) &&
      (teacher.subjects.some(subject => subject.toLowerCase().includes(value)) ||
        teacher.institution.toLowerCase().includes(value))
    );

    setFilteredTeachers(filtered);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownVisible(false);
  };

  return (
    <div className="p-6">
      <div className="mb-6 relative top-20 md:left-44 lg:left-52">
        <div className="flex">
          <button 
            id="dropdown-button" 
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" 
            type="button" 
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            {selectedCategory} 
            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          {dropdownVisible && (
            <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li onClick={() => handleCategorySelect('All categories')} className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">All categories</li>
                {filteredCategories.map((category, index) => (
                  <li key={index} onClick={() => handleCategorySelect(category)} className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">{category}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="relative w-96 ">
            <input 
              type="search" 
              id="search-dropdown" 
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by subject or institution..." 
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              required 
            />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only text-black">Search</span>
            </button>
          </div>
        </div>
      </div>
      <Profile allTeachers={filteredTeachers?filteredTeachers:allTeachers} />
    </div>
  );
};

export default SearchTeacher;
