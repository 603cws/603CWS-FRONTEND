import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import React, { useState, FormEvent, useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { gallery8 } from "../../utils/Landing/Landing";
import { useApp } from "../../context/AuthContext";
import axiosInstance from "../../utils/axiosInstance";

const Login: React.FC = () => {
  const { setIsAuthenticated, setloading } = useApp();
  // const PORT = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [usernameOrEmail, setUsernameOrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  useEffect(() => {
    setloading(false);
  }, [setloading]);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setloading(true);
    event.preventDefault();
    const data = { usernameOrEmail, password };

    try {
      const response = await axiosInstance.post(
        `/api/v1/auth/admin/login`,
        data
      );
      // const response = await axios.post(
      //   `${PORT}/api/v1/auth/admin/login`,
      //   data,
      //   {
      //     withCredentials: true,
      //   }
      // );
      console.log(response);
      const { msg, user, token } = response.data;

      if (msg === "Admin signed in") {
        toast.success("Admin signed in");
        localStorage.setItem("user", user.companyName);
        localStorage.setItem("token", token);
        navigate("/admin/dashboard");
        setIsAuthenticated(true);
      } else {
        toast.error("Access Denied!");
      }
    } catch (e) {
      toast.error(
        "Access Denied. Repeated failed login attempts may result in account suspension."
      );
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="h-screen w-screen overflow-x-hidden bg-gradient-to-br from-#fffed8 via-gray-900 to-#ffffff">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div
        className="flex md:h-[73%] lg:h-[83%] xl:h-[95%] items-center justify-center pt-56 pb-40 pr-7 pl-7 min-w-screen relative overflow-hidden"
        style={{
          backgroundImage: `url(${gallery8})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-75"></div>
        <div className="relative z-10 bg-white rounded-xl p-10 max-w-md w-full shadow-xl transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105">
          <h1 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">
            Admin Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="usernameOrEmail"
                name="usernameOrEmail"
                placeholder="Admin Email or Username"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${
                  focusedInput === "email"
                    ? "ring-2 ring-blue-500"
                    : "border-gray-300"
                }`}
                onFocus={() => setFocusedInput("email")}
                required
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Admin Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${
                  focusedInput === "password"
                    ? "ring-2 ring-blue-500"
                    : "border-gray-300"
                }`}
                onFocus={() => setFocusedInput("password")}
                required
              />
              <button
                type="button"
                onClick={handleClickShowPassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600 transition-colors duration-300"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              LOGIN
            </button>
          </form>
          <div className="flex flex-col items-center mt-6">
            <a
              onClick={() => {
                navigate("/forgotPassword");
              }}
              className="text-indigo-500 hover:underline transition-colors duration-300 cursor-pointer"
            >
              Forgot password?
            </a>
          </div>
          <div className="flex flex-col items-center mt-4">
            <a
              onClick={() => navigate("/login")}
              className="text-indigo-500 text-sm hover:underline transition-colors duration-300 cursor-pointer"
            >
              Not an <b>Admin</b>?
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
