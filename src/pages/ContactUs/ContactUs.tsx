import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Form from "./Form";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useApp } from "../../context/AuthContext";

const ContactUs = () => {
  const { setloading } = useApp();
  setloading(false);

  const [source, setSource] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4738712785665!2d72.82505347472069!3d18.99882948218989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8d495475cf%3A0x60b2ec04a00313c8!2sMatulya%20Centre!5e0!3m2!1sen!2sin!4v1721254522143!5m2!1sen!2sin",
  );

  const locations = [
    {
      title: "Matulya (Lower Parel)",
      description:
        "Matulya Centre, 2nd Floor, Lower Parel, Mumbai, Maharashtra 400013",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4738712785665!2d72.82505347472069!3d18.99882948218989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8d495475cf%3A0x60b2ec04a00313c8!2sMatulya%20Centre!5e0!3m2!1sen!2sin!4v1721254522143!5m2!1sen!2sin",
    },
    {
      title: "Sun Mill (Lower Parel)",
      description:
        "Sun Mill Compound, Unit 15, Cama Industrial Estate, Mumbai 400013",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15089.895512569543!2d72.8173286431614!3d18.99882917941545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf4397856501%3A0x482f3f34e960ca79!2sSun%20Mill%20Compound!5e0!3m2!1sen!2sin!4v1721254812039!5m2!1sen!2sin",
    },
    {
      title: "Amore, Khar West",
      description:
        "Amore Centre, 5th Floor, Hasnabad Ln, Khar, Ram Krishna Nagar, Khar West, Mumbai, Maharashtra 400052",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8599308386288!2d72.83604277472271!3d19.069895082133446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90fe1f8f311%3A0x82834a11fb2f0757!2sAmore%20(Khar%20West)!5e0!3m2!1sen!2sin!4v1721255063979!5m2!1sen!2sin",
    },
    {
      title: "Bandra, Makhija",
      description:
        "Makhija Arcade, 6th Floor, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9619361328455!2d72.83045948885497!3d19.065411100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c911698fff91%3A0x1f2d87a146cbbbc2!2sMakhija%20Arcade!5e0!3m2!1sen!2sin!4v1721255112349!5m2!1sen!2sin",
    },
    {
      title: "Dadar Sunshine Centre",
      description:
        "Sunshine tower, 29th Floor, Plot No, 616, Tulsi Pipe Rd, Dadar West, Parel, Mumbai, Maharashtra 400013",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1700457010757!2d72.83392647472104!3d19.012227182179295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cee8325aee35%3A0xb0d98d4080e115a!2sSunshine%20Tower!5e0!3m2!1sen!2sin!4v1721255373322!5m2!1sen!2sin",
    },
    {
      title: "Navi Mumbai",
      description:
        "MILLENNIUM BUSINESS PARK, Millenium Business Park, Sector 2, Kopar Khairane, Navi Mumbai, Maharashtra 400701",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9576681553413!2d73.01590922472377!3d19.109512932101964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0e7e7a71499%3A0x98d8b38ca6db76be!2sMillenium%20Business%20Park%2C%20MIDC%20Industrial%20Area%2C%20Sector%201%2C%20Kopar%20Khairane%2C%20Navi%20Mumbai%2C%20Maharashtra%20400710!5e0!3m2!1sen!2sin!4v1721255614332!5m2!1sen!2sin",
    },
    {
      title: "Navratna Corporate Park, Ahemdabad",
      description:
        "Corporate office in Ashok Vatika, Ahmedabad, Gujarat 380058",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5215046769017!2d72.4916057!3d23.0287853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5684c326e5%3A0xe113d1820ff24ab4!2sNavratna%20Corporate%20Park%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1721254426295!5m2!1sen!2sin",
    },
    {
      title: "Kamala Mills Compound",
      description:
        "Trade World, Tower D, 4th Floor, Lower, Parel, Mumbai, Maharashtra 400013",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609930707!2d72.7462354!3d19.0026697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceed2879bcd3%3A0x519449d10ba027f0!2s2R3H%2B3FC%2C%20Lower%2C%20Parel%2C%20Mumbai%2C%20Maharashtra%20400013!5e0!3m2!1sen!2sin!4v1721254426295!5m2!1sen!2sin",
    },
    {
      title: "Pinnacle Corporate Park",
      description:
        "Kolivery Village, MMRDA Area, Kalina, Santacruz East, Mumbai, Maharashtra 400098",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.212792818998!2d72.86728357472062!3d19.059727882190618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf1f1c71f0a1%3A0x9abf2f1f4a7f7a8b!2sPinnacle%20Corporate%20Park%2C%20BKC!5e0!3m2!1sen!2sin!4v1721352465026!5m2!1sen!2sin",
    },
    {
      title: "Technocity",
      description: "Technocity, 5th Floor, Navi Mumbai, Maharashtra 400701",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9576681553413!2d73.01590922472377!3d19.109512932101964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1fd6ba2be4d:0xccf82ad58f52a92d!2sTechnocity+IT+Park,+B-201,+601+%26+701,+Technocity,+MIDC+Industrial+Area,+Ghansoli,+Navi+Mumbai,+Maharashtra+400701!5e0!3m2!1sen!2sin!4v1721255614332!5m2!1sen!2sin",
    },
    {
      title: "Pentagon Classic",
      description:
        "B306/ 307/ 308 - Navratna Corporate Park, Ashok Vatika, Ambli Bopal Road, Ahmedabad, Gujarat 380058",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.365476441699!2d72.8507678!3d19.1070941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83489ddac01%3A0xa443ab275b61ce12!2sClassic%20Pentagon%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1721255614332!5m2!1sen!2sin",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center rounded-lg p-8 pt-20 lg:p-16 mt-12">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 lg:mb-8 text-center lg:text-left">
            Connect with <span className="text-yellow-500">603</span>
          </h1>

          <div className="space-y-3 hidden sm:block sm:max-w-sm">
            <div className="flex items-center text-gray-700">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-yellow-500 w-8 h-8"
              />
              <span className="ml-6 text-lg lg:text-lg">
                Makhija Arcade, 35th Rd, Khar West, Mumbai, Maharashtra 400052
              </span>
            </div>

            <div className="flex items-center text-gray-700">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-yellow-500 w-8 h-8"
              />
              <a
                href="mailto:sales@603thecoworkingspace.com"
                className="ml-6 text-lg lg:text-lg text-gray-800 hover:underline"
              >
                sales@603thecoworkingspace.com
              </a>
            </div>

            <div className="flex items-center text-gray-700">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-yellow-500 w-8 h-8"
              />
              <a
                href="tel:+919136036603"
                className="ml-6 text-lg lg:text-lg text-gray-800 hover:underline"
              >
                +91 9136036603
              </a>
            </div>
          </div>

          <p className="mt-8 lg:mt-10 text-gray-800 leading-relaxed text-lg lg:text-xl text-justify">
            Our team is dedicated to assisting you and answering any questions.
            We eagerly await the opportunity to connect with you.
          </p>
        </div>

        <div className="lg:w-1/2 lg:pl-12 mt-12 lg:mt-0 flex flex-col items-center lg:items-start">
          {/* <img
            className="rounded-lg shadow-xl border border-gray-300"
            src="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2024/05/1644091050845.jpg?resize=180%2C180&ssl=1"
            alt="Contact Us"
          /> */}
          <div className=" text-gray-800 text-center lg:text-left">
            {/* <div className="mt-8 lg:mt-12 text-gray-800 text-center lg:text-left"> */}
            <p className="text-3xl font-semibold text-yellow-500">
              Kunal Kataria, Director
            </p>
            <p className="mt-4 leading-relaxed text-lg lg:text-xl text-justify">
              At 603, we represent Success, Infinity, and Energy. Our mission is
              to foster your business's achievements and create a lasting
              impact. Should we be able to enhance your accomplishments even
              slightly, we would be honored to assist. With our dedicated team,
              we offer unparalleled support and commitment.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Form />
      </div>

      <div className="mt-14">
        <iframe
          src={source}
          className="w-full h-80 rounded-lg shadow-lg"
          loading="lazy"
        ></iframe>
      </div>

      <div className="flex flex-wrap justify-between items-center mt-12 mb-12 gap-6">
        <div
          onClick={() =>
            setSource(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.9011137451!2d77.46578492597025!3d12.953945399494673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1721250670237!5m2!1sen!2sin",
            )
          }
          className="cursor-pointer text-yellow-500 font-semibold hover:underline"
        >
          Click here to view on Google Maps
        </div>
        <div
          onClick={() =>
            setSource(
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.9011137451!2d77.46578492597025!3d12.953945399494673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1721250670237!5m2!1sen!2sin",
            )
          }
          className="cursor-pointer text-yellow-500 font-semibold hover:underline"
        >
          View Larger Map
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {locations.map((location, index) => (
            <div
              key={index}
              onClick={() => setSource(location.mapUrl)}
              className="flex items-center p-4 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-200 transition-shadow duration-300 cursor-pointer"
            >
              <FaMapMarkerAlt className="text-yellow-500 text-3xl mr-4" />
              <div>
                <h4 className="font-semibold text-lg mb-1">{location.title}</h4>
                <p className="text-gray-600 text-sm">{location.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
