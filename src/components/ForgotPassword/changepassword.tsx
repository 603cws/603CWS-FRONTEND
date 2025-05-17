import React, { useState, FormEvent, useEffect } from "react";
// import axios from "axios";
import { toast } from "react-hot-toast";
import { gallery9 } from "../../utils/Landing/Landing";
import { useApp } from "../../context/AuthContext";
import axiosInstance from "../../utils/axiosInstance";

const Changepassword: React.FC = () => {
  const { setloading } = useApp();
  // const PORT = import.meta.env.VITE_BACKEND_URL;
  const [password, setPassword] = useState<string>("");
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  useEffect(() => {
    setloading(false);
  }, [setloading]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = window.location.href;

    const token = url.split("/").pop();

    console.log("Token:", token);
    const data = { password, token };
    try {
      const response = await axiosInstance.post(
        `/api/v1/users/setnewpass`,
        data
      );
      // const response = await axios.post(
      //   `${PORT}/api/v1/users/setnewpass`,
      //   data,
      //   {
      //     withCredentials: true,
      //   }
      // );
      console.log(response);
      const { msg } = response.data;

      if (msg === "Password changed successfully") {
        toast.success("Password changed successfully");
      } else if (msg === "Token has expired") {
        toast.error(
          "The password reset link has expired. Please generate a new link."
        );
      } else {
        toast.error("An error occurred. Please try again later.");
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
      className="flex items-center justify-center min-h-screen p-6 relative overflow-hidden bg-fixed w-screen"
      style={{
        backgroundImage: `url(${gallery9})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 bg-white rounded-lg p-8 w-full max-w-lg shadow-2xl transform transition-all duration-500">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 sm:text-3xl animate__animated animate__fadeIn">
          Enter Your New Password
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="Password"
              id="password"
              name="Password"
              placeholder="Enter Your New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Set Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Changepassword;
