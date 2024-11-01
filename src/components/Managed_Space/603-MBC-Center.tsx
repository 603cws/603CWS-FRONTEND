import { gallery3 } from '../../utils/Landing/Landing';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import { FaBuilding, FaChair, FaDesktop, FaDoorClosed, FaWifi, FaBroom } from 'react-icons/fa';
import { MdMeetingRoom, MdReceipt } from 'react-icons/md';
import { CiCoffeeCup } from 'react-icons/ci';

const Webpage = () => {
    return (
        <div className="font-sans bg-gray-50 w-screen">
            {/* Navbar Section */}
            <header className="bg-white shadow-lg z-50 relative">
                <Navbar />
            </header>
            <div className='pt-9'>

                {/* Hero Section */}
                <section className="relative text-center py-24 bg-cover bg-center bg-no-repeat  h-screen lg:h-[400px] flex items-center" style={{ backgroundImage: `url(${gallery3})` }}>
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white drop-shadow-lg">603 MBC Center
                            (Thane)</h1>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="bg-white py-16 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl  font-semibold text-gray-800">A Space Designed for Success</h2>
                        <p className="text-lg md:text-lg lg:text-xl text-gray-600 mt-6 leading-relaxed text-justify">
                            603 MBC center thane is stratigically build for connectivity in terms of growing your asset in Thane on a larger scale.
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <div className="bg-gray-50 py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
                            <div className="space-y-4">
                                <FaBuilding size={40} className="text-yellow-500 mx-auto" />
                                <p className="text-base md:text-lg font-medium text-gray-700">9600 Sq.ft Total Area</p>
                            </div>
                            <div className="space-y-4">
                                <FaChair size={40} className="text-yellow-500 mx-auto" />
                                <p className="text-base md:text-lg font-medium text-gray-700">Seating Capacity 250</p>
                            </div>
                            <div className="space-y-4">
                                <FaDesktop size={40} className="text-yellow-500 mx-auto" />
                                <p className="text-base md:text-lg font-medium text-gray-700">150 Workstations</p>
                            </div>
                            <div className="space-y-4">
                                <FaDoorClosed size={40} className="text-yellow-500 mx-auto" />
                                <p className="text-base md:text-lg font-medium text-gray-700">10 Private Cabins</p>
                            </div>
                            <div className="space-y-4">
                                <MdMeetingRoom size={40} className="text-yellow-500 mx-auto" />
                                <p className="text-base md:text-lg font-medium text-gray-700">2 Meeting Rooms</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Amenities Section */}
                <div className="max-w-6xl mx-auto py-16 px-6">
                    <h3 className="text-3xl font-semibold text-gray-800 text-center mb-12">Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="space-y-4">
                            <FaWifi size={40} className="text-yellow-500 mx-auto" />
                            <p className="text-base md:text-lg font-medium text-gray-700">High-speed Wi-Fi</p>
                        </div>
                        <div className="space-y-4">
                            <MdReceipt size={40} className="text-yellow-500 mx-auto" />
                            <p className="text-base md:text-lg font-medium text-gray-700">Reception Area</p>
                        </div>
                        <div className="space-y-4">
                            <FaBroom size={40} className="text-yellow-500 mx-auto" />
                            <p className="text-base md:text-lg font-medium text-gray-700">Cleaning & Maintenance</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 text-center">
                        <div className="space-y-4">
                            <CiCoffeeCup size={40} className="text-yellow-500 mx-auto" />
                            <p className="text-base md:text-lg font-medium text-gray-700">Refreshments</p>
                        </div>
                        <div className="space-y-4">
                            <MdMeetingRoom size={40} className="text-yellow-500 mx-auto" />
                            <p className="text-base md:text-lg font-medium text-gray-700">Conference Room</p>
                        </div>
                        <div className="space-y-4">
                            <FaDesktop size={40} className="text-yellow-500 mx-auto" />
                            <p className="text-base md:text-lg font-medium text-gray-700">Business Lounge</p>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <button
                            onClick={() => window.open('https://neo.foyr.com/toolv2/magiktour/index.html?view=652273dd9c5b6dea618fa0b5', '_blank')}
                            className="bg-yellow-500 text-white py-3 px-8 rounded-full text-base md:text-lg font-medium hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
                        >
                            Take a Walkthrough
                        </button>
                        <p className="text-gray-600 mt-4">Contact: +91-9136036603</p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto py-14 px-4  flex flex-col md:flex-row justify-between gap-12 my-10">
                    {/* Connectivity Section */}
                    <section className="flex-1">
                        <div className="px-8">
                            <h3 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-900 text-center mb-3">
                                Connectivity
                            </h3>
                            <hr className="border-t-4 border-yellow-500 w-24 mx-auto mb-8" />
                            <ul className="text-sm md:text-base text-gray-700 leading-relaxed mt-6 space-y-4 flex flex-col items-center">
                                <li>National Highway 48 - 150 M</li>
                                <li>Thane railway Station - 10 KM</li>
                                <li>Bus Station - 90 M</li>
                            </ul>
                        </div>
                    </section>

                    {/* Leisure Section */}
                    <section className="flex-1">
                        <div className="px-8">
                            <h3 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-900 text-center mb-3">
                                Leisure
                            </h3>
                            <hr className="border-t-4 border-yellow-500 w-24 mx-auto mb-8" />
                            <ul className="text-sm md:text-base text-gray-700 leading-relaxed mt-6 space-y-4 flex flex-col items-center">
                                <li>Thane viviana Mall - 7 KM</li>
                                <li>Restuarants - 0.5 KM</li>
                            </ul>
                        </div>
                    </section>

                    {/* Utility & Facilities Section */}
                    <section className="flex-1">
                        <div className="px-8">
                            <h3 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-900 text-center mb-3">
                                Utility & Facilities
                            </h3>
                            <hr className="border-t-4 border-yellow-500 w-24 mx-auto mb-8" />
                            <ul className="text-sm md:text-base text-gray-700 leading-relaxed mt-6 space-y-4 flex flex-col items-center">
                                <li>Petrol Pump - 3 KM</li>
                                <li>Pharmacy - 0.5 KM</li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>



            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Webpage;
