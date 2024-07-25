import { useState } from "react";
import { AiFillApple, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import axiosInstance from "../helper/api/axiosInstance";
import { startRegistration } from "@simplewebauthn/browser";

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
  // biometric registration
  const handleBiometricReg = async () => {
    try {
      const optionsResponse = await axiosInstance.get(`/webauthn/reg-options?email=${user.email}`);
      const options = optionsResponse.data;
  
      console.log("Registration Options:", options);
  
      // Check if options contain the necessary fields
      if (!options || !options.challenge || !options.user || !options.user.id) {
        throw new Error("Invalid registration options");
      }
  
      const regResponse = await startRegistration(options);
  
      console.log("Registration Response:", regResponse);
  
      const verificationResponse = await axiosInstance.post(
        "/webauthn/reg-verify",
        { email: user.email, ...regResponse }
      );
  
      if (verificationResponse.data && verificationResponse.data.verified) {
        alert("Biometric registration successful");
      } else {
        alert("Biometric registration failed");
      }
    } catch (error) {
      console.error("Error during biometric registration:", error);
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
        console.log(user);
        const response = await axiosInstance.post("/user/signup", user);
        const data = response.data;

        if (data.message === "User registered successfully") {
          await handleBiometricReg();
          navigate("/login");
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
      <div
        className={`flex items-center justify-center w-full h-screen sm:p-0 p-4  bg-white dark:bg-[#130e2e] ${
          isOtp ? "blur" : ""
        }`}
      >
        <div className=" w-full  md:w-[80%] min-h-min flex flex-col self-center  px-6 py-10 bg-white  rounded-lg shadow-md gap-y-6">
          <div className="flex flex-col md:flex-row justify-between w-full gap-x-4">
            <div className="flex flex-col gap-y-1 w-full md:w-[50%]">
              <label className="text-gray-800">First Name</label>
              <input
                type="text"
                placeholder="Your first name"
                name="fname"
                id="fname"
                className="w-full h-12 border-2 border-gray-300 text-gray-800 bg-gray-100 rounded-lg placeholder-gray-500 px-4"
                value={user.fname}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-y-1 w-full md:w-[50%]">
              <label className="text-gray-800">Last Name</label>
              <input
                type="text"
                placeholder="Your last name"
                name="lname"
                id="lname"
                className="w-full h-12 border-2 border-gray-300 text-gray-800 bg-gray-100 rounded-lg placeholder-gray-500 px-4"
                value={user.lname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full gap-x-4">
            <div className="flex flex-col gap-y-1 w-full md:w-[50%]">
              <label className="text-gray-800">Email</label>
              <input
                type="email"
                placeholder="name@gmail.com"
                name="email"
                id="email"
                className="w-full h-12 border-2 border-gray-300 text-gray-800 bg-gray-100 rounded-lg placeholder-gray-500 px-4"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-y-1 w-full md:w-[50%] relative">
              <label className="text-gray-800">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                id="password"
                className="w-full h-12 border-2 border-gray-300 text-gray-800 bg-gray-100 rounded-lg placeholder-gray-500 px-4"
                value={user.password}
                onChange={handleChange}
              />
              <span
                className="absolute flex_center right-4 top-9 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
          </div>
          <div className="flex_center gap-2">
            <div className="w-2/3 bg-gray-300 h-[0.25px]"></div>
            <p className="text-gray-800 text-2xl font-semibold">or</p>
            <div className="w-2/3 bg-gray-300 h-[0.25px]"></div>
          </div>
          <div className="flex flex-col gap-y-1 w-full">
            <label className="text-gray-800">User Type</label>
            <select
              name="userType"
              id="userType"
              className="w-full h-12 border-2 border-gray-300 text-gray-800 bg-gray-100 rounded-lg"
              value={user.userType}
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          {user.userType === "teacher" && (
            <div className="flex flex-col gap-y-1 w-full">
              <label className="text-gray-800">Select Subjects</label>
              <div className="flex flex-wrap gap-x-4">
                {["physics", "chemistry", "highermath", "biology", "english", "ict"].map((subject) => (
                  <label className="text-gray-800" key={subject}>
                    <input
                      type="checkbox"
                      name={subject}
                      value={subject}
                      checked={user.subjects.includes(subject)}
                      onChange={handleChange}
                    />
                    {subject.charAt(0).toUpperCase() + subject.slice(1)}
                  </label>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-col gap-y-8">
            {/* <div className="flex_center w-full h-12 gap-x-2 border-2 border-gray-300 rounded-lg"> */}
              {/* Google OAuth or other authentication methods can be added here */}
            </div>
            {/* <div className="flex_center w-full h-12 gap-x-2 border-2 border-gray-300 rounded-lg">
              <p className="text-gray-800 text-xl flex items-center">
                <AiFillApple />
                &nbsp;Sign In With Apple
              </p>
            </div> */}
          {/* </div> */}
          <div className="flex justify-between">
            <div className="flex_center gap-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded-lg bg-gray-300"
              />
              <p className="text-gray-800">Remember me</p>
            </div>
            <div className="text-blue-600 cursor-pointer">Forgot password?</div>
          </div>
          <div
            className="max-w-full w-full h-16 md:h-20 flex_center self-end bg-blue-700 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-gray-50 text-xl font-semibold cursor-pointer"
            onClick={handleSubmit}
          >
            Sign up
          </div>
        </div>
      </div>
      {isOtp && (
        <div className="w-full h-full flex_center mt-20">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="max-w-md mx-auto p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
                Enter OTP within 5 minutes
              </h2>
              <CountdownTimer />
              <input
                type="text"
                className="w-full p-2 border text-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
