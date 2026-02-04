import React, { useState } from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import makhija from "/officeimg/Makhija/Makhija.JPG";
import { locations } from "./AllLocationsDetails";

const LocationPage: React.FC = () => {
  const [alllocations] = useState(locations);
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const navigate = useNavigate();

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const filteredLocations =
    selectedCity === "All"
      ? alllocations
      : alllocations.filter((cityGroup) => cityGroup.city === selectedCity);

  return (
    <div className="font-sans bg-gray-50 w-full overflow-x-hidden">
      <header className="bg-white shadow-lg z-50 fixed w-full top-0">
        <Navbar />
      </header>

      <div
        style={{ backgroundImage: `url(${makhija})` }}
        className="relative bg-no-repeat bg-cover bg-fixed mb-16 h-screen lg:h-[600px]"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center items-center h-full w-full ">
          <div className="text-center px-12 py-16">
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4">
              Locations
            </h2>
            <p className="text-white lg:text-lg xl:text-xl">
              Explore our workspaces
            </p>
          </div>
        </div>
      </div>

      {/* City Filter Dropdown */}
      <div className="container mx-auto px-6 md:px-12 mb-8">
        <div className="flex justify-center">
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="bg-white text-gray-800 border border-gray-300 rounded-lg shadow-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          >
            <option value="All">All Cities</option>
            {locations.map((cityGroup, index) => (
              <option key={index} value={cityGroup.city}>
                {cityGroup.city}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="container mx-auto px-2 md:px-12 overflow-auto">
        {filteredLocations?.map((cityGroup, cityIndex) => (
          <div key={cityIndex} className="mb-16">
            <h3 className="text-3xl sm:text-5xl pt-6 font-bold mb-8 text-center text-[#cd952dd1]">
              {cityGroup.city}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cityGroup.locations.map((location, locationIndex) => (
                <div
                  key={locationIndex}
                  className="flex flex-col items-center text-center bg-white border border-[#ccc] p-4 xl:p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-yellow-500 transition-shadow duration-300 ease-in-out mb-4"
                >
                  <img
                    src={location.imgSrc}
                    alt={location.name}
                    className="w-full h-56 object-cover rounded-lg mb-4 shadow-lg"
                  />
                  <h4 className="text-2xl font-semibold mb-2">
                    {location.name}
                  </h4>
                  <p className="text-gray-600  mx-auto text-center">
                    {location.shortAddress}
                  </p>
                  <div className="flex gap-3 py-4 lg:py-6">
                    {location?.Amenities?.map((Amenitie: any) => {
                      const Icon = Amenitie?.icon;
                      return (
                        <div className="flex flex-col justify-center items-center gap-2 ">
                          <Icon size={28} />
                          <p className="text-[#6B7280] text-xs">
                            {Amenitie?.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-center gap-3 mt-auto ">
                    <div className="flex flex-col gap-1 font-semibold items-start">
                      <p className=" text-[#EAB308] ">
                        From INR {location?.daypass} per day
                      </p>
                      <div>
                        <button
                          onClick={() => navigate(location.link)}
                          className="hover:underline capitalize "
                        >
                          read more
                        </button>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          navigate(
                            `/booknow/${location?.name?.replace(/\s/g, "_")}`,
                          )
                        }
                        className="bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded-lg text-white"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                  {/* <a
                    onClick={() => navigate(location.link)}
                    className="text-yellow-500 hover:underline font-bold hover:cursor-pointer"
                  >
                    Read More &rarr;
                  </a> */}
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

export default LocationPage;
