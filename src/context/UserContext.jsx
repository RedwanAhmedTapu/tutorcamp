// UserContext.js

import  { createContext, useReducer, useContext, useEffect } from "react";
import userReducer, { initialState } from "../reducer/UserReducer";
import axiosInstance from "../helper/api/axiosInstance";

// Create User context
const UserContext = createContext();

// User context provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  console.log(state.allTeachers)

  useEffect(() => {
    // Fetch users from the API
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/users"); // Update the API endpoint as necessary
        const users = response.data;

        // Dispatch action to set users
        dispatch({ type: "SET_USERS", payload: users });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUserContext = () => useContext(UserContext);
