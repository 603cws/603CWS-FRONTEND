import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogsData from "./BlogsData"; // Adjust the import based on your file structure
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

interface Blog {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  content: string;
}

const BlogDetail: React.FC = () => {
  const navigate = useNavigate();
  const { title } = useParams<{ title: string }>(); // Get category and title from the URL
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (title) {
      const decodedTitle = decodeURIComponent(title.replace(/_/g, " ")); // Decode the category
      const foundBlog = blogsData.find(
        (blog) => blog.title === decodedTitle && blog.title.replace(/\s/g, "_")
      ); // Find the blog based on category and title
      setBlog(foundBlog || null);
    }
  }, [title]);

  if (!blog) {
    return <p className="text-center text-xl text-red-500">Blog not found.</p>; // Show a message if the blog isn't found
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      {/* <div className="min-h-screen w-full bg-gray-50"> */}
      <div className="h-screen w-full bg-gray-50">
        {/* <div style={{ zIndex: 20, position: "relative" }}>
     
                <Navbar />
            </div> */}
        {/* <div className="max-w-4xl mx-auto mt-20 my-12 p-8 shadow-sm rounded-lg"> */}
        <div className="max-w-4xl mx-auto p-8 shadow-sm rounded-lg">
          <div className="mt-20 my-12">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              {blog.title}
            </h1>
            <br />
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-72 object-cover rounded-lg mb-6 shadow-md"
            />
            <p className="text-lg text-gray-700 mb-4">{blog.description}</p>
            <div className="prose mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Content
              </h2>
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
            <div className="flex flex-wrap mb-6">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Related Posts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogsData
                  .filter(
                    (relatedBlog) =>
                      relatedBlog.category === blog.category &&
                      relatedBlog.title !== blog.title
                  )
                  .slice(0, 3)
                  .map((relatedBlog, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-md rounded-lg p-4"
                      onClick={() => {
                        navigate("/blogs");
                        navigate(
                          `/blogs/${relatedBlog.title.replace(/\s/g, "_")}`
                        );
                      }}
                    >
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <h3 className="font-bold text-base text-gray-800">
                        {relatedBlog.title.substring(0, 30)}...
                      </h3>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogDetail;
