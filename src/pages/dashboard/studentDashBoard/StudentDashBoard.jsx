import PublicView from "./components/PublicView";
import StudentProfileForm from "./components/StudentProfileForm";
import TeacherList from "./components/TeacherList";

import { Link } from "react-router-dom";

const StudentDashboard = ({ userEmail }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-100">
      <StudentProfileForm />
      <div className="flex-1 p-4">
        <div className="mb-4 flex flex-col md:flex-row justify-start items-center gap-x-4">
          <h1 className="text-3xl text-gray-500 font-bold">Dashboard</h1>
          <div className="flex  items-center">
            <Link to="/">
              <h1 className="text-[1rem] md:text-xl text-gray-500 font-[500] hover:text-indigo-400">
                /home
              </h1>
            </Link>
            <h1 className="text-[1rem] md:text-xl text-indigo-500 font-[500]">
              /student/student-dashboard
            </h1>
          </div>
        </div>
        <PublicView />
        <TeacherList userEmail={userEmail} />
      </div>
    </div>
  );
};

export default StudentDashboard;
