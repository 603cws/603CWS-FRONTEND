// Define the User interface
import axios from "axios";
import "./popup.css"
import toast from "react-hot-toast";

interface User {
    _id : string;
    companyName: string;
    email: string;
    role: string;
    creditsleft: number;
    monthlycredits: number;
    extracredits: number;
    phone : string;
    kyc: boolean;
    location : string
}

// The rest of your CreateUserModal component code remains the same
import React, { useState } from "react";

interface CreateUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (user: User) => void; // Ensure this matches the User type
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({
    isOpen,
    onClose,
}) => {
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("user");
    const [monthlycredits, setMonthlyCredits] = useState(0);
    const [username, setusername] = useState("");
    const [location, setlocation] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://603-bcakend-new.vercel.app/api/v1/users/",
                { companyName, email, role, monthlycredits, username, location, password },
                { withCredentials: true }
            );

            console.log(response);
            if (response.data.msg === "User created") {
                toast.success(response.data.msg);
            } else {
                toast.error(response.data.msg);
            }
            onClose();
        } catch (error) {
            toast.error("An error occurred");
            console.error("Error creating user:", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? 'fade-in' : 'fade-out'
                } z-50`}
        >
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Create User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Company Name</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Location</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={location}
                            onChange={(e) => setlocation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Role</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Monthly Credits</label>
                        <input
                            type="number"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={monthlycredits}
                            onChange={(e) => setMonthlyCredits(Number(e.target.value))}
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateUserModal;
