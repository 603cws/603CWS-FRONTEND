import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import amore from "/officeimg/Amore/Amore.JPG";
import makhija from "/officeimg/Makhija/Makhija.JPG";
import ahmedabad from "/officeimg/Ahmedabad/ahmedabad.jpg";
import matulya from "/officeimg/Matulya/Matulya.jpg";
import sunshine from "/officeimg/Sunshine/sunshine.JPG";
import Sunmill from "/officeimg/SunMill/Sunmill.jpeg";
import { gallery5, gallery6 } from "../../utils/Landing/Landing";

type Location = {
  name: string;
  address: string;
  imgSrc: string;
  link: string;
  price: number;
};

const locations: { city: string; locations: Location[] }[] = [
  {
    city: "Mumbai",
    locations: [
      {
        name: "Pinnacle Corporate Park, BKC",
        address: "Bandra Kurla Complex, Bandra East, Mumbai - 400051",
        imgSrc: gallery5,
        link: "/locations/Pinnacle-Corporate-Park",
        price: 3500,
      },
      {
        name: "Khar - Amore Centre",
        address: "Amore Centre, 5th Floor, Khar West, Mumbai - 400052",
        imgSrc: amore,
        link: "/locations/Amore-Centre",
        price: 4000,
      },
      {
        name: "Bandra - Makhija Arcade",
        address: "Makhija Arcade, Khar West, Mumbai - 400052",
        imgSrc: makhija,
        link: "/locations/Makhija-Archade",
        price: 3800,
      },
      {
        name: "Dadar - Sunshine Tower",
        address: "Sunshine Tower, Dadar West, Mumbai - 400013",
        imgSrc: sunshine,
        link: "/locations/Sunshine-Tower",
        price: 3200,
      },
      {
        name: "Lower Parel - Matulya Centre",
        address: "Matulya Centre, Lower Parel, Mumbai - 400013",
        imgSrc: matulya,
        link: "/locations/Matulya-Centre",
        price: 4500,
      },
      {
        name: "Lower Parel - Kamala Mills",
        address: "Kamala Mills, Lower Parel, Mumbai - 400013",
        imgSrc: gallery6,
        link: "/locations/Kamala-Mills",
        price: 4600,
      },
      {
        name: "Lower Parel - Sun Mill Compound",
        address: "Sun Mill Compound, Cama Industrial Estate, Mumbai 400013",
        imgSrc: Sunmill,
        link: "/locations/Sun-Mill-Compound",
        price: 4200,
      },
    ],
  },
  {
    city: "Navi Mumbai",
    locations: [
      {
        name: "Millennium Business Park",
        address: "Millennium Business Park, Kopar Khairane, Navi Mumbai - 400701",
        imgSrc: "/officeimg/Rupa/Rupa2.jpg",
        link: "/locations/Millenium-Business-Park",
        price: 2800,
      },
    ],
  },
  {
    city: "Ahmedabad",
    locations: [
      {
        name: "Navratna Corporate Park, Ahmedabad",
        address: "Navratna Corporate Park, Ambli Bopal Road, Ahmedabad - 380058",
        imgSrc: ahmedabad,
        link: "/locations/Navratna-Corporate-Park",
        price: 3000,
      },
    ],
  },
];

const BookNowPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("All Cities");
  const navigate = useNavigate();

  // Function to handle city selection
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  // Filter locations based on selected city
  const filteredLocations =
    selectedCity === "All Cities"
      ? locations
      : locations.filter((cityGroup) => cityGroup.city === selectedCity);

  return (
    <div className="font-sans bg-gray-50 min-h-screen w-screen overflow-x-hidden">
      <header className="bg-white shadow-md z-50 fixed w-full top-0">
        <Navbar />
      </header>

      <div
        style={{
          backgroundImage: `url(${makhija})`,
        }}
        className="relative bg-no-repeat bg-cover bg-fixed mb-16"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex justify-center items-center h-[330px] w-full bg-cover bg-center pt-5">
          <div className="text-center">
            <h2 className="text-white text-5xl font-bold mb-4">Discover Our Locations</h2>
            <p className="text-white text-2xl">Choose a workspace that suits your needs</p>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* City Filter */}
        <div className="text-center mb-12">
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 bg-white shadow-sm text-lg transition-all duration-300"
          >
            <option value="All Cities">All Cities</option>
            {locations.map((cityGroup, index) => (
              <option key={index} value={cityGroup.city}>
                {cityGroup.city}
              </option>
            ))}
          </select>
        </div>

        {/* Display filtered locations */}
        {filteredLocations.map((cityGroup, cityIndex) => (
          <div key={cityIndex} className="mb-16">
            <h3 className="text-4xl sm:text-4xl font-bold mb-12 text-center text-yellow-600">
              {cityGroup.city}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {cityGroup.locations.map((location, locationIndex) => (
                <div
                  key={locationIndex}
                  className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={location.imgSrc}
                    alt={location.name}
                    className="w-full h-64 object-cover rounded-lg mb-6 hover:cursor-pointer"
                    onClick={() => navigate(location.link)}
                  />
                  <h4 className="text-2xl font-semibold mb-2 text-gray-800">
                    {location.name}
                  </h4>
                  <p className="text-gray-600 mb-4">{location.address}</p>
                  <p className="text-lg font-medium text-black mb-4">
                    ₹{location.price}/day
                  </p>
                  <button
                    className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
                    onClick={() => navigate("/confirmpayment")}
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-white shadow-md mt-16">
        <Footer />
      </footer>
    </div>
  );
};

export default BookNowPage;
