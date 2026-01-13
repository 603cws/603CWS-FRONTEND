import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Form validation effect
  useEffect(() => {
    const isValid =
      name.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      position !== "" &&
      experience !== "";

    setIsFormValid(isValid);
  }, [name, email, phone, position, experience]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isFormValid) {
      return; // Stop the function here if the form is invalid
    }
    try {
      await axiosInstance.post(`/api/v1/career/send`, {
        name,
        email,
        phone,
        position,
        experience,
      });
    } catch (error) {
      console.error("error is", error);
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Apply for the Position
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="+1234567890"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="position"
            >
              Applying For
            </label>
            <select
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="" disabled>
                Select Post
              </option>
              <option value="Web Developer">Web Developer</option>
              <option value="Forex Dealer">Forex Dealer</option>
              <option value="Social Media Manager">Social Media Manager</option>
              <option value="Salesperson/BDE">Salesperson/BDE</option>
              <option value="Community Manager">Community Manager</option>
              <option value="Accountant">Accountant</option>
            </select>
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="experience"
            >
              Experience Level
            </label>
            <select
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="" disabled>
                Select experience level
              </option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level">Senior Level</option>
            </select>
          </div>
          <div className="flex justify-between space-x-3">
            <button
              type="submit"
              className={`w-full py-3 ${
                isFormValid
                  ? "bg-yellow-600 hover:bg-yellow-700"
                  : "bg-gray-300"
              } text-white rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
              disabled={!isFormValid}
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationModal;
