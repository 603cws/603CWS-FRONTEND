import { useEffect, useState, useRef } from "react";
import axios from "axios";
import AdminDashNavbar from "./AdminNavbar";
import { CiSearch } from "react-icons/ci";
import { useReactToPrint } from "react-to-print";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './MyDatePicker.css';

interface Booking {
  _id: string;
  startTime: string;
  endTime: string;
  companyName: string;
  spaceName: string;
  date: string;
  status: string;
}

const AllBookings = () => {
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

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        "https://603-cws-backend.vercel.app/api/v1/bookings/admin/getallbookings",
        {
          withCredentials: true,
        }
      );
      setBookings(response.data.allbookings);
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

  // Filter bookings based on search query, selected workspace, and selected date
  const filteredBookings = bookings
    .filter((booking) => {
      return (
        (!searchQuery ||
          booking.companyName?.toLowerCase().includes(searchQuery.toLowerCase())) &&
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

  // Printing logic

  const print = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: "Bookings",
  });

  const handlePrint = () => {
    const originalBookingsPerPage = bookingsPerPage;
    setBookingsPerPage(filteredBookings.length); // Display all bookings
    setCurrentPage(1); // Go to the first page to display all bookings at once

    setTimeout(() => {
      print(); // Trigger the print functionality

      // Revert back to original settings after printing
      setBookingsPerPage(originalBookingsPerPage);
      setCurrentPage(1);
    }, 0);
  };

  const deletebooking = async (id: any) => {
    try {
      const resp = await axios.post("https://603-cws-backend.vercel.app/api/v1/bookings/admin/deletebooking", { id }, {
        withCredentials: true
      });
      console.log(resp);
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };
  
  
  
  return (
    <div className="w-screen bg-gradient-to-r from-blue-50 to-blue-100 overflow-x-hidden">
      <header className="bg-white shadow-lg z-50 relative">
        <AdminDashNavbar />
      </header>
      <div className="w-full flex justify-center bg-white shadow-2xl rounded-lg p-8 pt-24">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800">
            Booking Management
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
                  className="custom-datepicker" // Custom class for the input field
                  calendarClassName="custom-calendar" // Custom class for the calendar
                />

                {/* Cross Button */}
                {startDate && (
                  <button
                    onClick={() => {
                      setStartDate(null);
                      setFormattedDate("");
                    }}
                    className="absolute right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    &#x2715; {/* Unicode character for a cross symbol */}
                  </button>
                )}
              </div>


              <select
                value={selectedWorkspace}
                onChange={(e) => setSelectedWorkspace(e.target.value)}
                className="ml-4 px-3 py-2 rounded-lg bg-gray-200 text-gray-600"
              >
                <option value="">Select Workspace</option>
                <option value="Amore Conference Room">Amore Conference Room</option>
                <option value="Amore Meeting Room">Amore Meeting Room</option>
                <option value="Bandra Conference Room">Bandra Conference Room</option>
                <option value="Kamla Mills Conference Room">Kamla Mills Conference Room</option>
                <option value="Kamla Mills Meeting Room">Kamla Mills Meeting Room</option>
                <option value="Matulya Conference Room">Matulya Conference Room</option>
                <option value="Matulya Meeting Room">Matulya Meeting Room</option>
                <option value="Rupa Solitaire Conference Room">Rupa Solitaire Conference Room</option>
                <option value="Sunmill Conference Room">Sunmill Conference Room</option>
                <option value="Sunmill Meeting Room">Sunmill Meeting Room</option>
                <option value="Sunshine Conference Room">Sunshine Conference Room</option>
                <option value="Sunshine Meeting Room">Sunshine Meeting Room</option>
              </select>
              <button
                onClick={handlePrint}
                className="ml-4 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
              >
                Print PDF
              </button>
            </div>
          </div>
          <div ref={tableRef} className="overflow-x-auto print:bg-white print:p-0 print:shadow-none">
            <table className="w-full table-auto border-collapse text-left">
              <thead className="print:text-black">
                <tr className="bg-blue-50 border-b-2 border-blue-200">
                  <th className="p-4 font-semibold text-gray-600">Booking ID</th>
                  <th className="p-4 font-semibold text-gray-600">Company Name</th>
                  <th className="p-4 font-semibold text-gray-600">Workspace</th>
                  <th className="p-4 font-semibold text-gray-600">Booking Date</th>
                  <th className="p-4 font-semibold text-gray-600">Start Time</th>
                  <th className="p-4 font-semibold text-gray-600">End Time</th>
                  <th className="p-4 font-semibold text-gray-600">Status</th>
                  <th className="p-4 font-semibold text-gray-600">Cancel</th>
                </tr>
              </thead>
              <tbody className="print:text-black">
                {currentBookings.map((booking, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="py-4 px-6 border-b">{booking._id}</td>
                    <td className="py-4 px-6 border-b">{booking.companyName}</td>
                    <td className="py-4 px-6 border-b">{booking.spaceName}</td>
                    <td className="py-4 px-6 border-b">{booking.date}</td>
                    <td className="py-4 px-6 border-b">{booking.startTime}</td>
                    <td className="py-4 px-6 border-b">{booking.endTime}</td>
                    <td className="py-4 px-6 border-b">
                      <span
                        className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${booking.status === "Confirmed"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                          }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 border-b"><button className="bg-red-500 py-1 px-2 rounded-lg text-white shadow-2xl" onClick={()=>deletebooking(booking._id)}>Cancel</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-6 print:hidden">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-6 py-3 rounded-lg shadow-md ${currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-500 transition duration-300"
                }`}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={
                currentPage === Math.ceil(filteredBookings.length / bookingsPerPage)
              }
              className={`px-6 py-3 rounded-lg shadow-md ${currentPage ===
                Math.ceil(filteredBookings.length / bookingsPerPage)
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-500 transition duration-300"
                }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookings;
