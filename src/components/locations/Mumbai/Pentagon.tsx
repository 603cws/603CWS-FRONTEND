import Navbar from '../../Navbar/navbar';
import Footer from '../../Footer/footer';
import { FaWifi, FaBolt, FaSnowflake, FaBroom, FaDoorOpen, FaPrint, FaCouch, FaCoffee } from 'react-icons/fa';
import ImageCarousel from '../../LocationCarousal/LocationCarousal';
import { useState } from 'react';
import image from '/officeimg/Pentagon/pentagon.JPG'

const Pentagon = () => {
    const [source] = useState(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.365476441699!2d72.8507678!3d19.1070941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83489ddac01%3A0xa443ab275b61ce12!2sClassic%20Pentagon%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1721255614332!5m2!1sen!2sin"
    );
    const images = [
        '/officeimg/Pentagon/pentagon.JPG',
        '/officeimg/Pentagon/pentagon2.JPG',
        '/officeimg/Pentagon/pentagon3.JPG',
        '/officeimg/Pentagon/pentagon4.JPG',
        '/officeimg/Pentagon/pentagon5.JPG',
        '/officeimg/Pentagon/pentagon6.JPG',
        '/officeimg/Pentagon/pentagon7.JPG',
    ];
    return (
        <div className="font-sans">
            {/* Navbar Section */}
            <header className="bg-white shadow-lg z-50 relative">
                <Navbar />
            </header>

            {/* Hero Section */}
            <div className='pt-16'>
                <section className="relative h-screen lg:h-[600px] flex items-center text-center justify-center bg-cover bg-center bg-no-repeat bg-gray-100" style={{ backgroundImage: `url(${image})` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">Pentagon Classic, Andheri</h1>
                        <p className="text-lg text-gray-200 mt-4">603 The Co Working Space, Pentagon Classic</p>
                    </div>
                </section>

                {/* Workspace Packages Section */}
                <section className="py-16 flex flex-col lg:flex-row justify-between items-center px-8 lg:px-32 bg-gradient-to-r from-gray-50 to-yellow-50">
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
                    <div className="2xl:w-1/3 p-6 bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-2xl mt-8 2xl:mt-0 lg:ml-8 shadow-md flex flex-col">
                        <div className="flex items-start mb-6">
                            <div className="ml-4">
                                <h3 className="text-xl font-black mb-2 text-gray-600">Workspace Packages</h3>
                                <p className="text-base font-semibold text-gray-500 mt-6">Choose the best package for your workspace needs, offering flexible solutions for all.</p>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Day Pass</span>
                                <span className="text-sm font-bold text-gray-500">₹ 599</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Dedicated Desk</span>
                                <span className="text-sm font-bold text-gray-500">₹ 9,999 Onwards</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Cabin Space</span>
                                <span className="text-sm font-bold text-gray-500">₹ 10,999 Onwards</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Meeting Rooms</span>
                                <span className="text-sm font-bold text-gray-500">₹ 399 / Hourly</span>
                            </li>
                            <li className="flex items-center justify-between p-4 from-yellow-200 to-yellow-100 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                                <span className="text-sm font-semibold text-gray-500">Conference Rooms</span>
                                <span className="text-sm font-bold text-gray-500">₹ 699 / Hourly</span>
                            </li>
                        </ul>

                    </div>
                </section>

                <section className="py-16 bg-gradient-to-r from-yellow-100 to-gray-100 flex flex-col lg:flex-row justify-between items-start px-8 lg:px-32">
                    <div className="lg:w-3/5">
                        <h2 className="text-4xl font-semibold mb-8 text-gray-800">Overview</h2>
                        <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
                            Our newest coworking center is now open at the prestigious Classic Pentagon building in Andheri, Mumbai. This prime location offers a vibrant and dynamic environment for businesses, freelancers, and startups to thrive. Situated in one of Mumbai's most sought-after commercial districts, our Andheri center is easily accessible via major roads and public transport. With proximity to the Andheri Railway Station and the Western Express Highway, commuting is convenient for both you and your clients.


                        </p>
                        <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
                            The area surrounding the Classic Pentagon is rich with dining options, cafes, and essential services, making it an ideal location for both work and leisure. Enjoy a coffee break, grab lunch, or unwind after a productive day with a variety of choices at your doorstep.

                        </p>
                        <p className="leading-relaxed text-gray-700 mb-6 mx-auto text-justify">
                            Experience the benefits of a coworking space in a prime location designed for innovation and collaboration. We invite you to explore our new center at the Classic Pentagon building in Andheri and discover a workspace that inspires success.


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

export default Pentagon;
