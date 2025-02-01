import { useState, useEffect } from "react";
// import DashNavbar from "../components/DashBoardNavbar/DashNavbar";
import axios from "axios";
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
import { FaUserCircle } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
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
  console.log(accHolder);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const PORT = "https://603-bcakend-new.vercel.app";
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
      const response = await axios.put(
        `${PORT}/api/v1/users/changepassword`,
        { newPassword, oldPassword, token },
        { withCredentials: true }
      );
      console.log(response, "dmompdkp");
      if (response.data.msg === "Password changed successfully") {
        toast.success("Password changed successfully");
      } else {
        toast.success("Wrong details");
      }
      // setPasswordChange(false);
      setConfirmPassword("");
      setNewPassword("");
      setOldPassword("");
      console.log("Password changed:", { oldPassword, newPassword });
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
      const res = await axios.post(
        `${PORT}/api/v1/auth/logout`,
        {}, // Empty object if no body is needed
        {
          withCredentials: true,
        }
      );
      console.log(res);
      localStorage.removeItem("user");
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

  //message for subscription
  let subscriptionText = accHolder.member ? `A Member` : `Not A Member`;

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

  const toTransactions = () => {
    navigate("/dashboard/Transactions");
  };

  return (
    <>
      {/* navbar for mobile */}
      <div className="fixed top-0 h-[4rem] py-3.5 px-2 flex justify-around sm:justify-between items-center w-full z-10 border-b-2 border-[#f6e05e] bg-[#fff] shadow-md">
        <div className="flex gap-2 sm:justify-start">
          <img src={logo} alt="Logo" className="w-auto h-[36px]" />
          <div
            className={`flex items-center font-[700] text-[#4a5568] ${
              windowWidth > 400 ? "text-lg" : "text-sm"
            }`}
          >
            603 The Coworking Space
          </div>
        </div>
        {/* div only for the daypass logout and  */}
        <div className="flex justify-between items-center gap-4">
          {/* <div
            className="cursor-pointer hidden sm:block  text-gray-600"
            onClick={() => {
              navigate("/booknow");
            }}
          >
            Day Passes
          </div> */}

          {!accHolder.kyc && (
            <div
              className="hidden sm:block cursor-pointer text-gray-600"
              onClick={() => {
                navigate("/kycform");
              }}
            >
              KYC form
            </div>
          )}

          <div
            className="cursor-pointer hidden sm:block text-gray-600"
            onClick={toTransactions}
          >
            My Bookings
          </div>
          <div onClick={logout} className="hidden sm:block cursor-pointer">
            Logout
          </div>
        </div>
        <FiMenu
          size="24"
          onClick={() => setIsSideWindowOpen(true)}
          className="cursor-pointer sm:hidden"
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

              // navigate("/dashboard/Myprofile");
              setMyprofile(true);
              setNewDashboard(false);
              // setbookingdashboard(false);
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
              // navigate("/dashboard/Myprofile");
              setMyprofile(false);
              setNewDashboard(true);
              // setbookingdashboard(false);
              setTransacton(false);
            }}
          >
            {" "}
            Dashboard
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
              // setbookingdashboard(false);
            }}
          >
            {" "}
            My bookings
          </div>
          {!accHolder.kyc && (
            <div
              style={sideLinkStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
              onClick={() => {
                navigate("/kycform");
              }}
            >
              KYC form
            </div>
          )}

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

      {/* mobile view */}
      <div className="sm:hidden">
        {newDashboard && (
          <>
            <div className={`flex flex-col items-center px-4 pt-4 pb-4`}>
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
        {/* prfile */}
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
                                // name="fullName"
                                // id="fullName"
                                // placeholder={accHolder.companyName}
                                // defaultValue={accHolder.companyName}
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
                              // name="emailAddress"
                              // id="emailAddress"
                              // placeholder={accHolder.email}
                              // defaultValue={accHolder.email}
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
                                    you are a member of 603 the coworking space
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
                              // name="emailAddress"
                              // id="emailAddress"
                              // placeholder={accHolder.email}
                              // defaultValue={accHolder.email}
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
                          <label
                            className=" block text-sm font-medium text-black"
                            // htmlFor="phoneNumber"
                          >
                            Old password
                          </label>
                          <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            // name="phoneNumber"
                            // id="phoneNumber"
                            placeholder="old password"
                            // defaultValue={accHolder.phone}
                          />
                        </div>
                        <div className="w-full sm:w-1/2 ml-4">
                          <label
                            className=" block text-sm font-medium text-black"
                            // htmlFor="phoneNumber"
                          >
                            New password
                          </label>
                          <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            // name="phoneNumber"
                            // id="phoneNumber"
                            placeholder="password"
                            // defaultValue={accHolder.phone}
                          />
                        </div>
                        <div className="w-full sm:w-1/2 ml-4">
                          <label
                            className=" block text-sm font-medium text-black"
                            // htmlFor="phoneNumber"
                          >
                            Confirm password
                          </label>
                          <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            // name="phoneNumber"
                            // id="phoneNumber"
                            placeholder="password"
                            // defaultValue={accHolder.phone}
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
        {/* transaction */}
        {transacton && <Mobiletransactions />}
      </div>

      {/* sidebar */}
      <div className="hidden sm:flex justify-between relative h-[calc(100vh-4rem)] top-[4rem]  ">
        {/* div for sidebar */}
        <div className="fixed left-0 top-[4rem] bg-gray-100  h-full w-[180px] lg:w-[220px]">
          {/* div for list */}
          <div className="pt-5">
            <ul className="font-medium text-base lg:text-xl">
              <li className="p-2 pb-4">
                <button
                  onClick={handleNewDashboard}
                  className="flex items-center justify-around group"
                >
                  <MdDashboardCustomize />

                  <span className="ms-3 text-black  ">Dashboard</span>
                </button>
              </li>
              <li className="p-2">
                <button
                  onClick={handleprofile}
                  className="flex items-center justify-around group"
                >
                  <FaUserCircle />
                  <span className="ms-3 text-black">My Profile</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* div for content  */}
        <div className=" w-[calc(100vw-190px)] lg:w-[calc(100vw-230px)] absolute right-0">
          {/* booking dashboard */}

          {newDashboard && (
            <>
              <div className={`flex flex-col items-center `}>
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
              </div>

              {/* {locations && (
                <LocationComponent
                  key={selectedPlace}
                  value={{
                    key: selectedPlace,
                    selectedCity: selectedPlace,
                    spacetype: selectedBookingType,
                  }}
                />
              )} */}
            </>
          )}
          {/* myprofile */}
          {myprofile && (
            <>
              <div className="mx-auto max-w-270 mt-10">
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
                                  // name="fullName"
                                  // id="fullName"
                                  // placeholder={accHolder.companyName}
                                  // defaultValue={accHolder.companyName}
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
                                // name="emailAddress"
                                // id="emailAddress"
                                // placeholder={accHolder.email}
                                // defaultValue={accHolder.email}
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
                                // name="emailAddress"
                                // id="emailAddress"
                                // placeholder={accHolder.email}
                                // defaultValue={accHolder.email}
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
                            <label
                              className=" block text-sm font-medium text-black"
                              // htmlFor="phoneNumber"
                            >
                              Old password
                            </label>
                            <input
                              className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                              type="password"
                              value={oldPassword}
                              onChange={(e) => setOldPassword(e.target.value)}
                              // name="phoneNumber"
                              // id="phoneNumber"
                              placeholder="old password"
                              // defaultValue={accHolder.phone}
                            />
                          </div>
                          <div className="w-full sm:w-1/2 ml-4">
                            <label
                              className=" block text-sm font-medium text-black"
                              // htmlFor="phoneNumber"
                            >
                              New password
                            </label>
                            <input
                              className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                              type="password"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              // name="phoneNumber"
                              // id="phoneNumber"
                              placeholder="password"
                              // defaultValue={accHolder.phone}
                            />
                          </div>
                          <div className="w-full sm:w-1/2 ml-4">
                            <label
                              className=" block text-sm font-medium text-black"
                              // htmlFor="phoneNumber"
                            >
                              Confirm password
                            </label>
                            <input
                              className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                              type="password"
                              value={confirmPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              // name="phoneNumber"
                              // id="phoneNumber"
                              placeholder="password"
                              // defaultValue={accHolder.phone}
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
        </div>
      </div>
    </>
  );
};

export default Dashboard;
