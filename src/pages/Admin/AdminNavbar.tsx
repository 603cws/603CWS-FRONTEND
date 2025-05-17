import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { logo } from "../../utils/Landing/Landing";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useApp } from "../../context/AuthContext";
import CreateCouponModal from "./createCouponModal";
import axiosInstance from "../../utils/axiosInstance";

function AdminDashNavbar() {
  const { setloading, setAccHolder } = useApp();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSideWindowOpen, setIsSideWindowOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const navigate = useNavigate();

  // const PORT = import.meta.env.VITE_BACKEND_URL;

  // const handleCreateUser = () => {
  //   console.log("sample test");
  // };

  const logout = async () => {
    try {
      setloading(true);
      const res = await axiosInstance.post(
        `/api/v1/auth/logout`,
        {} // Empty object if no body is needed
      );
      // const res = await axios.post(
      //   `${PORT}/api/v1/auth/logout`,
      //   {}, // Empty object if no body is needed
      //   {
      //     withCredentials: true,
      //   }
      // );
      console.log(res);
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
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setloading(false);
    }
  };

  const visitHome = () => {
    navigate("/admin/dashboard");
  };

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
    zIndex: 10000,
    display: "flex", // flex
    justifyContent: "space-between", // justify-between
    alignItems: "center", // items-center
    borderBottom: "3px solid #f6e05e", // border-b-2 border-yellow-400
    padding: windowWidth > 425 ? "1rem 1.5rem" : "1rem 0.5rem", // p-4 pl-6 pr-6
    backgroundColor: "#ffffff",
  };

  const logoContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: windowWidth > 425 ? "10px" : "7px",
    cursor: "pointer",
  };

  const logoStyle: React.CSSProperties = {
    height: "32px",
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

  return (
    <>
      <div className="border-b-2 border-yellow-600">
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
            <div className="flex items-center space-x-4 gap-5">
              {/* <div
              onClick={() => (window.location.href = "tel:+919136036603")}
              className="text-gray-600 cursor-pointer"
            >
              Contact Us
            </div> */}
              {/* <div className="cursor-pointer text-gray-600" >CreateCoupon</div> */}

              {/*<div className="cursor-pointer text-gray-600" onClick={toTransactions}>My Bookings</div>*/}

              <div className="cursor-pointer text-gray-600" onClick={logout}>
                Logout
              </div>
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
        <div className="w-full flex justify-around p-5 pt-20 font-medium text-slate-500 z-50">
          <div
            className="cursor-pointer"
            onClick={() => navigate("/admin/alluserinfo")}
          >
            <h1>All Users</h1>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setIsCreateModalOpen(true)}
          >
            <h1>Create Coupon</h1>
          </div>
          <div>KYC Requests</div>
          <div
            className="cursor-pointer"
            onClick={() => navigate("/admin/allbookings")}
          >
            <h1>All Bookings</h1>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => navigate("/admin/onlinebookings")}
          >
            <h1>Online Bookings</h1>
          </div>
        </div>
      </div>
      <CreateCouponModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </>
  );
}

export default AdminDashNavbar;
