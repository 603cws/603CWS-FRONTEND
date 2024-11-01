import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import Modal from "./Modal";
import ApplicationModal from './ApplicationModal'; // Import the new modal
import { useState } from 'react';


const positions = [
    {
        title: 'Web Developer',
        location: 'Work From Office (Bandra)',
        type: 'Full-Time',
        description: 'Maintain and update the 603 The Coworking Space website, ensuring smooth functionality, quick load times, and an optimized user experience. Collaborate closely with the marketing and design teams to implement new features, pages, and updates for our existing site. Lead the development of the new website for 603 Interiors, focusing on user-friendly navigation, responsive design, and seamless functionality.',
        requirements: [
            'Proven experience as a Web Developer with a focus on JavaScript and React.',
            'Strong understanding of front-end development technologies including HTML5, CSS3, and responsive web design.',
            'Familiarity with back-end technologies and databases is a plus (e.g., Node.js, MySQL, etc.).',
            'Experience with version control (Git) and collaborative development tools (e.g., GitHub).',
            'Ability to troubleshoot and solve complex technical issues efficiently.',
            'Knowledge of SEO best practices for web development.',
            'Strong attention to detail and problem-solving skills.',
            'Excellent communication and collaboration skills.',
            'A proactive and self-motivated approach to work.'
        ],
    },
    {
        title: 'Interior Designer',
        location: '603 Coworking Space',
        type: 'Full-Time',
        description: 'Join our design team as an Interior Designer, where you will be instrumental in crafting layouts and managing client communications.',
        requirements: [
            'Proficiency in design software like AutoCAD and SketchUp.',
            'Experience in commercial interior design.',
            'Strong attention to detail and creative skills.',
        ],
    },
    {
        title: 'Social Media Manager',
        location: 'Remote',
        type: 'Part-Time',
        description: 'Enhance our online presence and drive sales through strategic content creation and community engagement.',
        requirements: [
            'Proven experience managing social media accounts.',
            'Strong creative skills for engaging content.',
            'Excellent communication skills.',
        ],
    },
    {
        title: 'Salesperson/BDE',
        location: 'Remote',
        type: 'Full-Time',
        description: 'Engage with clients to promote and sell our products, ensuring excellent customer service and satisfaction.',
        requirements: [
            'Previous sales experience is required.',
            'Excellent interpersonal and communication skills.',
            'Ability to work independently and in a team.',
        ],
    },
    {
        title: 'Community Manager',
        location: '603 Coworking Space',
        type: 'Full-Time',
        description: 'Manage the community within our coworking space, fostering a collaborative environment and engaging with members.',
        requirements: [
            'Experience in community management.',
            'Strong communication and relationship-building skills.',
            'Ability to organize events and activities.',
        ],
    },
    {
        title: 'Accountant',
        location: '603 Coworking Space',
        type: 'Full-Time',
        description: 'Oversee financial records, prepare reports, and ensure compliance with financial regulations.',
        requirements: [
            'Proven experience as an accountant.',
            'Strong understanding of accounting principles and regulations.',
            'Excellent attention to detail and analytical skills.',
        ],
    },
];



const Career: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState<any>(null);

    const handleViewMore = (position: any) => {
        setSelectedPosition(position);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPosition(null);
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200">
            <Navbar />

            {/* Apply Now Button */}

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

            <div className="container mx-auto text-center my-8">
                <button
                    className="py-3 px-6 bg-yellow-600 text-white rounded-lg font-medium text-lg hover:bg-yellow-700 transition-colors duration-300"
                    onClick={() => setIsApplicationModalOpen(true)} // Open application modal
                >
                    Apply Now
                </button>
            </div>
            {/* Open Positions */}
            <section className="container mx-auto py-16 px-6 md:px-12">
                <h2 className="text-center text-4xl font-bold text-gray-800 mb-16 tracking-tight">
                    Current Openings
                </h2>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {positions.map((position, index) => (
                        <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-transform duration-500 border-t-4 border-yellow-500 flex flex-col justify-between"
                        style={{ transformOrigin: 'top', minHeight: '400px' }} // Set minHeight for consistency
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{position.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                <span className="font-medium">Location:</span> {position.location} |
                                <span className="font-medium"> Type:</span> {position.type}
                            </p>
                            <p className="text-gray-600 mb-6">{position.description.substring(0, 105)}...</p>
                    
                            <h4 className="font-medium text-gray-700 mb-2">Requirements:</h4>
                            <ul className="text-gray-600 list-disc pl-5 mb-4 space-y-2">
                                {position.requirements.slice(0, 2).map((requirement, i) => (
                                    <li key={i}>{requirement}</li>
                                ))}
                            </ul>
                        </div>
                    
                        <button
                            className="w-full py-3 px-6 bg-yellow-600 text-white rounded-lg font-medium text-lg hover:bg-yellow-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 mt-auto"
                            onClick={() => handleViewMore(position)} // Open modal with selected position
                        >
                            View More
                        </button>
                    </div>
                    
                    ))}
                </div>
            </section>

            {/* Modals */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} selectedPosition={selectedPosition} />
            <ApplicationModal isOpen={isApplicationModalOpen} onClose={() => setIsApplicationModalOpen(false)} />

            <Footer />
        </div>
    );
};

export default Career;
