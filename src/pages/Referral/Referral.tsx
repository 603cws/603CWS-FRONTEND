import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import { useState } from "react";
import { FaLaptop, FaHandshake, FaGift, FaUsers } from "react-icons/fa"; // Coworking related icons

function Referral() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        referralEmail: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Referral form data:', formData);
    };

    return (
        <>
            <div className="min-h-screen w-full bg-gray-50">
                {/* Navbar */}
                <div style={{ zIndex: 20, position: "relative" }}>
                    <Navbar />
                </div>

                <div className="bg-gray-100 pt-16">
                    {/* Hero Section */}
                    <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-center py-16">
                        <h1 className="text-5xl font-bold text-white">Refer Friends, Earn Workspace Perks</h1>
                        <p className="text-xl text-white mt-4">
                            Share our coworking space with your network and earn exclusive rewards.
                        </p>
                        {/* Logos */}
                        {/*<div className="mt-8 flex justify-center space-x-6">
                            <img src="/images/coworking-logo1.png" alt="Coworking Logo 1" className="h-12" />
                            <img src="/images/coworking-logo2.png" alt="Coworking Logo 2" className="h-12" />
                            <img src="/images/coworking-logo3.png" alt="Coworking Logo 3" className="h-12" />
                        </div>*/}
                    </div>

                    {/* How It Works Section */}
                    <div className="max-w-6xl mx-auto py-16 px-4">
                        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">How It Works</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
                                <FaLaptop className="text-yellow-500 text-4xl mx-auto" />
                                <h3 className="text-xl font-semibold text-yellow-500 mt-4">1. Share</h3>
                                <p className="mt-4 text-gray-600">Send your coworking space referral link to your network.</p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
                                <FaUsers className="text-yellow-500 text-4xl mx-auto" />
                                <h3 className="text-xl font-semibold text-yellow-500 mt-4">2. They Join</h3>
                                <p className="mt-4 text-gray-600">Your referral signs up for our coworking space membership.</p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
                                <FaGift className="text-yellow-500 text-4xl mx-auto" />
                                <h3 className="text-xl font-semibold text-yellow-500 mt-4">3. You Earn</h3>
                                <p className="mt-4 text-gray-600">Earn rewards like free workspace days or discounts.</p>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-gray-50 py-16">
                        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Why Refer Coworking Spaces?</h2>
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
                                <FaHandshake className="text-yellow-500 text-4xl mx-auto" />
                                <h3 className="text-2xl font-semibold text-yellow-500">Collaborative Environment</h3>
                                <p className="mt-4 text-gray-600">Help your friends discover productive coworking spaces with great perks.</p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
                                <FaGift className="text-yellow-500 text-4xl mx-auto" />
                                <h3 className="text-2xl font-semibold text-yellow-500">Exclusive Rewards</h3>
                                <p className="mt-4 text-gray-600">Earn workspace benefits, discounts, and premium access.</p>
                            </div>
                        </div>
                    </div>

                    {/* Referral Form */}
                    <div className="max-w-xl mx-auto py-16 px-4">
                        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Refer a Friend</h2>
                        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="referralEmail" className="block text-sm font-medium text-gray-700">
                                    Friend's Email
                                </label>
                                <input
                                    type="email"
                                    name="referralEmail"
                                    value={formData.referralEmail}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition"
                            >
                                Submit Referral
                            </button>
                        </form>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-center py-12">
                        <h2 className="text-4xl font-bold text-white">Ready to Grow Your Coworking Network?</h2>
                        <p className="text-xl text-white mt-4 mb-8">Join our referral program today and start earning rewards!</p>
                        <button className="py-3 px-6 bg-white text-yellow-500 font-semibold rounded-lg hover:bg-gray-100">
                            Join Now
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}

export default Referral;
