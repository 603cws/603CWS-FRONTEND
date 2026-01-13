import "./popup.css";
import toast from "react-hot-toast";
import { useApp } from "./../../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  companyName: string;
  email: string;
  role: string;
  creditsleft: number;
  monthlycredits: number;
  extracredits: number;
  phone: string;
  kyc: boolean;
  location: string;
}

// The rest of your CreateUserModal component code remains the same
import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (user: User) => void; // Ensure this matches the User type
}

const RegisterUser: React.FC<CreateUserModalProps> = ({ isOpen, onClose }) => {
  const [companyName, setCompanyName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("user");
  const [monthlycredits, setMonthlyCredits] = useState<number>(0);
  const [username, setusername] = useState<string>("");
  const [location, setlocation] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isSubmitting, setisSubmitting] = useState<boolean>(false);

  const { setAccHolder } = useApp();

  //to check is authenticated
  const { isAuthenticated, setIsAuthenticated, setloading, setIsAdmin } =
    useApp();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setisSubmitting(true);
    try {
      const response = await axiosInstance.post(`/api/v1/users/`, {
        companyName,
        email,
        role,
        monthlycredits,
        username,
        location,
        password,
        phone,
      });

      if (response.data.msg === "User created") {
        toast.success(response.data.msg);

        try {
          const response = await axiosInstance.post(`/api/v1/auth/login`, {
            usernameOrEmail: username,
            password: password,
          });
          const { msg, user, token } = response.data;

          if (msg === "User signed in") {
            toast.success("User logged in");
            localStorage.setItem("user", user.companyName);
            localStorage.setItem("token", token);

            const res = await axiosInstance.get(`/api/v1/users/checkauth`);
            setIsAuthenticated(res.data.auth);
            setIsAdmin(res.data.user);
            setAccHolder(res.data.accHolder);
          }
        } catch (e) {
          toast.error("An error occurred. Please try again later.");
          console.error(e);
        } finally {
          setloading(false);
        }
      } else {
        toast.error(response.data.msg);
      }

      onClose();
    } catch (error: any) {
      toast.error(error.response.data.msg);
      setisSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto ${
        isOpen ? "fade-in" : "fade-out"
      } z-50`}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md ">
        <h2 className="text-2xl font-bold mb-4">Create User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Company Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isAuthenticated && (
            <div className="mb-4">
              <label className="block text-gray-700">Role</label>
              <select
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}

          {isAuthenticated && (
            <div className="mb-4">
              <label className="block text-gray-700">Monthly Credits</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={monthlycredits}
                onChange={(e) => setMonthlyCredits(Number(e.target.value))}
                required
              />
            </div>
          )}
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-4 py-2 rounded"
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
                "create"
              )}
            </button>
          </div>
        </form>
        <div className="pt-3 lg:pt-6">
          <h1>
            Already a user ,click here to{" "}
            <span
              className="underline cursor-pointer font-bold text-lg"
              onClick={() =>
                navigate("/login", {
                  state: {
                    route: "payment",
                  },
                })
              }
            >
              login
            </span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
