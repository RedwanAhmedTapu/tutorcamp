import { Link } from "react-router-dom";
import TotalTeacherStudent from "./component/TotalTeacherStudent";
import TeacherProfile from "./component/TeacherProfile";
import AddDemoVideoForm from "./component/AddDemoVideoForm";
import HowToAddVideo from "./component/HowToAddVideo";
import StudentList from "./component/StudentList";

const TeacherDashboard = ({ userEmail }) => {

 

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <TeacherProfile />
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
        <TotalTeacherStudent />

        <AddDemoVideoForm />
        <HowToAddVideo />

        <StudentList userEmail={userEmail}/>
      </div>
     
    </div>
  );
};

export default TeacherDashboard;
