import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import amore from "/officeimg/Amore/Amore.JPG"
import makhija from "/officeimg/Makhija/Makhija.JPG"
import ahmedabad from "/officeimg/Ahmedabad/ahmedabad.jpg"
import matulya from "/officeimg/Matulya/Matulya.jpg";
import { gallery6 } from '../utils/Landing/Landing';
import sunshine from "/officeimg/Sunshine/sunshine.JPG"
import Sunmill from "/officeimg/SunMill/Sunmill.jpeg"
import { gallery7 } from '../utils/Landing/Landing';
import { gallery4, gallery5 } from '../utils/Landing/Landing';

type Location = {
  name: string;
  address: string;
  imgSrc: string;
  link: string;
};

const locations: { city: string; locations: Location[] }[] = [
  {
    city: "Mumbai",
    locations: [
      {
        name: "Andheri - Classic Pentagon",
        address:
          "Classic Pentagon, 10th Floor, Western Express Hwy, Parshiwada, Chakala, Andheri East, Mumbai, Maharashtra 400053",
        imgSrc: gallery5, // Replace with actual image link
        link: "/locations/Pinnacle-Corporate-Park",
      },
      {
        name: "Khar - Amore Centre",
        address:
          "Amore Centre, 5th Floor, Hasnabad Ln, Khar, Ram Krishna Nagar, Khar West, Mumbai, Maharashtra 400052",
        imgSrc: amore, // Replace with actual image link
        link: "/locations/Amore-Centre",
      },
      {
        name: "Bandra - Makhija Arcade",
        address:
          "Makhija Arcade, 6th Floor, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052",
        imgSrc: makhija, // Replace with actual image link
        link: "/locations/Makhija-Archade",
      },
      {
        name: "Dadar - Sunshine Tower",
        address:
          "Sunshine Tower, 26th Floor, Plot No, 616, Tulsi Pipe Rd, Dadar West, Parel, Mumbai, Maharashtra 400013",
        imgSrc: sunshine, // Replace with actual image link
        link: "/locations/Sunshine-Tower",
      },
      {
        name: "Lower Parel - Matulya Centre",
        address:
          "Matulya Centre, 2nd Floor, Lower Parel, Mumbai, Maharashtra 400013",
        imgSrc: matulya, // Replace with actual image link
        link: "/locations/Matulya-Centre",
      },
      {
        name: "Lower Parel - Kamala Mills",
        address:
          "Kamala Mills, 4th Floor, Lower Parel, Mumbai, Maharashtra 400013",
        imgSrc: gallery6, // Replace with actual image link
        link: "/locations/Kamala-Mills",
      },
      {
        name: "Lower Parel - Sun Mill Compound",
        address:
          "Sun Mill Compound, Unit 15, Cama Industrial Estate, Mumbai 400013",
        imgSrc: Sunmill, // Replace with actual image link
        link: "/locations/Sun-Mill-Compound",
      },
    ],
  },
  {
    city: "Navi Mumbai",
    locations: [
      {
        name: "Millennium Business Park",
        address:
          "Millennium Business Park, Sector 2, Kopar Khairane, Navi Mumbai, Maharashtra 400701",
        imgSrc: gallery7, // Replace with actual image link
        link: "/locations/Millenium-Business-Park",
      },
    ],
  },
  {
    city: "Ahmedabad",
    locations: [
      {
        name: "Navratna Corporate Park, Ahmedabad",
        address:
          "B306/ 307/ 308 - Navratna Corporate Park, Ashok Vatika, Ambli Bopal Road, Ahmedabad, Gujarat 380058",
        imgSrc: ahmedabad, // Replace with actual image link
        link: "/locations/Navratna-Corporate-Park",
      },
    ],
  },
  {
    city: "Bangalore",
    locations: [
      {
        name: "Diamond District, Bangalore",
        address:
          "Diamond District, D Wing, 4th Floor, Old Airport Road, Kodihalli, Bangalore 560008, Karnataka, India, HAL Old Airport Rd, ISRO Colony, Domlur, Bengaluru, Karnataka 560008",
        imgSrc: gallery4, // Replace with actual image link
        link: "/locations/Diamond-District",
      },
    ],
  },
];


const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="font-sans bg-gray-50 w-screen overflow-x-hidden">
      <header className="bg-white shadow-lg z-50 fixed w-full top-0">
        <Navbar />
      </header>
      <div
        style={{
          backgroundImage:
            "url('https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/partner.png')",
        }}
        className="relative bg-no-repeat bg-cover bg-fixed mb-16"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="relative flex justify-center items-center h-[600px] w-full">
          <div className="text-center px-12 py-16">
            <h2 className="text-white text-6xl font-semibold mb-4">Locations</h2>
            <p className="text-white text-2xl">Explore our workspaces</p>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-6 md:px-12 overflow-auto">
        {locations.map((cityGroup, cityIndex) => (
          <div key={cityIndex} className="mb-16">
            <h3 className="text-3xl sm:text-5xl pt-6 font-bold mb-8 text-center text-[#cd952dd1]">
              {cityGroup.city}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cityGroup.locations.map((location, locationIndex) => (
                <div
                  key={locationIndex}
                  className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mb-4"
                >
                  <img
                    src={location.imgSrc}
                    alt={location.name}
                    className="rounded-lg mb-4 shadow-lg"
                  />
                  <h4 className="text-2xl font-semibold mb-2">
                    {location.name}
                  </h4>
                  <p className="text-gray-600 mb-4">{location.address}</p>
                  <a
                    onClick={() => { navigate(location.link) }}
                    className="text-yellow-500 hover:underline font-bold hover:cursor-pointer"
                  >
                    Read More &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <footer className="bg-white shadow-lg">
        <Footer />
      </footer>
    </div>
  );
};

export default Login;