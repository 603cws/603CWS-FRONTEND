import { useState } from 'react';
import axios from 'axios';
import { useApp } from '../../context/AuthContext';
import Popup from './popup';

const ContactUs = () => {
    const { setloading } = useApp();
    const PORT = "https://603-bcakend-new.vercel.app";
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        message: '',
    });
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setloading(true);
            setIsPopupVisible(true);
            const resp = await axios.post(`${PORT}/api/v1/services/sendpartnershipemail`, formData, { withCredentials: true });
            setloading(false);
            console.log(resp);
            console.log(formData);
            setFormData({
                name: '',
                phone: '',
                email: '',
                company: '',
                message: '',
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const isDisabled = !formData.name || !formData.phone || !formData.email || !formData.company || !formData.message;

    return (
        <div className="bg-white w-full max-w-2xl mx-auto p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">Contact Form</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name*</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">Phone*</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email*</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
               
                <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="company">Company*</label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                
                <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="specifications">Message</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                        id="specifications"
                        name="specifications"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        className={`font-bold py-2 px-6 rounded-lg transition duration-300 ${isDisabled
                            ? 'bg-gray-300 text-gray-400 cursor-not-allowed'
                            : 'bg-yellow-500 text-white hover:bg-yellow-600'
                            }`}
                        type="submit"
                        disabled={isDisabled}
                    >
                        Send
                    </button>
                    <button
                        className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg ml-4 hover:bg-gray-400 transition duration-300"
                        type="reset"
                        onClick={() => setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            company: '',
                            message: ''
                        })}
                    >
                        Reset
                    </button>
                </div>
            </form>

            {/* Show Popup */}
            {isPopupVisible && (
                <Popup 
                    message="Sent successfully" 
                    onClose={() => setIsPopupVisible(false)} 
                />
            )}
        </div>
    );
};

export default ContactUs;
