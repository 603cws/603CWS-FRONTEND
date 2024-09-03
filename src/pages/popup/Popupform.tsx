import { useState, useEffect } from "react";
import "./popupanimation.css";
import axios from "axios";
import { useApp } from "../../context/AuthContext";

interface PopupformProps {
    val: boolean;
    setpopup: (state: boolean) => void;
}

const Popupform: React.FC<PopupformProps> = ({ val, setpopup }) => {
    const { setloading } = useApp();
    const PORT = "https://603-bcakend-new.vercel.app";
    
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    useEffect(() => {
        if (val) {
            setIsAnimating(true); // Start the animation when val is true
        }
    }, [val]);

    const hidePopup = () => {
        localStorage.removeItem("callback");
        setIsAnimating(false); // Start fade-out animation
        setTimeout(() => setpopup(false), 500); // Close popup after animation
    };

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        requirements: ''
    });

    const isDisabled = !formData.name || !formData.phone || !formData.email || !formData.company || !formData.requirements;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        setloading(true);
        e.preventDefault();
        hidePopup();
        localStorage.setItem("callback", "true");
        const res = await axios.post(`${PORT}/api/v1/users/sendcallback`, formData, { withCredentials: true });
        console.log(res);
        setloading(false);
        console.log('Form data:', formData);
    };

    return (
        <>
            {val && (
                <div className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-60 popup-overlay ${isAnimating ? 'fade-in' : 'fade-out'}`}>
                    <div className={`bg-white p-8 rounded-lg shadow-xl transform transition-transform duration-500 max-w-lg w-full popup-content ${isAnimating ? 'slide-in' : 'slide-out'}`}>
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 font-bold text-xl"
                            onClick={hidePopup}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold mb-5 text-gray-800">Specifications</h2>
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1 text-sm" htmlFor="name">Name*</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300" type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1 text-sm" htmlFor="phone">Phone*</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300" type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1 text-sm" htmlFor="email">Email*</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1 text-sm" htmlFor="company">Company</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300" type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1 text-sm" htmlFor="requirements">Requirements*</label>
                                <select
                                    id="requirements"
                                    name="requirements"
                                    value={formData.requirements}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 text-sm"
                                    required
                                >
                                    <option value="">Select an option</option>
                                    <option value="day pass">Day Pass</option>
                                    <option value="hot desk">Hot Desk</option>
                                    <option value="dedicated desk">Dedicated Desk</option>
                                    <option value="cabin space">Cabin Space</option>
                                    <option value="managed office solution">Managed Office Solution</option>
                                    <option value="conference room">Conference Room</option>
                                    <option value="meeting room">Meeting Room</option>
                                </select>
                            </div>
                            <div className="text-center">
                                <button
                                    className={`font-bold py-2 px-6 rounded-lg transition duration-300 ${isDisabled
                                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                        : 'bg-yellow-500 text-white hover:bg-yellow-600 cursor-pointer'
                                        }`}
                                    type="submit"
                                    disabled={isDisabled}
                                >
                                    Send
                                </button>
                                <button
                                    className="bg-gray-300 text-gray-700 font-bold py-2 px-6 rounded-lg ml-3 hover:bg-gray-400 transition duration-300"
                                    type="reset"
                                    onClick={() => setFormData({
                                        name: '',
                                        phone: '',
                                        email: '',
                                        company: '',
                                        requirements: ''
                                    })}
                                >
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popupform;
