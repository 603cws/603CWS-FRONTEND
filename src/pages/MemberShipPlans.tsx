import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import { FaRupeeSign, FaStar } from "react-icons/fa"; // Logos for each plan
import React, { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { locations } from "./AllLocationsDetails";

type membershipstruct = {
  daypass?: {
    tendays: number;
    fifteendays: number;
    twentydays: number;
  };
  conferenceroom?: {
    tenhours: number;
    twentyhours: number;
    thirtyhours: number;
  };
  meetingroom?: {
    tenhours: number;
    twentyhours: number;
    thirtyhours: number;
  };
};

const Membership: React.FC = () => {
  const [data, setdata] = useState<membershipstruct>({
    daypass: {
      tendays: 0,
      fifteendays: 0,
      twentydays: 0,
    },
    conferenceroom: {
      tenhours: 0,
      twentyhours: 0,
      thirtyhours: 0,
    },
    meetingroom: {
      tenhours: 0,
      twentyhours: 0,
      thirtyhours: 0,
    },
  });
  const [showsubscriptionpart, setshowsubscriptionpart] = useState(false);
  const [alllocations] = useState(locations);
  const [spacename, setspacename] = useState("");
  const [selectedCity, setSelectedCity] = useState<string>("All");

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const filteredLocations =
    selectedCity === "All"
      ? alllocations
      : alllocations.filter((cityGroup) => cityGroup.city === selectedCity);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200">
      <div style={{ zIndex: 20, position: "relative" }}>
        <Navbar />
      </div>

      {/* <div className=" mx-auto py-16 px-6 md:px-8 my-14"> */}
      <div className=" mx-auto pb-16 pt-20 px-6 md:px-8 ">
        {!spacename ? (
          <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 tracking-tight leading-tight">
            Membership Plans
          </h2>
        ) : (
          <div className="flex items-center gap-12">
            <h2
              className="text-center text-4xl md:text-4xl font-semibold text-gray-700 mb-12 tracking-tight leading-tight hover:text-gray-300 hover:cursor-pointer"
              onClick={() => {
                setdata({
                  daypass: {
                    tendays: 0,
                    fifteendays: 0,
                    twentydays: 0,
                  },
                  conferenceroom: {
                    tenhours: 0,
                    twentyhours: 0,
                    thirtyhours: 0,
                  },
                  meetingroom: {
                    tenhours: 0,
                    twentyhours: 0,
                    thirtyhours: 0,
                  },
                });
                setspacename("");
                setshowsubscriptionpart(false);
              }}
            >
              &larr;
            </h2>
            <h2 className="text-center text-4xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight leading-tight">
              {spacename}
            </h2>
          </div>
        )}

        {!showsubscriptionpart ? (
          <>
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
            <div className="container mx-auto px-6 md:px-12 overflow-auto">
              {filteredLocations.map((cityGroup, cityIndex) => (
                <div key={cityIndex} className="mb-16">
                  <h3 className="text-3xl sm:text-4xl pt-6 font-bold mb-8 text-center text-[#cd952dd1]">
                    {cityGroup.city}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cityGroup.locations
                      .filter(
                        (loc) =>
                          loc.membership &&
                          Object.keys(loc.membership).length > 0,
                      )
                      .map((location, locationIndex) => (
                        <div
                          key={locationIndex}
                          className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mb-4"
                        >
                          <img
                            src={location.imgSrc}
                            alt={location.name}
                            className="w-full h-56 object-cover rounded-lg mb-4 shadow-lg"
                          />

                          <h4 className="text-2xl font-semibold mb-2">
                            {location.name}
                          </h4>
                          <p className="text-gray-600 mb-4 mx-auto text-justify">
                            {location.address}
                          </p>
                          <a
                            onClick={() => {
                              setspacename(location.name);
                              setdata(
                                location.membership || {
                                  daypass: {
                                    tendays: 0,
                                    fifteendays: 0,
                                    twentydays: 0,
                                  },
                                  conferenceroom: {
                                    tenhours: 0,
                                    twentyhours: 0,
                                    thirtyhours: 0,
                                  },
                                  meetingroom: {
                                    tenhours: 0,
                                    twentyhours: 0,
                                    thirtyhours: 0,
                                  },
                                },
                              );
                              setshowsubscriptionpart(true);
                            }}
                            className="text-yellow-500 hover:underline font-bold hover:cursor-pointer"
                          >
                            View Plans &rarr;
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-1">
              {/* Day Pass Card */}
              <div className="relative bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <FaStar className="text-yellow-500 text-2xl" />
                  <h3 className="text-3xl font-semibold text-gray-800">
                    Day Pass
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Flexible day pass options for coworking.
                </p>
                <div className="text-2xl font-semibold text-gray-600 mb-2 pb-3 flex items-center">
                  <FaRupeeSign />
                  {data.daypass?.tendays}{" "}
                  <span className="text-xl text-gray-500"> / 10 Days</span>
                </div>
                <div className="text-2xl font-semibold text-gray-600 mb-2 pb-3 flex items-center">
                  <FaRupeeSign />
                  {data.daypass?.fifteendays}{" "}
                  <span className="text-xl text-gray-500"> / 15 Days</span>
                </div>
                <div className="text-2xl font-semibold text-gray-600 mb-2 pb-3 flex items-center">
                  <FaRupeeSign />
                  {data.daypass?.twentydays}{" "}
                  <span className="text-xl text-gray-500"> / 20 Days</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-3">
                    <FaHandPointRight color="#ca8a04" />
                    Free access to all workspaces
                  </li>
                  <li className="flex items-center gap-3">
                    <FaHandPointRight color="#ca8a04" />
                    Complimentary coffee and tea
                  </li>
                  <li className="flex items-center gap-3">
                    <FaHandPointRight color="#ca8a04" />
                    High-speed internet
                  </li>
                </ul>
                <button
                  onClick={() => (window.location.href = "tel:+919136036603")}
                  className="mt-6 bg-yellow-500 text-white rounded-full px-6 py-2 font-medium hover:bg-yellow-600 transition-colors"
                >
                  Get started
                </button>
              </div>

              {/* Conference Room Card */}
              <div className="relative bg-yellow-50 shadow-lg rounded-lg p-6 border border-yellow-400 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <FaStar className="text-yellow-600 text-2xl" />
                  <h3 className="text-3xl font-semibold text-gray-800">
                    Conference Room
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Hourly conference room booking options.
                </p>
                <div className="text-2xl font-semibold flex items-center text-gray-600 mb-2 pb-3">
                  <FaRupeeSign />
                  {data.conferenceroom?.tenhours}{" "}
                  <span className="text-xl text-gray-500"> / 10 Hrs</span>
                </div>
                <div className="text-2xl font-semibold text-gray-600 mb-2 pb-3 flex items-center">
                  <FaRupeeSign />
                  {data.conferenceroom?.twentyhours}{" "}
                  <span className="text-xl text-gray-500"> / 20 Hrs</span>
                </div>
                <div className="text-2xl font-semibold text-gray-600 mb-2 pb-3 flex items-center">
                  <FaRupeeSign />
                  {data.conferenceroom?.thirtyhours}{" "}
                  <span className="text-xl text-gray-500"> / 30 Hrs</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-3">
                    <FaHandPointRight color="#ca8a04" />
                    Access to conference facilities
                  </li>
                  <li className="flex items-center gap-3">
                    <FaHandPointRight color="#ca8a04" />
                    Audio and video equipment included
                  </li>
                  <li className="flex items-center gap-3">
                    <FaHandPointRight color="#ca8a04" />
                    Complimentary refreshments
                  </li>
                </ul>
                <button
                  onClick={() => (window.location.href = "tel:+919136036603")}
                  className="mt-6 bg-yellow-500 text-white rounded-full px-6 py-2 font-medium hover:bg-yellow-600 transition-colors"
                >
                  Get started
                </button>
              </div>

              {/* Meeting Room Card */}
              <div className="relative bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <FaStar className="text-yellow-500 text-2xl" />
                  <h3 className="text-3xl font-semibold text-gray-800">
                    Meeting Room
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Flexible meeting room booking options.
                </p>
                <div className="text-2xl font-semibold text-gray-600 mb-2 pb-3 flex items-center">
                  <FaRupeeSign />
                  {data.meetingroom?.tenhours}{" "}
                  <span className="text-xl text-gray-500 "> / 10 Hrs</span>
                </div>
                <div className="text-2xl font-semibold text-gray-600 mb-2 pb-3 flex items-center">
                  <FaRupeeSign />
                  {data.meetingroom?.twentyhours}{" "}
                  <span className="text-xl text-gray-500"> / 20 Hrs</span>
                </div>
                <div className="text-2xl font-semibold text-gray-600 mb-2 pb-3 flex items-center">
                  <FaRupeeSign />
                  {data.meetingroom?.thirtyhours}{" "}
                  <span className="text-xl text-gray-500"> / 30 Hrs</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-3">
                    <FaHandPointRight color="#ca8a04" />
                    Private meeting space
                  </li>
                  <li className="flex items-center gap-3">
                    <FaHandPointRight color="#ca8a04" />
                    Whiteboard and presentation tools
                  </li>
                  <li className="flex items-center gap-3">
                    <FaHandPointRight color="#ca8a04" />
                    High-speed internet
                  </li>
                </ul>
                <button
                  onClick={() => (window.location.href = "tel:+919136036603")}
                  className="mt-6 bg-yellow-500 text-white rounded-full px-6 py-2 font-medium hover:bg-yellow-600 transition-colors"
                >
                  Get started
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Membership;
