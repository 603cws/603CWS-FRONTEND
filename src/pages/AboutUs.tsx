import {
  lifeat603,
  mission,
  bgimage2,
  vision,
} from "../utils/AboutUs/AboutUs";
import OurServices from "../components/AboutUs/OurServices";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import { useApp } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  
  const { setloading } = useApp();
  setloading(false);
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />

      <header className="relative flex justify-center items-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${bgimage2})`, height: '600px' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold animate__animated animate__fadeInDown">
            About Us
          </h2>
          <p className="text-lg sm:text-xl mt-4 animate__animated animate__fadeInUp">
            THIS IS WHO WE ARE
          </p>
        </div>
      </header>

      <main className="flex-grow">
        <section className="flex flex-col items-center py-16 bg-gray-50">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fcc519] text-center">
            Who We Are
          </h1>
          <p className="mt-4 max-w-3xl text-center text-gray-600 text-base sm:text-base lg:text-lg  leading-relaxed">
            603 is a Mumbai based coworking space with a total of 8 centres, 7
            in Mumbai itself and 1 in Bangalore. 603 as a number defines “Your
            Infinite Existence” and thus we, from our company, aim to provide a
            space where you get an opportunity to be limitless. At 603, we
            understand the evolving needs of businesses like yours and strive to
            provide an environment that fosters collaboration, productivity, and
            growth.
          </p>
        </section>

        <section className="flex flex-col lg:flex-row gap-5 justify-center items-center px-2 py-5">
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <img
              src={lifeat603}
              className="w-full h-auto max-w-lg lg:max-w-md rounded-lg shadow-lg object-cover"
              alt="Life at 603"
            />
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#fcc519]">
              Life at 603
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-base lg:text-lg leading-relaxed">
              Your life is an orchestra. Your business is the Symphony in it.
              603 The Co-Working Space is built to give your symphony wings to
              fly. Imagine to enjoy the fresh Barista in the morning in a well
              lit office with someone who works 24/7 to ensure you come in with
              a smile and leave with one.
            </p>
            <p className="mt-4 text-gray-600 text-base sm:text-base lg:text-lg  leading-relaxed">
              603 is a Mumbai-based coworking space with a total of 8 centres, 7
              in Mumbai itself and 1 in Bangalore. 603 as a number defines “Your
              Infinite Existence” and thus we, from our company, aim to provide
              a space where you get an opportunity to be limitless. At 603, we
              understand the evolving needs of businesses like yours and strive
              to provide an environment that fosters collaboration,
              productivity, and growth.
            </p>
          </div>
        </section>



        <section className="flex flex-col md:flex-row-reverse gap-8 justify-center items-center  py-16">
          <img src={mission} className="w-full md:w-1/2" alt="Mission" />
          <div className="md:w-1/2 text-center md:text-left px-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3f3836]">
              Our Mission
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-base lg:text-lg  leading-relaxed">
              At 603, our mission is to provide a vibrant and inspiring
              coworking space that fosters collaboration, innovation, and
              personal growth. We strive to create an inclusive and supportive
              community where professionals from diverse backgrounds can thrive,
              connect, and achieve their goals.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-8 justify-center items-center py-16">
          <img src={vision} className="w-full md:w-1/2" alt="Vision" />
          <div className="md:w-1/2 text-center md:text-left px-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3f3836]">
              Our Vision
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-base lg:text-lg  leading-relaxed">
              Our vision at 603 is to be the leading coworking space that
              transforms the way people work, connect, and succeed. We envision
              a dynamic and energising environment where creativity flourishes,
              ideas come to life, and meaningful connections are forged. By
              nurturing a culture of collaboration, knowledge sharing, and
              entrepreneurial spirit, we aspire to be a catalyst for innovation
              and a hub for diverse talents.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row bg-[#fcc519] py-16 text-white">
          <div className="md:w-1/2 px-8 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Join a community of early-stage startups.
            </h1>
            <p className="mt-6 text-base sm:text-base lg:text-lg  leading-relaxed">
              Our vision at 603 is to be the leading coworking space that
              transforms the way people work, connect, and succeed. We envision
              a dynamic and energising environment where creativity flourishes,
              ideas come to life, and meaningful connections are forged. By
              nurturing a culture of collaboration, knowledge sharing, and
              entrepreneurial spirit, we aspire to be a catalyst for innovation
              and a hub for diverse talents.
            </p>
            <button onClick={()=>{navigate("/login")}} className="mt-8 mb-3 px-6 py-3 bg-[#3f3836] text-lg font-semibold rounded-md shadow-md">
              Book a Space
            </button>
          </div>
          <div className="relative w-full md:w-1/2 flex items-center">
            <img
              src={bgimage2}
              className="h-[400px] md:h-[600px] w-full object-cover rounded-lg shadow-lg"
              alt="Background"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute flex flex-col w-10/12 md:w-[30%] bg-white p-6 md:p-8 rounded-lg shadow-md text-center mx-auto md:mx-0 transform translate-y-[-50%] top-1/2">
              <h1 className="text-xl md:text-3xl text-[#fcc519]">7+</h1>
              <p className="text-sm md:text-base text-[#3f3836] mt-2 md:mt-4">
                Creative people space available.
              </p>
              <h1 className="text-xl md:text-3xl text-[#fcc519] mt-4 md:mt-6">15+</h1>
              <p className="text-sm md:text-base text-[#3f3836] mt-2 md:mt-4">
                Conference & meeting rooms available.
              </p>
            </div>
          </div>

        </section>

        <OurServices />

        <section className="px-4 py-16 bg-gray-50 text-gray-700">
          <div className="max-w-4xl mx-auto text-sm">
            <p>
              Embracing Affordability: The Charm of Budget-Friendly Coworking
              Spaces in Mumbai and Thane.
            </p>
            <br />
            <p>
              In a world where the traditional office paradigm is shifting towards
              flexibility and collaboration, budget-friendly coworking office
              spaces have emerged as a beacon for professionals seeking a dynamic
              work environment without breaking the bank. Our affordable shared
              workspaces are revolutionizing the way individuals and small
              businesses operate, providing a cost-effective solution without
              compromising on essential amenities.
            </p>
            <br />
            <p>
              One of the primary draws of our budget-friendly coworking office
              spaces is, of course, the cost savings they offer. In bustling urban
              centers, where real estate prices can skyrocket, our work spaces
              provide an economical alternative to traditional office leases.
              Entrepreneurs, freelancers, and small teams can access fully
              equipped workspaces without the burden of exorbitant rents, making
              it an attractive proposition for those looking to manage overhead
              costs more efficiently.
            </p>
            <br />
            <p>
              Despite being budget-friendly, our coworking spaces do not
              compromise on quality. They typically offer a range of amenities
              essential for a productive work environment. High-speed internet,
              ergonomic furniture, games room, meeting rooms, and communal areas
              are standard features, ensuring that professionals have access to
              the tools they need to excel in their work. The emphasis on
              functionality and comfort allows individuals to focus on their tasks
              without being hindered by budget constraints.
            </p>
            <br />
            <p>
              The flexibility provided by budget-friendly coworking spaces is
              another compelling factor. Many of our spaces offer a variety of
              plans, allowing users to choose options that align with their
              specific needs. Whether it’s a hot desk for a freelancer, a
              dedicated desk for a small team, or a private office for a growing
              business, our spaces cater to diverse requirements, providing
              scalability without the financial burden associated with traditional
              leasing.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;
