import {useState,useEffect} from 'react';
import Profile from "./Profile";
import { useUserContext } from "../../../../context/UserContext";



const PublicView = () => {

    const [profile, setProfile] = useState(false);
  const [singleStudent, setSingleStudent] = useState(null);

  const { allStudents } = useUserContext().state;
  const loggedStudent = JSON.parse(localStorage.getItem("loggedUser"));


  useEffect(() => {
    const fetchStudent = async () => {
      if (allStudents.length > 0) {
        const student = allStudents.find(
          (student) => student.email === loggedStudent.email
        );
        setSingleStudent(student);
        // if (student) {
        //   setProfilePic(student.profileImage);
        //   setIdImage(student.idImage);
        //   setUniversity(student.institution);
        // }
      }
    };

    fetchStudent();
  }, [loggedStudent.email, allStudents]);
    const profileToggling = () => {
        setProfile(!profile);
      };
  return (
   <>
    <p
          className="text-slate-600 p-4 mb-2 text-xl font-[700] hover:text-slate-800 w-fit cursor-pointer"
          onClick={profileToggling}
        >
                    {profile ? <div className="w-44 h-16 flex_center bg-slate-700 text-sm text-white shadow-md rounded-sm">close profile</div> : <div className="w-48  h-16 flex_center bg-slate-700 text-sm text-white shadow-sm rounded-sm">see public view</div>}

        </p>
        {profile && (
          <div className="bg-white shadow-lg rounded-lg p-4 mb-4-auto py-4">
            <Profile singleStudent={singleStudent} />
          </div>
        )}
   </>
  )
}

export default PublicView