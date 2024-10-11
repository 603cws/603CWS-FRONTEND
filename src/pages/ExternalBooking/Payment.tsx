import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt, FaChair, FaClock, FaMoneyBillAlt, FaBuilding } from 'react-icons/fa'; // Icons for different sections
import "react-datepicker/dist/react-datepicker.css"; // Date picker styles
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';

const Payment: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<number>(1);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedOffice, setSelectedOffice] = useState<string>('Bangalore Office');
  const [price, setPrice] = useState<number>(7999.99); // Default price in rupees (₹)
  const [bundleOption, setBundleOption] = useState<string>('Basic');

  const handleBundleChange = (bundle: string) => {
    setBundleOption(bundle);
    switch (bundle) {
      case 'Standard':
        setPrice(11999.99);
        break;
      case 'Premium':
        setPrice(15999.99);
        break;
      default:
        setPrice(7999.99);
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50 relative min-w-full">
      {/* Navbar */}
      <header className="bg-white shadow-md z-50 fixed w-full top-0">
        <Navbar />
      </header>
      <div className="bg-gray-50 min-h-screen pb-8 pt-20">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Confirm Your Payment</h1>
          
          {/* Office Selector */}
          <div className="mb-6">
            <label htmlFor="office" className="block text-lg font-medium text-gray-700 mb-2">Select Office</label>
            <div className="relative flex items-center">
              <FaBuilding className="absolute left-3 text-gray-400 top-1/2 transform -translate-y-1/2" />
              <select
                id="office"
                value={selectedOffice}
                onChange={(e) => setSelectedOffice(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="Bangalore Office">Bangalore Office</option>
                <option value="Mumbai Office">Mumbai Office</option>
                <option value="Delhi Office">Delhi Office</option>
              </select>
            </div>
          </div>

          {/* Date Picker */}
          <div className="mb-6">
            <label htmlFor="date" className="block text-lg font-medium text-gray-700 mb-2">Select Date</label>
            <div className="relative flex items-center">
              <FaCalendarAlt className="absolute left-3 text-gray-400 top-1/2 transform -translate-y-1/2" />
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date | null) => setSelectedDate(date)}
                dateFormat="yyyy/MM/dd"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholderText="Select a date"
              />
            </div>
          </div>

          {/* Seat Selector */}
          <div className="mb-6">
            <label htmlFor="seats" className="block text-lg font-medium text-gray-700 mb-2">Select Seats</label>
            <div className="relative flex items-center">
              <FaChair className="absolute left-3 text-gray-400 top-1/2 transform -translate-y-1/2" />
              <input
                type="number"
                id="seats"
                min={1}
                value={selectedSeats}
                onChange={(e) => setSelectedSeats(Number(e.target.value))}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Time Slot Selector */}
          <div className="mb-6">
            <label htmlFor="timeSlot" className="block text-lg font-medium text-gray-700 mb-2">Select Time Slot</label>
            <div className="relative flex items-center">
              <FaClock className="absolute left-3 text-gray-400 top-1/2 transform -translate-y-1/2" />
              <select
                id="timeSlot"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="" disabled>Select a time</option>
                <option value="09:00-11:00">09:00 AM - 11:00 AM</option>
                <option value="11:00-13:00">11:00 AM - 01:00 PM</option>
                <option value="14:00-16:00">02:00 PM - 04:00 PM</option>
              </select>
            </div>
          </div>

          {/* Bundle Option */}
          <div className="mb-6">
            <label htmlFor="bundle" className="block text-lg font-medium text-gray-700 mb-2">Select Bundle</label>
            <div className="relative flex items-center">
              <FaMoneyBillAlt className="absolute left-3 text-gray-400 top-1/2 transform -translate-y-1/2" />
              <select
                id="bundle"
                value={bundleOption}
                onChange={(e) => handleBundleChange(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="Basic">Basic - ₹7,999.99</option>
                <option value="Standard">Standard - ₹11,999.99</option>
                <option value="Premium">Premium - ₹15,999.99</option>
              </select>
            </div>
          </div>

          {/* Total Price */}
          <div className="text-right text-2xl font-bold text-gray-800 mb-6">
            Total: ₹{price.toFixed(2)}
          </div>

          {/* Confirm Payment Button */}
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg shadow-lg transition duration-200">
            Pay Now
          </button>
        </div>
      </div>
      <footer className="mt-16">
        <Footer />
      </footer>
    </div>
  );
};

export default Payment;
