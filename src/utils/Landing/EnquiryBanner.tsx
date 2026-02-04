import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../axiosInstance";

function EnquiryBanner() {
  const [enquireEmail, setEnquireEmail] = useState("");
  const [isloading, setIsloading] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  async function handleEnquiry(e: FormEvent) {
    e.preventDefault();
    try {
      setIsloading(true);
      if (!enquireEmail) return toast.error("please enter the email");
      if (!emailRegex.test(enquireEmail)) {
        return toast.error("Invalid email");
      }
      await axiosInstance.post(`/api/v1/users/contactusEmail`, {
        email: enquireEmail,
      });
      toast.success("We will shortly contact you");
    } catch (error) {
      console.error(error);
    } finally {
      setEnquireEmail("");
      setIsloading(false);
    }
  }
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Left Content */}
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
            Flexible Coworking Spaces <br className="hidden sm:block" />
            for Teams and Individuals
          </h2>
          <p className="mt-2 text-gray-600">
            Enquire about desks, private offices, pricing, and availability.
          </p>
        </div>

        {/* Right Form */}
        <form onSubmit={handleEnquiry} className="flex w-full lg:w-auto">
          <input
            type="text"
            placeholder="Enter Your Email"
            value={enquireEmail}
            onChange={(e) => setEnquireEmail(e.target.value)}
            required
            className="text-sm sm:text-base w-full lg:w-72 px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-sm sm:text-base px-3 py-2 lg:px-6 lg:py-3 rounded-r-md transition"
          >
            {isloading ? "loading..." : "Enquiry Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnquiryBanner;
