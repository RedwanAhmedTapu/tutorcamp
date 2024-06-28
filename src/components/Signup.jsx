import { useState } from "react";
import { AiFillApple, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

const Signup = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    userType: "student",
    subjects: [],
  });
  const [code, setCode] = useState("");
  const [isOtp, setIsOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const serverUrl = "http://localhost:5000";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkboxes separately
    if (type === "checkbox") {
      setUser((prevUser) => ({
        ...prevUser,
        subjects: checked
          ? [...prevUser.subjects, value]
          : prevUser.subjects.filter((subject) => subject !== value),
      }));
    } else {
      setUser({
        ...user,
        [name]: value,
      });
    }
  };

  const handleSubmit = async () => {
    try {
      const { fname, lname, email, password, userType, subjects } = user;

      if (
        fname.trim() === "" ||
        lname.trim() === "" ||
        email.trim() === "" ||
        password.trim() === ""
      ) {
        alert("Please fill in all the required fields");
      } else {
        console.log(user)
        const response = await fetch(`${serverUrl}/user/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        const data = await response.json();

        if (data.message === "User registered successfully") {
          // setIsOtp(true);
          navigate("/login")
        } else {
          alert(data.message);
        }
      }
    } catch (error) {
      console.error("Error during user registration:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCode(value.trim());
  };

  const handleSendOtp = async () => {
    const { email } = user;

    try {
      const response = await fetch("/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code }),
      });

      const data = await response.json();

      if (data.message === "Email verified successfully") {
        navigate("/login");
      } else {
        alert(data.message);
        navigate("/signup");
      }
    } catch (error) {
      console.error("Error during email verification:", error);
    }
  };

  const handleVerificationAuth = async (otpData, userEmail) => {
    try {
      const response = await fetch("/auth/googleAuth-verfication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail, otpData }),
      });

      const data = await response.json();

      if (
        data.message === "Email verified successfully" ||
        data.message === "Invalid verification code"
      ) {
        navigate(`/select-level?userEmail=${userEmail}`);
      } else {
        navigate("/signup");
      }
    } catch (error) {
      console.error("Error during email verification:", error);
    }
  };

  const handleAuthuser = async (userData) => {
    try {
      const response = await fetch("/auth/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data) {
        await handleVerificationAuth(data.message, userData.email);
      }
    } catch (error) {
      console.error("Error during user registration:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <div className={`flex_center w-full h-screen absolute  bottom-0 bg-slate-900 dark:bg-black ${isOtp ? "blur" : ""}`}>
        <div className="w-full max-w-2xl flex flex-col self-center h-full px-6 py-10 bg-slate-900 dark:bg-[#030303] rounded-lg shadow-md gap-y-6 relative top-10">
         
          <div className="flex flex-col md:flex-row justify-between w-full gap-x-4">
            <div className="flex flex-col gap-y-1 w-full md:w-[50%]">
              <label className="text-white">First Name</label>
              <input
                type="text"
                placeholder="Your first name"
                name="fname"
                id="fname"
                className="w-full h-12 border-2 border-gray-900 text-black bg-slate-300 rounded-lg placeholder-black px-4"
                value={user.fname}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-y-1 w-full md:w-[50%]">
              <label className="text-white">Last Name</label>
              <input
                type="text"
                placeholder="Your last name"
                name="lname"
                id="lname"
                className="w-full h-12 border-2 border-gray-900 text-black bg-slate-300 rounded-lg placeholder-black px-4"
                value={user.lname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full gap-x-4">
            <div className="flex flex-col gap-y-1 w-full md:w-[50%]">
              <label className="text-white">Email</label>
              <input
                type="email"
                placeholder="name@gmail.com"
                name="email"
                id="email"
                className="w-full h-12 border-2 border-gray-900 text-black bg-slate-300 rounded-lg placeholder-black px-4"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-y-1 w-full md:w-[50%] relative">
              <label className="text-white">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                id="password"
                className="w-full h-12 border-2 border-gray-900 text-black bg-slate-300 border-1 rounded-lg placeholder-black px-4"
                value={user.password}
                onChange={handleChange}
              />
              <span
                className="absolute flex_center right-4 top-11 cursor-pointer text-black"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
          </div>
          <div className="flex_center gap-2">
            <div className="w-2/3 bg-slate-300 h-[0.25px]"></div>
            <p className="text-white text-2xl font-semibold">or</p>
            <div className="w-2/3 bg-slate-300 h-[0.25px]"></div>
          </div>
          <div className="flex flex-col gap-y-1 w-full">
            <label className="text-white">User Type</label>
            <select
              name="userType"
              id="userType"
              className="w-full h-12 border-2 border-gray-900 text-black bg-slate-300 rounded-lg"
              value={user.userType}
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          {user.userType === "teacher" && (
            <div className="flex flex-col gap-y-1 w-full">
              <label className="text-white">Select Subjects</label>
              <div className="flex flex-wrap gap-x-4">
                <label className="text-white">
                  <input
                    type="checkbox"
                    name="physics"
                    value="physics"
                    checked={user.subjects.includes("physics")}
                    onChange={handleChange}
                  />
                  Physics
                </label>
                <label className="text-white">
                  <input
                    type="checkbox"
                    name="chemistry"
                    value="chemistry"
                    checked={user.subjects.includes("chemistry")}
                    onChange={handleChange}
                  />
                  Chemistry
                </label>
                <label className="text-white">
                  <input
                    type="checkbox"
                    name="highermath"
                    value="highermath"
                    checked={user.subjects.includes("highermath")}
                    onChange={handleChange}
                  />
                  Higher Math
                </label>
                <label className="text-white">
                  <input
                    type="checkbox"
                    name="biology"
                    value="biology"
                    checked={user.subjects.includes("biology")}
                    onChange={handleChange}
                  />
                  Biology
                </label>
                <label className="text-white">
                  <input
                    type="checkbox"
                    name="english"
                    value="english"
                    checked={user.subjects.includes("english")}
                    onChange={handleChange}
                  />
                  English
                </label>
                <label className="text-white">
                  <input
                    type="checkbox"
                    name="ict"
                    value="ict"
                    checked={user.subjects.includes("ict")}
                    onChange={handleChange}
                  />
                  ICT
                </label>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-y-8">
            <div className="flex_center w-full h-10 gap-x-2 border-2 border-slate-300 rounded-lg">
              {/* Google OAuth or other authentication methods can be added here */}
            </div>
            <div className="flex_center w-full h-12 gap-x-2 border-2 border-slate-300 rounded-lg">
              <p className="text-white text-2xl flex_center">
                <AiFillApple />
                &nbsp;Sign In With Apple
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex_center gap-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded-lg bg-slate-500"
              />
              <p className="text-white">Remember me</p>
            </div>
            <div className="text-blue-600">Forgot password?</div>
          </div>
          <div
            className="max-w-full w-full h-12 flex_center bg-blue-700 rounded-lg text-white text-xl font-semibold cursor-pointer"
            onClick={handleSubmit}
          >
            Sign up
          </div>
        </div>
      </div>
      {isOtp && (
        <div className="w-full h-full flex_center mt-20">
          <div className="bg-slate-900 rounded-lg">
            <div className="max-w-md mx-auto p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-center text-white">
                Enter OTP within 5 minutes
              </h2>
              <CountdownTimer />

              <input
                type="text"
                className="w-full p-2 border text-black rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter OTP"
                value={code}
                onChange={handleInputChange}
              />
              <button
                className="mt-4 px-4 py-2 self-center bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleSendOtp}
              >
                Send OTP for email verification
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
