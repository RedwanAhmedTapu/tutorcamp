// userReducer.js

const userReducer = (state, action) => {
    if (action.type === "SET_USERS") {
      const totalStudents = action.payload.filter(user => user.userType === 'student').length;
      const totalTeachers = action.payload.filter(user => user.userType === 'teacher').length;
      const allTeachers = action.payload.filter(user => user.userType === 'teacher');
  
      return {
        ...state,
        totalStudents,
        totalTeachers,
        allTeachers,
      };
    }
  
    return state;
  };
  
  // Initial state
  export const initialState = {
    totalStudents: 0,
    totalTeachers: 0,
    allTeachers: [],
  };
  
  export default userReducer;
  