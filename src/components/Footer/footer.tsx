import { IoIosCall, IoIosMail } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <img
              src="https://www.603thecoworkingspace.com/wp-content/uploads/2015/12/603_logo-no-bg.png"
              alt="603 The Coworking Space"
              className="h-16 md:h-20 w-auto"
            />
            <p>
              Elevate your work experience with 603 The Coworking Space. Whether you’re looking for a creative hub, a place to meet clients, or a supportive community, we have it all. Join us and unlock your full potential in an environment designed for success.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/allLocations" className="hover:text-yellow-400">Location</Link></li>
              <li><Link to="/service" className="hover:text-yellow-400">Our Services</Link></li>
              <li><Link to="/contactus" className="hover:text-yellow-400">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-yellow-400">Terms and Conditions</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="flex items-center gap-2">
              <IoIosCall className="text-yellow-400" />
              <a href="tel:+919920207026" className="hover:text-yellow-500">+91 99202 07026</a>
            </p>
            <p className="flex items-center gap-2">
              <IoIosMail className="text-yellow-400" />
              <a href="mailto:sales@603thecoworkingspace.com" className="hover:text-yellow-500">sales@603thecoworkingspace.com</a>
            </p>
            <p className="flex items-center gap-2">
              <FaTelegramPlane className="text-yellow-400" /> Makhija Arcade, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/603coworking" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="https://x.com/603coworking" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400">
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/603thecoworkingspace" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/603thecoworkingspace" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-800 text-gray-400 text-center py-4 mt-8">
        <p>&copy; 2023 603 The Coworking Space. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
