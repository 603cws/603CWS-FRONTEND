import background from "/Interior.png";
import Footer from "./../components/Footer/footer";

import Navbar from "./../components/Navbar/navbar";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5435.959280715239!2d73.31827823930506!3d18.909171595176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb76ff72fb6b%3A0x2711a3c5836a79e4!2sKarjat%20Junction!5e0!3m2!1sen!2sin!4v1734351856143!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

const Webpage = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  //loader
  const [loader, setLoader] = useState(false);

  const PORT = import.meta.env.VITE_BACKEND_URL;

  const handleButtonClick = () => {
    window.open("https://www.workved.com/", "_blank", "noopener,noreferrer");
  };

  const handleformSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      if (loader) return;

      setLoader(true);
      const response = await axios.post(
        `${PORT}/api/v1/users/contactusInterior`,
        {
          name,
          email,
          phone: mobileNo,
          company: companyName,
          message,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success("form submitted succesfully");
        setCompanyName("");
        setname("");
        setEmail("");
        setMobileNo("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="font-sans">
      {/* Navbar Section */}
      <header className="bg-white shadow-lg z-50 relative">
        <Navbar />
      </header>

      {/* Hero Section */}
      <div className="pt-16">
        <section
          className="relative h-screen lg:h-[600px] flex items-center text-center justify-center bg-cover bg-center bg-no-repeat bg-gray-100"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h1 className="uppercase text-3xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              603 Interiors
            </h1>
            {/* <p className="text-lg text-gray-200 mt-4">by 603</p> */}
          </div>
        </section>
      </div>

      <div>
        <section className="flex m-5 p-10 gap-10">
          {/* form section */}
          <div className="flex-1">
            <div className="px-10 bg-[#F2C66D] rounded-3xl">
              {/* text */}
              <div className="font-Poppins font-semibold py-3">
                <p className=" text-[#1A3A36] font-semibold">Get in Touch!</p>
                <img src="/serviceIcon.png" alt="service icon" />
                <h4 className="text-2xl text-white font-semibold">
                  Love to hear from you
                </h4>
                <h5 className="text-2xl text-white font-semibold">
                  Here’s how you can reach us.
                </h5>
              </div>
              {/* form part */}
              <div className="font-Poppins pl-2">
                <form onSubmit={handleformSubmit} className="">
                  <div className="mb-2 flex flex-col gap-2">
                    <label className="font-semibold text-white ">Name*</label>
                    <input
                      type="text"
                      className="w-full rounded-lg p-2 mb-2 focus:outline-none"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-2 flex flex-col gap-2">
                    <label className="font-semibold text-white ">Email*</label>
                    <input
                      type="email"
                      className="w-full rounded-lg p-2 mb-2 focus:outline-none"
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-2 flex flex-col gap-2">
                    <label className="font-semibold text-white">
                      Company Name*
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg p-2 mb-2 focus:outline-none"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      //   placeholder="John Doe"
                    />
                  </div>
                  <div className="mb-2 flex flex-col gap-2">
                    <label className="font-semibold text-white ">
                      Mobile No*
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg p-2 mb-2 focus:outline-none "
                      placeholder="Enter Mobile No"
                      value={mobileNo}
                      onChange={(e) => setMobileNo(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-2 flex flex-col gap-2">
                    <label className="font-semibold text-white ">
                      Message*
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg p-2 mb-2 focus:outline-none"
                      placeholder="your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    >
                      {" "}
                    </textarea>
                  </div>
                  <div className="pb-5">
                    <button
                      className="px-5 py-2 rounded-lg bg-[#1A3A36]  border border-[#000000] mb-2 text-white "
                      type="submit"
                      disabled={loader}
                    >
                      {loader ? (
                        <div className="spinner">
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8V12H4z"
                            ></path>
                          </svg>
                        </div>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* div for gif and text */}
          <div className="flex-1 flex flex-col justify-center items-center gap-3">
            <div>
              {/* <img
                src="/Chatbot.gif"
                alt="gif for animation"
                className="object-contain object-center"
              /> */}

              <h2 className="text-center lg:text-3xl sm:text-lg pb-10 uppercase font-semibold">
                Design Your Dream Office Space
              </h2>

              <div className="flex justify-center items-center gap-4">
                {/* 1st icon div */}
                <div className="flex-1">
                  <div className="flex justify-center mb-2">
                    <img src="/image52.png" alt="" className="w-28 h-28" />
                  </div>
                  <p className="text-center capitalize">
                    select your office area
                  </p>
                </div>
                {/* 2nd icon div */}
                <div className="flex-1">
                  <div className="flex justify-center mb-2">
                    <img src="/image51.png" alt="" className="w-28 h-28" />
                  </div>
                  <p className="text-center capitalize">
                    {" "}
                    customize workspaces
                  </p>
                </div>
                {/* 3rd icon div */}
                <div className="flex-1">
                  <div className="flex justify-center mb-2">
                    <img src="/image53.png" alt="" className="w-28 h-28" />
                  </div>
                  <p className="text-center capitalize">
                    Personalize every detail
                  </p>
                </div>
              </div>

              <p className="text-center pt-10 text-lg">
                603 Interiors is an online platform that empowers businesses to
                design and furnish their ideal office spaces. Our intuitive
                interface guides you through selecting your desired workspace,
                customizing it with a wide range of furniture, flooring, and
                finishes, and instantly generates a detailed cost estimate and
                Bill of Quantities (BOQ).
              </p>
            </div>
            <div className=" flex justify-center items-center mt-5">
              <button
                onClick={handleButtonClick}
                className="bg-[#F2C66D] text-[#1A3A36] border border-[#1A3A36] px-5 py-3 font-bold uppercase rounded-lg hover:bg-[#1A3A36] hover:text-[#f4f4f4]"
              >
                visit 603 Interior
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Webpage;
