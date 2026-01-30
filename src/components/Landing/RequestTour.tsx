import { useState } from "react";
import Modal from "../DashBoardNavbar/Modal";
import toast from "react-hot-toast";
import axiosInstance from "../../utils/axiosInstance";

function RequestTour() {
  const [requestTour, setRequestTour] = useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // const PORT = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    intrestedIn: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      if (
        !formData?.email ||
        !formData?.intrestedIn ||
        !formData?.location ||
        !formData?.name ||
        !formData?.phone
      ) {
        toast.error("fill the form details ");
        return;
      }
      await axiosInstance.post(`/api/v1/users/requestTour`, formData);

      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        intrestedIn: "",
      });
      toast.success(
        "Your Request has been Received,we will shortly contact you",
      );
      setRequestTour(() => false);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="fixed z-10 right-0 rotate-90 book-tour-btn ">
        <button
          onClick={() => setRequestTour(true)}
          className="group relative overflow-hidden
    text-base
    bg-gradient-to-r from-yellow-300 to-yellow-500
    hover:from-yellow-400 hover:to-yellow-600
    transition-all duration-300
    text-gray-900
    px-2 lg:px-4 py-2
    rounded-lg shadow-2xl"
        >
          <span className="relative z-10">Request A Tour</span>

          {/* Glare / Shine effect */}
          <span
            className="absolute w-32 h-full bg-white/30
    rotate-45 -left-40 top-0
    transition-all duration-500
    group-hover:left-full"
          />
        </button>
      </div>
      <Modal isOpen={requestTour} onClose={() => setRequestTour(false)}>
        <h1 className="text-lg font-bold">Schedule your visit today</h1>
        <p className="text-sm">
          Fill out the form below and a member of our team will get in touch
        </p>
        <form className=" capitalize grid grid-cols-2 gap-8 m-4">
          <div className="col-span-2 ">
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 mt-1"
              type="text"
              placeholder="Full Name*"
              required
            />
          </div>
          <div>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 mt-1"
              type="email"
              placeholder="Email*"
              required
            />
          </div>
          <div>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 mt-1"
              type="tel"
              placeholder="Phone Number*"
              required
            />
          </div>
          <div>
            {/* <label>Location*</label> */}
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="capitalize w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value=" ">Location/Center</option>
              <option value="Amore">Amore khar(w)</option>
              <option value="Bandra">Makija Archade Bandra </option>
              <option value="Sunshine">Sunshine Tower Dadar </option>
              <option value="Matulya">Matulya lower parel</option>
              <option value="Kamala Mills">Kamala Mills lower parel</option>
              <option value="Millennium">
                Milleinum Business park Navi Mumbai
              </option>
              <option value="Sun mill">Sun mill lower Parel</option>
              <option value="Technocity">Technocity Navi Mumbai</option>
              <option value="Navratna Ahmedabad">Navratna Ahmedabad</option>
            </select>
          </div>
          <div>
            <select
              id="intrestedIn"
              name="intrestedIn"
              value={formData.intrestedIn}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              <option value="">Intrested In</option>
              <option value="Hot Desk">Hot Desk</option>
              <option value="Dedicated Desk">Dedicated Desk</option>
              <option value="Cabin">Cabin</option>
              <option value="Meeting Room">Meeting Room</option>
            </select>
          </div>
          <button
            type="submit"
            onClick={handleFormSubmit}
            disabled={isSubmitting}
            className="col-span-2 text-center button text-base text-md  bg-gradient-to-r from-yellow-300 to-yellow-500 hover:bg-yellow-800 transition-all duration-300 text-gray-900  lg:px-4 py-2  rounded-lg shadow-2xl button-animated"
          >
            {isSubmitting ? (
              <div className="spinner">
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
              "Get In Touch"
            )}
          </button>
        </form>
      </Modal>
    </>
  );
}

export default RequestTour;
