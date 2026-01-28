// import { IoIosCall } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdMore } from "react-icons/io";
import { logo } from "../../utils/Landing/Landing";
import { useApp } from "../../context/AuthContext";
// import axios from "axios";
import toast from "react-hot-toast";
import { FaRegUser, FaPhoneAlt, FaAngleDown, FaAngleUp } from "react-icons/fa";

import "./../../index.css";
import axiosInstance from "../../utils/axiosInstance";

const Navbar = () => {
  const [path, setPath] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  // const PORT = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const currentPath = window.location.pathname;
    setPath(currentPath);
  }, []);
  const [isLocationsDropdownVisible, setLocationsDropdownVisible] =
    useState(false);
  const [isMumbaiDropdownVisible, setMumbaiDropdownVisible] = useState(false);
  const [isNaviMumbaiDropdownVisible, setNaviMumbaiDropdownVisible] =
    useState(false);
  const [isAhmedabadDropdownVisible, setAhmedabadDropdownVisible] =
    useState(false);
  const [isManagedSpaceDropdownVisible, setManagedSpaceDropdownVisible] =
    useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { setIsAuthenticated, setloading, setAccHolder } = useApp();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logout = async () => {
    try {
      setloading(true);
      await axiosInstance.post(`/api/v1/auth/logout`, {});
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      toast.success("User logged out");
      setIsAuthenticated(false);
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
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setloading(false);
    }
  };

  let timeoutId: NodeJS.Timeout;

  const { isAuthenticated } = useApp();

  const navigate = useNavigate();

  return (
    <>
      <div
        onMouseLeave={() => {
          setManagedSpaceDropdownVisible(false);
          setLocationsDropdownVisible(false);
        }}
        // className="bg-gradient-to-r from-yellow-100 to-blue-200 navbar font-sans text-lg leading-8 tracking-normal text-gray-700 w-screen fixed border-b-2 border-yellow-400 shadow-xl py-[1px] z-50 flex items-center font-medium backdrop-filter backdrop-blur-md  pl-20 pr-10  "
        className=" bg-gradient-to-r from-yellow-100 to-blue-200 navbar font-sans text-lg leading-8 tracking-normal text-gray-700 w-screen fixed border-b-2 border-yellow-400 shadow-xl  z-50 flex items-center  font-medium backdrop-filter backdrop-blur-md  lg:pl-20 lg:pr-10 "
      >
        {/* mobile version  */}
        <div>
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-64 shadow-2xl"
              // className=" dropdown-content bg-base-100 rounded-box z-50 mt-3 w-64 shadow-2xl"
            >
              <li className="border-b-[1px] border-gray-300 py-1">
                <summary className="cursor-pointer hover:text-yellow-500 border-2 border-transparent flex justify-between">
                  <div
                    className="text-base"
                    onClick={() => {
                      navigate("/allLocations");
                    }}
                  >
                    Locations
                  </div>
                  <div
                    style={{
                      backgroundColor: "#f0f0f0",
                      padding: "3px",
                      borderRadius: "50%",
                    }}
                  >
                    <IoMdMore
                      size={23}
                      onClick={() => {
                        setLocationsDropdownVisible(true);
                        setManagedSpaceDropdownVisible(false);
                      }}
                    />
                  </div>
                </summary>
                <ul
                  className={`p-2 w-40 absolute left-0 mt-7 bg-white shadow-lg rounded z-50 transition-all duration-200 ${
                    isLocationsDropdownVisible
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <li
                    className="border-b-[1px] border-gray-300 py-1"
                    onMouseEnter={() => {
                      clearTimeout(timeoutId);
                      setMumbaiDropdownVisible(true);
                      setNaviMumbaiDropdownVisible(false);
                      setAhmedabadDropdownVisible(false);
                    }}
                    onMouseLeave={() => {
                      timeoutId = setTimeout(
                        () => setMumbaiDropdownVisible(false),
                        1000,
                      );
                    }}
                  >
                    <summary className="py-2 hover:text-yellow-500 border-2 border-transparent text-base">
                      Mumbai
                    </summary>
                    <ul
                      className={`w-56 p-2 absolute left-10 top-0 bg-white shadow-lg rounded z-50 transition-all duration-200 ${
                        isMumbaiDropdownVisible
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      } overflow-y-auto max-h-60`}
                    >
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          className="text-base"
                          onClick={() => {
                            navigate("/locations/Matulya-Centre");
                          }}
                        >
                          Matulya Centre, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          className="text-base"
                          onClick={() => {
                            navigate("/locations/Sun-Mill-Compound");
                          }}
                        >
                          Sun Mill Compound, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          className="text-base"
                          onClick={() => {
                            navigate("/locations/Kamala-Mills");
                          }}
                        >
                          Kamala Mills, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          className="text-base"
                          onClick={() => {
                            navigate("/locations/Sunshine-Tower");
                          }}
                        >
                          Sunshine Tower, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          className="text-base"
                          onClick={() => {
                            navigate("/locations/Amore-Centre");
                          }}
                        >
                          Amore Centre, Khar
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          className="text-base"
                          onClick={() => {
                            navigate("/locations/Makhija-Archade");
                          }}
                        >
                          Makhija Archade, Bandra
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          className="text-base"
                          onClick={() => {
                            navigate("/locations/Pinnacle-Corporate-Park");
                          }}
                        >
                          Pinnacle Corporate Park, BKC
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          className="text-base"
                          onClick={() => {
                            navigate("/locations/Pentagon-Classic");
                          }}
                        >
                          Classic Pentagon,Andheri
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          className="text-base"
                          onClick={() => {
                            navigate("/locations/Lawyers-Chamber");
                          }}
                        >
                          Lawyers Chamber,Fort
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          className="text-base"
                          onClick={() => {
                            navigate("/locations/TradeLink");
                          }}
                        >
                          Trade Link ,Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          className="text-base"
                          onClick={() => {
                            navigate("/locations/MarathonFuturex");
                          }}
                        >
                          Marathon Futurex,Lower Parel
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="relative group border-b border-gray-300"
                    onMouseEnter={() => {
                      clearTimeout(timeoutId);
                      setNaviMumbaiDropdownVisible(true);
                      setMumbaiDropdownVisible(false);
                      setAhmedabadDropdownVisible(false);
                    }}
                    onMouseLeave={() => {
                      timeoutId = setTimeout(
                        () => setNaviMumbaiDropdownVisible(false),
                        1000,
                      );
                    }}
                  >
                    <summary className="py-2 hover:text-yellow-500 border-2 border-transparent text-base">
                      Navi Mumbai
                    </summary>
                    <ul
                      className={`left-10 p-2 w-60 absolute top-0 ml-2 bg-white shadow-lg rounded z-50 transition-all duration-200 ${
                        isNaviMumbaiDropdownVisible
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      } overflow-y-auto max-h-60`}
                    >
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          className="text-base"
                          onClick={() => {
                            navigate("/locations/Millenium-Business-Park");
                          }}
                        >
                          Millenium Business Park
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500">
                        <button
                          className="text-base"
                          onClick={() => {
                            navigate("/locations/Technocity");
                          }}
                        >
                          Technocity
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="relative group"
                    onMouseEnter={() => {
                      clearTimeout(timeoutId);
                      setAhmedabadDropdownVisible(true);
                      setMumbaiDropdownVisible(false);
                      setNaviMumbaiDropdownVisible(false);
                    }}
                    onMouseLeave={() => {
                      timeoutId = setTimeout(
                        () => setAhmedabadDropdownVisible(false),
                        1000,
                      );
                    }}
                  >
                    <summary className="py-2 hover:text-yellow-500 border-2 border-transparent text-base">
                      Ahmedabad
                    </summary>
                    <ul
                      className={`p-2 w-60 absolute left-10 top-0 ml-2 bg-white shadow-lg rounded z-50 transition-all duration-200 ${
                        isAhmedabadDropdownVisible
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      } overflow-y-auto max-h-60`}
                    >
                      <li className="py-2 hover:text-yellow-500">
                        <button
                          className="text-base"
                          onClick={() => {
                            navigate("/locations/Navratna-Corporate-Park");
                          }}
                        >
                          Navratna Corporate Park, Ahmedabad
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="border-b-[1px] border-gray-300 py-1">
                <button
                  className="text-base"
                  onClick={() => {
                    navigate("/service");
                  }}
                >
                  Services
                </button>
              </li>
              <li className="border-b-[1px] border-gray-300 py-1">
                <summary className="cursor-pointer hover:text-yellow-500 border-2 border-transparent">
                  <div
                    className="text-base"
                    onClick={() => {
                      navigate("/managed_space_solutions");
                    }}
                  >
                    Managed Space Solutions
                  </div>
                  <div
                    style={{
                      backgroundColor: "#f0f0f0",
                      padding: "3px",
                      borderRadius: "50%",
                    }}
                  >
                    <IoMdMore
                      size={23}
                      onClick={() => {
                        setLocationsDropdownVisible(false);
                        setManagedSpaceDropdownVisible(true);
                      }}
                    />
                  </div>
                </summary>
                <ul
                  className={`p-2 w-60 absolute left-0 mt-7 bg-white shadow-lg rounded z-50 transition-all duration-200 ease-in-out transform ${
                    isManagedSpaceDropdownVisible
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  } overflow-y-auto max-h-60`}
                >
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                    <button
                      className="text-base"
                      onClick={() => {
                        navigate("/603-Lodha-Supremus-Center");
                      }}
                    >
                      603 Lodha Supremus Center (Thane)
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                    <button
                      className="text-base"
                      onClick={() => {
                        navigate("/Naman-Midtown-Center");
                      }}
                    >
                      Naman Midtown Center (Dadar)
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500">
                    <button
                      className="text-base"
                      onClick={() => {
                        navigate("/603-MBC-Center");
                      }}
                    >
                      603 MBC Center (Thane)
                    </button>
                  </li>
                </ul>
              </li>
              <li className="border-b-[1px] border-gray-300 py-1">
                <button
                  className="text-base"
                  onClick={() => {
                    navigate("/partner-with-us");
                  }}
                >
                  Partners
                </button>
              </li>
              <li className="border-b-[1px] border-gray-300 py-1">
                <button
                  className="text-base"
                  onClick={() => {
                    navigate("/contactus");
                  }}
                >
                  Contact Us
                </button>
              </li>
              <li className="border-b-[1px] border-gray-300 py-1">
                <button
                  onClick={() => {
                    navigate("/603villa");
                  }}
                  className="text-base hover:underline"
                >
                  603 Villas
                </button>
              </li>
              <li className=" py-1">
                <button
                  onClick={() => {
                    navigate("/603Interior");
                  }}
                  className="text-base hover:underline"
                >
                  Workved Interior
                </button>
              </li>
            </ul>
          </div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo} className="h-15 w-40" />
          </button>
        </div>
        {/* desktop version */}
        <div className="navbar-center hidden lg:flex lg:justify-between">
          {/* <ul className="menu menu-horizontal"> */}
          <ul className="flex items-center gap-5 text-sm">
            {/* <ul className=""> */}
            <li
              onMouseEnter={() => {
                clearTimeout(timeoutId);
                setLocationsDropdownVisible(true);
                setManagedSpaceDropdownVisible(false);
              }}
              onMouseLeave={() => {
                timeoutId = setTimeout(
                  () => setLocationsDropdownVisible(false),
                  7000,
                );
              }}
              // className="relative group  hover:bg-blue-500 active:bg-green-500"
              className="relative group "
            >
              <summary
                onMouseEnter={() => setIsHovered(true)} // Set hover state to true when mouse enters
                onMouseLeave={() => setIsHovered(false)} // Set hover state to false when mouse leaves
                // className="cursor-pointer py-2 hover:text-yellow-500 border-2 border-transparent"
                className="flex ml-4 items-center cursor-pointer py-2 hover:underline border-2 border-transparent "
                onClick={() => {
                  setLocationsDropdownVisible(!isLocationsDropdownVisible);
                  navigate("/allLocations");
                }}
              >
                Locations
                {isHovered ? <FaAngleUp /> : <FaAngleDown />}
              </summary>
              {isLocationsDropdownVisible && (
                <ul
                  className={`p-2 w-56 absolute left-0  bg-white shadow-lg rounded-lg z-50 transition-opacity duration-300 ease-in-out ${
                    isLocationsDropdownVisible
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                    <button
                      onClick={() => {
                        navigate("/locations/Matulya-Centre");
                      }}
                    >
                      Matulya Centre, Lower Parel
                    </button>
                  </li>

                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                    <button
                      className="text-left block whitespace-normal"
                      onClick={() => {
                        navigate("/locations/Sun-Mill-Compound");
                      }}
                    >
                      Sun Mill Compound, Lower Parel
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                    <button
                      onClick={() => {
                        navigate("/locations/Kamala-Mills");
                      }}
                    >
                      Kamala Mills, Lower Parel
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                    <button
                      onClick={() => {
                        navigate("/locations/Sunshine-Tower");
                      }}
                    >
                      Sunshine Tower, Lower Parel
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                    <button
                      onClick={() => {
                        navigate("/locations/Amore-Centre");
                      }}
                    >
                      Amore Centre, Khar
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                    <button
                      onClick={() => {
                        navigate("/locations/Makhija-Archade");
                      }}
                    >
                      Makhija Archade, Bandra
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                    <button
                      onClick={() => {
                        navigate("/locations/Pinnacle-Corporate-Park");
                      }}
                    >
                      Pinnacle Corporate Park, BKC
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                    <button
                      onClick={() => {
                        navigate("/locations/Pentagon-Classic");
                      }}
                    >
                      Classic Pentagon,Andheri
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300  ">
                    <button
                      // className="text-base"
                      onClick={() => {
                        navigate("/locations/Lawyers-Chamber");
                      }}
                    >
                      Lawyers Chamber,Fort
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300  ">
                    <button
                      // className="text-base"
                      onClick={() => {
                        navigate("/locations/TradeLink");
                      }}
                    >
                      Trade Link ,Lower Parel
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300  ">
                    <button
                      // className="text-base"
                      className="text-left block whitespace-normal"
                      onClick={() => {
                        navigate("/locations/MarathonFuturex");
                      }}
                    >
                      Marathon Futurex ,Lower Parel
                    </button>
                  </li>
                  <li className="py-2   hover:text-yellow-500 border-b border-gray-300">
                    <button
                      className="text-left block whitespace-normal"
                      onClick={() => {
                        navigate("/locations/Millenium-Business-Park");
                      }}
                    >
                      Millenium Business Park
                    </button>
                  </li>
                  <li className="py-2   hover:text-yellow-500 border-b border-gray-300">
                    <button
                      onClick={() => {
                        navigate("/locations/Technocity");
                      }}
                    >
                      Technocity
                    </button>
                  </li>
                  <li className="py-2  hover:text-yellow-500 text-left">
                    <button
                      className="text-left block whitespace-normal"
                      onClick={() => {
                        navigate("/locations/Navratna-Corporate-Park");
                      }}
                    >
                      Navratna Corporate Park, Ahmedabad
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/service");
                }}
                className="hover:underline"
              >
                Services
              </button>
            </li>
            <li
              onMouseEnter={() => {
                clearTimeout(timeoutId);
                setManagedSpaceDropdownVisible(true);
                setLocationsDropdownVisible(false);
              }}
              onMouseLeave={() => {
                timeoutId = setTimeout(
                  () => setManagedSpaceDropdownVisible(false),
                  2000,
                );
              }}
              className="relative group"
            >
              <summary
                onMouseEnter={() => setIsHovered(true)} // Set hover state to true when mouse enters
                onMouseLeave={() => setIsHovered(false)} // Set hover state to false when mouse leaves
                onClick={() => navigate("/managed_space_solutions")}
                className="flex items-center cursor-pointer py-2 hover:underline "
              >
                Managed Space Solutions
                {isHovered ? <FaAngleUp /> : <FaAngleDown />}
              </summary>
              <ul
                className={`p-2 w-60 absolute  bg-white shadow-lg rounded-lg transition-opacity duration-300 ease-in-out z-50 ${
                  isManagedSpaceDropdownVisible
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                } overflow-y-auto max-h-96`}
              >
                <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                  <button
                    onClick={() => {
                      navigate("/603-Lodha-Supremus-Center");
                    }}
                  >
                    603 Lodha Supremus Center (Thane)
                  </button>
                </li>
                <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                  <button
                    onClick={() => {
                      navigate("/Naman-Midtown-Center");
                    }}
                  >
                    Naman Midtown Center (Dadar)
                  </button>
                </li>
                <li className="py-2 hover:text-yellow-500">
                  <button
                    onClick={() => {
                      navigate("/603-MBC-Center");
                    }}
                  >
                    603 MBC Center (Thane)
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/partner-with-us");
                }}
                className="hover:underline"
              >
                Partners
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/contactus");
                }}
                className="hover:underline"
              >
                Contact Us
              </button>
            </li>
            <li className="relative">
              <button
                onClick={() => {
                  navigate("/603villa");
                }}
                className="font-bold hover:underline "
              >
                603 Villas
              </button>
            </li>
            <li className="relative">
              <button
                onClick={() => {
                  navigate("/603Interior");
                }}
                className="font-bold hover:underline "
              >
                Workved Interior
              </button>
              <span className="absolute -top-2  text-red-500">New</span>
            </li>
          </ul>
        </div>

        {/* login part  */}
        <div className="w-full flex justify-end gap-2">
          {isAuthenticated ? (
            <span
              onClick={() => (window.location.href = "tel:+919136036603")}
              className=" cursor-pointer font-bold-400 text-sm hover:text-500 hover:underline  border-transparent pr-5 flex items-center "
            >
              <FaPhoneAlt />
              {windowWidth > 450 && "+91-9136036603"}
            </span>
          ) : (
            path != "/login" &&
            path != "/admin/login" && (
              <span className=" cursor-pointer font-bold-400 text-sm hover:text-500 hover:underline  border-transparent pr-5 flex items-center ">
                <FaPhoneAlt />
                {windowWidth > 450 && "+91-9136036603"}
              </span>
            )
          )}
          {isAuthenticated && (
            <button
              onClick={logout}
              className=" cursor-pointer font-bold-400 text-sm hover:text-500 hover:underline  border-transparent pr-5"
            >
              logout
            </button>
          )}
          {isAuthenticated ? (
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              <FaRegUser size={25} />
            </button>
          ) : (
            path != "/login" &&
            path != "/admin/login" && (
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className=" cursor-pointer font-bold-400 text-sm hover:text-500 hover:underline  border-transparent pr-5"
              >
                Login
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
