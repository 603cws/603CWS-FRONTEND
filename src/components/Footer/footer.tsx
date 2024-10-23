import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { logo } from "../../utils/Landing/Landing";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Import icons for contact details

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-stone-900 to-stone-800  text-gray-300 py-16 px-5">
      <div className="container mx-auto px-6 lg:px-16">
        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <img src={logo} alt="603 The Coworking Space" className="h-16 md:h-20 w-auto" />
            <p className="text-sm  text-justify">
              Elevate your work experience with 603 The Coworking Space. Whether you’re looking for a creative hub, a place to meet clients, or a supportive community, we have it all. Join us and unlock your full potential in an environment designed for success.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about-us" className="hover:text-yellow-400">About Us</Link></li>
                <li><Link to="/allLocations" className="hover:text-yellow-400">Location</Link></li>
                <li><Link to="/service" className="hover:text-yellow-400">Our Services</Link></li>
                <li><Link to="/contactus" className="hover:text-yellow-400">Contact Us</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="hover:text-yellow-400">Terms & Conditions</Link></li>
              </ul>
            </div>

            
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className=" font-semibold text-base">Get in Touch</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-yellow-400" />
                <a href="mailto:sales@603thecoworkingspace.com" className="text-gray-400 hover:text-yellow-400">sales@603thecoworkingspace.com</a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-yellow-400" />
                <span className="text-gray-400">+91 91360 36603</span>
              </div>
              <div className="text-gray-400">
                <p className="text-sm">Makhija Arcade, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 text-sm">
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

      {/* Bottom section */}
      <div className="bg-stone-800 text-gray-400 text-center py-4 mt-8">
        <p>&copy; 2024 603 The Coworking Space. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
