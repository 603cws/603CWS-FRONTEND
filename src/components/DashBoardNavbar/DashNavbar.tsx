import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { CiCreditCard1 } from "react-icons/ci";
import Avatar from "../Dashboard/Avatar";
import { logo } from "../../utils/Landing/Landing";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "./Modal";
import { useApp } from "../../context/AuthContext";
import Loader from "../Loader/Loader";
import { IoWarningOutline } from "react-icons/io5";
import axiosInstance from "../../utils/axiosInstance";

// State variables for form values
interface UserDetails {
  companyName: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  role: "admin" | "user";
  kyc: boolean;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  location: string;
  credits?: number;
  createdAt?: Date;
}

function DashNavbar() {
  const { setloading, setAccHolder } = useApp();
  const [load, setload] = useState(true);
  const [creditsleft, setcreditsleft] = useState(0);
  const [monthlycredits, setmonthlycredits] = useState(0);
  const [extracredits, setextracredits] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSideWindowOpen, setIsSideWindowOpen] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const navigate = useNavigate();

  const { accHolder } = useApp();

  const [data, setData] = useState<UserDetails>({
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
  });

  const n = localStorage.getItem("user");

  const toTransactions = () => {
    navigate("/dashboard/Transactions");
  };
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

  const visitProfile = () => {
    navigate("/dashboard/Myprofile");
  };

  //change visit home to home page
  const visitHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/credits/getcreditdetails`
        );
        setData(response.data);
        setmonthlycredits(response.data.monthlycredits);
        setcreditsleft(response.data.creditsleft);
        setextracredits(response.data.extracredits);
      } catch (error) {
        console.error("Error fetching user info:", error);
      } finally {
        setload(false);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const creditsContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const creditsTextStyle: React.CSSProperties = {
    display: "flex",
  };

  const modalContentStyle: React.CSSProperties = {
    color: "#333",
    maxWidth: "600px",
    margin: "0 auto",
    padding: windowWidth > 490 ? "20px" : "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const modalHeaderStyle: React.CSSProperties = {
    fontSize: windowWidth > 390 ? "24px" : "20px",
    marginBottom: "25px",
    color: "#0056b3",
    fontFamily: "Arial, sans-serif",
  };

  const modalTextStyle: React.CSSProperties = {
    fontSize: "16px",
    lineHeight: "1.5",
    margin: "0",
    fontFamily: "Arial, sans-serif",
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

  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 10000,
    display: isSideWindowOpen ? "block" : "none",
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

  const headingstyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    fontSize: windowWidth > 425 ? "1.125rem" : "1rem",
    fontWeight: "700",
    color: "#4a5568",
  };

  return load ? (
    <Loader />
  ) : (
    <div style={containerStyle}>
      <div onClick={visitHome} style={logoContainerStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <div style={headingstyle}>603 The Coworking Space</div>
      </div>
      {windowWidth < 870 ? (
        <FiMenu
          size="24"
          onClick={() => setIsSideWindowOpen(true)}
          className="cursor-pointer"
        />
      ) : (
        <div className="flex items-center space-x-4 gap-4">
          {!data.kyc && (
            <div
              className="cursor-pointer text-gray-600"
              onClick={() => {
                navigate("/kycform");
              }}
            >
              KYC form
            </div>
          )}
          <div
            className="cursor-pointer text-gray-600"
            onClick={() => {
              navigate("/booknow");
            }}
          >
            Day Passes
          </div>

          {accHolder.member && (
            <div className="flex items-center">
              <div style={creditsContainerStyle}>
                {creditsleft > 0 && (
                  <>
                    <div className="text-gray-700" style={creditsTextStyle}>
                      Credits left: {creditsleft}/{" "}
                      <p style={{ color: "#dbbd00" }}>{monthlycredits}</p>
                    </div>
                    <CiCreditCard1 size="24" />
                  </>
                )}

                {extracredits > 0 && creditsleft == 0 && (
                  <>
                    <div className="text-gray-700" style={creditsTextStyle}>
                      Credits Bill: {extracredits}
                    </div>
                    <CiCreditCard1 size="24" />
                  </>
                )}
                <IoIosHelpCircleOutline
                  size="18"
                  color="gray"
                  onClick={() => setShowHelp(true)}
                  className="cursor-pointer"
                />
                <>
                  {creditsleft > 0 && extracredits > 0 && (
                    <div className="relative inline-block group">
                      <IoWarningOutline
                        style={{ color: "red", fontSize: "20px" }}
                        className="cursor-pointer"
                        onClick={() => {
                          setshowalert(!showalert);
                        }}
                      />
                    </div>
                  )}
                </>
              </div>
            </div>
          )}

          <div
            className="cursor-pointer text-gray-600"
            onClick={toTransactions}
          >
            My Bookings
          </div>

          <div className="cursor-pointer text-gray-600" onClick={logout}>
            Logout
          </div>
          <Avatar onClick={visitProfile} name={n ? n.charAt(0) : ""} />
        </div>
      )}

      <div
        style={overlayStyle}
        onClick={() => setIsSideWindowOpen(false)}
      ></div>

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
            navigate("/dashboard/Myprofile");
          }}
        >
          {" "}
          My Profile
        </div>
        {creditsleft > 0 && (
          <div
            style={{
              ...sideLinkStyle,
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div className="" style={creditsTextStyle}>
              Credits: {creditsleft}/{" "}
              <p style={{ color: "#dbbd00" }}>{monthlycredits}</p>
            </div>
            <CiCreditCard1 size="24" />
            <IoIosHelpCircleOutline
              size="18"
              color="gray"
              onClick={() => {
                setShowHelp(true), setIsSideWindowOpen(false);
              }}
              className="cursor-pointer"
            />
          </div>
        )}
        {extracredits > 0 && (
          <div
            style={{
              ...sideLinkStyle,
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div className="" style={creditsTextStyle}>
              Credits Bill: {extracredits}
            </div>
            <CiCreditCard1 size="24" />
            <IoIosHelpCircleOutline
              size="18"
              color="gray"
              onClick={() => {
                setShowHelp(true), setIsSideWindowOpen(false);
              }}
              className="cursor-pointer"
            />
          </div>
        )}
        <div
          onClick={toTransactions}
          style={sideLinkStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#f0f0f0")
          }
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
        >
          My Bookings
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

      {/* Modal component usage */}
      <Modal isOpen={showalert} onClose={() => setshowalert(false)}>
        <h3 style={modalHeaderStyle}>
          <b>Pending Bill :</b>
        </h3>
        <div style={modalTextStyle}>
          <p>
            Your credit balance of <strong>{extracredits}</strong> is currently
            due. We kindly request that you process the payment promptly to
            ensure uninterrupted service.
          </p>
        </div>
      </Modal>
      <Modal isOpen={showHelp} onClose={() => setShowHelp(false)}>
        <div style={modalContentStyle}>
          <h3 style={modalHeaderStyle}>
            <b>Credits Information:</b>
          </h3>
          {extracredits > 0 ? (
            <p style={modalTextStyle}>
              <strong>Credit:</strong> You may use 1 credit to book either a
              conference room for 1 hour or a meeting room for 2 hours.
              <br />
              <br />
              <strong>Credit Renewal:</strong> Credits are renewed monthly.
              Please note that any unused credits from previous months will
              expire.
              <br />
              <br />
              <strong>Credits Bill:</strong> Credits Bill refers to the number
              of credits you have pre-purchased from 603CoworkingSpace. These
              credits will be included in your final bill at the end of the
              month.
            </p>
          ) : (
            <p style={modalTextStyle}>
              <strong>Credit:</strong> You may use 1 credit to book either a
              conference room for 1 hour or a meeting room for 2 hours.
              <br />
              <br />
              <strong>Credit Renewal:</strong> Credits are renewed monthly.
              Please note that any unused credits from previous months will
              expire.
              <br />
              <br />
            </p>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default DashNavbar;
