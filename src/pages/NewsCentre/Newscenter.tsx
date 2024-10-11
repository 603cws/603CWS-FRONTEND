import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import { useEffect, useState } from "react";

const newsData = [
    {
        title: "Sustainability Initiatives Update",
        category: "Sustainability",
        description:
            "Learn about our ongoing sustainability initiatives and how we are working to reduce our carbon footprint.",
        image: "https://cdn.sanity.io/images/uqxwe2qj/production/4ee9fb18bdc214aefebf7859557a6611125c3841-760x426.png?q=80&auto=format&fit=clip&w=760",
        date: "September 28, 2024",
    },
    {
        title: "Employee of the Month Recognition",
        category: "Achievements",
        description:
            "Congratulations to Jane Doe for being recognized as Employee of the Month for her outstanding contributions to our team.",
        image: "https://cdn.sanity.io/images/uqxwe2qj/production/4ee9fb18bdc214aefebf7859557a6611125c3841-760x426.png?q=80&auto=format&fit=clip&w=760",
        date: "September 25, 2024",
    },
    {
        title: "Upcoming Webinars on Industry Trends",
        category: "Events",
        description:
            "Join us for a series of webinars discussing the latest trends in the industry and how they impact our business.",
        image: "https://cdn.sanity.io/images/uqxwe2qj/production/4ee9fb18bdc214aefebf7859557a6611125c3841-760x426.png?q=80&auto=format&fit=clip&w=760",
        date: "September 20, 2024",
    },
    {
        title: "Quarterly Financial Results Released",
        category: "Updates",
        description:
            "Our latest quarterly financial results show significant growth, demonstrating our commitment to innovation and customer satisfaction.",
        image: "https://cdn.sanity.io/images/uqxwe2qj/production/4ee9fb18bdc214aefebf7859557a6611125c3841-760x426.png?q=80&auto=format&fit=clip&w=760",
        date: "September 15, 2024",
    },
    {
        title: "Company Launches New Product Line",
        category: "Announcements",
        description:
            "We are excited to announce the launch of our new product line designed to enhance user experience and productivity.",
        image: "https://cdn.sanity.io/images/uqxwe2qj/production/4ee9fb18bdc214aefebf7859557a6611125c3841-760x426.png?q=80&auto=format&fit=clip&w=760",
        date: "September 1, 2024",
    },
];

function NewsCenter() {
    //const navigate = useNavigate();
    const [isBlinking, setIsBlinking] = useState(true);

    // Blink effect for the New tag
    useEffect(() => {
        const interval = setInterval(() => {
            setIsBlinking((prev) => !prev);
        }, 2000); // Change the blink speed here (in milliseconds)

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="min-h-screen w-full bg-gray-50">
                {/* Navbar */}
                <div style={{ zIndex: 20, position: "relative" }}>
                    <Navbar />
                </div>

                <div className="pt-32 pb-8 px-10 lg:px-20">
                    <h1 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight">
                        Company News Center
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Stay updated with the latest news, announcements, and updates from our company. Explore our achievements, upcoming events, and sustainability initiatives.
                    </p>
                </div>

                {/* News Content */}
                <div className="px-10 lg:px-20 py-8 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {newsData.map((news, index) => (
                        <div
                            //onClick={() => { navigate(`${news.title.replace(/\s/g, "_")}`); }}
                            key={index}
                            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
                        >
                            <img
                                className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500"
                                src={news.image}
                                alt={`News ${index + 1}`}
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-500 transition-colors duration-300">
                                    {news.title}
                                </h2>
                                <p className="text-sm text-gray-500 mb-1">{news.category}</p>
                                <p className="text-sm text-gray-400 mb-4">{news.date}</p>
                                <p className="text-gray-700 text-base leading-relaxed mb-4">
                                    {news.description}
                                </p>
                                {/* New Tag for the Latest News */}
                                {index === 0 && (
                                    <span className={`bg-red-200 text-red-900 text-xs font-semibold px-2 py-1 rounded-lg inline-block mt-2 transition-opacity ${isBlinking ? "opacity-100" : "opacity-30"}`}>
                                        New
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}

export default NewsCenter;
