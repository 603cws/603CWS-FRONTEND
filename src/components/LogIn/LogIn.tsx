import React, { useState, FormEvent, useEffect } from "react";
// import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { gallery3 } from "../../utils/Landing/Landing";
import { useApp } from "../../context/AuthContext";
import axiosInstance from "../../utils/axiosInstance";

const LogIn: React.FC = () => {
  const { setIsAuthenticated, setloading } = useApp();
  // const PORT = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const location = useLocation();
  const [usernameOrEmail, setUsernameOrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [isSubmitting, setisSubmitting] = useState<boolean>(false);

  useEffect(() => {
    // Reset loading state when the component mounts
    setloading(false);
  }, [setloading]);

  // location data
  const redirectRoute = location?.state?.route;

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setloading(true);
    setisSubmitting(true);
    const data = { usernameOrEmail, password };

    try {
      const response = await axiosInstance.post(`/api/v1/auth/login`, data);
      const { msg, user, token } = response.data;

      if (msg === "Invalid Inputs") {
        toast.error("Invalid Inputs");
      } else if (msg === "User not found") {
        toast.error("User not found");
      } else if (msg === "Invalid password") {
        toast.error("Wrong password!");
      } else if (msg === "User signed in") {
        toast.success("User logged in");
        localStorage.setItem("user", user.companyName);
        localStorage.setItem("token", token);
        if (redirectRoute === "payment") {
          navigate("/payment");
        } else {
          navigate("/dashboard");
        }
        setIsAuthenticated(true);
      }
    } catch (e) {
      toast.error("An error occurred. Please try again later.");
      console.error(e);
    } finally {
      setloading(false);
      setisSubmitting(false);
    }
  };

  return (
    <div
      className="flex md:h-[73%] lg:h-[83%] xl:h-[95%] items-center justify-center pt-56 pb-40 pr-7 pl-7 relative overflow-hidden"
      style={{
        backgroundImage: `url(${gallery3})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-10"></div>
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg z-10 transform transition-transform duration-500">
        <h1 className="text-2xl font-bold mb-8 text-gray-800 text-center animate__animated animate__fadeIn sm:text-3xl">
          Login to Your Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="usernameOrEmail" // Added id
              name="usernameOrEmail" // Added name
              placeholder="Email or Username"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg text-gray-700 transition-transform duration-300 transform focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400 ${
                focusedInput === "email"
                  ? "border-cyan-500 ring-2 ring-cyan-400"
                  : "border-gray-300"
              }`}
              onFocus={() => setFocusedInput("email")}
              required
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password" // Added id
              name="password" // Added name
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg text-gray-700 transition-transform duration-300 transform focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400 ${
                focusedInput === "password"
                  ? "border-cyan-500 ring-2 ring-cyan-400"
                  : "border-gray-300"
              }`}
              onFocus={() => setFocusedInput("password")}
              required
            />
            <button
              type="button"
              onClick={handleClickShowPassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-500 transition-transform duration-300 hover:text-cyan-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            {isSubmitting ? (
              <div className="spinner flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8V12H4z"
                  ></path>
                </svg>
              </div>
            ) : (
              "LOGIN"
            )}
          </button>
        </form>
        <div className="flex flex-col items-center mt-6">
          <a
            onClick={() => {
              navigate("/forgotPassword");
            }}
            className="text-blue-500 text-base hover:underline transition-colors duration-300 cursor-pointer"
          >
            Forgot password?
          </a>
        </div>
        <div className="flex flex-col items-center mt-4">
          <a
            onClick={() => {
              navigate("/admin/login");
            }}
            className="text-blue-500 text-sm mb-3 hover:underline transition-colors duration-300 hover:cursor-pointer"
          >
            Are you an <b>Admin</b>?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
