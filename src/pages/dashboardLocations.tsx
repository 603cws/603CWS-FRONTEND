import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar/navbar";
// import Footer from "../components/Footer/footer";
// import { useNavigate } from "react-router-dom";
// import makhija from "/officeimg/Makhija/Makhija.JPG";
import { locationsfornewDashboard } from "./AllLocationsDetails";
// import NonMemCalendar from "./NonMemberBooking";
// import AdminCalendar from "./Admin/AdminBookingcal";
import { useApp } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import toast from "react-hot-toast";

interface LocationProps {
  value: {
    key: string;
    selectedCity: string;
    spacetype: string;
  };
}

// interface MembershipDetails {
//   tendays?: number;
//   fifteendays?: number;
//   twentydays?: number;
//   tenhours?: number;
//   twentyhours?: number;
//   thirtyhours?: number;
// }

interface LocationDetails {
  name: string;
  spacetype?: string;
  address: string;
  imgSrc: string; // Path to the image or URL
  link: string;
  about: string;
  meetingroom: number | undefined;
  conferenceroom: number;
  daypass: number;
  membership?: any;
  enablebooking: boolean;
  conferencerooms: string[];
  meetingrooms: string[];
  daypasses: string[];
  spacetypename: string;
  spacetypeprice: number;
}

// interface DetailedLocation {

// }

const PORT = import.meta.env.VITE_BACKEND_URL;

const LocationComponent: React.FC<LocationProps> = ({ value }) => {
  // const [alllocations] = useState(locations);

  const [newdatabaselocations] = useState(locationsfornewDashboard);

  const [detailedLocation, setDetailedLocation] =
    useState<LocationDetails | null>(null);

  const [selectedLocationIndex, setSelectedLocationIndex] = useState<
    number | null
  >(null);

  // const { isAdmin } = useApp();
  // const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>("");
  // const [showcalenderconfroom, setshowcalenderconfroom] = useState(false);
  // const [showcalenderdaypass, setshowcalenderdaypass] = useState(false);
  // const [showcalendermeetroom, setshowcalendermeetroom] = useState(false);
  // useEffect(() => {
  //   console.log("selectedDate", selectedDate);
  // });

  // const totalBill =
  //   bookings.reduce((total, booking) => total + booking.price, 0) +
  //   dayPasses.reduce((total, dayPass) => total + dayPass.price, 0);

  // const [cartTotal, setCartTotal] = useState(totalBill);
  const [selectedLocation, setselectedLocation] = useState<string>("");
  // const [spacetype, setspacetype] = useState<string>("");
  const [selectedStartTime, setSelectedStartTime] = useState<string>("");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("");
  const [unavailabledaypasses, setunavailabledaypasses] = useState<number[]>(
    []
  );
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timedifference, settimedifference] = useState<number>(0);
  // // const [enableconftime, setenableconftime] = useState<boolean>(false);
  const [enabledaypasstime, setenabledaypasstime] = useState<boolean>(false);
  const [enablemeettime, setenablemeettime] = useState<boolean>(false);
  const [timings, setTimings] = useState<[string, string][][]>([]);
  const [availableStartTimes, setAvailableStartTimes] = useState<string[]>([]);
  const [availableEndTimes, setAvailableEndTimes] = useState<string[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [quantity, setQuantity] = useState(1);
  // const [selectedCity, setSelectedCity] = useState<string>("All");
  // const navigate = useNavigate();
  const { selectedCity, spacetype } = value;
  // const [selectedLocation, setselectedLocation] = useState("");
  // const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedCity(event.target.value);
  // };
  // console.log(spacetype);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  let navigate = useNavigate();

  const likelyprice = detailedLocation?.spacetypeprice || 0;
  console.log(likelyprice);

  const baseprice = likelyprice * timedifference;

  console.log(detailedLocation);

  //meetorconf room
  let meetorconf = spacetype !== "Daypass";
  // let likelyprice = 0;

  // useEffect(() => {
  //   if (detailedLocation?.spacetype === "Meeting") {
  //     likelyprice = detailedLocation?.meetingroom || 0;
  //   }
  //   if (detailedLocation?.spacetype === "conference") {
  //     likelyprice = detailedLocation?.conferenceroom || 0;
  //   }
  //   if (detailedLocation?.spacetype === "Daypass") {
  //     likelyprice = detailedLocation?.daypass || 0;
  //   }
  //   const baseprice = likelyprice * timedifference;
  // }, [spacetype]);

  //calender
  const { bookDayPass, addNewBooking, dayPasses, bookings } = useApp();

  const handledecQuan = () => {
    if (quantity <= 1) return;
    setQuantity(() => quantity - 1);
  };

  //handle inc
  const handleincQuan = () => {
    if (quantity >= 20) return;
    setQuantity(() => quantity + 1);
  };

  //handle daypass for checking

  useEffect(() => {
    console.log("Updated dayPasses:", dayPasses);
  }, [dayPasses]);

  useEffect(() => {
    console.log("Updated bookings:", bookings);
  }, [bookings]);

  useEffect(() => {
    console.log(detailedLocation);
  }, [detailedLocation, setDetailedLocation]);

  useEffect(() => {
    if (selectedDay !== null) {
      const date = `${selectedDay}/${currentMonth + 1}/${currentYear}`;
      setSelectedDate(date);
      if (spacetype !== "daypass") {
        fetchLocationBookings(date);
      }
    }
  }, [selectedDay, currentMonth, currentYear]);

  useEffect(() => {
    const date = `${selectedDay}/${currentMonth + 1}/${currentYear}`;
    setSelectedDate(date);
    if (spacetype === "daypass") {
      fetchLocationDayPassBookings();
    }
  }, [currentMonth, currentYear, selectedLocation]);

  useEffect(() => {
    if (selectedStartTime && selectedEndTime) {
      const startMinutes = getTimeInMinutes(selectedStartTime);
      const endMinutes = getTimeInMinutes(selectedEndTime);
      const difference = (endMinutes - startMinutes) / 60;
      settimedifference(difference);
    } else {
      settimedifference(0);
    }
  }, [selectedStartTime, selectedEndTime]);

  useEffect(() => {
    const updateCurrentTime = () => setCurrentTime(new Date());
    const interval = setInterval(updateCurrentTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const times = [
    "9:00 am",
    "9:30 am",
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
    "12:00 pm",
    "12:30 pm",
    "1:00 pm",
    "1:30 pm",
    "2:00 pm",
    "2:30 pm",
    "3:00 pm",
    "3:30 pm",
    "4:00 pm",
    "4:30 pm",
    "5:00 pm",
    "5:30 pm",
    "6:00 pm",
    "6:30 pm",
    "7:00 pm",
    "7:30 pm",
    "8:00 pm",
    "8:30 pm",
    "9:00 pm",
    "10:00 pm",
  ];

  const times2 = [
    "9:00 am",
    "9:30 am",
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
    "12:00 pm",
    "12:30 pm",
    "1:00 pm",
    "1:30 pm",
    "2:00 pm",
    "2:30 pm",
    "3:00 pm",
    "3:30 pm",
    "4:00 pm",
    "4:30 pm",
    "5:00 pm",
    "5:30 pm",
    "6:00 pm",
    "6:30 pm",
    "7:00 pm",
    "7:30 pm",
    "8:00 pm",
    "8:30 pm",
    "9:00 pm",
    "10:00 pm",
  ];

  const getTimeInMinutes = (timeStr: string): number => {
    const [time, period] = timeStr.split(" ");
    const [hourStr, minuteStr] = time.split(":");
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    return ((hour % 12) + (period === "pm" ? 12 : 0)) * 60 + minute;
  };

  const fetchLocationBookings = async (date: string) => {
    try {
      console.log("selectedLocation", selectedLocation);
      const response = await axios.post(
        `${PORT}/api/v1/bookings/getlocationbookings`,
        { selectedDate: date, selectedLocation },
        {
          withCredentials: true,
        }
      );
      setTimings(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLocationDayPassBookings = async () => {
    try {
      console.log("iprjepr", selectedLocation);
      const response = await axios.post(
        `${PORT}/api/v1/daypass/getdata`,
        {
          selectedLocation,
          selectedYear: currentYear,
          selectedMonth: currentMonth + 1,
        },
        {
          withCredentials: true,
        }
      );
      setunavailabledaypasses(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getFilteredTimes = (
    selectedDay: number | null,
    currentTime: Date
  ): string[] => {
    if (selectedDay === null) {
      return times;
    }

    const today = new Date();
    const selectedDate = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      selectedDay
    );
    if (selectedDate.toDateString() === today.toDateString()) {
      const currentTimeInMinutes =
        currentTime.getHours() * 60 + currentTime.getMinutes();
      return times.filter((time) => {
        const timeInMinutes = getTimeInMinutes(time);
        return timeInMinutes > currentTimeInMinutes;
      });
    } else {
      return times;
    }
  };

  const selectendtimefunction = (starttime: string) => {
    const startIndex = availableStartTimes.indexOf(starttime);
    if (startIndex === -1) return;

    const endTimes: string[] = [];

    for (let i = startIndex + 1; i < availableStartTimes.length; i++) {
      const currentEndTime = availableStartTimes[i];
      const previousTime = availableStartTimes[i - 1];

      const currentEndTimeInMinutes = getTimeInMinutes(currentEndTime);
      const previousTimeInMinutes = getTimeInMinutes(previousTime);

      const differenceInMinutes =
        currentEndTimeInMinutes - previousTimeInMinutes;
      if (differenceInMinutes == 30) {
        endTimes.push(currentEndTime);
      } else {
        const y = times2.indexOf(previousTime);
        console.log(y, "rjojro");
        endTimes.push(times2[y + 1]);
        break;
      }
    }

    setAvailableEndTimes(endTimes);
    console.log("Filtered end times:", endTimes);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (selectedStartTime !== "") {
      selectendtimefunction(selectedStartTime);
    }
  }, [selectedStartTime]);

  //change the select booking
  useEffect(() => {
    setSelectedStartTime("");
    setSelectedEndTime("");
    setSelectedDay(null);
  }, [selectedLocationIndex]);

  useEffect(() => {
    if (selectedDay !== null) {
      changeday(selectedDay);
    }
  }, [selectedDay, timings, currentTime]);

  const calendarStyle: React.CSSProperties = {
    justifyContent: "center",
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: windowWidth > 390 ? "10px" : "6px",
    margin: "20px 0",
  };

  const dayStyle: React.CSSProperties = {
    width:
      windowWidth > 1280
        ? "60px"
        : windowWidth > 545
        ? "45px"
        : windowWidth > 377
        ? "40px"
        : "35px",
    height: windowWidth > 440 ? "40px" : "35px",
    fontSize: windowWidth > 582 ? undefined : "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    fontFamily: "Poppins, sans-serif",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  };

  const availableStyle1: React.CSSProperties = {
    backgroundColor: "white", // green-400
    color: "black",
  };

  const selectedStyle: React.CSSProperties = {
    backgroundColor: "#34D399", // green-400
    color: "white",
  };

  const partiallyBookedStyle: React.CSSProperties = {
    backgroundColor: "#fff778", // yellow-400
  };

  const pastDayStyle: React.CSSProperties = {
    backgroundColor: "#d3d3d3", // gray
    color: "#a9a9a9", // dark gray
    cursor: "not-allowed",
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: "15px",
    fontSize: windowWidth > 390 ? "15px" : "14px",
    paddingTop: "10px",
    fontWeight: "bold",
    color: "#4B5563",
    fontFamily: "Poppins, sans-serif",
  };

  const calendarHeaderStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: windowWidth > 560 ? "0 2rem" : "0 0.5rem",
  };

  const inputContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  };

  const inputStyle: React.CSSProperties = {
    padding: "10px",
    fontSize: "16px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #d1d5db", // gray-300
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginTop: "5px",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "15px",
    width: "100%",
    color: "#4B5563",
    fontFamily: "Poppins, sans-serif",
    textAlign: "left",
    marginTop: "10px",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#e1e1e1",
    padding: windowWidth > 580 ? "5px 20px" : "7px 16px",
    borderRadius: windowWidth > 580 ? "7px" : "80%",
    boxShadow: "0 10px 20px rgba(194, 194, 194, 0.1)",
    fontFamily: "Poppins, sans-serif",
    fontSize: "20px",
    cursor: "pointer",
  };

  const timestyle: React.CSSProperties = {
    fontSize: windowWidth > 350 ? undefined : "13px",
    display: "flex",
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
  };

  const isWeekend = (day: number, month: number, year: number) => {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const daysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();

  const changeMonth = (increment: number) => {
    let newMonth = currentMonth + increment;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setSelectedDay(null);
    setSelectedStartTime("");
    setSelectedEndTime("");
  };

  const handleStartTimeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedStartTime(event.target.value);
    setSelectedEndTime("");
  };

  const handleEndTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEndTime(event.target.value);
  };

  const isPastDay = (day: number) => {
    const today = new Date();
    const date = new Date(currentYear, currentMonth, day);
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const changeday = (day: number) => {
    setSelectedStartTime("");
    setSelectedEndTime("");

    let availableStartTimesUnfiltered = getFilteredTimes(day, currentTime);
    console.log("Initial available times:", availableStartTimesUnfiltered);

    if (timings.length > 0) {
      timings.forEach(([start, end]) => {
        const startTimeInMinutes = getTimeInMinutes(start.toString());
        const endTimeInMinutes = getTimeInMinutes(end.toString());

        availableStartTimesUnfiltered = availableStartTimesUnfiltered.filter(
          (time) => {
            const timeInMinutes = getTimeInMinutes(time);
            // Keep the end time but filter out times within the interval
            if (timeInMinutes === endTimeInMinutes) {
              return true;
            }
            return (
              timeInMinutes < startTimeInMinutes ||
              timeInMinutes > endTimeInMinutes
            );
          }
        );
      });
    }

    setAvailableStartTimes(availableStartTimesUnfiltered);
    console.log("Filtered start times:", availableStartTimesUnfiltered);
  };

  // const filteredLocations =
  //   selectedCity === "All"
  //     ? alllocations
  //     : alllocations.filter((cityGroup) => cityGroup.city === selectedCity);

  //new location
  const filteredLocations =
    selectedCity === "All"
      ? newdatabaselocations.filter(
          (cityGroup) => cityGroup.spacetype === spacetype
        )
      : newdatabaselocations.filter(
          (cityGroup) =>
            cityGroup.city === selectedCity && cityGroup.spacetype === spacetype
        );

  console.log("filteredlocations", filteredLocations);

  // const handleBookNow = (location) => {
  //   setselectedLocation(location.name);
  // };

  const handleAddDaypass = async () => {
    try {
      setIsSubmitting(true);
      const res = await axios.post(
        `${PORT}/api/v1/daypass/daypassCheck`,
        {
          spaceName: selectedLocation,
          quantity,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);

      if (res.status === 200) {
        bookDayPass({
          price: likelyprice * quantity,
          spaceName: selectedLocation,
          bookeddate: selectedDate,
          day: selectedDay || 0,
          month: currentMonth + 1,
          year: currentYear,
          quantity: quantity,
        });
        console.log(dayPasses);
        navigate("/payment");
      }

      if (res.status === 400) {
        toast.error("daypass not available for Today at selected location ");
      }
    } catch (error: any) {
      console.log(error);
      console.log("daypass not available");
      toast.error(
        ` ${error.response.data.quantity} daypass not available for Today at selected location only ${error.response.data.availabledaypass} are available `
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans bg-gray-50  overflow-x-hidden">
      {/* <header className="bg-white shadow-lg z-50 fixed w-full top-0">
        <Navbar />
      </header> */}

      {/* <div
        style={{ backgroundImage: `url(${makhija})` }}
        className="relative bg-no-repeat bg-cover bg-fixed mb-16 h-screen lg:h-[600px]"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center items-center h-full w-full ">
          <div className="text-center px-12 py-16">
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4">Locations</h2>
            <p className="text-white ">Explore our workspaces</p>
          </div>
        </div>
      </div> */}

      {/* City Filter Dropdown */}
      {/* <div className="container mx-auto px-6 md:px-12 mb-8">
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
      </div> */}

      {/* <div className="container mx-auto px-2 md:px-12 overflow-auto "> */}
      <div className="w-full md:px-12 px-2">
        {filteredLocations.map((cityGroup, cityIndex) => (
          <div key={cityIndex} className="mb-16">
            <h3 className="text-xl pt-6 font-bold mb-8 text-center text-[#cd952dd1]">
              {cityGroup.city} | {cityGroup.spacetype}
            </h3>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cityGroup.locations.map((location, locationIndex) => (
                <div
                  key={locationIndex}
                  className="flex flex-col gap-4 items-center text-center bg-white p-4 xl:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mb-4"
                >
                  <div>
                    <img
                      src={location.imgSrc}
                      alt={location.name}
                      // className="w-full h-56 object-cover rounded-lg mb-4 shadow-lg"
                      className="w-full h-52 object-cover rounded-lg mb-4 shadow-lg"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      {/* {location.name.includes("-")
                        ? location.name.split("-")[1]
                        : location.name} */}
                      {location.spacetypename}
                    </h4>
                    {/* <p className="text-gray-600 mb-4 mx-auto text-justify"> */}
                    <p className="text-gray-600 mb-4 mx-auto text-center">
                      {location.address}
                    </p>
                    {location.enablebooking ? (
                      <button
                        // onClick={() => navigate(location.link)}
                        onClick={() => {
                          setSelectedLocationIndex(locationIndex);
                          setselectedLocation(location.spacetypename);
                          setDetailedLocation(location);
                          setQuantity(1);
                        }}
                        className={`text-black hover:underline font-bold hover:cursor-pointer btn bg-yellow-500 hover:bg-yellow-500 ${
                          selectedLocationIndex === locationIndex && "hidden"
                        }`}
                      >
                        Book Now
                      </button>
                    ) : (
                      // <div className="lg:w-2/5 rounded-lg p-6 shadow-xl h-auto flex justify-center">
                      <div className=" p-6  h-auto flex justify-center">
                        <h1 className="text-red-600 text-base">
                          Booking is currently unavailable.
                        </h1>
                      </div>
                    )}
                    <button
                      // onClick={() => navigate(location.link)}
                      onClick={() => {
                        setSelectedLocationIndex(null);
                        setselectedLocation("");
                        setDetailedLocation(location);
                      }}
                      className={`${
                        selectedLocationIndex !== locationIndex && "hidden"
                      } text-black hover:underline font-bold hover:cursor-pointer btn bg-yellow-500 hover:bg-yellow-500 `}
                    >
                      Cancel
                    </button>

                    <div className={`h-auto`}>
                      {selectedLocationIndex === locationIndex &&
                        spacetype !== "Daypass" &&
                        detailedLocation?.enablebooking && (
                          <>
                            <h1 style={headerStyle}>Select Date and Time:</h1>
                            <div style={calendarHeaderStyle}>
                              <button
                                style={buttonStyle}
                                onClick={() => changeMonth(-1)}
                              >
                                {"<"}
                              </button>
                              <h2 style={timestyle}>{`${new Date(
                                currentYear,
                                currentMonth
                              ).toLocaleString("default", {
                                month: "long",
                              })} ${currentYear}`}</h2>
                              <button
                                style={buttonStyle}
                                onClick={() => changeMonth(1)}
                              >
                                {">"}
                              </button>
                            </div>
                            <div style={calendarStyle}>
                              {Array.from(
                                {
                                  length: daysInMonth(
                                    currentMonth,
                                    currentYear
                                  ),
                                },
                                (_, index) => index + 1
                              ).map((day) => (
                                <div
                                  key={day}
                                  style={{
                                    ...dayStyle,
                                    ...(isPastDay(day)
                                      ? pastDayStyle
                                      : isWeekend(
                                          day,
                                          currentMonth,
                                          currentYear
                                        )
                                      ? partiallyBookedStyle
                                      : availableStyle1),
                                    ...(selectedDay === day && selectedStyle),
                                  }}
                                  onClick={() => {
                                    if (!isPastDay(day)) {
                                      setSelectedDay(day);
                                      setSelectedStartTime("");
                                      setSelectedEndTime("");
                                      setenablemeettime(true);
                                    }
                                  }}
                                >
                                  {day}
                                </div>
                              ))}
                            </div>
                            {selectedLocationIndex === locationIndex &&
                              meetorconf &&
                              enablemeettime && (
                                <div className="px-5 pb-4">
                                  <div style={inputContainerStyle}>
                                    <label style={labelStyle}>
                                      Select Start Time:
                                    </label>
                                    <select
                                      value={selectedStartTime}
                                      onChange={handleStartTimeChange}
                                      style={inputStyle}
                                    >
                                      <option value="" disabled>
                                        --Select Start Time--
                                      </option>
                                      {availableStartTimes.map((time) => (
                                        <option key={time} value={time}>
                                          {time}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <div style={inputContainerStyle}>
                                    <label style={labelStyle}>
                                      Select End Time:
                                    </label>
                                    <select
                                      value={selectedEndTime}
                                      onChange={handleEndTimeChange}
                                      style={inputStyle}
                                      disabled={!selectedStartTime}
                                    >
                                      <option value="" disabled>
                                        --Select End Time--
                                      </option>
                                      {availableEndTimes.map((time) => (
                                        <option key={time} value={time}>
                                          {time}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  {selectedEndTime && (
                                    <>
                                      <button
                                        className="bg-yellow-500 text-gray-100 px-4 py-2 rounded-md shadow-lg text-lg transition transform hover:bg-yellow-600 hover:scale-105 w-full mt-4"
                                        onClick={() => {
                                          // setshowcalenderconfroom(false),
                                          // setshowcalenderdaypass(false);
                                          // setshowcalendermeetroom(false);
                                          addNewBooking({
                                            spaceName: selectedLocation,
                                            startTime: selectedStartTime,
                                            endTime: selectedEndTime,
                                            date: selectedDate,
                                            price: baseprice,
                                          });
                                          navigate("/payment");
                                        }}
                                      >
                                        <span className="text-white font-extrabold">
                                          Add ₹{baseprice}
                                        </span>
                                      </button>
                                      {/* <button
                                        className="bg-yellow-500 text-gray-100 px-4 py-2 rounded-md shadow-lg text-lg transition transform hover:bg-yellow-600 hover:scale-105 w-full mt-4"
                                        onClick={() => {
                                          // setshowcalenderconfroom(false),
                                          // setshowcalenderdaypass(false);
                                          // setshowcalendermeetroom(false);
                                          addNewBooking({
                                            spaceName: selectedLocation,
                                            startTime: selectedStartTime,
                                            endTime: selectedEndTime,
                                            date: selectedDate,
                                            price: baseprice,
                                          });
                                          navigate("/payment");
                                        }}
                                      >
                                        Add{" "}
                                        <span className="text-white font-extrabold">
                                          ₹{baseprice}
                                        </span>
                                      </button> */}
                                      <span className=" text-black-100 px-4 py-2  text-sm  w-full mt-4">
                                        "Please note that an 18% GST will be
                                        applied to the booking amount during the
                                        checkout process."
                                      </span>
                                    </>
                                  )}
                                </div>
                              )}
                          </>
                        )}
                    </div>

                    {/* daypass */}
                    <div className={`h-auto`}>
                      {selectedLocationIndex === locationIndex &&
                        spacetype === "Daypass" && (
                          <>
                            <h1 style={headerStyle}>Select Date:</h1>
                            <div style={calendarHeaderStyle}>
                              <button
                                style={buttonStyle}
                                onClick={() => changeMonth(-1)}
                              >
                                {"<"}
                              </button>
                              <h2 style={timestyle}>{`${new Date(
                                currentYear,
                                currentMonth
                              ).toLocaleString("default", {
                                month: "long",
                              })} ${currentYear}`}</h2>
                              <button
                                style={buttonStyle}
                                onClick={() => changeMonth(1)}
                              >
                                {">"}
                              </button>
                            </div>
                            <div style={calendarStyle}>
                              {Array.from(
                                {
                                  length: daysInMonth(
                                    currentMonth,
                                    currentYear
                                  ),
                                },
                                (_, index) => index + 1
                              ).map((day) => (
                                <div
                                  key={day}
                                  aria-disabled={
                                    isPastDay(day) ||
                                    !unavailabledaypasses.includes(day)
                                  }
                                  style={{
                                    ...dayStyle,
                                    ...(isPastDay(day) ||
                                    unavailabledaypasses.includes(day)
                                      ? pastDayStyle
                                      : isWeekend(
                                          day,
                                          currentMonth,
                                          currentYear
                                        )
                                      ? partiallyBookedStyle
                                      : availableStyle1),
                                    ...(selectedDay === day && selectedStyle),
                                  }}
                                  onClick={() => {
                                    if (
                                      !isPastDay(day) &&
                                      !unavailabledaypasses.includes(day)
                                    ) {
                                      setSelectedDay(day);
                                      setSelectedStartTime("");
                                      setSelectedEndTime("");
                                      setenabledaypasstime(true);
                                    }
                                  }}
                                  aria-readonly
                                >
                                  {day}
                                </div>
                              ))}
                            </div>
                            <div className="w-full flex justify-center gap-4">
                              <input
                                type="text"
                                className="flex justify-center w-32 bg-yellow-200 px-3 py-2 rounded-md shadow-lg border-gray-200"
                                value={
                                  selectedDay ? selectedDate : "Select Date"
                                }
                              />

                              <div className="mx-4 flex justify-around mt-2 gap-4">
                                {/* btn for dec */}
                                <button onClick={handledecQuan}>
                                  <CiCircleMinus size={30} />
                                </button>
                                {/* display no */}
                                <div className="w-[20px] border-2 rounded-xl px-8 text-center">
                                  {quantity}
                                </div>
                                {/* inc btn */}
                                <button onClick={handleincQuan}>
                                  <CiCirclePlus size={30} />
                                </button>
                              </div>
                            </div>

                            {enabledaypasstime && selectedDay && (
                              <>
                                {/* <button
                                  className="bg-yellow-500 text-gray-100 px-4 py-2 rounded-md shadow-lg text-lg transition transform hover:bg-yellow-600 hover:scale-105 w-full mt-4"
                                  // onClick={() => {
                                  //   bookDayPass({
                                  //     price: likelyprice * quantity,
                                  //     spaceName: selectedLocation,
                                  //     bookeddate: selectedDate,
                                  //     day: selectedDay || 0,
                                  //     month: currentMonth + 1,
                                  //     year: currentYear,
                                  //     quantity: quantity,
                                  //   });
                                  //   // setshowcalenderconfroom(false);
                                  //   // setshowcalenderdaypass(false);
                                  //   // setshowcalendermeetroom(false);
                                  //   navigate("/payment");
                                  //   console.log(dayPasses);
                                  // }}
                                  onClick={handleAddDaypass}
                                >
                                  Add{" "}
                                  <span className="text-white font-extrabold">
                                    ₹{likelyprice * quantity}
                                  </span>
                                </button> */}
                                <button
                                  // type="submit"
                                  onClick={handleAddDaypass}
                                  disabled={isSubmitting}
                                  className="bg-yellow-500 text-gray-100 px-4 py-2 rounded-md shadow-lg text-lg transition transform hover:bg-yellow-600 hover:scale-105 w-full mt-4"
                                >
                                  {isSubmitting ? (
                                    <div className="spinner flex justify-center items-center">
                                      <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                      >
                                        <circle
                                          className="opacity-25"
                                          cx="12"
                                          cy="12"
                                          r="10"
                                          stroke="currentColor"
                                          strokeWidth="4"
                                        ></circle>
                                        <path
                                          className="opacity-75"
                                          fill="currentColor"
                                          d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8V12H4z"
                                        ></path>
                                      </svg>
                                    </div>
                                  ) : (
                                    <>
                                      <span className="text-white font-extrabold">
                                        Add ₹{likelyprice * quantity}
                                      </span>
                                    </>
                                  )}
                                </button>
                                {/* <span className=" text-black-100 px-4 py-2  text-sm  w-full mt-4">
                        "Please note that an 18% GST will be applied to the
                        booking amount during the checkout process."
                      </span> */}
                              </>
                            )}
                          </>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* <footer className="bg-white shadow-lg">
        <Footer />
      </footer> */}
    </div>
  );
};

export default LocationComponent;
