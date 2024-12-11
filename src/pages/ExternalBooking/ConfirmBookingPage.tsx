import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaShoppingCart,
  FaWifi,
  FaBriefcase,
  FaCoffee,
} from "react-icons/fa"; // Import FontAwesome icons
import { locations } from "../AllLocationsDetails";
import axios from "axios";
import { useApp } from "../../context/AuthContext";

type Location = {
  name: string;
  address: string;
  imgSrc: string;
  link: string;
  about: string;
  conferenceroom: number;
  daypass: number;
  meetingroom: number;
  enablebooking: boolean;
  conferencerooms: string[];
  meetingrooms: string[];
  daypasses: string[];
};

interface Theme {
  background: {
    default: string;
  };
  text: {
    primary: string;
  };
}

export const getTheme = (darkMode: boolean): Theme => ({
  background: {
    default: darkMode ? "#121212" : "#F5F5F5",
  },
  text: {
    primary: darkMode ? "#E0E0E0" : "#212121",
  },
});

//for production
const PORT = `https://603-bcakend-new.vercel.app`;

const ConfirmPayment = () => {
  const { addNewBooking, bookDayPass, dayPasses, bookings } = useApp();

  useEffect(() => {
    console.log("Updated dayPasses:", dayPasses);
  }, [dayPasses]);

  useEffect(() => {
    console.log("Updated bookings:", bookings);
  }, [bookings]);

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
  ];

  const getTimeInMinutes = (timeStr: string): number => {
    const [time, period] = timeStr.split(" ");
    const [hourStr, minuteStr] = time.split(":");
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    return ((hour % 12) + (period === "pm" ? 12 : 0)) * 60 + minute;
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
  const [locationDetails, setLocationDetails] = useState<Location | undefined>(
    undefined
  );

  useEffect(() => {
    const path = window.location.pathname;
    const location = path.split("/")[2];
    const formattedLocation = location.replace(/_/g, " ");

    const foundLocation = locations
      .flatMap((city) => city.locations)
      .find((loc) => loc.name === formattedLocation);

    if (foundLocation) {
      setLocationDetails(foundLocation);
      console.log(foundLocation);
    }
  }, []);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [showcalenderconfroom, setshowcalenderconfroom] = useState(false);
  const [showcalenderdaypass, setshowcalenderdaypass] = useState(false);
  const [showcalendermeetroom, setshowcalendermeetroom] = useState(false);
  useEffect(() => {
    console.log("selectedDate", selectedDate);
  });

  const totalBill =
    bookings.reduce((total, booking) => total + booking.price, 0) +
    dayPasses.reduce((total, dayPass) => total + dayPass.price, 0);

  const [cartTotal, setCartTotal] = useState(totalBill);
  const [selectedLocation, setselectedLocation] = useState<string>("");
  const [spacetype, setspacetype] = useState<string>("");
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
  const [enableconftime, setenableconftime] = useState<boolean>(false);
  const [enabledaypasstime, setenabledaypasstime] = useState<boolean>(false);
  const [enablemeettime, setenablemeettime] = useState<boolean>(false);
  const [timings, setTimings] = useState<[string, string][][]>([]);
  const [availableStartTimes, setAvailableStartTimes] = useState<string[]>([]);
  const [availableEndTimes, setAvailableEndTimes] = useState<string[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const [coupon, setCoupon] = useState("");

  useEffect(() => {
    setCartTotal(
      bookings.reduce((total, booking) => total + booking.price, 0) +
        dayPasses.reduce((total, dayPass) => total + dayPass.price, 0)
    );
  }, [bookings, dayPasses]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  useEffect(() => {
    const updateCurrentTime = () => setCurrentTime(new Date());
    const interval = setInterval(updateCurrentTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

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
    if (selectedStartTime !== "") {
      selectendtimefunction(selectedStartTime);
    }
  }, [selectedStartTime]);

  useEffect(() => {
    if (selectedDay !== null) {
      changeday(selectedDay);
    }
  }, [selectedDay, timings, currentTime]);

  useEffect(() => {
    setSelectedDate("");
  }, [selectedLocation]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const headerStyle: React.CSSProperties = {
    marginBottom: "15px",
    fontSize: windowWidth > 390 ? "15px" : "14px",
    paddingTop: "10px",
    fontWeight: "bold",
    color: "#4B5563",
    fontFamily: "Poppins, sans-serif",
  };

  const timestyle: React.CSSProperties = {
    fontSize: windowWidth > 350 ? undefined : "13px",
    display: "flex",
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
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
    const updateCurrentTime = () => setCurrentTime(new Date());
    const interval = setInterval(updateCurrentTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

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

  return (
    <div className="font-sans min-h-screen bg-gray-50 relative min-w-full">
      <header className="bg-white shadow-md z-50 fixed w-full top-0">
        <Navbar />
      </header>

      <div className="container mx-auto px-4 sm:px-6 mt-8 flex flex-col lg:flex-row gap-8 pt-20">
        <div className="lg:w-3/5">
          <div className="w-full h-72 lg:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img
              src={locationDetails?.imgSrc}
              alt="Location"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="font-bold mt-4 text-gray-800 text-2xl">
            {locationDetails?.name}
          </h2>
          <p className="text-gray-600 mt-2 text-base lg:text-lg">
            603TheCoWorkingSpace, {locationDetails?.name}
          </p>

          <section className="mt-6">
            <h3 className=" font-bold mb-4 text-gray-800 text-xl md:text-xl lg:text-3xl ">
              About
            </h3>
            <p className="text-gray-700 leading-relaxed justify-start text-justify">
              {locationDetails?.about}
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Building Amenities
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <FaWifi className="text-xl" />
                </div>
                <p className="text-sm md:text-base text-gray-700 text-center">
                  High-Speed Internet
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <FaBriefcase className="text-xl" />
                </div>
                <p className="text-sm md:text-base text-gray-700 text-center">
                  Conference Rooms
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <FaCoffee className="text-xl" />
                </div>
                <p className="text-sm md:text-base text-gray-700 text-center">
                  Coffee Bar
                </p>
              </div>
            </div>
          </section>
        </div>

        {locationDetails?.enablebooking ? (
          <div className="lg:w-2/5 rounded-lg p-4 xl:p-6 shadow-xl h-auto">
            <h3 className="text-xl font-bold text-gray-800 flex items-center ">
              <FaCalendarAlt className="mr-2 text-yellow-500" /> Select your
              preference
            </h3>
            <div className="flex items-center justify-between mt-6">
              <div className="py-5">
                <p className="text-gray-700 font-semibold">Conference Rooms</p>
                <p className="text-2xl font-semibold text-yellow-500">
                  ₹{locationDetails?.conferenceroom}/Hr
                </p>
              </div>
              {!showcalenderconfroom && (
                <select
                  className="bg-gray-200 text-gray-700 px-2 py-2  rounded-md shadow-lg hover:cursor-pointer w-32 md:w-52"
                  onChange={(e) => {
                    setselectedLocation(e.target.value);
                    const selectedRoom = e.target.value;
                    setshowcalenderconfroom(true);
                    setshowcalenderdaypass(false);
                    setshowcalendermeetroom(false);
                    console.log("Selected Conference Room:", selectedRoom);
                  }}
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  {locationDetails?.conferencerooms?.map((room, index) => (
                    <option
                      key={index}
                      value={room}
                      onClick={() => {
                        setspacetype("conference");
                        setselectedLocation(room);
                      }}
                    >
                      {room}
                    </option>
                  ))}
                </select>
              )}
              {showcalenderconfroom && (
                <button
                  className=" text-red-600 px-4 py-2 bg-slate-200 rounded-md shadow-lg transition transform hover:bg-gray-300 hover:scale-105"
                  onClick={() => {
                    setshowcalenderconfroom(false);
                    setSelectedDate("");
                    setselectedLocation("");
                  }}
                >
                  Remove
                </button>
              )}
            </div>
            <div className={`h-auto`}>
              {showcalenderconfroom && (
                <>
                  <h1 style={headerStyle}>Select Date and Time:</h1>
                  <div style={calendarHeaderStyle}>
                    <button style={buttonStyle} onClick={() => changeMonth(-1)}>
                      {"<"}
                    </button>
                    <h2 style={timestyle}>{`${new Date(
                      currentYear,
                      currentMonth
                    ).toLocaleString("default", {
                      month: "long",
                    })} ${currentYear}`}</h2>
                    <button style={buttonStyle} onClick={() => changeMonth(1)}>
                      {">"}
                    </button>
                  </div>
                  <div style={calendarStyle}>
                    {Array.from(
                      { length: daysInMonth(currentMonth, currentYear) },
                      (_, index) => index + 1
                    ).map((day) => (
                      <div
                        key={day}
                        style={{
                          ...dayStyle,
                          ...(isPastDay(day)
                            ? pastDayStyle
                            : isWeekend(day, currentMonth, currentYear)
                            ? partiallyBookedStyle
                            : availableStyle1),
                          ...(selectedDay === day && selectedStyle),
                        }}
                        onClick={() => {
                          if (!isPastDay(day)) {
                            setSelectedDay(day);
                            setSelectedStartTime("");
                            setSelectedEndTime("");
                            setenableconftime(true);
                          }
                        }}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                  {showcalenderconfroom && enableconftime && (
                    <div className="px-5 pb-4">
                      <div style={inputContainerStyle}>
                        <label style={labelStyle}>Select Start Time:</label>
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
                        <label style={labelStyle}>Select End Time:</label>
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
                          {/* <div>
                              <input
                                type="text"
                                   value={coupon}
                                   onChange={(e) => setCoupon(e.target.value)}
                                 placeholder="Enter coupon code"
                                />
                               <button >Apply Coupon</button>
                          </div> */}
                          <button
                            className="bg-yellow-500 text-gray-100 px-4 py-2 rounded-md shadow-lg text-lg transition transform hover:bg-yellow-600 hover:scale-105 w-full mt-4"
                            onClick={() => {
                              setshowcalenderconfroom(false),
                                setshowcalenderdaypass(false);
                              setshowcalendermeetroom(false);
                              addNewBooking({
                                spaceName: selectedLocation,
                                startTime: selectedStartTime,
                                endTime: selectedEndTime,
                                date: selectedDate,
                                price:
                                  locationDetails?.conferenceroom *
                                  timedifference,
                              });
                            }}
                          >
                            Add{" "}
                            <span className="text-white font-extrabold">
                              ₹
                              {locationDetails?.conferenceroom * timedifference}
                            </span>
                          </button>
                          {/* <span className=" text-black-100 px-4 py-2  text-sm  w-full mt-4">
                            "Please note that an 18% GST will be applied to the
                            booking amount during the checkout process."
                          </span> */}
                        </>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="flex items-center justify-between border-t-2 border-gray-200">
              <div className="py-5">
                <p className="text-gray-700 font-semibold">Meetings Rooms</p>
                <p className="text-2xl font-semibold text-yellow-500">
                  ₹{locationDetails?.meetingroom}/Hr
                </p>
              </div>
              {!showcalendermeetroom && (
                <select
                  className="bg-gray-200 text-gray-700 px-2 py-2 rounded-md shadow-lg hover:cursor-pointer w-32 md:w-52"
                  onChange={(e) => {
                    setselectedLocation(e.target.value);
                    setshowcalenderconfroom(false);
                    setshowcalenderdaypass(false);
                    setshowcalendermeetroom(true);
                  }}
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  {locationDetails?.meetingrooms?.map((room, index) => (
                    <option
                      key={index}
                      value={room}
                      onClick={() => {
                        setspacetype("meeting");
                        setselectedLocation(room);
                      }}
                    >
                      {room}
                    </option>
                  ))}
                </select>
              )}
              {showcalendermeetroom && (
                <button
                  className=" text-red-600 px-4 py-2 bg-slate-200 rounded-md shadow-lg transition transform hover:bg-gray-300 hover:scale-105"
                  onClick={() => {
                    setshowcalendermeetroom(false);
                    setSelectedDate("");
                  }}
                >
                  Remove
                </button>
              )}
            </div>

            <div className={`h-auto`}>
              {showcalendermeetroom && (
                <>
                  <h1 style={headerStyle}>Select Date and Time:</h1>
                  <div style={calendarHeaderStyle}>
                    <button style={buttonStyle} onClick={() => changeMonth(-1)}>
                      {"<"}
                    </button>
                    <h2 style={timestyle}>{`${new Date(
                      currentYear,
                      currentMonth
                    ).toLocaleString("default", {
                      month: "long",
                    })} ${currentYear}`}</h2>
                    <button style={buttonStyle} onClick={() => changeMonth(1)}>
                      {">"}
                    </button>
                  </div>
                  <div style={calendarStyle}>
                    {Array.from(
                      { length: daysInMonth(currentMonth, currentYear) },
                      (_, index) => index + 1
                    ).map((day) => (
                      <div
                        key={day}
                        style={{
                          ...dayStyle,
                          ...(isPastDay(day)
                            ? pastDayStyle
                            : isWeekend(day, currentMonth, currentYear)
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
                  {showcalendermeetroom && enablemeettime && (
                    <div className="px-5 pb-4">
                      <div style={inputContainerStyle}>
                        <label style={labelStyle}>Select Start Time:</label>
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
                        <label style={labelStyle}>Select End Time:</label>
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
                              setshowcalenderconfroom(false),
                                setshowcalenderdaypass(false);
                              setshowcalendermeetroom(false);
                              addNewBooking({
                                spaceName: selectedLocation,
                                startTime: selectedStartTime,
                                endTime: selectedEndTime,
                                date: selectedDate,
                                price:
                                  locationDetails?.meetingroom * timedifference,
                              });
                            }}
                          >
                            Add{" "}
                            <span className="text-white font-extrabold">
                              ₹{locationDetails?.meetingroom * timedifference}
                            </span>
                          </button>
                          <span className=" text-black-100 px-4 py-2  text-sm  w-full mt-4">
                            "Please note that an 18% GST will be applied to the
                            booking amount during the checkout process."
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="flex items-center justify-between border-t-2 border-gray-200">
              <div className="py-5">
                <p className="text-gray-700 font-semibold">Day Pass</p>
                <p className="text-2xl font-semibold text-yellow-500">
                  ₹{locationDetails?.daypass}/Day
                </p>
              </div>
              {!showcalenderdaypass && (
                <select
                  className="bg-gray-200 text-gray-700 px-2 py-2 rounded-md shadow-lg hover:cursor-pointer w-32 md:w-52"
                  onChange={(e) => {
                    setselectedLocation(e.target.value);
                    setshowcalenderconfroom(false);
                    setshowcalenderdaypass(true);
                    setshowcalendermeetroom(false);
                    setspacetype("daypass");
                  }}
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  {locationDetails?.daypasses?.map((room, index) => (
                    <option key={index} value={room}>
                      {room}
                    </option>
                  ))}
                </select>
              )}
              {showcalenderdaypass && (
                <button
                  className="text-red-600 px-4 py-2 bg-slate-200 rounded-md shadow-lg transition transform hover:bg-gray-300 hover:scale-105"
                  onClick={() => {
                    setshowcalenderdaypass(false);
                    setSelectedDate("");
                    setselectedLocation("");
                  }}
                >
                  Remove
                </button>
              )}
            </div>
            <div className={`h-auto`}>
              {showcalenderdaypass && (
                <>
                  <h1 style={headerStyle}>Select Date:</h1>
                  <div style={calendarHeaderStyle}>
                    <button style={buttonStyle} onClick={() => changeMonth(-1)}>
                      {"<"}
                    </button>
                    <h2 style={timestyle}>{`${new Date(
                      currentYear,
                      currentMonth
                    ).toLocaleString("default", {
                      month: "long",
                    })} ${currentYear}`}</h2>
                    <button style={buttonStyle} onClick={() => changeMonth(1)}>
                      {">"}
                    </button>
                  </div>
                  <div style={calendarStyle}>
                    {Array.from(
                      { length: daysInMonth(currentMonth, currentYear) },
                      (_, index) => index + 1
                    ).map((day) => (
                      <div
                        key={day}
                        aria-disabled={
                          isPastDay(day) || !unavailabledaypasses.includes(day)
                        }
                        style={{
                          ...dayStyle,
                          ...(isPastDay(day) ||
                          unavailabledaypasses.includes(day)
                            ? pastDayStyle
                            : isWeekend(day, currentMonth, currentYear)
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
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex justify-center">
                    <input
                      type="text"
                      className="flex justify-center w-32 bg-yellow-200 px-3 py-2 rounded-md shadow-lg border-gray-200"
                      value={selectedDay ? selectedDate : "Select Date"}
                    />
                  </div>

                  {enabledaypasstime && (
                    <>
                      <button
                        className="bg-yellow-500 text-gray-100 px-4 py-2 rounded-md shadow-lg text-lg transition transform hover:bg-yellow-600 hover:scale-105 w-full mt-4"
                        onClick={() => {
                          bookDayPass({
                            price: locationDetails?.daypass,
                            spaceName: selectedLocation,
                            bookeddate: selectedDate,
                            day: selectedDay || 0,
                            month: currentMonth + 1,
                            year: currentYear,
                          });
                          setshowcalenderconfroom(false);
                          setshowcalenderdaypass(false);
                          setshowcalendermeetroom(false);
                          console.log(dayPasses);
                        }}
                      >
                        Add{" "}
                        <span className="text-white font-extrabold">
                          ₹{locationDetails?.daypass}
                        </span>
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
            <span className=" text-black-100 px-4 py-2  text-sm  w-full mt-4">
              <h3>Terms and conditions </h3>
              <ul className="list-disc">
                <li>
                  Refunds are only available for cancellations made within 30
                  minutes of booking, and the amount will be refunded within 24
                  hours of cancellation.
                </li>
                <li>kyc is compulsory before using the premises</li>
              </ul>
            </span>
          </div>
        ) : (
          <div className="lg:w-2/5 rounded-lg p-6 shadow-xl h-auto flex justify-center">
            <h1 className="text-red-600 text-base">
              Booking is currently unavailable.
            </h1>
          </div>
        )}
      </div>

      {/* Cart Section */}
      <div className="fixed bottom-0 left-0 w-full rounded-t-3xl bg-stone-700 shadow-2xl px-6 py-3 border-t border-gray-400 z-[50]">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-white text-base md:text-xl lg:text-lg flex items-center">
            <FaShoppingCart className="mr-2" /> Total: ₹{cartTotal}
          </p>
          <button
            onClick={() => navigate("/payment")}
            className="bg-yellow-500 text-white px-6 py-2 rounded-md shadow-lg transition transform hover:bg-yellow-600 hover:scale-105"
          >
            Proceed
          </button>
        </div>
      </div>

      {/* Address Section */}
      <div className="container mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg">
        <h4 className="text-2xl font-bold text-gray-800 mb-4">
          Office Location
        </h4>
        <p className="text-gray-700">
          <strong>Address:</strong> {locationDetails?.address}
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Contact:</strong> +91 91360 36603
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Email:</strong> sales@603thecoworkingspace.com
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16">
        <Footer />
      </footer>
    </div>
  );
};

export default ConfirmPayment;
