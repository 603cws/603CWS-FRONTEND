import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import makhija from "/officeimg/Makhija/Makhija.JPG";
import { locations } from "../AllLocationsDetails";

const BookNowPage: React.FC = () => {
  const [alllocations] = useState(locations)
  const [selectedCity, setSelectedCity] = useState<string>("All Cities");
  const navigate = useNavigate();

  // Function to handle city selection
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  // Filter locations based on selected city
  const filteredLocations =
    selectedCity === "All Cities"
      ? alllocations
      : alllocations.filter((cityGroup) => cityGroup.city === selectedCity);

  return (
    <div className="font-sans bg-gray-50 min-h-screen w-screen overflow-x-hidden">
      <header className="bg-white shadow-md z-50 fixed w-full top-0">
        <Navbar />
      </header>

      <div
        style={{
          backgroundImage: `url(${makhija})`,
        }}
        className="relative bg-no-repeat bg-cover bg-fixed mb-16 h-screen lg:h-[600px] flex items-center"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex justify-center items-center h-[330px] w-full bg-cover bg-center pt-5">
          <div className="text-center">
            <h2 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">Discover Our Locations</h2>
            <p className="text-white text-lg lg:text-2xl">Choose a workspace</p>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-2 md:px-12 overflow-auto">
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
                 className="flex flex-col items-center text-center bg-white p-4 xl:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mb-4"
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
                  <button
                    className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
                    onClick={() => navigate(`${location.name.replace(/\s/g, "_")}`)}
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
