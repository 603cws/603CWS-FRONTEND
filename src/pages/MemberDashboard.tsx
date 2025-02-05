import { useState, useEffect } from "react";
import Calendar from "./Booking";
import DashNavbar from "../components/DashBoardNavbar/DashNavbar";
import axios from "axios";
import { useApp } from "../context/AuthContext";
import AdminCalendar from "./Admin/AdminBookingcal";
const MemberDashboard: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { isAdmin, accHolder } = useApp();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [spacetype, setspacetype] = useState("");

  console.log(accHolder);
  let splitLocation, getmainlocation, userLocation;
  if (accHolder.role !== "admin") {
    if (accHolder.location === "Lawyers Chamber") {
      userLocation = "Lawyers Chamber";
    } else {
      splitLocation = accHolder.location.split(" ");
      console.log(splitLocation);

      getmainlocation = splitLocation[0];
      console.log(getmainlocation);

      userLocation =
        getmainlocation.charAt(0).toUpperCase() +
        getmainlocation.slice(1).toLowerCase();
    }
    console.log(userLocation);
  }

  // const splitLocation = accHolder.location.split(" ");
  // console.log(splitLocation);

  // const getmainlocation = splitLocation[0];
  // console.log(getmainlocation);

  // const userLocation =
  //   getmainlocation.charAt(0).toUpperCase() +
  //   getmainlocation.slice(1).toLowerCase();
  // console.log(userLocation);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const PORT = "https://603-bcakend-new.vercel.app";

  const handleLocationChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const location = event.target.value;
    setSelectedLocation(location);

    if (location !== "") {
      try {
        const response = await axios.post(
          `${PORT}/api/v1/spaces/getspacebyname`,
          { name: location },
          {
            withCredentials: true,
          }
        );
        setspacetype(response.data.roomtype);
      } catch (error) {
        console.error("Error fetching space type:", error);
      }
    }
  };

  // Debugging spacetype value
  useEffect(() => {
    console.log("spacetype updated:", spacetype);
  }, [spacetype]);

  // console.log(selectedLocation);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <DashNavbar />
      <div
        className={`flex flex-col items-center ${
          windowWidth > 440 ? "p-16" : "px-4 pt-16 pb-4"
        }`}
      >
        <div className="bg-white flex flex-col items-center shadow-lg rounded-lg p-8 mt-8 w-full max-w-lg">
          <h1
            className={`font-bold text-center mb-4 ${
              windowWidth > 610
                ? "text-4xl"
                : windowWidth > 333
                ? "text-2xl"
                : "text-xl"
            } text-gray-800`}
          >
            Booking Dashboard
          </h1>
          {windowWidth > 536 ? (
            <p className="text-sm text-center text-gray-500 mb-6">
              Select your preferred location to make a booking
            </p>
          ) : (
            <p className="text-sm text-center text-gray-500 mb-6">
              Select your preferred location
            </p>
          )}
          <div className="flex justify-around items-center w-full">
            {isAdmin !== "admin" && (
              <select
                id="location"
                value={selectedLocation}
                onChange={handleLocationChange}
                className="text-base p-2 border border-gray-300 rounded-md bg-white shadow-sm cursor-pointer w-full"
              >
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value=""
                >
                  Please Select
                </option>

                {userLocation === "Kamala" ? (
                  <>
                    <option
                      className={`${
                        windowWidth > 610 ? "text-base" : "text-sm"
                      }`}
                      value="Kamala Mills Conference Room"
                    >
                      Kamala Mills Conference Room
                    </option>
                    <option
                      className={`${
                        windowWidth > 610 ? "text-base" : "text-sm"
                      }`}
                      value="Kamala Mills Meeting Room 1"
                    >
                      Kamala Mills Meeting Room 1
                    </option>
                    <option
                      className={`${
                        windowWidth > 610 ? "text-base" : "text-sm"
                      }`}
                      value="Kamala Mills Meeting Room 2"
                    >
                      Kamala Mills Meeting Room 2
                    </option>
                  </>
                ) : (
                  <>
                    <option
                      className={`${
                        windowWidth > 610 ? "text-base" : "text-sm"
                      }`}
                      value={`${userLocation} Conference Room`}
                    >
                      {userLocation} Conference Room
                    </option>
                    <option
                      className={`${
                        windowWidth > 610 ? "text-base" : "text-sm"
                      }`}
                      value={`${userLocation} Meeting Room`}
                    >
                      {userLocation} Meeting Room
                    </option>
                  </>
                )}
              </select>
            )}

            {isAdmin === "admin" && (
              <select
                id="location"
                value={selectedLocation}
                onChange={handleLocationChange}
                className="text-base p-2 border border-gray-300 rounded-md bg-white shadow-sm cursor-pointer w-full"
              >
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value=""
                >
                  Please Select
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Amore Conference Room"
                >
                  Amore Conference Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Amore Meeting Room"
                >
                  Amore Meeting Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Bandra Conference Room"
                >
                  Bandra Conference Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Bandra Meeting Room"
                >
                  Bandra Meeting Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Kamala Mills Conference Room"
                >
                  Kamala Mills Conference Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Kamala Mills Meeting Room 1"
                >
                  Kamala Mills Meeting Room 1
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Kamala Mills Meeting Room 2"
                >
                  Kamala Mills Meeting Room 2
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Matulya Conference Room"
                >
                  Matulya Conference Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Matulya Meeting Room"
                >
                  Matulya Meeting Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Millennium Conference Room"
                >
                  Millennium Conference Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Millennium Meeting Room"
                >
                  Millennium Meeting Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Sunmill Conference Room"
                >
                  Sunmill Conference Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Sunmill Meeting Room"
                >
                  Sunmill Meeting Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Technocity Conference Room"
                >
                  Technocity Conference Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Technocity Meeting Room"
                >
                  Technocity Meeting Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Sunshine Conference Room"
                >
                  Sunshine Conference Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Sunshine Meeting Room"
                >
                  Sunshine Meeting Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Navratna Conference Room"
                >
                  Navratna Conference Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Navratna Meeting Room"
                >
                  Navratna Meeting Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Lawyers Chamber Meeting Room"
                >
                  Lawyers Chamber Meeting Room
                </option>
                <option
                  className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
                  value="Lawyers Chamber Conference Room"
                >
                  Lawyers Chamber Conference Room
                </option>
              </select>
            )}
          </div>
        </div>
      </div>

      {selectedLocation !== "" &&
        (isAdmin == "admin" ? (
          <AdminCalendar
            key={selectedLocation}
            value={{ key: selectedLocation, selectedLocation, spacetype }}
          />
        ) : (
          <Calendar
            key={selectedLocation}
            value={{ key: selectedLocation, selectedLocation, spacetype }}
          />
        ))}
    </div>
  );
};

export default MemberDashboard;
