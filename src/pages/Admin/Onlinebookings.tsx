import { useEffect, useState, useRef } from "react";
import axios from "axios";
import AdminDashNavbar from "./AdminNavbar";
import { CiSearch } from "react-icons/ci";
import { useReactToPrint } from "react-to-print";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./MyDatePicker.css";
import { FaFilePdf } from "react-icons/fa";

interface Booking {
  _id: string;
  user: string;
  startTime: string;
  endTime: string;
  companyName: string;
  spaceName: string;
  date: string;
  status: string;
  transactionAmount: number;
  billedcredits?: number; // Adding billedcredits here
}

const OnlineBookings = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedWorkspace, setSelectedWorkspace] = useState<string>("");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingsPerPage, setBookingsPerPage] = useState(7);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    if (startDate) {
      const day = startDate.getDate().toString();
      const month = (startDate.getMonth() + 1).toString();
      const year = startDate.getFullYear().toString();
      setFormattedDate(`${day}/${month}/${year}`);
      console.log(`${day}/${month}/${year}`);
    } else {
      setFormattedDate("");
    }
  }, [startDate]);

  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  console.log("hello from the online booking");

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        "https://603-bcakend-new.vercel.app/api/v1/bookings/admin/getonlinebookings",
        {
          withCredentials: true,
        }
      );
      console.log(response);
      setBookings(response.data.combinedBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredBookings.length / bookingsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filteredBookings = bookings
    .filter((booking) => {
      return (
        (!searchQuery ||
          booking.companyName
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase())) &&
        (!selectedWorkspace || booking.spaceName === selectedWorkspace) &&
        (!formattedDate || booking.date === formattedDate)
      );
    })
    .reduce((uniqueBookings, booking) => {
      if (!uniqueBookings.some((b) => b._id === booking._id)) {
        uniqueBookings.push(booking);
      }
      return uniqueBookings;
    }, [] as Booking[]);

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = filteredBookings.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  const print = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: "Bookings",
    onBeforePrint: () => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });
    },
  });

  const handlePrint = () => {
    const originalBookingsPerPage = bookingsPerPage;
    const originalCurrentPage = currentPage;

    // Temporarily set bookingsPerPage to include all filtered bookings
    setBookingsPerPage(filteredBookings.length);
    setCurrentPage(1);

    // Use setTimeout to wait for the rendering to complete
    setTimeout(() => {
      // Trigger the print
      print();

      // Restore the original state after printing
      setBookingsPerPage(originalBookingsPerPage);
      setCurrentPage(originalCurrentPage);
    }, 300); // Adjust the delay if needed
  };

  return (
    <div className="w-screen bg-gradient-to-r from-blue-50 to-blue-100 overflow-x-hidden">
      <header className="bg-white shadow-lg z-50 relative">
        <AdminDashNavbar />
      </header>
      <div className="w-full flex justify-center bg-white shadow-2xl rounded-lg p-8 pt-24">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800">
            Online Booking Management
          </h2>
          <div className="flex items-center justify-between my-6">
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center bg-gray-200 rounded-full px-2 py-1 text-gray-600">
                <input
                  type="text"
                  placeholder="Search Company..."
                  value={searchQuery}
                  className="outline-none px-1 font-normal bg-gray-200"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div>
                  <CiSearch />
                </div>
              </div>

              <div className="relative flex items-center">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="d/M/yyyy"
                  placeholderText="Select a date"
                  className="custom-datepicker"
                  calendarClassName="custom-calendar"
                />

                {startDate && (
                  <button
                    onClick={() => {
                      setStartDate(null);
                      setFormattedDate("");
                    }}
                    className="absolute right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    &#x2715;
                  </button>
                )}
              </div>

              <select
                value={selectedWorkspace}
                onChange={(e) => setSelectedWorkspace(e.target.value)}
                className="ml-4 px-3 py-2 rounded-lg bg-gray-200 text-gray-600"
              >
                <option value="">Please Select</option>
                <option value="">All</option>
                <option value="Amore Conference Room">
                  Amore Conference Room
                </option>
                <option value="Amore Day Pass">Amore Day Pass</option>
                <option value="Amore Meeting Room">Amore Meeting Room</option>
                <option value="Bandra Conference Room">
                  Bandra Conference Room
                </option>
                <option value="Bandra Meeting Room">Bandra Meeting Room</option>
                <option value="Bandra Day Pass">Bandra Day Pass</option>
                <option value="Kamala Mills Conference Room">
                  Kamala Mills Conference Room
                </option>
                <option value="Kamala Mills Meeting Room 1">
                  Kamala Mills Meeting Room 1
                </option>
                <option value="Kamala Mills Day Pass">
                  Kamala Mills Day Pass
                </option>
                {/* <option value="Kamala Mills Meeting Room 2">Kamala Mills Meeting Room 2</option>/ */}
                <option value="Matulya Conference Room">
                  Matulya Conference Room
                </option>
                <option value="Matulya Meeting Room">
                  Matulya Meeting Room
                </option>
                <option value="Matulya Day Pass">Matulya Day Pass</option>
                <option value="Rupa Solitaire Day Pass">
                  Rupa Solitaire Day Pass
                </option>
                <option value="Sunmill Conference Room">
                  Sunmill Conference Room
                </option>
                <option value="Sunmill Meeting Room">
                  Sunmill Meeting Room
                </option>
                <option value="Sunmill Day Pass">Sunmill Day Pass</option>
                <option value="Sunshine Conference Room">
                  Sunshine Conference Room
                </option>
                <option value="Sunshine Meeting Room">
                  Sunshine Meeting Room
                </option>
                <option value="Sunshine Day Pass">Sunshine Day Pass</option>
                <option value="Fort Conference Room">
                  Fort Conference Room
                </option>
                <option value="Fort Meeting Room">Fort Meeting Room</option>
                <option value="Fort Day Pass">Fort Day Pass</option>
                <option value="Trade Link Conference Room">
                  Trade Link Conference Room
                </option>
                <option value="Trade Link Meeting Room">
                  Trade Link Meeting Room
                </option>
                <option value="Trade Link Day Pass">Trade Link Day Pass</option>
              </select>
            </div>

            <div className="ml-4">
              <button
                onClick={handlePrint}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
              >
                Print <FaFilePdf size={20} />
              </button>
            </div>
          </div>

          <div ref={tableRef} className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-blue-100 font-bold uppercase text-gray-600 text-sm border-b">
                    User ID
                  </th>
                  <th className="py-4 px-6 bg-blue-100 font-bold uppercase text-gray-600 text-sm border-b">
                    Company
                  </th>
                  <th className="py-4 px-6 bg-blue-100 font-bold uppercase text-gray-600 text-sm border-b">
                    Space
                  </th>
                  <th className="py-4 px-6 bg-blue-100 font-bold uppercase text-gray-600 text-sm border-b">
                    price
                  </th>
                  <th className="py-4 px-6 bg-blue-100 font-bold uppercase text-gray-600 text-sm border-b">
                    Date
                  </th>
                  <th className="py-4 px-6 bg-blue-100 font-bold uppercase text-gray-600 text-sm border-b">
                    Start Time
                  </th>
                  <th className="py-4 px-6 bg-blue-100 font-bold uppercase text-gray-600 text-sm border-b">
                    End Time
                  </th>
                  {/* <th className="py-4 px-6 bg-blue-100 font-bold uppercase text-gray-600 text-sm border-b">
                    Actions
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {currentBookings.map((booking) => (
                  <tr key={booking._id}>
                    <td className="py-4 px-6 border-b">{booking.user}</td>
                    <td className="py-4 px-6 border-b">
                      {booking.companyName}
                    </td>
                    <td className="py-4 px-6 border-b">{booking.spaceName}</td>
                    <td className="py-4 px-6 border-b">
                      {booking.transactionAmount?.toFixed(2)}{" "}
                      {/* Display billed credits */}
                    </td>
                    <td className="py-4 px-6 border-b">{booking.date}</td>
                    <td className="py-4 px-6 border-b">{booking.startTime}</td>
                    <td className="py-4 px-6 border-b">{booking.endTime}</td>
                    {/* <td className="py-4 px-6 border-b">
                      <button
                        className="bg-red-500 py-1 px-2 rounded-lg text-white shadow-2xl"
                        onClick={() => {
                          setBookingToCancel(booking);
                          setIsModalOpen(true);
                        }}
                      >
                        Cancel
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={
                currentPage ===
                Math.ceil(filteredBookings.length / bookingsPerPage)
              }
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineBookings;
