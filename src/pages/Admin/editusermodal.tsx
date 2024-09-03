import React, { useState, useEffect } from "react";
import "./popup.css"
import axios from "axios";
import toast from "react-hot-toast";

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

interface EditUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: User | null;
    onUpdate: (user: User) => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({
    isOpen,
    onClose,
    user,
}) => {
    const [id, setid] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [location, setlocation] = useState("");
    const [kyc, setkyc] = useState(false);
    const [phone, setphone] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [monthlycredits, setMonthlyCredits] = useState(0);
    const [extracredits, setextracredits] = useState(0);
    const [creditsleft, setcreditsleft] = useState(0);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    useEffect(() => {
        if (user) {
            setid(user._id);
            setCompanyName(user.companyName);
            setEmail(user.email);
            setRole(user.role);
            setMonthlyCredits(user.monthlycredits);
            setphone(user.phone);
            setkyc(user.kyc);
            setcreditsleft(user.creditsleft);
            setlocation(user.location);
        }
    }, [user]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.post("https://603-bcakend-new.vercel.app/api/v1/users/admin/updateuser", { companyName, location, kyc, phone, email, role, monthlycredits, extracredits, creditsleft, id }, { withCredentials: true });
        console.log(response);
        if (response.data.msg === "User updated") {
            toast.success(response.data.msg);
        } else {
            toast.error(response.data.msg);
        }
        onClose();
    };

    const handleConfirmDelete = async () => {
        const response = await axios.post("https://603-bcakend-new.vercel.app/api/v1/users/admin/deleteuser", { id }, { withCredentials: true });
        console.log(response);
        if (response.data.msg === "User deleted") {
            toast.success(response.data.msg);
        } else {
            toast.error(response.data.msg);
        }
        setIsConfirmModalOpen(false);
        onClose();
    };

    const ConfirmDeleteModal: React.FC<{ onConfirm: () => void; onCancel: () => void }> = ({ onConfirm, onCancel }) => (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
                <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
                <p className="mb-4">Are you sure you want to delete this account?</p>
                <div className="flex justify-end">
                    <button
                        onClick={onCancel}
                        className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );


    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? 'fade-in' : 'fade-out'} z-50`}>
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md max-h-[80vh] overflow-auto">
                <h2 className="text-2xl font-bold mb-4">Edit User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">User ID</label>
                        <input
                            type="text"
                            className="w-full p-2 border text-gray-400 border-gray-200 rounded mt-1"
                            value={id}
                            onChange={(e) => setid(e.target.value)}
                            required
                            readOnly
                        />
                    </div>
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
                        <label className="block text-gray-700">Phone</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
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
                        <label className="block text-gray-700">Kyc</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={kyc.toString()}
                            onChange={(e) => setkyc(e.target.value === "true")}
                            required
                        >
                            <option value="true">True</option>
                            <option value="false">False</option>
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
                    <div className="mb-4">
                        <label className="block text-gray-700">Credits Left</label>
                        <input
                            type="number"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={creditsleft}
                            onChange={(e) => setcreditsleft(Number(e.target.value))}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Extra Credits</label>
                        <input
                            type="number"
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={extracredits}
                            onChange={(e) => setextracredits(Number(e.target.value))}
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                            onClick={() => setIsConfirmModalOpen(true)}
                        >
                            Delete Account
                        </button>
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
                            Update
                        </button>
                    </div>
                </form>
                {isConfirmModalOpen && (
                    <ConfirmDeleteModal
                        onConfirm={handleConfirmDelete}
                        onCancel={() => setIsConfirmModalOpen(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default EditUserModal;

