import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  FaCalendarAlt,
  FaChair,
  FaClock,
  FaMoneyBillAlt,
  FaBuilding,
  FaTrashAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { RootState } from "../../store";
import { useApp } from "../../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

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
  member: boolean;
}

const Payment: React.FC = () => {
  const [discountCode, setDiscountCode] = useState("");
  const [message, setMessage] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [isDisable, setIsDisable] = useState(false);
  const {
    removeSpecificBooking,
    removeSpecificDayPass,
    isAuthenticated,
    accHolder,
  } = useApp();
  const navigate = useNavigate();
  // const [checkStatus, setCheckstatus] = useState(false);
  const bookings = useSelector((state: RootState) => state.bookings.bookings);
  const dayPasses = useSelector(
    (state: RootState) => state.dayPasses.dayPasses
  );

  // Calculate total price from all bookings and day passes
  let totalBill =
    bookings.reduce((total, booking) => total + booking.price, 0) +
    dayPasses.reduce((total, dayPass) => total + dayPass.price, 0);

  //coupon changes

  const validateCoupon = async () => {
    let code = discountCode;
    try {
      const response = await axios.post(
        `https://603-bcakend-new.vercel.app/api/v1/coupon/validatecoupon`,
        { code },
        {
          headers: {
            "Content-Type": "application/json",
          },
          // If you need credentials (cookies/auth), add this:
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );

      console.log(response);
      setDiscountPercentage(
        (discountPercentage) => discountPercentage + response.data.discount
      );
      console.log(discountPercentage);

      setIsDisable(() => true);

      setMessage(`Coupon applied! Discount: ${response.data.discount}%`);
      toast.success(`COUPON APPLIED SUCCESSFULLY`);
    } catch (error: any) {
      setMessage(error.response?.data?.error || "INVALID COUPON CODE");
      toast.error(`INVALID COUPON CODE,OR COUPON EXPIRED`);
    }
  };

  //handle enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isDisable) {
      validateCoupon(); // Call the button's onClick handler
    }
  };

  //clearing the cart
  //bookings
  useEffect(() => {
    if (bookings.length > 0) {
      setTimeout(() => {
        bookings.forEach((booking) => {
          handleRemoveBooking(booking);
        });
      }, 3 * 60 * 1000); // 3 minutes
    }
  }, [bookings]);

  //daypass
  useEffect(() => {
    if (dayPasses.length > 0) {
      setTimeout(() => {
        dayPasses.forEach((daypass) => {
          handleRemoveDayPass(daypass);
        });
      }, 3 * 60 * 1000); // 3 minutes
    }
  }, [dayPasses]);

  //final bill including gst
  let finalBill =
    totalBill + totalBill * 0.18 - totalBill * (discountPercentage / 100);

  const handleRemoveBooking = (booking: any) => {
    removeSpecificBooking(booking);
  };

  const handleRemoveDayPass = (dayPass: any) => {
    removeSpecificDayPass(dayPass);
  };

  const handleTOLogin = () => {
    navigate("/RegisterUser");
  };

  //get user

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
    member: false,
    createdAt: new Date(), // Correct initialization for Date
  });
  console.log(data);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://603-bcakend-new.vercel.app/api/v1/users/userdetails`,
        {
          withCredentials: true,
        }
      );
      const userdata: UserDetails = response.data.user;
      setData(userdata);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const checkOverLap = async (bookings: any): Promise<boolean> => {
    try {
      const response = await axios.post(
        "https://603-bcakend-new.vercel.app/api/v1/order/checkOverlap",
        { bookings },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );
      console.log(response);

      // Return true if the status is 200, meaning no booking overlap
      if (response.status === 200) {
        return true;
      }

      // If status is not 200, assume an overlap (you can customize this based on your API)
      return false;
    } catch (error) {
      console.error("Error checking overlap:", error);
      // Return false in case of an error (indicating an overlap)
      return false;
    }
  };

  //handle phonepe payment

  const handlePayment = async () => {
    const data = {
      accHolder,
      amount: finalBill.toFixed(2),
      bookings,
      dayPasses,
      discountPercentage,
    };
    try {
      const response = await axios.post(
        "https://603-bcakend-new.vercel.app/api/v1/order/createorder",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // If you need credentials (cookies/auth), add this:
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );
      console.log(response.data);
      window.location.href = response.data.url;
      // setCheckstatus(true);
    } catch (error) {
      console.log("error in payment", error);
    }
  };

  const handleButtonClick = async () => {
    if (isAuthenticated) {
      const notoverlap = await checkOverLap(bookings);
      if (notoverlap) {
        handlePayment();
      } else {
        toast.error("you are late someone booked around this slot");
      }
    } else {
      handleTOLogin();
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gray-100 relative min-w-full">
      {/* Navbar */}
      <header className="bg-white shadow-md z-50 fixed w-full top-0">
        <Navbar />
      </header>

      <div className="bg-gray-100 min-h-screen pb-8 pt-24">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-lg">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="text-yellow-700 hover:text-yellow-800 font-semibold mb-4 flex items-center"
          >
            &larr; Back
          </button>

          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Confirm Your Payment
          </h1>

          {bookings.map((booking, index) => (
            <div
              key={`booking-${index}`}
              className="relative mb-6 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-700">
                {booking.spaceName}
              </h2>
              <div className="text-gray-600 mb-2">
                <FaBuilding className="inline-block mr-2" /> {booking.spaceName}
              </div>
              <div className="text-gray-600 mb-2">
                <FaCalendarAlt className="inline-block mr-2" /> {booking.date}
              </div>
              <div className="text-gray-600 mb-2">
                <FaClock className="inline-block mr-2" /> {booking.startTime} -{" "}
                {booking.endTime}
              </div>
              <div className="text-gray-600 font-semibold">
                <FaMoneyBillAlt className="inline-block mr-2" /> Price: ₹
                {booking.price.toFixed(2)}
              </div>
              {/* Delete Button */}
              <button
                onClick={() => handleRemoveBooking(booking)}
                className="absolute top-3 right-3 text-black hover:text-red-700 transition"
                title="Delete Booking"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}

          {dayPasses.map((dayPass, index) => (
            <div
              key={`dayPass-${index}`}
              className="relative mb-6 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-700">
                {dayPass.spaceName} (Day Pass)
              </h2>
              <div className="text-gray-600 mb-2">
                <FaChair className="inline-block mr-2" /> Place:{" "}
                {dayPass.spaceName}
              </div>
              <div className="text-gray-600 mb-2">
                <FaCalendarAlt className="inline-block mr-2" />{" "}
                {dayPass.bookeddate}
              </div>
              <div className="text-gray-600 font-semibold">
                <FaMoneyBillAlt className="inline-block mr-2" /> Price: ₹
                {dayPass.price.toFixed(2)}
              </div>
              {/* Delete Button */}
              <button
                onClick={() => handleRemoveDayPass(dayPass)}
                className="absolute top-3 right-3 text-black hover:text-red-700 transition"
                title="Delete Day Pass"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}

          <ul>
            <li>Note</li>
            <li className="ml-2 list-disc">
              Please note that an 18% GST will be applied to the booking amount
              during the checkout process.
            </li>
            <li className="ml-2 list-disc">
              once the payment is done ,bookings will be shown at dashboard in
              my booking
            </li>
          </ul>
          {/* <p className=" text-black-100 px-4 py-2  text-sm  w-full mt-4">
            Please note that an 18% GST will be applied to the booking amount
            during the checkout process.
          </p>
          <p className="text-black-100 px-4 py-2  text-sm  w-full ">
            Note: once the payment is done ,bookings will be shown at dashboard
            in my booking{" "}
          </p> */}

          {bookings.length + dayPasses.length === 0 && (
            <div className=" text-2xl text-gray-500 flex justify-center h-56 items-center">
              Your Cart Is Empty!
            </div>
          )}

          {/* Total Price */}
          {totalBill > 0 && (
            <>
              <div className="text-l font-bold mt-4">
                <input
                  className="text-gray-500 border-2 border-zinc-900"
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(() => e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter coupon code"
                />
                <button
                  className="ml-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-3 rounded-lg transition duration-200 shadow-lg transform hover:scale-105"
                  onClick={validateCoupon}
                  disabled={isDisable}
                >
                  Apply Coupon
                </button>
                {message && <p>{message}</p>}
              </div>
              <div className="text-right text-2xl font-bold text-gray-800 mb-3">
                Total Bill: ₹{finalBill.toFixed(2)}
              </div>
              <div className="text-right text-l font-semibold text-gray-500 mb-6">
                *including gst
              </div>
            </>
          )}

          {/* Confirm Payment Button */}
          {parseInt(totalBill.toFixed(2)) > 0 && (
            <button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-lg transform hover:scale-105"
              // onClick={
              //   isAuthenticated
              //     ? checkOverLap(bookings) && handleRazorpayPayment
              //     : handleTOLogin
              // }
              // // isAuthenticated ?  handleRazorpayPayment :

              onClick={handleButtonClick}
            >
              Confirm Payment
            </button>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Payment;
