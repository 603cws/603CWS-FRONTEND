import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";

function SiteMap() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <div style={{ zIndex: 20, position: "relative" }}>
                <Navbar />
            </div>

            {/* Hero Section */}
            <div className="container mx-auto pt-24 p-8">
                <h1 className="text-4xl font-bold text-center mb-10 text-yellow-600">Site Map</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Link Card Component */}
                    {[
                        { title: "Main", links: [
                            { name: "Home", href: "/" },
                            { name: "About Us", href: "/about-us" },
                            { name: "Managed Space Solutions", href: "/managed_space_solutions" },
                            { name: "Our Services", href: "/service" },
                            { name: "Contact Us", href: "/contactus" },
                            { name: "Site Map", href: "/site-map" }
                        ]},
                        { title: "Membership", links: [
                            { name: "Membership Plans", href: "/membership-plans" }
                        ]},
                        { title: "Events", links: [
                            { name: "Upcoming Events", href: "/events" },
                            { name: "Host an Event", href: "/events/create" }
                        ]},
                        { title: "Admin", links: [
                            { name: "Admin Login", href: "/admin/login" }
                        ]},
                        { title: "Blogs", links: [
                            { name: "Blog Home", href: "/blogs" },
                            { name: "Latest Posts", href: "/blogs/latest" }
                        ]},
                        { title: "Support", links: [
                            { name: "Privacy Policy", href: "/privacy-policy" },
                            { name: "Terms & Conditions", href: "/terms-conditions" }
                        ]}
                    ].map((section, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{section.title}</h2>
                            <ul className="list-disc pl-5 text-gray-700">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href={link.href} className="text-yellow-600 hover:text-yellow-700 hover:underline transition-colors duration-300">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default SiteMap;
