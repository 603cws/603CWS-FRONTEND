import { useState, useEffect } from "react";
import "./popupanimation.css";
// import axios from "axios";
import { useApp } from "../../context/AuthContext";
import toast from "react-hot-toast";
import axiosInstance from "../../utils/axiosInstance";
const Popupform = () => {
  const { setloading } = useApp();
  // const PORT = import.meta.env.VITE_BACKEND_URL;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const a = localStorage.getItem("callback");

  const showPopup = () => {
    setIsAnimating(true);
    setIsVisible(true);
  };

  const mobileRegex = /^[6-9]\d{9}$/;

  const hidePopup = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 500); // Match the duration of the slide out animation
  };

  useEffect(() => {
    const intervalId = setInterval(showPopup, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    requirements: "",
  });

  const isDisabled =
    !formData.name ||
    !formData.phone ||
    !formData.email ||
    !formData.company ||
    !formData.requirements;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!mobileRegex.test(formData.phone)) {
        toast.error("use of telephone number not allowed");
      }
      if (mobileRegex.test(formData.phone)) {
        setloading(true);
        localStorage.setItem("callback", "true");
        await axiosInstance.post(`/api/v1/users/sendcallback`, formData);
        toast.success("form submitted");
        hidePopup();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      {isVisible && a !== "true" && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-60 popup-overlay ${
            isAnimating ? "fade-in" : "fade-out"
          }`}
        >
          <div
            className={`bg-white p-8 rounded-lg shadow-xl transform transition-transform duration-500 max-w-lg w-full popup-content ${
              isAnimating ? "slide-in" : "slide-out"
            }`}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 font-bold text-xl"
              onClick={hidePopup}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-5 text-gray-800">
              Request a Callback
            </h2>
            <form className="space-y-5">
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1 text-sm"
                  htmlFor="name"
                >
                  Name*
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1 text-sm"
                  htmlFor="phone"
                >
                  Phone*
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1 text-sm"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1 text-sm"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1 text-sm"
                  htmlFor="requirements"
                >
                  Requirements*
                </label>
                <select
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 text-sm"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="day pass">Day Pass</option>
                  <option value="hot desk">Hot Desk</option>
                  <option value="dedicated desk">Dedicated Desk</option>
                  <option value="cabin space">Cabin Space</option>
                  <option value="managed office solution">
                    Managed Office Solution
                  </option>
                  <option value="conference room">Conference Room</option>
                  <option value="meeting room">Meeting Room</option>
                  <option value="Interior Designing Services">
                    Interior Designing Services
                  </option>
                </select>
              </div>
              <div className="text-center">
                <button
                  className={`font-bold py-2 px-6 rounded-lg transition duration-300 ${
                    isDisabled
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                      : "bg-yellow-500 text-white hover:bg-yellow-600 cursor-pointer"
                  }`}
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isDisabled}
                >
                  Send
                </button>
                <button
                  className="bg-gray-300 text-gray-700 font-bold py-2 px-6 rounded-lg ml-3 hover:bg-gray-400 transition duration-300"
                  type="reset"
                  onClick={() =>
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      company: "",
                      requirements: "",
                    })
                  }
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Popupform;
