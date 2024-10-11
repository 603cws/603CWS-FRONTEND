import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Contact icons

const positions = [
    {
        title: 'Frontend Developer',
        location: 'Remote',
        type: 'Full-Time',
        description:
            'Join our dynamic team to build and maintain responsive web applications with modern frameworks like React and TailwindCSS.',
        requirements: [
            '3+ years experience with React.js',
            'Strong understanding of CSS frameworks like TailwindCSS',
            'Experience with responsive design and modern JavaScript (ES6+)',
        ],
    },
    {
        title: 'Backend Developer',
        location: 'On-site: New York',
        type: 'Full-Time',
        description:
            'Build robust backend systems with Node.js and MongoDB. Work closely with the front-end team to design APIs and ensure seamless integrations.',
        requirements: [
            '5+ years experience with Node.js',
            'Proficient with MongoDB and RESTful APIs',
            'Knowledge of cloud infrastructure (AWS or Azure)',
        ],
    },
    {
        title: 'Product Manager',
        location: 'Remote or On-site',
        type: 'Part-Time',
        description:
            'Lead product development and coordinate across teams to bring innovative solutions to market. Ensure timely delivery of features with a focus on user experience.',
        requirements: [
            'Previous experience as a product manager',
            'Strong communication and leadership skills',
            'Proficiency with project management tools (Jira, Trello)',
        ],
    },
];

const Career: React.FC = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200">
            <Navbar />

            {/* Career Header */}
            <section className="relative pt-36 pb-20 bg-[url('/amore1.webp')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="container mx-auto text-center px-6 md:px-12 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-300 tracking-tight leading-tight">
                        Join Our Team
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        We’re on the lookout for talented, creative, and passionate professionals.
                        Explore the open positions and be part of a forward-thinking team dedicated to innovation.
                    </p>
                </div>
            </section>

            {/* Open Positions */}
            <section className="container mx-auto py-16 px-6 md:px-12">
                <h2 className="text-center text-4xl font-bold text-gray-800 mb-16 tracking-tight">
                    Current Openings
                </h2>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {positions.map((position, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-transform duration-500  border-t-4 border-yellow-500"
                            style={{ transformOrigin: 'top' }} // Optional: Set transform origin
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{position.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                <span className="font-medium">Location:</span> {position.location} |
                                <span className="font-medium"> Type:</span> {position.type}
                            </p>
                            <p className="text-gray-600 mb-6">{position.description}</p>

                            <h4 className="font-medium text-gray-700 mb-2">Requirements:</h4>
                            <ul className="text-gray-600 list-disc pl-5 mb-8 space-y-2">
                                {position.requirements.map((requirement, i) => (
                                    <li key={i}>{requirement}</li>
                                ))}
                            </ul>

                            <button className="w-full py-3 px-6 bg-yellow-600 text-white rounded-lg font-medium text-lg hover:bg-yellow-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
                                Apply Now
                            </button>
                        </div>
                    ))}


                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto text-center px-6 md:px-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Got Questions?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                        We're here to help! If you have any questions about the open positions, feel free to get in touch.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-12">
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-yellow-500 text-3xl" />
                            <span className="text-base text-gray-700">sales@603thecoworkingspace.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhone className="text-yellow-500 text-3xl" />
                            <span className="text-base text-gray-700">+91 91360 36603 | +91 99202 07026
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Career;
