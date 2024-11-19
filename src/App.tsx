import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";
import OurServicesPage from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Admin/Login";
import Transactions from "./pages/Transactions";
import AdminDashboard from "./pages/Admin/Dashboard";
import Userdata from "./pages/Admin/Userdata";
import EditUser from "./pages/Admin/EditUser";
import UserManagement from "./pages/Admin/Alluser";
import Partner from "./pages/Partner";
import Profile from "./components/Myprofile/Myprofile";
import Matulya from "./components/locations/Mumbai/Matulya-Centre";
import Sunmill from "./components/locations/Mumbai/Sun-Mill-Compound";
import Kamala from "./components/locations/Mumbai/Kamala-Mills";
import Sunshine from "./components/locations/Mumbai/Sunshine-Tower";
import Amore from "./components/locations/Mumbai/Amore-Centre";
import Makhija from "./components/locations/Mumbai/Makhija-Archade";
import Pinnacle from "./components/locations/Mumbai/Pinnacle-Corporate-Park";
import Millenium from "./components/locations/Navi_Mumbai/Millenium-business-park";
import Navratna from "./components/locations/Ahemdabad/Navratna-Corporate-Park";
import Lodha from "./components/Managed_Space/603-Lodha-Supremus-Center";
import Naman from "./components/Managed_Space/Naman-midtown-center";
import MBC from "./components/Managed_Space/603-MBC-Center";
import Popupform from "./components/Popupform/Popupform";
import ManagedSpace from "./pages/Managed_space/ManagedSpace";
import AllLocations from "./pages/AllLocations";
import { useApp } from "./context/AuthContext";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import Allbookings from "./pages/Admin/Allbookings";
import Privacy from "./pages/Privacy";
import TermsNCond from "./pages/Terms";
import Forgot from "./components/ForgotPassword/ForgotPass";
import Changepassword from "./components/ForgotPassword/changepassword";
import Blogs from "./pages/Blogs/Blogs";
import BlogDetail from "./pages/Blogs/BlogView";
import Membership from "./pages/MemberShipPlans";
import Career from "./pages/Career/Career";
import NewsCenter from "./pages/NewsCentre/Newscenter";
import Referral from "./pages/Referral/Referral";
import Events from "./pages/Events";
import BookNowPage from "./pages/ExternalBooking/BookNowPage";
import ConfirmPayment from "./pages/ExternalBooking/ConfirmBookingPage";
import Payment from "./pages/ExternalBooking/Payment";
import Technocity from "./components/locations/Navi_Mumbai/Technocity";
import Pentagon from "./components/locations/Mumbai/Pentagon";
// import CreateUserModal from "./pages/Admin/createusermodal";
import RegisterUser from "./pages/Admin/RegisterUser";

function App() {
  const location = useLocation();
  const [users, setUsers] = useState<User[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(true);
  const { isAuthenticated, loading, refreshAuth, isAdmin } = useApp();
  const navigate = useNavigate();

  console.log(isAuthenticated); // at the begining without login its false

  const noPopupRoutes = [
    "/admin/dashboard",
    "/admin/login",
    "/admin/createacc",
    "/admin/edituser/:id",
    "/dashboard",
    "/dashboard/Myprofile",
    "/dashboard/Transactions",
    "/login",
    "/Register",
    "/admin/userinfo/:user",
    "/admin/alluserinfo",
    "/admin/allbookings",
    "/admin/edituser/:id",
    "/contactus",
    "/partner-with-us",
    "/forgotPassword",
    "/changepassword/:id",
    "/confirmpayment",
    "/payment",
    "/booknow/:id",
    "/booknow",
    "/career",
    "/RegisterUser",
  ];

  const matchDynamicRoute = (route: any, path: any) => {
    const routeRegex = new RegExp(`^${route.replace(/:\w+/g, "[^/]+")}$`);
    return routeRegex.test(path);
  };

  useEffect(() => {
    refreshAuth();
  }, [refreshAuth]);

  const shouldShowPopup = !noPopupRoutes.some((route) =>
    matchDynamicRoute(route, location.pathname)
  );

  const a = localStorage.getItem("callback");

  //handle register
  interface User {
    _id: string;
    companyName: string;
    email: string;
    role: string;
    phone: string;
    creditsleft: number;
    monthlycredits: number;
    extracredits: number;
    kyc: boolean;
    location: string;
  }

  const handleCreateUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    setIsCreateModalOpen(false);
  };
  console.log(users);

  const handlecloseofRegisterUser = () => {
    setIsCreateModalOpen(false);
    navigate(-1);
    setIsCreateModalOpen(true);
  };

  if (loading) return <Loader />;

  return (
    <div className="flex">
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/managed_space_solutions" element={<ManagedSpace />} />
            <Route path="/allLocations" element={<AllLocations />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/Myprofile" element={<Profile />} />
            <Route path="/dashboard/Transactions" element={<Transactions />} />
            <Route path="/service" element={<OurServicesPage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/admin/login" element={<Login />} />
            <Route
              path="/admin/dashboard"
              element={isAdmin === "admin" ? <AdminDashboard /> : <Login />}
            />
            <Route
              path="/admin/userinfo/:user"
              element={isAdmin === "admin" ? <Userdata /> : <Login />}
            />
            <Route
              path="/admin/alluserinfo"
              element={isAdmin === "admin" ? <UserManagement /> : <Login />}
            />
            <Route
              path="/admin/allbookings"
              element={isAdmin === "admin" ? <Allbookings /> : <Login />}
            />
            <Route
              path="/admin/edituser/:id"
              element={isAdmin === "admin" ? <EditUser /> : <Login />}
            />
            <Route path="/partner-with-us" element={<Partner />} />
            <Route path="/locations/Matulya-Centre" element={<Matulya />} />
            <Route path="/locations/Sun-Mill-Compound" element={<Sunmill />} />
            <Route path="/locations/Kamala-Mills" element={<Kamala />} />
            <Route path="/locations/Sunshine-Tower" element={<Sunshine />} />
            <Route path="/locations/Amore-Centre" element={<Amore />} />
            <Route path="/locations/Makhija-Archade" element={<Makhija />} />
            <Route path="/locations/Pentagon-Classic" element={<Pentagon />} />
            {/*<Route path="/locations/Marathon" element={<Marathon />} />*/}
            {/*<Route path="/locations/MIDC" element={<MIDC />} />*/}
            {/*<Route path="/locations/Diamond-District" element={<Diamond />} />*/}
            <Route
              path="/locations/Pinnacle-Corporate-Park"
              element={<Pinnacle />}
            />
            <Route path="/locations/Technocity" element={<Technocity />} />
            <Route
              path="/locations/millenium-business-park"
              element={<Millenium />}
            />
            <Route
              path="/locations/Navratna-Corporate-Park"
              element={<Navratna />}
            />
            <Route path="/603-Lodha-Supremus-Center" element={<Lodha />} />
            <Route path="/Naman-midtown-center" element={<Naman />} />
            <Route path="/603-MBC-Center" element={<MBC />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-conditions" element={<TermsNCond />} />
            <Route path="/forgotPassword" element={<Forgot />} />
            <Route path="/changepassword/:id" element={<Changepassword />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:title" element={<BlogDetail />} />
            <Route path="/membership-plans" element={<Membership />} />
            <Route path="/career" element={<Career />} />
            <Route path="/news-centre" element={<NewsCenter />} />
            <Route path="/events" element={<Events />} />
            <Route path="/booknow" element={<BookNowPage />} />
            <Route path="/booknow/:id" element={<ConfirmPayment />} />
            <Route
              path="/payment"
              element={isAdmin === "admin" && <Payment />}
            />
          </>
        ) : (
          <>
            <Route path="/locations/Technocity" element={<Technocity />} />
            <Route path="/" element={<Landing />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/allLocations" element={<AllLocations />} />
            <Route path="/managed_space_solutions" element={<ManagedSpace />} />
            <Route path="/dashboard" element={<LogIn />} />
            <Route path="/dashboard/Myprofile" element={<LogIn />} />
            <Route path="/dashboard/Transactions" element={<LogIn />} />
            <Route path="/service" element={<OurServicesPage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/Register" element={<LogIn />} />
            <Route path="/admin/dashboard" element={<Login />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/allbookings" element={<Login />} />
            <Route path="/admin/userinfo/:user" element={<Login />} />
            <Route path="/admin/alluserinfo" element={<Login />} />
            <Route path="/admin/createacc" element={<Login />} />
            <Route path="/admin/edituser/:id" element={<Login />} />
            <Route path="/partner-with-us" element={<Partner />} />
            {/*<Route path="/locations/Marathon" element={<Marathon />} />*/}
            {/*<Route path="/locations/MIDC" element={<MIDC />} />*/}
            {/*<Route path="/locations/Diamond-District" element={<Diamond />} />*/}
            <Route path="/locations/Pentagon-Classic" element={<Pentagon />} />
            <Route path="/locations/Matulya-Centre" element={<Matulya />} />
            <Route path="/locations/Sun-Mill-Compound" element={<Sunmill />} />
            <Route path="/locations/Kamala-Mills" element={<Kamala />} />
            <Route path="/locations/Sunshine-Tower" element={<Sunshine />} />
            <Route path="/locations/Amore-Centre" element={<Amore />} />
            <Route path="/locations/Makhija-Archade" element={<Makhija />} />
            <Route
              path="/locations/Pinnacle-Corporate-Park"
              element={<Pinnacle />}
            />
            <Route
              path="/locations/millenium-business-park"
              element={<Millenium />}
            />
            <Route
              path="/locations/Navratna-Corporate-Park"
              element={<Navratna />}
            />
            <Route path="/603-Lodha-Supremus-Center" element={<Lodha />} />
            <Route path="/Naman-midtown-center" element={<Naman />} />
            <Route path="/603-MBC-Center" element={<MBC />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-conditions" element={<TermsNCond />} />
            <Route path="/forgotPassword" element={<Forgot />} />
            <Route path="/changepassword/:id" element={<Changepassword />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:title" element={<BlogDetail />} />
            <Route path="/membership-plans" element={<Membership />} />
            <Route path="/career" element={<Career />} />
            <Route path="/news-centre" element={<NewsCenter />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/events" element={<Events />} />
            <Route path="/booknow" element={<BookNowPage />} />
            <Route path="/booknow/:id" element={<ConfirmPayment />} />
            <Route path="/payment" element={<Payment />} />
            <Route
              path="/RegisterUser"
              element={
                <RegisterUser
                  isOpen={isCreateModalOpen}
                  onClose={handlecloseofRegisterUser}
                  onCreate={handleCreateUser}
                />
              }
            />
          </>
        )}
      </Routes>
      {shouldShowPopup && a !== "true" && <Popupform />}
    </div>
  );
}

export default App;
