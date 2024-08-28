import { IoIosCall } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdMore } from "react-icons/io";
import { logo } from "../../utils/Landing/Landing";

const Navbar = () => {
  const [path, setPath] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname;
    setPath(currentPath);
  }, []);
  const [isLocationsDropdownVisible, setLocationsDropdownVisible] =
    useState(false);
  const [isMumbaiDropdownVisible, setMumbaiDropdownVisible] = useState(false);
  const [isNaviMumbaiDropdownVisible, setNaviMumbaiDropdownVisible] =
    useState(false);
  const [isBangaloreDropdownVisible, setBangaloreDropdownVisible] =
    useState(false);
  const [isAhmedabadDropdownVisible, setAhmedabadDropdownVisible] =
    useState(false);
  const [isManagedSpaceDropdownVisible, setManagedSpaceDropdownVisible] =
    useState(false);

  let timeoutId: NodeJS.Timeout;

  const navigate = useNavigate();

  return (
    <>
      <div onMouseLeave={() => {
        setManagedSpaceDropdownVisible(false);
        setLocationsDropdownVisible(false);
      }} className="navbar bg-base-100 font-sans text-lg leading-8 tracking-normal text-gray-700 w-screen fixed border-b-2 border-yellow-400 shadow-2xl py-2 z-50 flex items-center font-medium ">


        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            >
              <li className="border-b-[1px] border-gray-300 py-1">
                <button className="text-base" onClick={() => { navigate("/") }}>Home</button>
              </li>
              <li className="border-b-[1px] border-gray-300 py-1">
                <button className="text-base" onClick={() => { navigate("/about-us") }}>About Us</button>
              </li>
              <li className="border-b-[1px] border-gray-300 py-1">
                <summary className="cursor-pointer hover:text-yellow-500 border-2 border-transparent flex justify-between">
                  <div className="text-base" onClick={() => { navigate("/allLocations") }}>
                    Locations
                  </div>
                  <div style={{ backgroundColor: "#f0f0f0", padding: "3px", borderRadius: "50%" }}>
                    <IoMdMore size={23} onClick={() => {
                      setLocationsDropdownVisible(true);
                      setManagedSpaceDropdownVisible(false);
                    }} />
                  </div>
                </summary>
                <ul
                  className={`p-2 w-40 absolute left-0 mt-7 bg-white shadow-lg rounded z-50 transition-all duration-200 ${isLocationsDropdownVisible
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
                      setBangaloreDropdownVisible(false);
                      setAhmedabadDropdownVisible(false);
                    }}
                    onMouseLeave={() => {
                      timeoutId = setTimeout(() => setMumbaiDropdownVisible(false), 1000);
                    }}
                  >
                    <summary className="py-2 hover:text-yellow-500 border-2 border-transparent text-base">
                      Mumbai
                    </summary>
                    <ul
                      className={`w-56 p-2 absolute left-10 top-0 bg-white shadow-lg rounded z-50 transition-all duration-200 ${isMumbaiDropdownVisible
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                        } overflow-y-auto max-h-60`}
                    >

                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button className="text-base"
                          onClick={() => { navigate("/locations/Matulya-Centre") }}
                        >
                          Matulya Centre, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300 ">
                        <button className="text-base" onClick={() => { navigate("/locations/Marathon") }}>
                          Marathon, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button className="text-base"
                          onClick={() => {
                          
                            navigate("/locations/Sun-Mill-Compound")
                          }}
                        >
                          Sun Mill Compound, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button className="text-base"
                          onClick={() => { navigate("/locations/Kamala-Mills") }}
                        >
                          Kamala Mills, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button className="text-base"
                          onClick={() => { navigate("/locations/Sunshine-Tower") }}
                        >
                          Sunshine Tower, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button className="text-base"
                          onClick={() => { navigate("/locations/Amore-Centre") }}
                        >
                          Amore Centre, Khar
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button className="text-base"
                          onClick={() => { navigate("/locations/Makhija-Archade") }}
                        >
                          Makhija Archade, Bandra
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button className="text-base" onClick={() => { navigate("/locations/MIDC") }}>
                          MIDC, Andheri
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500">
                        <button className="text-base"
                          onClick={() => {
                          
                            navigate("/locations/Pinnacle-Corporate-Park")
                          }}
                        >
                          Pinnacle Corporate Park, BKC
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
                      setBangaloreDropdownVisible(false);
                      setAhmedabadDropdownVisible(false);
                    }}
                    onMouseLeave={() => {
                      timeoutId = setTimeout(() => setNaviMumbaiDropdownVisible(false), 1000);
                    }}
                  >
                    <summary className="py-2 hover:text-yellow-500 border-2 border-transparent text-base">
                      Navi Mumbai
                    </summary>
                    <ul
                      className={`left-10 p-2 w-60 absolute top-0 ml-2 bg-white shadow-lg rounded z-50 transition-all duration-200 ${isNaviMumbaiDropdownVisible
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                        } overflow-y-auto max-h-60`}
                    >
                      <li className="py-2 hover:text-yellow-500">
                        <button className="text-base"
                          onClick={() => {
                          
                            navigate("/locations/Millenium-Business-Park")
                          }}
                        >
                          Millenium Business Park
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="relative group border-b border-gray-300"
                    onMouseEnter={() => {
                      clearTimeout(timeoutId);
                      setBangaloreDropdownVisible(true);
                      setMumbaiDropdownVisible(false);
                      setNaviMumbaiDropdownVisible(false);
                      setAhmedabadDropdownVisible(false);
                    }}
                    onMouseLeave={() => {
                      timeoutId = setTimeout(() => setBangaloreDropdownVisible(false), 1000);
                    }}
                  >
                    <summary className="py-2 hover:text-yellow-500 border-2 border-transparent text-base">
                      Bangalore
                    </summary>
                    <ul
                      className={`p-2 w-60 absolute left-10 top-0 ml-2 bg-white shadow-lg rounded z-50 transition-all duration-200 ${isBangaloreDropdownVisible
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                        } overflow-y-auto max-h-60`}
                    >
                      <li className="py-2 hover:text-yellow-500">
                        <button className="text-base"
                          onClick={() => {
                          
                            navigate("/locations/Diamond-District")
                          }}
                        >
                          Diamond District, Domlar
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
                      setBangaloreDropdownVisible(false);
                      setNaviMumbaiDropdownVisible(false);
                    }}
                    onMouseLeave={() => {
                      timeoutId = setTimeout(() => setAhmedabadDropdownVisible(false), 1000);
                    }}
                  >
                    <summary className="py-2 hover:text-yellow-500 border-2 border-transparent text-base">
                      Ahmedabad
                    </summary>
                    <ul
                      className={`p-2 w-60 absolute left-10 top-0 ml-2 bg-white shadow-lg rounded z-50 transition-all duration-200 ${isAhmedabadDropdownVisible
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                        } overflow-y-auto max-h-60`}
                    >
                      <li className="py-2 hover:text-yellow-500">
                        <button className="text-base"
                          onClick={() => {
                          
                            navigate("/locations/Navratna-Corporate-Park")
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
                <button className="text-base" onClick={() => { navigate("/service") }}>Services</button>
              </li>
              <li className="border-b-[1px] border-gray-300 py-1">
                <summary className="cursor-pointer hover:text-yellow-500 border-2 border-transparent">
                  <div className="text-base" onClick={() => { navigate("/managed_space_solutions") }}>
                    Managed Space Solutions
                  </div>
                  <div style={{ backgroundColor: "#f0f0f0", padding: "3px", borderRadius: "50%" }}>
                    <IoMdMore size={23} onClick={() => {
                      setLocationsDropdownVisible(false);
                      setManagedSpaceDropdownVisible(true);
                    }} />
                  </div>
                </summary>
                <ul
                  className={`p-2 w-60 absolute left-0 mt-7 bg-white shadow-lg rounded z-50 transition-all duration-200 ease-in-out transform ${isManagedSpaceDropdownVisible
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2"
                    } overflow-y-auto max-h-60`}
                >
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                    <button className="text-base" onClick={() => { navigate("/603-Lodha-Supremus-Center") }}>
                      603 Lodha Supremus Center (Thane)
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                    <button className="text-base" onClick={() => { navigate("/Naman-Midtown-Center") }}>
                      Naman Midtown Center (Dadar)
                    </button>
                  </li>
                  <li className="py-2 hover:text-yellow-500">
                    <button className="text-base" onClick={() => { navigate("/603-MBC-Center") }}>
                      603 MBC Center (Thane)
                    </button>
                  </li>
                </ul>
              </li>
              <li className="border-b-[1px] border-gray-300 py-1">
                <button className="text-base" onClick={() => { navigate("/partner-with-us") }}>
                  Partner with us
                </button>
              </li>
              <li className="py-1">
                <button className="text-base" onClick={() => { navigate("/contactus") }}>Contact Us</button>
              </li>
            </ul>
          </div>
          <button onClick={() => { navigate("/") }}>
            <img
              src={logo}
              className="h-15 w-40"
            />
          </button>
        </div>



        <div className="navbar-center hidden lg:flex lg:justify-between">
          <ul className="menu menu-horizontal">
            <li>
              <button onClick={() => { navigate("/") }}>Home</button>
            </li>
            <li>
              <button onClick={() => { navigate("/about-us") }}>About Us</button>
            </li>
            <li
              onMouseEnter={() => {
                clearTimeout(timeoutId);
                setLocationsDropdownVisible(true);
                setManagedSpaceDropdownVisible(false);
              }}
              onMouseLeave={() => {
                timeoutId = setTimeout(
                  () => setLocationsDropdownVisible(false),
                  7000
                );
              }}
              className="relative group"
            >
              <summary
                className="cursor-pointer py-2 hover:text-yellow-500 border-2 border-transparent"
                onClick={() => { setLocationsDropdownVisible(!isLocationsDropdownVisible); navigate("/allLocations") }}
              >
                Locations
              </summary>
              {isLocationsDropdownVisible && (
                <ul
                  className={`p-2 w-56 absolute left-0 mt-8 bg-white shadow-lg rounded-lg z-50 transition-opacity duration-300 ease-in-out ${isLocationsDropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                >
                  <li
                    className="relative group border-b border-gray-300"
                    onMouseEnter={() => {
                      setMumbaiDropdownVisible(true);
                      setNaviMumbaiDropdownVisible(false);
                      setBangaloreDropdownVisible(false);
                      setAhmedabadDropdownVisible(false);
                    }}
                  >
                    <summary
                      className="py-2 hover:text-yellow-500 border-2 border-transparent"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMumbaiDropdownVisible(!isMumbaiDropdownVisible);
                      }}
                    >
                      Mumbai
                    </summary>
                    <ul
                      className={`p-2 w-60 absolute left-[80%] top-0 bg-white shadow-lg rounded-lg z-50 transition-opacity duration-300 ease-in-out ${isMumbaiDropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"
                        } overflow-y-auto max-h-96`}
                    >
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          onClick={() => { navigate("/locations/Matulya-Centre") }}
                        >
                          Matulya Centre, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button onClick={() => { navigate("/locations/Marathon") }}>
                          Marathon, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          onClick={() => {
                          
                            navigate("/locations/Sun-Mill-Compound")
                          }}
                        >
                          Sun Mill Compound, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          onClick={() => { navigate("/locations/Kamala-Mills") }}
                        >
                          Kamala Mills, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          onClick={() => { navigate("/locations/Sunshine-Tower") }}
                        >
                          Sunshine Tower, Lower Parel
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          onClick={() => { navigate("/locations/Amore-Centre") }}
                        >
                          Amore Centre, Khar
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button
                          onClick={() => { navigate("/locations/Makhija-Archade") }}
                        >
                          Makhija Archade, Bandra
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                        <button onClick={() => { navigate("/locations/MIDC") }}>
                          MIDC, Andheri
                        </button>
                      </li>
                      <li className="py-2 hover:text-yellow-500 border-2 border-transparent">
                        <button
                          onClick={() => {
                          
                            navigate("/locations/Pinnacle-Corporate-Park")
                          }}
                        >
                          Pinnacle Corporate Park, BKC
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="relative group border-b border-gray-300"
                    onMouseEnter={() => {
                      setNaviMumbaiDropdownVisible(true);
                      setMumbaiDropdownVisible(false);
                      setBangaloreDropdownVisible(false);
                      setAhmedabadDropdownVisible(false);
                    }}
                  >
                    <summary
                      className="py-2 hover:text-yellow-500 border-2 border-transparent"
                      onClick={(e) => {
                        e.stopPropagation();
                        setNaviMumbaiDropdownVisible(!isNaviMumbaiDropdownVisible);
                      }}
                    >
                      Navi Mumbai
                    </summary>
                    <ul
                      className={`p-2 w-60 absolute left-[80%] top-0 bg-white shadow-lg rounded-lg z-50 transition-opacity duration-300 ease-in-out ${isNaviMumbaiDropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"
                        } overflow-y-auto max-h-96`}
                    >
                      <li className="py-2 px-4 hover:bg-gray-100 hover:text-yellow-500">
                        <button
                          onClick={() => {
                          
                            navigate("/locations/Millenium-Business-Park");
                          }}
                        >
                          Millenium Business Park
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="relative group border-b border-gray-300"
                    onMouseEnter={() => {
                      setBangaloreDropdownVisible(true);
                      setMumbaiDropdownVisible(false);
                      setNaviMumbaiDropdownVisible(false);
                      setAhmedabadDropdownVisible(false);
                    }}
                  >
                    <summary
                      className="py-2 hover:text-yellow-500 border-2 border-transparent"
                      onClick={(e) => {
                        e.stopPropagation();
                        setBangaloreDropdownVisible(!isBangaloreDropdownVisible);
                      }}
                    >
                      Bangalore
                    </summary>
                    <ul
                      className={`p-2 w-60 absolute left-[80%] top-0 bg-white shadow-lg rounded-lg z-50 transition-opacity duration-300 ease-in-out ${isBangaloreDropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"
                        } overflow-y-auto max-h-96`}
                    >
                      <li className="py-2 px-4 hover:bg-gray-100 hover:text-yellow-500">
                        <button
                          onClick={() => {
                          
                            navigate("/locations/Diamond-District");
                          }}
                        >
                          Diamond District, Domlar
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
                      setBangaloreDropdownVisible(false);
                      setNaviMumbaiDropdownVisible(false);
                    }}
                    onMouseLeave={() => {
                      timeoutId = setTimeout(() => setAhmedabadDropdownVisible(false), 1000);
                    }}
                  >
                    <summary
                      className="py-2 hover:text-yellow-500 border-2 border-transparent"
                      onClick={(e) => {
                        e.stopPropagation();
                        setAhmedabadDropdownVisible(!isAhmedabadDropdownVisible);
                      }}
                    >
                      Ahmedabad
                    </summary>
                    <ul
                      className={`p-2 w-60 absolute left-[80%] top-0 bg-white shadow-lg rounded-lg z-50 transition-opacity duration-300 ease-in-out ${isAhmedabadDropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"
                        } overflow-y-auto max-h-96`}
                    >
                      <li className="py-2 px-4 hover:bg-gray-100 hover:text-yellow-500">
                        <button
                          onClick={() => {
                          
                            navigate("/locations/Navratna-Corporate-Park");
                          }}
                        >
                          Navratna Corporate Park, Ahmedabad
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>)}
            </li>
            <li>
              <button onClick={() => { navigate("/service") }}>Services</button>
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
                  2000
                );
              }}
              className="relative group"
            >


              <summary onClick={() => navigate("/managed_space_solutions")} className="cursor-pointer py-2 hover:text-yellow-500 border-2 border-transparent">
                Managed Space Solutions
              </summary>
              <ul
                className={`p-2 w-60 absolute mt-8 bg-white shadow-lg rounded-lg transition-opacity duration-300 ease-in-out z-50 ${isManagedSpaceDropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"} overflow-y-auto max-h-96`}
              >

                <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                  <button onClick={() => { navigate("/603-Lodha-Supremus-Center") }}>
                    603 Lodha Supremus Center (Thane)
                  </button>
                </li>
                <li className="py-2 hover:text-yellow-500 border-b border-gray-300">
                  <button onClick={() => { navigate("/Naman-Midtown-Center") }}>
                    Naman Midtown Center (Dadar)
                  </button>
                </li>
                <li className="py-2 hover:text-yellow-500">
                  <button onClick={() => { navigate("/603-MBC-Center") }}>
                    603 MBC Center (Thane)
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button onClick={() => { navigate("/partner-with-us") }}>Partner with us</button>
            </li>
            <li>
              <button onClick={() => { navigate("/contactus") }}>Contact Us</button>
            </li>
          </ul>
        </div>






        <div className="w-full flex justify-end gap-2">
          {path != "/login" && (
            <button
              onClick={() => { navigate("/login") }}
              className="btn rounded-3xl w-24 sm:w-28 bg-gray-300 hover:bg-yellow-500 text-slate-gray hover:text-white font-bold py-2 sm:py-1 px-4 sm:px-2 text-sm sm:text-xs border-2 border-gray shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Login
            </button>
          )}
          {path != "/login" && (
            <button
              className="btn bg-yellow-500 hover:bg-yellow-600 rounded-3xl text-white font-bold py-2 sm:py-1 px-4 sm:px-4 text-sm sm:text-xs shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center space-x-2 sm:space-x-1"
              onClick={() => window.location.href = 'tel:+919136036603'}
            >
              <IoIosCall className="h-6 w-5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Call now</span>
            </button>
          )}
        </div>

      </div>
    </>
  );
};

export default Navbar;






