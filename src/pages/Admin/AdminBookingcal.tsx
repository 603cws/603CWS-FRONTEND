import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdClose } from "react-icons/md";
import AnimationComponent from "../../components/Gif/Gif";
import AnimationComponentSorry from "../../components/Gif/SorryGif";
import AnimationComponentAsk from "../../components/Gif/Askconfirm";
import { useApp } from "../../context/AuthContext";
import toast from "react-hot-toast";

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

interface CalendarProps {
  value: {
    key: string;
    selectedLocation: string;
    spacetype: string;
  };
}

const AdminCalendar: React.FC<CalendarProps> = ({ value }) => {
  const { setloading } = useApp();
  const [darkMode] = useState<boolean>(false);
  const { selectedLocation, spacetype } = value;
  const [selectedStartTime, setSelectedStartTime] = useState<string>("");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("");
  const [companyName, setcompanyName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [credits, setcredits] = useState<number>(0);
  const [creditsleft, setcreditsleft] = useState<number>(0);
  const [creditstobespent, setcreditstobespent] = useState<number>(0);
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  const [notenoughcredits, setnotenoughcredits] = useState<boolean>(false);
  const [confirm, setconfirm] = useState<boolean>(false);
  const [timings, setTimings] = useState<[string, string][][]>([]);
  const [availableStartTimes, setAvailableStartTimes] = useState<string[]>([]);
  const [availableEndTimes, setAvailableEndTimes] = useState<string[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
    padding: windowWidth > 650 ? "2rem 2rem 4rem 2rem" : "2rem 0 4rem 0",
    backgroundColor: "#f9fafb",
  };

  const calendarHeaderStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: windowWidth > 560 ? "0 2rem" : "0 0.5rem",
  };

  const calendarStyle: React.CSSProperties = {
    justifyContent: "center",
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: windowWidth > 390 ? "10px" : "6px",
    margin: "20px 0",
  };

  const dayStyle: React.CSSProperties = {
    width: windowWidth > 582 ? "70px" : windowWidth > 440 ? "50px" : "40px",
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

  const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: "20px",
  };

  const inputContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    margin: "10px 0",
  };

  const inputStyle: React.CSSProperties = {
    padding: "10px",
    fontSize: "16px",
    width: "80%",
    borderRadius: "8px",
    border: "1px solid #d1d5db", // gray-300
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginTop: "5px",
  };

  const labelStyle: React.CSSProperties = {
    width: "80%",
    color: "#4B5563", // gray-700
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif",
    textAlign: "left",
    marginTop: "10px",
  };

  const legendStyle: React.CSSProperties = {
    display: "flex",
    gap: "45px",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px 0px",
  };

  const legendStyle1: React.CSSProperties = {
    display: "flex",
    gap: "45px",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px 0px 0px 0",
  };

  const legendItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
  };

  const legendColorBoxStyle: React.CSSProperties = {
    width: windowWidth > 470 ? "30px" : "25px",
    height: windowWidth > 470 ? "30px" : "25px",
    marginRight: "5px",
    border: "0.5px solid gray",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#e1e1e1",
    padding: windowWidth > 580 ? "10px 25px" : "7px 16px",
    borderRadius: windowWidth > 580 ? "7px" : "80%",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "Poppins, sans-serif",
    fontSize: "20px",
    marginTop: "30px",
    cursor: "pointer",
  };

  const sendbuttonStyle: React.CSSProperties = {
    backgroundColor: "#e8a700",
    padding: "10px 25px",
    borderRadius: "7px",
    border: "1px solid gray",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    fontFamily: "Poppins, sans-serif",
    fontSize: "20px",
    marginTop: "30px",
    cursor: "pointer",
  };

  const disabledButtonStyle: React.CSSProperties = {
    padding: "10px 25px",
    borderRadius: "7px",
    fontFamily: "Poppins, sans-serif",
    fontSize: "20px",
    marginTop: "30px",
    backgroundColor: "#e0e0e0",
    cursor: "not-allowed",
    color: "#9e9e9e",
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: "15px",
    fontSize: windowWidth > 390 ? "30px" : "20px",
    fontWeight: "bold",
    color: "#4B5563",
    fontFamily: "Poppins, sans-serif",
  };

  const timestyle: React.CSSProperties = {
    fontSize: windowWidth > 350 ? undefined : "13px",
  };

  const daytypestyle: React.CSSProperties = {
    fontSize: windowWidth > 470 ? undefined : "13px",
  };

  //set user email
  const handlemailChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handleConfirm = async () => {
    try {
      const response = await axios.post(
        `${PORT}/api/v1/users/getUserByAdmin`,
        { email },
        {
          withCredentials: true,
        }
      );
      setloading(false);
      console.log(response);
      const userdata = response.data;
      setPhone(userdata.phone);
      setcreditsleft(userdata.creditsleft);
      setconfirm(true);
    } catch (error) {
      console.error(error);
      toast.error("Inavalid Email");
    }
  };

  const fetchLocationBookings = async (date: string) => {
    try {
      const response = await axios.post(
        `${PORT}/api/v1/bookings/getlocationbookings`,
        { selectedDate: date, selectedLocation },
        {
          withCredentials: true,
        }
      );
      setloading(false);
      setTimings(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setcreditstobespent(
      spacetype === "meeting" ? 0.5 : spacetype === "conference" ? 1 : 0
    );
  }, [spacetype]);

  useEffect(() => {
    const updateCurrentTime = () => setCurrentTime(new Date());
    const interval = setInterval(updateCurrentTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedDay !== null) {
      const date = `${selectedDay}/${currentMonth + 1}/${currentYear}`;
      setSelectedDate(date);
      fetchLocationBookings(date);
    }
  }, [selectedDay, currentMonth, currentYear]);

  useEffect(() => {
    if (selectedStartTime && selectedEndTime) {
      const startMinutes = getTimeInMinutes(selectedStartTime);
      const endMinutes = getTimeInMinutes(selectedEndTime);
      const difference = (endMinutes - startMinutes) / 60;
      setcredits(difference * creditstobespent);
    } else {
      setcredits(0);
    }
  }, [selectedStartTime, selectedEndTime]);

  const changeday = (day: number) => {
    setSelectedStartTime("");
    setSelectedEndTime("");

    let availableStartTimesUnfiltered = getFilteredTimes(day, currentTime);
    // console.log("Initial available times:", availableStartTimesUnfiltered);

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
    // console.log("Filtered start times:", availableStartTimesUnfiltered);
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
        // console.log(y, "rjojro");
        endTimes.push(times2[y + 1]);
        break;
      }
    }

    setAvailableEndTimes(endTimes);
    // console.log("Filtered end times:", endTimes);
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

  const theme = getTheme(darkMode);

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

  const setupInterval = () => {
    return setInterval(() => {
      window.location.reload();
    }, 3000);
  };

  //enough credit
  const handleSubmit = async () => {
    setconfirm(false);
    if (Math.ceil(Number(credits.toFixed(2))) <= creditsleft) {
      setProfileOpen(true);
      const appointmentDetails = {
        location: selectedLocation,
        companyName,
        email,
        phone,
        date: selectedDate,
        startTime: selectedStartTime,
        endTime: selectedEndTime,
      };
      try {
        await axios.post(
          `${PORT}/api/v1/bookings/`,
          {
            appointmentDetails,
            credits: Math.ceil(Number(credits.toFixed(2))),
          },
          {
            withCredentials: true,
          }
        );
        toast.success("Booking created successfully!");
        setupInterval();
      } catch (error) {
        console.error("Error creating booking:", error);
        toast.error("Failed to create booking. Please try again.");
      }
    } else {
      setnotenoughcredits(true);
    }
  };

  //not enough coin
  const handleSubmit2 = async () => {
    setnotenoughcredits(false);
    const appointmentDetails = {
      location: selectedLocation,
      companyName,
      email,
      phone,
      date: selectedDate,
      startTime: selectedStartTime,
      endTime: selectedEndTime,
    };
    try {
      await axios.post(
        `${PORT}/api/v1/bookings/`,
        {
          appointmentDetails,
          credits: Math.ceil(Number(credits.toFixed(2))),
        },
        {
          withCredentials: true,
        }
      );
      setProfileOpen(true);
      toast.success("Booking created successfully!");
      setupInterval();
    } catch (error) {
      console.error("Error creating booking:", error);
      toast.error("Failed to create booking. Please try again.");
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Select Date and Time</h1>

      <div style={calendarHeaderStyle}>
        <button style={buttonStyle} onClick={() => changeMonth(-1)}>
          {"<"}
        </button>
        <h2 style={timestyle}>{`${new Date(
          currentYear,
          currentMonth
        ).toLocaleString("default", { month: "long" })} ${currentYear}`}</h2>
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
              }
            }}
          >
            {day}
          </div>
        ))}
      </div>
      {windowWidth > 684 && (
        <>
          <div style={legendStyle}>
            <div style={legendItemStyle}>
              <div style={{ ...legendColorBoxStyle, ...availableStyle1 }}></div>
              <span>Available</span>
            </div>
            <div style={legendItemStyle}>
              <div style={{ ...legendColorBoxStyle, ...selectedStyle }}></div>
              <span>Selected</span>
            </div>
            <div style={legendItemStyle}>
              <div
                style={{ ...legendColorBoxStyle, ...partiallyBookedStyle }}
              ></div>
              <span>Weekends</span>
            </div>
            <div style={legendItemStyle}>
              <div style={{ ...legendColorBoxStyle, ...pastDayStyle }}></div>
              <span>Past Days</span>
            </div>
          </div>
        </>
      )}

      {windowWidth <= 684 && (
        <>
          <div style={legendStyle1}>
            <div style={legendItemStyle}>
              <div style={{ ...legendColorBoxStyle, ...availableStyle1 }}></div>
              <span style={daytypestyle}>Available</span>
            </div>
            <div style={legendItemStyle}>
              <div style={{ ...legendColorBoxStyle, ...selectedStyle }}></div>
              <span style={daytypestyle}>Selected</span>
            </div>
          </div>
          <div style={legendStyle}>
            <div style={legendItemStyle}>
              <div
                style={{ ...legendColorBoxStyle, ...partiallyBookedStyle }}
              ></div>
              <span style={daytypestyle}>Weekends</span>
            </div>
            <div style={legendItemStyle}>
              <div style={{ ...legendColorBoxStyle, ...pastDayStyle }}></div>
              <span style={daytypestyle}>Past Days</span>
            </div>
          </div>
        </>
      )}

      <form style={formStyle}>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Selected Location/Venue:</label>
          <input
            type="text"
            value={selectedLocation}
            style={{
              ...inputStyle,
              cursor: "not-allowed",
              backgroundColor: "#f0f0f0",
            }}
            readOnly
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Selected Date:</label>
          <input
            type="text"
            value={selectedDate}
            style={{
              ...inputStyle,
              cursor: "not-allowed",
              backgroundColor: "#f0f0f0",
            }}
            readOnly
          />
        </div>
        {selectedDate != "" && (
          <>
            <div style={inputContainerStyle}>
              <label style={labelStyle}>Company Name:</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setcompanyName(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div style={inputContainerStyle}>
              <label style={labelStyle}>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handlemailChange}
                style={{
                  ...inputStyle,
                  // backgroundColor: "#f0f0f0",
                }}
              />
            </div>
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
            <div style={{ marginTop: "40px", fontSize: "20px" }}>
              <h4>Total Credits: {Math.ceil(Number(credits.toFixed(2)))}</h4>
            </div>
            <button
              type="button"
              onClick={handleConfirm}
              style={
                selectedStartTime &&
                selectedEndTime &&
                companyName &&
                email &&
                selectedDay
                  ? sendbuttonStyle
                  : disabledButtonStyle
              }
              disabled={
                !(
                  selectedStartTime &&
                  selectedEndTime &&
                  companyName &&
                  email &&
                  selectedDay
                )
              }
            >
              Book Now
            </button>
          </>
        )}
      </form>
      {profileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            animation: "fadeIn 0.5s ease",
          }}
        >
          <div
            style={{
              backgroundColor: theme.background.default,
              color: theme.text.primary,
              padding: "24px",
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              width: "400px",
              maxHeight: "80%",
              overflowY: "auto",
              animation: "slideIn 0.5s ease",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AnimationComponent />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
                borderBottom: `1px solid gray`,
                paddingTop: "24px",
                paddingBottom: "2px",
              }}
            >
              <h4
                style={{
                  marginTop: 30,
                  flexGrow: 1,
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <b>Booking confirmed successfully!</b>
              </h4>
            </div>
            <p
              style={{
                textAlign: "center",
                marginBottom: "30px",
                paddingTop: "20px",
              }}
            >
              Kindly check your inbox for comprehensive details regarding your
              booking.
            </p>
          </div>
        </div>
      )}
      {notenoughcredits && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            animation: "fadeIn 0.5s ease",
          }}
        >
          <div
            style={{
              backgroundColor: theme.background.default,
              color: theme.text.primary,
              padding: "24px",
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              width: "400px",
              maxHeight: "80%",
              overflowY: "auto",
              animation: "slideIn 0.5s ease",
              position: "relative", // Added to ensure close button aligns properly
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AnimationComponentSorry />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `1px solid gray`,
                paddingTop: "24px",
                paddingBottom: "2px",
              }}
            >
              <h4
                style={{ flexGrow: 1, textAlign: "center", fontSize: "20px" }}
              >
                <b>Not Enough Credits! for user {email}</b>
              </h4>
              <MdClose
                onClick={() => {
                  setnotenoughcredits(false);
                }}
                style={{
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  position: "absolute",
                  right: "16px",
                  top: "16px",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.2)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
            <p
              style={{
                textAlign: "center",
                marginBottom: "30px",
                paddingTop: "20px",
              }}
            >
              As the duration of your stay exceeds the allocated credits, any
              additional hours for the booked room will be reflected in your
              total bill.
            </p>
            <p
              style={{
                textAlign: "center",
                marginBottom: "30px",
                paddingTop: "20px",
              }}
            >
              Do you really want to confirm the booking?
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                paddingTop: "20px",
              }}
            >
              <button
                onClick={handleSubmit2}
                style={{
                  backgroundColor: "#2b901f",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                Proceed
              </button>
              <button
                onClick={() => {
                  setnotenoughcredits(false);
                }}
                style={{
                  backgroundColor: "#900000",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {confirm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            animation: "fadeIn 0.5s ease",
          }}
        >
          <div
            style={{
              backgroundColor: theme.background.default,
              color: theme.text.primary,
              padding: "24px",
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              width: "400px",
              maxHeight: "80%",
              overflowY: "auto",
              animation: "slideIn 0.5s ease",
              position: "relative", // Ensures close button aligns properly
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AnimationComponentAsk />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `1px solid gray`,
                paddingTop: "24px",
                paddingBottom: "2px",
              }}
            >
              <h4
                style={{ flexGrow: 1, textAlign: "center", fontSize: "20px" }}
              >
                <b>Confirm Booking</b>
              </h4>
              <MdClose
                onClick={() => {
                  setconfirm(false);
                }}
                style={{
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  position: "absolute",
                  right: "16px",
                  top: "16px",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.2)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
            <p
              style={{
                textAlign: "center",
                marginBottom: "30px",
                paddingTop: "20px",
              }}
            >
              Do you really want to confirm the booking?
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                paddingTop: "20px",
              }}
            >
              <button
                onClick={handleSubmit}
                style={{
                  backgroundColor: "#2b901f",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                Proceed
              </button>
              <button
                onClick={() => {
                  setconfirm(false);
                }}
                style={{
                  backgroundColor: "#900000",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCalendar;
