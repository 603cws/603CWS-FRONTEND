import React from 'react';
import { useSelector } from 'react-redux';
import { FaCalendarAlt, FaChair, FaClock, FaMoneyBillAlt, FaBuilding, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import { RootState } from '../../store';
import { useApp } from '../../context/AuthContext';

const Payment: React.FC = () => {
  const { removeSpecificBooking, removeSpecificDayPass } = useApp();
  const navigate = useNavigate();
  const bookings = useSelector((state: RootState) => state.bookings.bookings);
  const dayPasses = useSelector((state: RootState) => state.dayPasses.dayPasses);

  // Calculate total price from all bookings and day passes
  const totalBill = bookings.reduce((total, booking) => total + booking.price, 0) +
    dayPasses.reduce((total, dayPass) => total + dayPass.price, 0);

  const handleRemoveBooking = (booking: any) => {
    removeSpecificBooking(booking);
  };

  const handleRemoveDayPass = (dayPass: any) => {
    removeSpecificDayPass(dayPass);
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

          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Confirm Your Payment</h1>

          {bookings.map((booking, index) => (
            <div key={`booking-${index}`} className="relative mb-6 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700">{booking.spaceName}</h2>
              <div className="text-gray-600 mb-2">
                <FaBuilding className="inline-block mr-2" /> {booking.spaceName}
              </div>
              <div className="text-gray-600 mb-2">
                <FaCalendarAlt className="inline-block mr-2" /> {booking.date}
              </div>
              <div className="text-gray-600 mb-2">
                <FaClock className="inline-block mr-2" /> {booking.startTime} - {booking.endTime}
              </div>
              <div className="text-gray-600 font-semibold">
                <FaMoneyBillAlt className="inline-block mr-2" /> Price: ₹{booking.price.toFixed(2)}
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
            <div key={`dayPass-${index}`} className="relative mb-6 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700">{dayPass.spaceName} (Day Pass)</h2>
              <div className="text-gray-600 mb-2">
                <FaChair className="inline-block mr-2" /> Place: {dayPass.spaceName}
              </div>
              <div className="text-gray-600 mb-2">
                <FaCalendarAlt className="inline-block mr-2" /> {dayPass.bookeddate}
              </div>
              <div className="text-gray-600 font-semibold">
                <FaMoneyBillAlt className="inline-block mr-2" /> Price: ₹{dayPass.price.toFixed(2)}
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
          {bookings.length + dayPasses.length === 0 && (
            <div className=' text-2xl text-gray-500 flex justify-center h-56 items-center'>
              Your Cart Is Empty!
            </div>
          )}

          {/* Total Price */}
          {totalBill>0 && (
            <div className="text-right text-2xl font-bold text-gray-800 mb-6">
            Total Bill: ₹{totalBill.toFixed(2)}
          </div>
          ) }
          

          {/* Confirm Payment Button */}
          {parseInt(totalBill.toFixed(2)) > 0 && (
            <button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-lg transform hover:scale-105"
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
