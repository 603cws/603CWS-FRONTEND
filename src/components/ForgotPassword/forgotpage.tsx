import React, { useState, FormEvent, useEffect } from "react";
// import axios from "axios";
import { toast } from "react-hot-toast";
import { gallery5 } from "../../utils/Landing/Landing";
import { useApp } from "../../context/AuthContext";
import axiosInstance from "../../utils/axiosInstance";

const LogIn: React.FC = () => {
  const { setloading } = useApp();
  // const PORT = import.meta.env.VITE_BACKEND_URL;
  const [email, setEmail] = useState<string>("");
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  useEffect(() => {
    setloading(false);
  }, [setloading]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { email };
    try {
      const response = await axiosInstance.post(
        `/api/v1/users/forgotpassLink`,
        data
      );
      // const response = await axios.post(
      //   `${PORT}/api/v1/users/forgotpassLink`,
      //   data,
      //   {
      //     withCredentials: true,
      //   }
      // );
      const { msg } = response.data;

      if (msg === "Password reset link sent successfully!") {
        toast.success(
          "Password reset link sent successfully! Please check your mailbox"
        );
      } else {
        toast.error("An error occured! Please try again later.");
      }
    } catch (e) {
      toast.error("An error occurred. Please try again later.");
      console.error(e);
    } finally {
      setloading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-6 relative overflow-hidden bg-fixed"
      style={{
        backgroundImage: `url(${gallery5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 bg-white rounded-lg p-8 w-full max-w-lg shadow-2xl transform transition-all duration-500">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 sm:text-4xl animate__animated animate__fadeIn">
          Forgot Password?
        </h1>
        <p className="text-center text-gray-600 mb-8 sm:text-base">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              id="usernameOrEmail"
              name="Email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg text-gray-700 transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400 focus:outline-none ${
                focusedInput === "email"
                  ? "border-cyan-500 ring-2 ring-cyan-400"
                  : "border-gray-300"
              }`}
              onFocus={() => setFocusedInput("email")}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-yellow-500 focus:outline-none"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
