import { ImSpinner9 } from "react-icons/im";
import { AiFillApple } from "react-icons/ai";
// import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import GlobeInnerRay from "./GlobeInnerRay";
// import { ConstructionOutlined } from "@mui/icons-material";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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
      console.log(email, password);
      if (email.trim() === "" || password.trim() === "") {
        alert("please fill all the data");
      } else {
        await axios
          .post("/user/login", user)
          .then((res) => {
            console.log(res.data);

            if (res.data.message === "not any user") {
              alert("wrong password and email");
            } else {
              if (res.data.token) {
                console.log(res.data.token);
                axios.defaults.headers.common[
                  "Authorization"
                ] = ` ${res.data.token}`;
                // setToken(true);

                const { email, fname, isLoggedin, isVerified, lname } =
                  res.data.user;
                console.log({ email, fname, isLoggedin, isVerified, lname });
                localStorage.setItem(
                  "loggedUser",
                  JSON.stringify({
                    email,
                    fname,
                    isLoggedin,
                    isVerified,
                    lname,
                  })
                );

                if (email === "admin@gmail.com") {
                 navigate("/adminDashboard");
                } else {
                //   let userEmail;
                 navigate(`/select-level?userEmail=${email}`);
                }
              } else {
                delete axios.defaults.headers.common["Authorization"];
              }
            }
          })
          .catch((error) => {
            if (error.response) {
              // The server responded with a status code outside of the 2xx range
              console.error(
                "Server responded with an error:",
                error.response.status,
                error.response.data
              );
            } else if (error.request) {
              // The request was made, but no response was received
              console.error("No response received from the server");
            } else {
              // Something happened in setting up the request
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
  // for google signin
  const handleVerificationAuth = async (otpData, userEmail) => {
    // const { email } = user;
    console.log("codecamp", `${userEmail + otpData}`);
    try {
      const res = await fetch(
        "/auth/googleAuth-verfication",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userEmail, otpData }),
        }
      );

      const data = await res.json();
      console.log(data);

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
    // const { fname, lname, email } = user;

    try {
      const res = await fetch(
        "/auth/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await res.json();
      console.log(data);
      if (data) {
        await handleVerificationAuth(data.message, userData.email);
      }
    } catch (error) {
      console.error("Error during user registration:", error);
    }
  };

  return (
    <div className="flex_center bg-slate-900 dark:bg-black h-screen">
      <div className=" w-[50rem] flex flex-col    h-full max-[560px]:p-6 min-[849px]:p-10 p-20 bg-slate-900 dark:bg-[#030303] blur-1  rounded-lg shadow-md gap-y-6 relative top-10 ">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-xl flex justify-start items-center gap-x-2 text-white font-bold">
            <ImSpinner9 />
            CodecampJr.
          </h1>
          <h1 className="flex flex-col gap-y-2">
            <p className="text-white text-2xl font-bold">Welcome back</p>
            <p className="text-slate-50">
              Unlock Your learning Potential with TutorCamp! Sign In Today and
              Let the learning Adventures Begin 🚀
            </p>
          </h1>
        </div>
        <div className="flex justify-between  w-full gap-x-4">
          <div className="flex flex-col gap-y-1 w-[50%]">
            <label className="text-white">Email</label>
            <input
              type="email"
              placeholder="name@gmail.com"
              name="email"
              id="email"
              className="w-full h-12 border-2 border-gray-900  text-black  bg-slate-300  rounded-lg placeholder-black min-[560px]:placeholder:pl-10 placholder:pl-4"
              value={user && user.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-y-1 w-[50%]">
            <label className="text-white">Password</label>
            <input
              type="password"
              name="password"
              placeholder="°°°°°°°"
              id="password"
              className="w-full h-12 border-2 border-gray-900 text-black bg-slate-300 border-1 rounded-lg  placeholder-text-center placeholder-black placeholder:pl-10"
              value={user && user.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex_center gap-2">
          <div className="w-2/3 bg-slate-300 h-[0.25px]"></div>
          <p className="text-white text-2xl font-semibold">or</p>
          <div className="w-2/3 bg-slate-300 h-[0.25px]"></div>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="flex_center w-full h-10 gap-x-2 border-2 border-slate-300 rounded-lg">
            {/* <GoogleOAuthProvider clientId="652975357008-sut0t0e8g66jbjaqbnouk0im5ofi3a5o.apps.googleusercontent.com">
              <div className="w-full h-full flex_center bg-white rounded-lg">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    var decoded = jwt_decode(credentialResponse.credential);

                    console.log(decoded);
                    const { family_name, given_name, email } = decoded;
                    const fname = family_name;
                    const lname = given_name;

                    handleAuthuser({ fname, lname, email });
                    localStorage.setItem(
                      "loggedUser",
                      JSON.stringify({ email, fname, lname })
                    );
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  logo_alignment="center"
                  className="w-full h-full rounded-lg"
                  text="continue_with"
                  useOneTap="true"
                  select_account
                  theme="outline"
                />
              </div>
            </GoogleOAuthProvider> */}
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
          className=" max-w-full w-full h-12 flex_center bg-blue-700 rounded-lg text-white text-xl font-semibold"
          onClick={handleSubmit}
        >
          Sign in to your account
        </div>
      </div>
    </div>
  );
};

export default Login;
