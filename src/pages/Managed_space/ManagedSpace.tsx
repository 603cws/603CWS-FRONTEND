import React from 'react';
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { gallery9, gallery8, gallery7, gallery6, gallery1, gallery2, gallery3 } from "../../utils/Landing/Landing";
import { FaHandshake, FaCoffee, FaWifi, FaBroom, FaLaptop, FaTools, FaLock } from 'react-icons/fa';
import { GiSofa } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const services = [
    { icon: <FaHandshake />, label: 'Reception Services' },
    { icon: <FaCoffee />, label: 'Unlimited Refreshments' },
    { icon: <FaWifi />, label: 'High Speed Internet Services' },
    { icon: <FaBroom />, label: 'Housekeeping Facility' },
    { icon: <FaLaptop />, label: 'Fully Managed Tech Services' },
    { icon: <FaTools />, label: 'Maintenance Support' },
    { icon: <FaLock />, label: 'Security Services' },
    { icon: <GiSofa />, label: 'Custom Furnished Spaces' }
];

const locations = [
    {
        name: '603 Lodha Supremus Center (Thane)',
        imgSrc: gallery1,
        link: '/603-Lodha-Supremus-Center',
    },
    {
        name: 'Naman Midtown Center (Dadar)',
        imgSrc: gallery2,
        link: '/Naman-Midtown-Center',
    },
    {
        name: '603 MBC Center (Thane)',
        imgSrc: gallery3,
        link: '/603-MBC-Center',
    },
];

const data = [
    {
        number: 1,
        value: 'Identify your business needs',
    },
    {
        number: 2,
        value: 'Finding the best suitable place',
    },
    {
        number: 3,
        value: 'Design the space as required',
    },
    {
        number: 4,
        value: 'Ensuring hassle-free workspace',
    },
];


const Webpage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="font-sans bg-gray-50 w-screen overflow-x-hidden">
            {/* Navbar Section */}
            <header className="bg-white shadow-lg z-50 fixed w-full top-0">
                <Navbar />
            </header>

            <div className="pt-24">
                {/* Section 1 */}
                <section className="bg-white text-gray-800 pt-16 pb-6">
                    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center mb-16">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img
                                src={gallery6}
                                alt="Managed Office Space"
                                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-4xl font-bold mb-6">What is Managed Office Space?</h2>
                            <p className="text-lg mb-6 leading-relaxed">
                                Managed office spaces are fully serviced and equipped workspaces that are provided by 603. These spaces offer businesses a convenient and flexible alternative to traditional office leases. In a managed office space, we take care of various aspects of office management, allowing businesses to focus on their core operations.
                            </p>
                            <button onClick={()=>{navigate("/allLocations")}} className="bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
                                Explore Locations
                            </button>
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="bg-white text-gray-800 py-6">
                    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-12 order-2 md:order-1 mt-8 md:mt-0">
                            <h2 className="text-4xl font-bold mb-6">Looking for a Managed Solution?</h2>
                            <p className="text-lg mb-6 leading-relaxed">
                                Pick your location, pick your size, pick your needs and leave the rest to us. Our in-house team will get you up and running within 30 days. We can manage your space or find you a space and manage it. Let us know when, where, and how many. Get in touch with us today.
                            </p>
                            <button onClick={() => window.location.href = 'tel:+919136036603'} className="bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
                                Call Now
                            </button>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                            <img
                                src={gallery7}
                                alt="Managed Solution"
                                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                            />
                        </div>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="bg-white text-gray-800 py-6">
                    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center mb-16">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img
                                src={gallery8}
                                alt="Big Solutions for Big Teams"
                                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-4xl font-bold mb-6">Big Solutions for Big Teams</h2>
                            <p className="text-lg mb-6 leading-relaxed">
                                Enterprises like yours face several challenges when it comes to workspaces. You need to scale up or down quickly, distribute your workforce across locations, and adopt new models of working. We offer flexible, managed office spaces to help you navigate these challenges, allowing you to focus on your core business.
                            </p>
                            <button onClick={()=>{navigate("/allLocations")}} className="bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
                                Explore Locations
                            </button>
                        </div>
                    </div>
                </section>

                {/* Section 4 */}
                <section className="bg-white text-gray-800 py-6">
                    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-12 order-2 md:order-1 mt-8 md:mt-0">
                            <h2 className="text-4xl font-bold mb-6">What Role Does 603 Play?</h2>
                            <p className="text-lg mb-6 leading-relaxed">
                                603 provides effective IT, Housekeeping, and Maintenance support, resolving technical and non-technical issues daily. By reducing your administrative burden and providing a flexible workspace solution, 603 helps you maintain a hassle-free work environment.
                            </p>
                            <button onClick={() => window.location.href = 'tel:+919136036603'} className="bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
                                Let's Talk
                            </button>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                            <img
                                src={gallery9}
                                alt="Managed Solution"
                                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                            />
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-6 md:px-12">
                        <h2 className="text-4xl font-bold text-center mb-8">How it Works</h2>
                        <p className="text-center text-lg mb-12 leading-relaxed">
                            Managed office concepts enable organizations with the necessary tools to drive business growth without the burden of operational tasks like design, maintenance, utilities, and office materials.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
                            {data.map((step, index) => (
                                <div key={index} className="flex flex-col items-center bg-yellow-400 text-black p-8 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <div className="text-6xl font-bold">{`0 ${step.number}`}</div>
                                    <p className="mt-4 text-lg">{step.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Services Section */}
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-6 md:px-12">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="flex flex-col items-center text-center p-8">
                                    <div className="text-5xl mb-4 text-yellow-500">{service.icon}</div>
                                    <p className="text-lg font-semibold text-gray-700">{service.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Centers Section */}
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-6 md:px-12">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Centers</h2>
                        <p className="text-center text-lg mb-12 leading-relaxed">
                            Tailored Workspaces for Your Success
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {locations.map((location, index) => (
                                <div key={index} className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <img src={location.imgSrc} alt={location.name} className="rounded-lg mb-4 shadow-lg" />
                                    <h3 className="text-2xl font-semibold mb-4">{location.name}</h3>
                                    <a href={location.link} className="text-yellow-500 hover:underline">
                                        Learn More &rarr;
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="locations-description pt-16 text-sm flex flex-col items-center">
                            <div className="description-paragraph pb-5 font-semibold">
                                <p>Welcome to efficient business solutions with our Managed Office Spaces in Mumbai and Thane.</p>
                            </div>
                            <div className="description-paragraph">
                                <p>Our turnkey office spaces evolve with the needs of modern enterprises, offering fully-equipped workspaces without the hassle of traditional leases.</p>
                            </div>
                            <div className="description-paragraph">
                                <p>Located in Mumbai and Thane's business hubs, our offices are tailored to various industries. From private offices to coworking spaces, we cater to diverse workforce needs.</p>
                            </div>
                            <div className="description-paragraph">
                                <p>Beyond just workspaces, we offer high-speed internet, meeting rooms, and administrative support, enabling seamless business operations with flexible leasing options.</p>
                            </div>
                            <div className="description-paragraph">
                                <p>Elevate your operations with spaces that meet modern demands, letting you focus on your core objectives while we handle the rest.</p>
                            </div>
                            <div className="description-paragraph">
                                <p>Our meticulously designed spaces foster community and collaboration, accommodating businesses of all sizes with state-of-the-art facilities.</p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            {/* Footer Section */}
            <footer className="bg-white shadow-lg">
                <Footer />
            </footer>
        </div>
    );
};

export default Webpage;