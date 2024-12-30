import { useState, useEffect } from "react";
import Calendar from "./Booking";
import DashNavbar from "../components/DashBoardNavbar/DashNavbar";
import axios from "axios";
import { useApp } from "../context/AuthContext";
import AdminCalendar from "./Admin/AdminBookingcal";
import NonMemCalendar from "./NonMemberBooking";
const Dashboard: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { isAdmin, accHolder } = useApp();

  console.log(accHolder);

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
  const [selectedLocation, setSelectedLocation] = useState("");
  const [spacetype, setspacetype] = useState("");

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
            </select>
          </div>
        </div>
      </div>
      {/* {selectedLocation !== "" && isAdmin ? (
        <AdminCalendar
          key={selectedLocation}
          value={{ key: selectedLocation, selectedLocation, spacetype }}
        />
      ) : (
        <Calendar
          key={selectedLocation}
          value={{ key: selectedLocation, selectedLocation, spacetype }}
        />
      )} */}

      {/* this is a nonmber dashboard */}

      {/* calender for nonmember admin  */}
      {selectedLocation !== "" &&
        (isAdmin == "admin" ? (
          <AdminCalendar
            key={selectedLocation}
            value={{ key: selectedLocation, selectedLocation, spacetype }}
          />
        ) : (
          <NonMemCalendar
            key={selectedLocation}
            value={{ key: selectedLocation, selectedLocation, spacetype }}
          />
        ))}
    </div>
  );
};

//changes in the dashboard
// const Dashboard: React.FC = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const PORT = "https://603-bcakend-new.vercel.app";
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [selectedPlace, setSelectedPlace] = useState("");
//   const [spacetype, setspacetype] = useState("");

//   const handleLocationChange = async (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     const location = event.target.value;
//     setSelectedLocation(location);

//     if (location !== "") {
//       try {
//         const response = await axios.post(
//           `${PORT}/api/v1/spaces/getspacebyname`,
//           { name: location },
//           {
//             withCredentials: true,
//           }
//         );
//         setspacetype(response.data.roomtype);
//       } catch (error) {
//         console.error("Error fetching space type:", error);
//       }
//     }
//   };

//   const handleSelectedPlace = async (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     const location = event.target.value;
//     setSelectedPlace(location);
//   };

//   // Debugging spacetype value
//   useEffect(() => {
//     console.log("spacetype updated:", spacetype);
//   }, [spacetype]);

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
//       <DashNavbar />
//       <div
//         className={`flex flex-col items-center ${
//           windowWidth > 440 ? "p-16" : "px-4 pt-16 pb-4"
//         }`}
//       >
//         <div className="bg-white flex flex-col items-center shadow-lg rounded-lg p-8 mt-8 w-full max-w-lg">
//           <h1
//             className={`font-bold text-center mb-4 ${
//               windowWidth > 610
//                 ? "text-4xl"
//                 : windowWidth > 333
//                 ? "text-2xl"
//                 : "text-xl"
//             } text-gray-800`}
//           >
//             Booking Dashboard
//           </h1>
//           {windowWidth > 536 ? (
//             <p className="text-sm text-center text-gray-500 mb-6">
//               Select your preferred location to make a booking
//             </p>
//           ) : (
//             <p className="text-sm text-center text-gray-500 mb-6">
//               Select your preferred location
//             </p>
//           )}
//           <div className="flex justify-around items-center w-full">
//             <select
//               id="location"
//               value={selectedLocation}
//               onChange={handleLocationChange}
//               className="text-base p-2 border border-gray-300 rounded-md bg-white shadow-sm cursor-pointer w-full"
//             >
//               <option
//                 className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
//                 value=""
//               >
//                 Select location
//               </option>
//               <option
//                 className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
//                 value="Mumbai"
//               >
//                 Mumbai
//               </option>
//               <option
//                 className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
//                 value="Navi Mumbai"
//               >
//                 Navi Mumbai
//               </option>
//               <option
//                 className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
//                 value="Ahmedabad"
//               >
//                 Ahmedabad
//               </option>
//             </select>
//           </div>
//           {selectedLocation == "Mumbai" && (
//             <>
//               {windowWidth > 536 ? (
//                 <p className="text-sm text-center text-gray-500 mt-4 ">
//                   Select your prefered place in mumbai
//                 </p>
//               ) : (
//                 <p className="text-sm text-center text-gray-500 mt-4 mb-1">
//                   Select your preferred Place
//                 </p>
//               )}
//             </>
//           )}
//           {selectedLocation == "Mumbai" && (
//             <div className="flex justify-around items-center w-full m-4">
//               <select
//                 id="location"
//                 value={selectedPlace}
//                 onChange={handleSelectedPlace}
//                 className="text-base p-2 border border-gray-300 rounded-md bg-white shadow-sm cursor-pointer w-full"
//               >
//                 <option
//                   className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
//                   value="Matulya center,lower Parel"
//                 >
//                   Matulya center,lower Parel
//                 </option>
//                 <option
//                   className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
//                   value="sun mill compound ,lower parel"
//                 >
//                   sun mill compound ,lower parel
//                 </option>
//                 <option
//                   className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
//                   value="kamala Mills, Lower Parel"
//                 >
//                   kamala Mills, Lower Parel
//                 </option>
//                 <option
//                   className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
//                   value="Sunshine Tower,Lower Parel"
//                 >
//                   Sunshine Tower,Lower Parel
//                 </option>
//                 <option
//                   className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
//                   value="Amore Centre ,Khar"
//                 >
//                   Amore Centre ,Khar
//                 </option>
//                 <option
//                   className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
//                   value="Makhija Archade ,Bandra"
//                 >
//                   Makhija Archade ,Bandra
//                 </option>
//                 <option
//                   className={`${windowWidth > 610 ? "text-base" : "text-sm"}`}
//                   value="Classic Pentagon"
//                 >
//                   Classic Pentagon
//                 </option>
//               </select>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* {selectedPlace !== "" && (
//         <Calendar
//           key={selectedPlace}
//           value={{ key: selectedPlace, selectedPlace, spacetype }}
//         />
//       )} */}
//       {selectedLocation !== "" && (
//         <Calendar
//           key={selectedLocation}
//           value={{ key: selectedLocation, selectedLocation, spacetype }}
//         />
//       )}
//     </div>
//   );
// };

export default Dashboard;
