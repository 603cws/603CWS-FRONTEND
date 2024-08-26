import { useEffect, useState } from "react";
import axios from "axios";
import AdminDashNavbar from "./AdminNavbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

interface User {
  city: string;
  companyName: string;
  country: string;
  createdAt: string;
  creditsleft: number;
  email: string;
  extracredits: number;
  kyc: boolean;
  location: string;
  monthlycredits: number;
  password: string;
  phone: string;
  role: string;
  state: string;
  username: string;
  zipcode: string;
  _id: string;
}

function AdminDashboard() {
  const [pendingKyc, setPendingKyc] = useState(0);
  const [totalWorkspaces, setTotalWorkspaces] = useState(0);
  const [verifiedUsers, setVerifiedUsers] = useState(0);
  const [users, setUsers] = useState<User[]>([]);
  const [userSignupsData, setUserSignupsData] = useState([]);
  const [workspaceBookingsData, setWorkspaceBookingsData] = useState([]);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get(
        "https://603-cws-backend.vercel.app/api/v1/users/details/dashboard",
        {
          withCredentials: true,
        }
      );
      const data = response.data;
      console.log(response);
      if (data.msg === "details") {
        setVerifiedUsers(data.verifiedusers);
        setPendingKyc(data.pendingkyc);
        setTotalWorkspaces(data.totalworkspaces);
        setUsers(response.data.totalUsers);
        setUserSignupsData(data.userSignups);
        setWorkspaceBookingsData(data.workspaceBookings);
      }
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const bookings = [
    { workspace: "Workspace A", bookedBy: "John Doe", bookingDate: "2023-06-20" },
    { workspace: "Workspace B", bookedBy: "Jane Smith", bookingDate: "2023-06-18" },
    { workspace: "Workspace C", bookedBy: "Bob Johnson", bookingDate: "2023-06-15" },
    { workspace: "Workspace D", bookedBy: "Alice Williams", bookingDate: "2023-06-12" },
    { workspace: "Workspace E", bookedBy: "Tom Davis", bookingDate: "2023-06-10" },
  ];

  return (
    <div className="h-screen w-screen">
      <AdminDashNavbar />
      <div className="w-full">
        <div className="p-6 bg-gray-100 min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="p-4 bg-white shadow rounded-lg flex flex-col justify-center">
              <h2 className="text-xl font-semibold">Total Users</h2>
              <p className="text-3xl font-bold text-slate-400">{users.length}</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg flex flex-col justify-center">
              <h2 className="text-xl font-semibold">Verified Users</h2>
              <p className="text-3xl font-bold text-slate-400">{verifiedUsers}</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg flex flex-col justify-center">
              <h2 className="text-xl font-semibold">Total Workspaces</h2>
              <p className="text-3xl font-bold text-slate-400">{totalWorkspaces}</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg flex flex-col justify-center">
              <h2 className="text-xl font-semibold">Pending KYC Requests</h2>
              <p className="text-3xl font-bold text-slate-400">{pendingKyc}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Recent User Signups</h2>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Name</th>
                    <th className="text-left">Email</th>
                    <th className="text-left">Signup Date</th>
                  </tr>
                </thead>
              </table>
              {/* Add a line chart for user signups */}
              <ResponsiveContainer width="100%" height={200}>
                <LineChart
                  data={userSignupsData}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <XAxis dataKey="date" />
                  <YAxis />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="count" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Recent Workspace Bookings</h2>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Workspace</th>
                    <th className="text-left">Booked By</th>
                    <th className="text-left">Booking Date</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => (
                    <tr key={index}>
                      <td className="py-2">{booking.workspace}</td>
                      <td>{booking.bookedBy}</td>
                      <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Add a bar chart for workspace bookings */}
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
                  data={workspaceBookingsData}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <XAxis dataKey="workspace" />
                  <YAxis />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="bookings" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
