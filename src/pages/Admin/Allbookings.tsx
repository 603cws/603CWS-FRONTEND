import { useEffect, useState } from "react";
import axios from "axios";
import AdminDashNavbar from "./AdminNavbar";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 7;

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/bookings/admin/getallbookings", {
        withCredentials: true,
      });
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


  // Search and filter logic
  const filteredBookings = bookings
    .filter((booking) =>
      booking.companyName?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .reduce((uniqueBookings, booking) => {
      if (!uniqueBookings.some((b) => b._id === booking._id)) {
        uniqueBookings.push(booking);
      }
      return uniqueBookings;
    }, [] as Booking[]);

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);

  return (
    <div className="w-screen bg-gradient-to-r from-blue-50 to-blue-100 overflow-x-hidden">
      <header className="bg-white shadow-lg z-50 relative">
        <AdminDashNavbar />
      </header>
      <div className="w-full flex justify-center bg-white shadow-2xl rounded-lg p-8 pt-24">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-extrabold text-gray-800">Booking Management</h2>
            <div className="flex items-center bg-gray-200 rounded-full px-2 py-1 text-gray-600">
              <input
                type="text"
                placeholder="Search Company..."
                value={searchQuery}
                className="outline-none px-1 font-normal bg-gray-200"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div
                className="cursor-pointer"
                onClick={() => navigate(`/admin/userinfo/${searchQuery}`)}
              >
                <CiSearch />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse text-left">
              <thead>
                <tr className="bg-blue-50 border-b-2 border-blue-200">
                  <th className="p-4 font-semibold text-gray-600">Booking ID</th>
                  <th className="p-4 font-semibold text-gray-600">Company Name</th>
                  <th className="p-4 font-semibold text-gray-600">Workspace</th>
                  <th className="p-4 font-semibold text-gray-600">Booking Date</th>
                  <th className="p-4 font-semibold text-gray-600">Start Time</th>
                  <th className="p-4 font-semibold text-gray-600">End Time</th>
                  <th className="p-4 font-semibold text-gray-600">Status</th>
                  <th className="p-4 font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
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
                        className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 border-b">
                      <button
                        className="py-1 px-4 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-6 py-3 rounded-lg shadow-md ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-500 transition duration-300"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(filteredBookings.length / bookingsPerPage)}
              className={`px-6 py-3 rounded-lg shadow-md ${
                currentPage === Math.ceil(filteredBookings.length / bookingsPerPage)
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
