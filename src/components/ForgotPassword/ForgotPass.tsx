import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import Forgotfunc from "./forgotpage";
function Forgot() {
  return (
    <>
      <div className="h-screen w-screen">
        <div style={{ zIndex: 20, position: 'relative' }}>
          <Navbar />
        </div>
        <div>
          <Forgotfunc />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Forgot;
