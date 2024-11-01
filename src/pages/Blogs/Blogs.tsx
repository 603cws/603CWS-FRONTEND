import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
import blogsData from "./BlogsData";
import { useState } from "react";

type blog = {
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    content: string
}


function Blogs() {
    const [allblogs] = useState<blog[]>(blogsData)
    const navigate = useNavigate();
    return (
        <>
            <div className="min-h-screen w-full bg-gray-50">
                {/* Navbar */}
                <div style={{ zIndex: 20, position: "relative" }}>
                    <Navbar />
                </div>

                <div className="pt-32 pb-8 px-10 lg:px-20">
                    <h1 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight">
                        Explore Categories
                    </h1>
                    {/* <div className="flex flex-wrap gap-4">
                        <button className="px-5 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 hover:text-gray-800 transition duration-300 shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            All
                        </button>
                        <button className="px-5 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 hover:text-gray-800 transition duration-300 shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            Professional Development
                        </button>
                        <button className="px-5 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 hover:text-gray-800 transition duration-300 shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            Workspace Solutions
                        </button>
                        <button className="px-5 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 hover:text-gray-800 transition duration-300 shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            Sustainability Impact
                        </button>
                        <button className="px-5 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 hover:text-gray-800 transition duration-300 shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            Culture & Community
                        </button>
                        <button className="px-5 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 hover:text-gray-800 transition duration-300 shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            Resources
                        </button>
                    </div> */}
                </div>

                {/* Blogs Content */}
                <div className="px-10 lg:px-20 py-8 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {allblogs.map((blog, index) => (
                        <div
                            onClick={() => { navigate(`${blog.title.replace(/\s/g, "_")}`) }}
                            key={index}
                            className="rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:cursor-pointer"
                        >
                            <img
                                className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500"
                                src={blog.image}
                                alt={`Blog ${index + 1}`}
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-500 transition-colors duration-300">
                                    {blog.title.substring(0, 50)}...
                                </h2>
                                <p className="text-sm text-gray-500 mb-4">{blog.category}</p>
                                <p className="text-gray-700 text-base leading-relaxed mb-4">
                                    {blog.description.substring(0, 100)}...
                                </p>
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

export default Blogs;
