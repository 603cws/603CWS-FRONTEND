import { useState, useEffect } from "react";
import DashNavbar from "../components/DashBoardNavbar/DashNavbar";
import { FiMenu } from "react-icons/fi";
import { logo } from "../utils/Landing/Landing";
import { useApp } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import LocationComponent from "./dashboardLocations";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Mobiletransactions from "./Mobiletransaction";
import axiosInstance from "../utils/axiosInstance";
const Dashboard: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { accHolder, setAccHolder, setloading } = useApp();
  const [myprofile, setMyprofile] = useState(false);
  const [selectedBookingType, setSelectedBookingType] = useState("");
  const [passwordchange, setpasswordchange] = useState(false);
  const [arrow, setArrow] = useState(true);
  const [transacton, setTransacton] = useState(false);
  const token = localStorage.getItem("token");

  const [locations, setLoactions] = useState(false);

  const [isSideWindowOpen, setIsSideWindowOpen] = useState(false);

  const navigate = useNavigate();

  const [newDashboard, setNewDashboard] = useState(true);

  //password change
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [selectedPlace, setSelectedPlace] = useState("");

  const handleplaceChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const location = event.target.value;
    setSelectedPlace(location);
    setLoactions(false);
  };

  const handleBookingTypeChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const location = event.target.value;
    setSelectedBookingType(location);
    setLoactions(false);
  };

  const handleBookingSearch = () => {
    if (selectedPlace === "") {
      toast.error("select a location");
    }
    if (selectedBookingType === "") {
      toast.error("select a BookingType");
    }
    setLoactions(true);
  };

  //password submit
  const handlePasswordChange = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      const response = await axiosInstance.put(`/api/v1/users/changepassword`, {
        newPassword,
        oldPassword,
        token,
      });
      if (response.data.msg === "Password changed successfully") {
        toast.success("Password changed successfully");
      } else {
        toast.success("Wrong details");
      }
      setConfirmPassword("");
      setNewPassword("");
      setOldPassword("");
    } else {
      console.error("Passwords do not match");
    }
  };

  const handleprofile = () => {
    setMyprofile(true);
    setNewDashboard(false);
  };

  const handledropdown = () => {
    setpasswordchange(true);
    setArrow(false);
  };

  const handledropup = () => {
    setpasswordchange(false);
    setArrow(true);
  };

  const handleNewDashboard = () => {
    setNewDashboard(true);
    setMyprofile(false);
  };

  //logout of a mobile user
  const logout = async () => {
    try {
      setloading(true);
      await axiosInstance.post(`/api/v1/auth/logout`, {});
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setAccHolder({
        companyName: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        role: "user",
        kyc: false,
        country: "",
        state: "",
        city: "",
        zipcode: "",
        location: "",
        credits: 0,
        createdAt: new Date(), // Correct initialization for Date
        member: false,
      });
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setloading(false);
    }
  };

  let subscriptionText = accHolder.member ? `A Member` : `Not A Member`;

  const containerStyle: React.CSSProperties = {
    fontFamily: "Poppins, sans-serif",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10,
    display: "flex", // flex
    justifyContent: "space-between", // justify-between
    alignItems: "center", // items-center
    padding: windowWidth > 425 ? "1rem 1.5rem" : "1rem 0.5rem", // p-4 pl-6 pr-6
    borderBottom: "2px solid #f6e05e", // border-b-2 border-yellow-400
    backgroundColor: "#ffffff", // bg-white
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };
  const logoContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: windowWidth > 425 ? "10px" : "7px",
    cursor: "pointer",
  };
  const logoStyle: React.CSSProperties = {
    height: "32px",
  };

  const headingstyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    fontSize: windowWidth > 425 ? "1.125rem" : "1rem",
    fontWeight: "700",
    color: "#4a5568",
  };

  const sideWindowStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    right: isSideWindowOpen ? 0 : "-300px", // Slide-in effect
    width: "250px",
    height: "100%",
    backgroundColor: "#ffffff",
    boxShadow: "-2px 0 5px rgba(0,0,0,0.5)",
    zIndex: 10001,
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    transition: "right 0.3s ease-in-out", // Smooth transition
  };

  const closeButtonStyle: React.CSSProperties = {
    alignSelf: "flex-end",
    cursor: "pointer",
  };

  const sideLinkStyle: React.CSSProperties = {
    margin: "15px 0",
    padding: "10px",
    fontSize: "18px",
    color: "#0056b3",
    cursor: "pointer",
    borderRadius: "4px",
    textAlign: "center",
    transition: "background-color 0.3s",
  };

  //change visit home to home page
  const visitHome = () => {
    navigate("/");
  };

  return (
    <>
      {windowWidth > 765 ? (
        <div>
          <DashNavbar />
        </div>
      ) : (
        <div style={containerStyle}>
          <div style={logoContainerStyle}>
            <img src={logo} alt="Logo" style={logoStyle} />
            <div style={headingstyle}>603 The Coworking Space</div>
          </div>
          <FiMenu
            size="24"
            onClick={() => setIsSideWindowOpen(true)}
            className="cursor-pointer"
          />
          <div style={sideWindowStyle}>
            <AiOutlineClose
              size="24"
              style={closeButtonStyle}
              onClick={() => setIsSideWindowOpen(false)}
            />
            <div
              style={sideLinkStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
              onClick={() => {
                setIsSideWindowOpen(false);
                visitHome();
              }}
            >
              Home
            </div>
            <div
              style={sideLinkStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
              onClick={() => {
                setIsSideWindowOpen(false);
                setMyprofile(true);
                setNewDashboard(false);
                setTransacton(false);
              }}
            >
              {" "}
              My Profile
            </div>
            <div
              style={sideLinkStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
              onClick={() => {
                setIsSideWindowOpen(false);
                setMyprofile(false);
                setNewDashboard(true);
                setTransacton(false);
              }}
            >
              {" "}
              New Dashboard
            </div>
            <div
              style={sideLinkStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
              onClick={() => {
                setIsSideWindowOpen(false);
                setTransacton(true);
                setMyprofile(false);
                setNewDashboard(false);
              }}
            >
              {" "}
              My bookings
            </div>

            <div
              style={sideLinkStyle}
              onClick={() => (window.location.href = "tel:+919136036603")}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              Contact Us
            </div>
            <div
              style={sideLinkStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
              onClick={logout}
            >
              Logout
            </div>
          </div>
        </div>
      )}
      {windowWidth > 765 && (
        <div className=" w-full min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 md:grid grid-cols-[1fr_4fr] ">
          <div className="mt-16 relative ">
            <div
              id="sidebar-multi-level-sidebar"
              className="fixed top-16 left-0 z-40 lg:w-[304px] w-64    h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-8"
              aria-label="Sidebar"
            >
              <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 ">
                <ul className="space-y-2 font-medium  ">
                  <li>
                    <button
                      onClick={handleprofile}
                      className="flex items-center p-2 text-gray-900 rounded-lg   hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 21"
                      >
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                      </svg>
                      <span className="ms-3 text-black hover:text-white">
                        My Profile
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleNewDashboard}
                      className="flex items-center p-2 text-gray-900 rounded-lg   hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 21"
                      >
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                      </svg>
                      <span className="ms-3 text-black hover:text-white">
                        New Dashboard
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-start-2 col-end-7"> */}
          <div className="">
            {myprofile && (
              <>
                <div className="mx-auto max-w-270 mt-20">
                  <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-5 xl:col-span-5">
                      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                          <h3 className="font-medium text-black dark:text-black">
                            Personal Information
                          </h3>
                        </div>
                        <div className="p-7">
                          <form action="#">
                            <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                              <div className="w-full sm:w-1/2">
                                <label className=" block text-sm font-medium text-black">
                                  Company Name
                                </label>
                                <div className="relative ">
                                  <span className="absolute left-0 top-4">
                                    <svg
                                      className="fill-current"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g opacity="0.8">
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                                          fill=""
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                                          fill=""
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                  <input
                                    className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary hover:cursor-not-allowed"
                                    type="text"
                                    value={accHolder.companyName}
                                    readOnly
                                  />
                                </div>
                              </div>

                              <div className="w-full sm:w-1/2">
                                <label className=" block text-sm font-medium text-black">
                                  Phone Number
                                </label>
                                <input
                                  className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                                  type="text"
                                  name="phoneNumber"
                                  id="phoneNumber"
                                  placeholder={accHolder.phone}
                                  defaultValue={accHolder.phone}
                                />
                              </div>
                            </div>

                            <div className="mb-5.5 mt-3">
                              <label
                                className=" block text-sm font-medium text-black "
                                htmlFor="emailAddress"
                              >
                                Email Address
                              </label>
                              <div className="relative">
                                <span className="absolute left-4.5 top-4">
                                  <svg
                                    className="fill-current"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g opacity="0.8">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.33301 4.16667C2.87658 4.16667 2.49967 4.54357 2.49967 5V15C2.49967 15.4564 2.87658 15.8333 3.33301 15.8333H16.6663C17.1228 15.8333 17.4997 15.4564 17.4997 15V5C17.4997 4.54357 17.1228 4.16667 16.6663 4.16667H3.33301ZM0.833008 5C0.833008 3.6231 1.9561 2.5 3.33301 2.5H16.6663C18.0432 2.5 19.1663 3.6231 19.1663 5V15C19.1663 16.3769 18.0432 17.5 16.6663 17.5H3.33301C1.9561 17.5 0.833008 16.3769 0.833008 15V5Z"
                                        fill=""
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.983719 4.52215C1.24765 4.1451 1.76726 4.05341 2.1443 4.31734L9.99975 9.81615L17.8552 4.31734C18.2322 4.05341 18.7518 4.1451 19.0158 4.52215C19.2797 4.89919 19.188 5.4188 18.811 5.68272L10.4776 11.5161C10.1907 11.7169 9.80879 11.7169 9.52186 11.5161L1.18853 5.68272C0.811486 5.4188 0.719791 4.89919 0.983719 4.52215Z"
                                        fill=""
                                      />
                                    </g>
                                  </svg>
                                </span>
                                <input
                                  className="w-full rounded border border-stroke bg-gray mb-4 py-3 pl-10 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary hover:cursor-not-allowed"
                                  type="email"
                                  value={accHolder.email}
                                  readOnly
                                />
                              </div>
                            </div>
                            {/* member or not  */}
                            <div className="mb-5.5 mt-3">
                              <div className="flex gap-2">
                                <label className=" block text-sm font-medium text-black ">
                                  Subscription
                                </label>

                                <div className="group">
                                  {/* Icon */}
                                  <div className=" cursor-pointer">
                                    <FontAwesomeIcon icon={faEye} />
                                  </div>
                                  {/* Hover Content */}
                                  <div className="absolute z-10 transform -translate-x-1/2 hidden group-hover:block bg-white text-gray-800 p-4 rounded-md shadow-md w-64">
                                    {accHolder.member ? (
                                      <p>
                                        you are a member of 603 the coworking
                                        space
                                      </p>
                                    ) : (
                                      <p>
                                        Become a member to get all the 603
                                        member benefits contatus to know more
                                        +91 9136036603
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="relative">
                                <input
                                  className="w-full rounded border border-stroke bg-gray mb-4 py-3 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary hover:cursor-not-allowed"
                                  type="text"
                                  value={subscriptionText}
                                  readOnly
                                />
                              </div>
                            </div>

                            <div className="mb-5.5">
                              <label
                                className=" block text-sm font-medium text-black"
                                htmlFor="Username"
                              >
                                Username
                              </label>
                              <input
                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                                type="text"
                                name="Username"
                                id="Username"
                                placeholder={accHolder.username}
                                defaultValue={accHolder.username}
                              />
                            </div>
                          </form>
                        </div>
                        {/* password change section */}
                        <div className="border-b border-stroke py-4 px-7 dark:border-strokedark flex justify-between ">
                          <h3 className="font-medium text-black dark:text-black">
                            password change
                          </h3>
                          {arrow ? (
                            <IoIosArrowDropdown
                              style={{ width: "50px", height: "40px" }}
                              onClick={handledropdown}
                            />
                          ) : (
                            <IoIosArrowDropup
                              style={{ width: "50px", height: "40px" }}
                              onClick={handledropup}
                            />
                          )}
                        </div>
                        {passwordchange && (
                          <form onSubmit={handlePasswordChange}>
                            <div className="w-full sm:w-1/2 ml-4">
                              <label className=" block text-sm font-medium text-black">
                                Old password
                              </label>
                              <input
                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                                type="password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                placeholder="old password"
                              />
                            </div>
                            <div className="w-full sm:w-1/2 ml-4">
                              <label className=" block text-sm font-medium text-black">
                                New password
                              </label>
                              <input
                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="password"
                              />
                            </div>
                            <div className="w-full sm:w-1/2 ml-4">
                              <label className=" block text-sm font-medium text-black">
                                Confirm password
                              </label>
                              <input
                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="password"
                              />
                            </div>
                            <button
                              className="mt-4 flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90 ml-5"
                              type="submit"
                            >
                              Save changes
                            </button>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {newDashboard && (
              <>
                <div
                  className={`flex flex-col items-center ${
                    windowWidth > 440 ? "p-16" : "px-4 pt-16 pb-4"
                  }`}
                >
                  <div className="bg-white shadow-lg rounded-lg p-8 mt-8 w-full max-w-lg">
                    <h1 className="font-bold text-center mb-4">
                      Booking Dashboard
                    </h1>
                    <p className="text-sm text-center text-gray-500 mb-6">
                      select the location{" "}
                    </p>
                    <div className="flex gap-4 justify-evenly">
                      <select
                        id="location"
                        value={selectedPlace}
                        onChange={handleplaceChange}
                      >
                        <option value=""> select location</option>
                        <option value="All"> All</option>
                        <option value="Mumbai"> Mumbai</option>
                        <option value="Navi Mumbai"> Navi Mumbai </option>
                        <option value="Ahmedabad"> Ahmedabad </option>
                      </select>
                      <select
                        id="BookingType"
                        value={selectedBookingType}
                        onChange={handleBookingTypeChange}
                      >
                        <option value=""> Booking Type</option>
                        <option value="Meeting"> Meeting Room</option>
                        <option value="conference"> conference Room</option>
                        <option value="Daypass"> Daypass</option>
                      </select>

                      <button
                        className="btn bg-yellow-500"
                        onClick={handleBookingSearch}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>

                {locations && (
                  <LocationComponent
                    key={selectedPlace}
                    value={{
                      key: selectedPlace,
                      selectedCity: selectedPlace,
                      spacetype: selectedBookingType,
                    }}
                  />
                )}
              </>
            )}
          </div>
        </div>
      )}
      {/* mibile version starts here */}
      {windowWidth <= 765 && (
        <div className="">
          {myprofile && (
            <>
              <div className="mx-auto max-w-270 mt-20">
                <div className="grid grid-cols-5 gap-8">
                  <div className="col-span-5 xl:col-span-5">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-black">
                          Personal Information
                        </h3>
                      </div>
                      <div className="p-7">
                        <form action="#">
                          <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                            <div className="w-full sm:w-1/2">
                              <label className=" block text-sm font-medium text-black">
                                Company Name
                              </label>
                              <div className="relative ">
                                <span className="absolute left-0 top-4">
                                  <svg
                                    className="fill-current"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g opacity="0.8">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                                        fill=""
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                                        fill=""
                                      />
                                    </g>
                                  </svg>
                                </span>
                                <input
                                  className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary hover:cursor-not-allowed"
                                  type="text"
                                  value={accHolder.companyName}
                                  readOnly
                                />
                              </div>
                            </div>

                            <div className="w-full sm:w-1/2">
                              <label
                                className=" block text-sm font-medium text-black"
                                // htmlFor="phoneNumber"
                              >
                                Phone Number
                              </label>
                              <input
                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder={accHolder.phone}
                                defaultValue={accHolder.phone}
                              />
                            </div>
                          </div>

                          <div className="mb-5.5 mt-3">
                            <label
                              className=" block text-sm font-medium text-black "
                              htmlFor="emailAddress"
                            >
                              Email Address
                            </label>
                            <div className="relative">
                              <span className="absolute left-4.5 top-4">
                                <svg
                                  className="fill-current"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g opacity="0.8">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M3.33301 4.16667C2.87658 4.16667 2.49967 4.54357 2.49967 5V15C2.49967 15.4564 2.87658 15.8333 3.33301 15.8333H16.6663C17.1228 15.8333 17.4997 15.4564 17.4997 15V5C17.4997 4.54357 17.1228 4.16667 16.6663 4.16667H3.33301ZM0.833008 5C0.833008 3.6231 1.9561 2.5 3.33301 2.5H16.6663C18.0432 2.5 19.1663 3.6231 19.1663 5V15C19.1663 16.3769 18.0432 17.5 16.6663 17.5H3.33301C1.9561 17.5 0.833008 16.3769 0.833008 15V5Z"
                                      fill=""
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M0.983719 4.52215C1.24765 4.1451 1.76726 4.05341 2.1443 4.31734L9.99975 9.81615L17.8552 4.31734C18.2322 4.05341 18.7518 4.1451 19.0158 4.52215C19.2797 4.89919 19.188 5.4188 18.811 5.68272L10.4776 11.5161C10.1907 11.7169 9.80879 11.7169 9.52186 11.5161L1.18853 5.68272C0.811486 5.4188 0.719791 4.89919 0.983719 4.52215Z"
                                      fill=""
                                    />
                                  </g>
                                </svg>
                              </span>
                              <input
                                className="w-full rounded border border-stroke bg-gray mb-4 py-3 pl-10 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary hover:cursor-not-allowed"
                                type="email"
                                value={accHolder.email}
                                readOnly
                              />
                            </div>
                          </div>
                          {/* member or not  */}
                          <div className="mb-5.5 mt-3">
                            <div className="flex gap-2">
                              <label
                                className=" block text-sm font-medium text-black "
                                // htmlFor="emailAddress"
                              >
                                Subscription
                              </label>

                              <div className="group">
                                {/* Icon */}
                                <div className=" cursor-pointer">
                                  <FontAwesomeIcon icon={faEye} />
                                </div>
                                {/* Hover Content */}
                                <div className="absolute z-10 transform -translate-x-1/2 hidden group-hover:block bg-white text-gray-800 p-4 rounded-md shadow-md w-64">
                                  {accHolder.member ? (
                                    <p>
                                      you are a member of 603 the coworking
                                      space
                                    </p>
                                  ) : (
                                    <p>
                                      Become a member to get all the 603 member
                                      benefits contatus to know more +91
                                      9136036603
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="relative">
                              <input
                                className="w-full rounded border border-stroke bg-gray mb-4 py-3 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary hover:cursor-not-allowed"
                                type="text"
                                value={subscriptionText}
                                readOnly
                              />
                            </div>
                          </div>

                          <div className="mb-5.5">
                            <label
                              className=" block text-sm font-medium text-black"
                              htmlFor="Username"
                            >
                              Username
                            </label>
                            <input
                              className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                              type="text"
                              name="Username"
                              id="Username"
                              placeholder={accHolder.username}
                              defaultValue={accHolder.username}
                            />
                          </div>
                        </form>
                      </div>
                      {/* password change section */}
                      <div className="border-b border-stroke py-4 px-7 dark:border-strokedark flex justify-between ">
                        <h3 className="font-medium text-black dark:text-black">
                          password change
                        </h3>
                        {arrow ? (
                          <IoIosArrowDropdown
                            // size="2x"
                            style={{ width: "50px", height: "40px" }}
                            onClick={handledropdown}
                          />
                        ) : (
                          <IoIosArrowDropup
                            style={{ width: "50px", height: "40px" }}
                            onClick={handledropup}
                          />
                        )}
                      </div>
                      {passwordchange && (
                        <form onSubmit={handlePasswordChange}>
                          <div className="w-full sm:w-1/2 ml-4">
                            <label className=" block text-sm font-medium text-black">
                              Old password
                            </label>
                            <input
                              className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                              type="password"
                              value={oldPassword}
                              onChange={(e) => setOldPassword(e.target.value)}
                              placeholder="old password"
                            />
                          </div>
                          <div className="w-full sm:w-1/2 ml-4">
                            <label className=" block text-sm font-medium text-black">
                              New password
                            </label>
                            <input
                              className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                              type="password"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              placeholder="password"
                            />
                          </div>
                          <div className="w-full sm:w-1/2 ml-4">
                            <label className=" block text-sm font-medium text-black">
                              Confirm password
                            </label>
                            <input
                              className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                              type="password"
                              value={confirmPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              placeholder="password"
                            />
                          </div>
                          <button
                            className="mt-4 flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90 ml-5"
                            type="submit"
                          >
                            Save changes
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {newDashboard && (
            <>
              <div
                className={`flex flex-col items-center ${
                  windowWidth > 440 ? "p-16" : "px-4 pt-16 pb-4"
                }`}
              >
                <div className="bg-white shadow-lg rounded-lg p-8 mt-8  max-w-lg">
                  <h1 className="font-bold text-center mb-4">
                    Booking Dashboard
                  </h1>
                  <p className="text-sm text-center text-gray-500 mb-6">
                    select the location{" "}
                  </p>
                  <div className="flex gap-4 justify-evenly flex-col ">
                    <div className="flex gap-2">
                      <select
                        id="location"
                        value={selectedPlace}
                        onChange={handleplaceChange}
                      >
                        <option value="" disabled>
                          {" "}
                          select location
                        </option>
                        <option value="All"> All</option>
                        <option value="Mumbai"> Mumbai</option>
                        <option value="Navi Mumbai"> Navi Mumbai </option>
                        <option value="Ahmedabad"> Ahmedabad </option>
                      </select>
                      <select
                        id="BookingType"
                        value={selectedBookingType}
                        onChange={handleBookingTypeChange}
                      >
                        <option value=""> Booking Type</option>
                        <option value="Meeting"> Meeting Room</option>
                        <option value="conference"> conference Room</option>
                        <option value="Daypass"> Daypass</option>
                      </select>
                    </div>

                    <div className="flex justify-center">
                      <button
                        className="btn bg-red-600 "
                        onClick={handleBookingSearch}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {locations && (
                <LocationComponent
                  key={selectedPlace}
                  value={{
                    key: selectedPlace,
                    selectedCity: selectedPlace,
                    spacetype: selectedBookingType,
                  }}
                />
              )}
            </>
          )}

          {transacton && <Mobiletransactions />}
        </div>
      )}
    </>
  );
};
export default Dashboard;
