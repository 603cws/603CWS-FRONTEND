import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";
import LogIn from "../components/LogIn/LogIn";
function SignIn() {
  return (
    <>
      <div className="h-screen w-full">
        <div style={{ zIndex: 20, position: "relative" }}>
          <Navbar />
        </div>
        <div>
          <LogIn />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SignIn;
