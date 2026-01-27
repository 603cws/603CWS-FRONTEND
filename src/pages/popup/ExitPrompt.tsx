import { useEffect, useRef, useState } from "react";
import ExitPopupForm from "../../components/Popupform/ExitPopupForm";

const ExitGuard = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const a = localStorage.getItem("callback");

  const allowCloseRef = useRef(false);
  const triggeredRef = useRef(false);

  useEffect(() => {
    const handleBeforeUnload = (e: any) => {
      if (allowCloseRef.current) return;

      // Always prevent close
      e.preventDefault();
      e.returnValue = "";

      // Show popup after user cancels close
      if (!triggeredRef.current) {
        triggeredRef.current = true;
        setTimeout(() => setShowContactPopup(true), 0);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      {showContactPopup && a !== "true" && (
        <ExitPopupForm setShowContactPopup={setShowContactPopup} />
      )}
    </>
  );
};

export default ExitGuard;
