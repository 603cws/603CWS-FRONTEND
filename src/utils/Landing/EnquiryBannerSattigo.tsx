import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../axiosInstance";

function EnquiryBannerSattigo() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phoneno: "",
  });
  const [isloading, setIsloading] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const mobileRegex = /^[6-9]\d{9}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleEnquiry(e: FormEvent) {
    e.preventDefault();

    try {
      setIsloading(true);
      if (!formdata.email) return toast.error("please enter the email");
      if (!formdata.phoneno) return toast.error("please enter the mobile no");
      if (!emailRegex.test(formdata.email)) {
        return toast.error("Invalid email");
      }
      if (!mobileRegex.test(formdata.phoneno)) {
        return toast.error("Invalid mobile no");
      }
      await axiosInstance.post(`/api/v1/users/sattigoEnquiryEmail`, {
        email: formdata.email,
        phoneno: formdata?.phoneno,
        name: formdata?.name,
      });
      toast.success("We will shortly contact you");
    } catch (error) {
      console.error(error);
    } finally {
      setIsloading(false);
    }
  }
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Left Content */}
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
            A Luxury Farm Villa
          </h2>
          <p className="mt-2 text-gray-600">Enquire Now</p>
        </div>
        <form
          onSubmit={handleEnquiry}
          className="flex flex-col xl:flex-row w-full space-y-2 lg:w-auto xl:space-x-2 xl:space-y-0"
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formdata?.name}
            onChange={handleChange}
            required
            className="text-sm sm:text-base w-full lg:w-72 px-2 py-2 lg:px-4  border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={formdata?.email}
            onChange={handleChange}
            required
            className="text-sm sm:text-base w-full lg:w-72 px-2 py-2 lg:px-4  border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            placeholder="Enter your Mobile no"
            name="phoneno"
            value={formdata?.phoneno}
            onChange={handleChange}
            required
            className="text-sm sm:text-base w-full lg:w-72 px-2 py-2 lg:px-4  border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black  text-sm  px-3 py-2 lg:px-6  rounded-r-md transition"
          >
            {isloading ? "loading..." : "Enquiry Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnquiryBannerSattigo;
