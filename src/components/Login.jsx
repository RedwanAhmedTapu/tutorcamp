import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../helper/api/axiosInstance";
import {
  startAuthentication,
} from "@simplewebauthn/browser";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { email, password } = user;
      if (email.trim() === "" || password.trim() === "") {
        alert("please fill all the data");
      } else {
        await axiosInstance
          .post("/user/login", user)
          .then((res) => {
            if (res.data.message === "User not found") {
              alert("wrong password and email");
            } else {
              if (res.data.token) {
                const { fname, lname, email, image, userType, token } = res.data;
                localStorage.setItem(
                  "loggedUser",
                  JSON.stringify({ fname, lname, email, image, userType, token })
                );

                if (userType === "teacher") {
                  navigate("/dashboard/teacher-dashoard");
                } else if (userType === "student") {
                  navigate("/dashboard/student-dashoard");
                } else if (email === "admin@gmail.com") {
                  navigate("/dashboard/admin-dashoard");
                } else {
                  navigate(`/login`);
                }
              }
            }
          })
          .catch((error) => {
            if (error.response) {
              console.error(
                "Server responded with an error:",
                error.response.status,
                error.response.data
              );
            } else if (error.request) {
              console.error("No response received from the server");
            } else {
              console.error(
                "An error occurred while sending the request:",
                error.message
              );
            }
          });
      }
    } catch (error) {
      console.error("Failed to login :", error);
    }
  };

  const handleVerificationAuth = async (otpData, userEmail) => {
    try {
      const res = await fetch("/auth/googleAuth-verfication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail, otpData }),
      });

      const data = await res.json();
      if (data.message === "Email verified successfully") {
        navigate(`/select-level?userEmail=${userEmail}`);
      } else if (data.message === "Invalid verification code") {
        navigate(`/select-level?userEmail=${userEmail}`);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during email verification:", error);
    }
  };

  const handleAuthuser = async (userData) => {
    try {
      const res = await fetch("/auth/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
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

  const handleBiometricAuth = async () => {
    try {
      const optionsResponse = await axiosInstance.get(`/webauthn/auth-options?email=${user.email}`);
      const options = optionsResponse.data;
  
      // console.log("Authentication Options:", options);
  
      if (!options || !options.challenge || !options.allowCredentials) {
        throw new Error("Invalid authentication options");
      }
  
      const authResponse = await startAuthentication(options);
  
      // console.log("Authentication Response:", authResponse);
  
      const verificationResponse = await axiosInstance.post(
        "/webauthn/auth-verify",
        { email: user.email, ...authResponse }
      );

      console.log(verificationResponse)
  
      if (verificationResponse.data && verificationResponse.data.verified) {
        
          const { fname, lname, email, image, userType, token } = verificationResponse.data;
          localStorage.setItem(
            "loggedUser",
            JSON.stringify({ fname, lname, email, image, userType, token })
          );

          if (userType === "teacher") {
            navigate("/dashboard/teacher-dashoard");
          } else if (userType === "student") {
            navigate("/dashboard/student-dashoard");
          } else if (email === "admin@gmail.com") {
            navigate("/dashboard/admin-dashoard");
          } else {
            navigate(`/login`);
          }
      } else {
        alert("Biometric authentication failed");
      }
    } catch (error) {
      console.error("Error during biometric authentication:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-cyan-300 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={handleBiometricAuth}
              className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Use Biometric Authentication
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
