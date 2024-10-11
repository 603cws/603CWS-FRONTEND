import Navbar from '../../Navbar/navbar';
import Footer from '../../Footer/footer';
import { FaWifi, FaBolt, FaSnowflake, FaBroom, FaDoorOpen, FaPrint, FaCouch, FaCoffee } from 'react-icons/fa';
import { useState } from 'react';
import ImageCarousel from '../../LocationCarousal/LocationCarousal';
import image from '/public/officeimg/Technocity/Techno.JPG'


const Technocity = () => {
    const images = [
        '/officeimg/Technocity/Techno2.JPG',
        '/officeimg/Technocity/Techno.JPG',
        '/officeimg/Technocity/Techno3.JPG',
        '/officeimg/Technocity/Techno4.JPG',
        '/officeimg/Technocity/Techno5.JPG'
    ];
    const [source] = useState(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9576681553413!2d73.01590922472377!3d19.109512932101964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1fd6ba2be4d:0xccf82ad58f52a92d!2sTechnocity+IT+Park,+B-201,+601+%26+701,+Technocity,+MIDC+Industrial+Area,+Ghansoli,+Navi+Mumbai,+Maharashtra+400701!5e0!3m2!1sen!2sin!4v1721255614332!5m2!1sen!2sin"
    );

    return (
        <div className="font-sans">
            {/* Navbar Section */}
            <header className="bg-white shadow-lg z-50 relative">
                <Navbar />
            </header>

            {/* Hero Section */}
            <div className='pt-16'>
                <section className="relative text-center py-24 bg-cover bg-center bg-no-repeat bg-gray-100" style={{ backgroundImage: `url(${image})` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10">
                        <h1 className="text-5xl font-bold text-white drop-shadow-lg">Technocity, Navi Mumbai</h1>
                        <p className="text-lg text-gray-200 mt-4">603 The Co Working Space, Navi Mumbai</p>
                    </div>
                </section>

                {/* Workspace Packages Section */}
                <section className="py-16 flex flex-col lg:flex-row justify-between items-center px-8 lg:px-32 bg-gradient-to-r from-yellow-50 to-yellow-100">
                    <div className="lg:w-3/5">
                        <ImageCarousel
                            images={images}
                            altTextPrefix="My Image"
                            indicatorColor="bg-gray-300"
                            indicatorActiveColor="bg-yellow-600"
                            buttonColor="bg-yellow-600"
                            buttonHoverColor="bg-blue-900"
                        />
                    </div>
                    <div className="lg:w-1/3 p-6 bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-2xl mt-8 lg:mt-0 lg:ml-8 shadow-md flex flex-col">
                        <div className="flex items-start mb-6">
                            <div className="ml-4">
                                <h3 className="text-xl font-black mb-2 text-gray-600">Workspace Packages</h3>
                                <p className="text-base font-semibold text-gray-500 mt-6">Choose the best package for your workspace needs, offering flexible solutions for all.</p>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Day Pass</span>
                                <span className="text-sm font-bold text-gray-500">₹ 499</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Hot Desk</span>
                                <span className="text-sm font-bold text-gray-500">₹ 5,999 Onwards</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Dedicated Desk</span>
                                <span className="text-sm font-bold text-gray-500">₹ 7,999 Onwards</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Cabin Space</span>
                                <span className="text-sm font-bold text-gray-500">₹ 8,999 Onwards</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Custom Cabin</span>
                                <span className="text-sm font-bold text-gray-500">₹ 8,999 Onwards</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Meeting Rooms</span>
                                <span className="text-sm font-bold text-gray-500">₹ 399 / Hourly</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Conference Rooms</span>
                                <span className="text-sm font-bold text-gray-500">₹ 799 / Hourly</span>
                            </li>
                        </ul>

                    </div>
                </section>

                <section className="py-16 bg-gradient-to-r from-yellow-100 to-gray-100 flex flex-col lg:flex-row justify-between items-start px-8 lg:px-32">
                    <div className="lg:w-3/5">
                        <h2 className="text-4xl font-semibold mb-8 text-gray-800">Overview</h2>
                        <p className="leading-relaxed text-gray-700 mb-6">
                            Located in the heart of Navi Mumbai, our Technocity center offers a modern, dynamic workspace designed for businesses of all sizes. Strategically positioned near major corporate hubs and with excellent connectivity to highways, this space is perfect for professionals seeking convenience and productivity.
                        </p>
                        <p className="leading-relaxed text-gray-700 mb-6">
                            The center is equipped with premium amenities, including high-speed internet, ergonomic workstations, meeting rooms, and a vibrant community atmosphere. Whether you’re a freelancer, startup, or large enterprise, our Technocity location provides the perfect environment for growth, collaboration, and innovation.
                        </p>
                        <p className="leading-relaxed text-gray-700 mb-6">
                            Come experience the perfect balance of work and community at 603 The Coworking Space, Technocity, Navi Mumbai.
                        </p>
                    </div>
                    <div className="lg:w-1/3 mt-8 lg:mt-0 lg:ml-12">
                        <h2 className="text-4xl font-semibold mb-8 text-gray-800">Amenities</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center"><FaWifi className="text-yellow-500 mr-2" /> High speed internet</li>
                            <li className="flex items-center"><FaBolt className="text-yellow-500 mr-2" /> Uninterruptible power supply</li>
                            <li className="flex items-center"><FaSnowflake className="text-yellow-500 mr-2" /> Fully Airconditioned rooms</li>
                            <li className="flex items-center"><FaBroom className="text-yellow-500 mr-2" /> Housekeeping & Facility Upkeep</li>
                            <li className="flex items-center"><FaDoorOpen className="text-yellow-500 mr-2" /> Conference Rooms</li>
                            <li className="flex items-center"><FaPrint className="text-yellow-500 mr-2" /> Free Printing</li>
                            <li className="flex items-center"><FaCouch className="text-yellow-500 mr-2" /> Relax, entertainment room</li>
                            <li className="flex items-center"><FaCoffee className="text-yellow-500 mr-2" /> Tea & Coffee</li>
                        </ul>
                    </div>
                </section>
                <div className="py-16 bg-gradient-to-r from-gray-100 to-yellow-100">
                    <iframe
                        src={source}
                        className="w-full h-80 rounded-lg shadow-lg"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Technocity;
