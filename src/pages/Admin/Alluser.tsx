import { useEffect, useState, useRef } from "react";
// import axios from "axios";
import AdminDashNavbar from "./AdminNavbar";
import CreateUserModal from "./createusermodal";
import EditUserModal from "./editusermodal";
import { useReactToPrint } from "react-to-print";
import { FaFilePdf } from "react-icons/fa";
import axiosInstance from "../../utils/axiosInstance";

interface User {
  _id: string;
  companyName: string;
  email: string;
  role: string;
  phone: string;
  creditsleft: number;
  monthlycredits: number;
  extracredits: number;
  kyc: boolean;
  location: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [usersPerPage, setUsersPerPage] = useState(7);

  const tableRef = useRef<HTMLDivElement>(null);

  // const PORT = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axiosInstance.get(`/api/v1/users`);
        // const response = await axios.get(`${PORT}/api/v1/users`, {
        //   withCredentials: true,
        // });
        setUsers(response.data.msg);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredUsers.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCreateUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    setIsCreateModalOpen(false);
  };

  const handleEditUser = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u._id === updatedUser._id ? updatedUser : u))
    );
    setIsEditModalOpen(false);
    setSelectedUser(null);
  };

  const handleOpenEditModal = (user: User) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const print = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: "User Management",
  });

  const handlePrint = () => {
    const originalUsersPerPage = usersPerPage;
    const originalCurrentPage = currentPage;
    setUsersPerPage(users.length);
    setCurrentPage(1);

    setTimeout(() => {
      print();
      setUsersPerPage(originalUsersPerPage);
      setCurrentPage(originalCurrentPage);
    }, 0);
  };

  return (
    <div className="w-screen bg-gradient-to-r from-blue-50 to-blue-100 overflow-x-hidden">
      <header className="bg-white shadow-lg z-50 relative">
        <AdminDashNavbar />
      </header>
      <div className="w-full flex justify-center bg-white shadow-2xl rounded-lg p-8 pt-24">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-extrabold text-gray-800">
              User Management
            </h2>
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
            >
              Create User
            </button>
            <button
              onClick={handlePrint}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            >
              Print <FaFilePdf size={20} />
            </button>
          </div>
          <div ref={tableRef} className="overflow-x-auto">
            <table className="w-full table-auto border-collapse text-left">
              <thead>
                <tr className="bg-blue-50 border-b-2 border-blue-200">
                  <th className="p-4 font-semibold text-gray-600">
                    Company Name
                  </th>
                  <th className="p-4 font-semibold text-gray-600">Email</th>
                  <th className="p-4 font-semibold text-gray-600">
                    Monthly Credits
                  </th>
                  <th className="p-4 font-semibold text-gray-600">
                    Credits Left
                  </th>
                  <th className="p-4 font-semibold text-gray-600">
                    Billed Credits
                  </th>
                  <th className="p-4 font-semibold text-gray-600">
                    KYC Status
                  </th>
                  <th className="p-4 font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50 transition">
                    <td className="py-4 px-6 border-b">{user.companyName}</td>
                    <td className="py-4 px-6 border-b">{user.email}</td>
                    <td className="py-4 px-6 border-b">
                      {user.monthlycredits}
                    </td>
                    <td className="py-4 px-6 border-b">{user.creditsleft}</td>
                    <td className="py-4 px-6 border-b">{user.extracredits}</td>
                    <td className="py-4 px-6 border-b">
                      <span
                        className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                          user.kyc
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.kyc ? "Verified" : "Pending"}
                      </span>
                    </td>
                    <td className="py-4 px-6 border-b">
                      <button
                        onClick={() => handleOpenEditModal(user)}
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
              disabled={
                currentPage === Math.ceil(filteredUsers.length / usersPerPage)
              }
              className={`px-6 py-3 rounded-lg shadow-md ${
                currentPage === Math.ceil(filteredUsers.length / usersPerPage)
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-500 transition duration-300"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <CreateUserModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateUser}
      />
      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={selectedUser}
        onUpdate={handleEditUser}
      />
    </div>
  );
};

export default UserManagement;
