import React, { useState, useEffect } from 'react';
import DashNavbar from '../components/DashBoardNavbar/DashNavbar';
import './Transactioncss.css';
import axios from 'axios';
import toast from 'react-hot-toast';

interface Transaction {
  _id: string;
  user: string;
  startTime: string;
  endTime: string;
  date: string;
  status: 'confirmed' | 'cancelled';
  paymentMethod: 'credits' | 'credit_card' | 'paypal';
  createdAt: Date | string;
  companyName: string;
  spaceName: string;
  creditsspent: number;
}

const statusStyles = {
  confirmed: 'bg-green-600 text-white',
  cancelled: 'bg-red-600 text-white',
};

const paymentMethodStyles = {
  credits: 'text-blue-600',
  credit_card: 'text-indigo-600',
  paypal: 'text-teal-600',
};

const Transactions: React.FC = () => {
  const PORT = "https://603-bcakend-new.vercel.app";
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [showAboutModal, setShowAboutModal] = useState<boolean>(false);
  const [showCancelConfirmation, setShowCancelConfirmation] = useState<boolean>(false);
  const [showWarningMessage, setShowWarningMessage] = useState<boolean>(false);
  const [isCancellable, setIsCancellable] = useState<boolean>(true);
  const [isRefundable, setIsRefundable] = useState<boolean>(true);
  const [bookingid, setbookingid] = useState<string>();

  const handleCancelTransaction = async () => {
    try {
      const response = await axios.post(`${PORT}/api/v1/bookings/cancelbooking`, { bookingid, isCancellable, isRefundable }, { withCredentials: true });
      setSelectedTransaction(null);
      setShowAboutModal(false);
      setShowWarningMessage(false);
      setShowCancelConfirmation(false);
      if (response.data.message === "Booking cancelled successfully!") {
        toast.success("Booking cancelled successfully!");
      } else {
        toast.error("An error occured! PLease try again later");
      }
      console.log(response);

    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    }
  };

  const handleViewMore = (transaction: Transaction) => {
    setbookingid(transaction._id);
    setSelectedTransaction(transaction);
    checkForRefundWarning(transaction);
  };

  const handleCloseModal = () => {
    setbookingid("");
    setSelectedTransaction(null);
    setShowWarningMessage(false);
    setIsRefundable(true);
  };

  const handleOpenAboutModal = () => {
    setShowAboutModal(true);
  };

  const handleCloseAboutModal = () => {
    setShowAboutModal(false);
  };

  const allbookings = async () => {
    try {
      const response = await axios.get(`${PORT}/api/v1/bookings/getallbookingsbyuser`, { withCredentials: true });
      setTransactions(response.data);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    }
  };



  useEffect(() => {
    allbookings();
  }, []);

  const handleOpenCancelConfirmation = () => {
    setShowCancelConfirmation(true);
  };

  const handleCloseCancelConfirmation = () => {
    setShowCancelConfirmation(false);
  };

  const formatDate = (date: Date) => {
    const month = date.getMonth() + 1; // Months are zero-indexed
    const day = date.getDate();
    const year = date.getFullYear(); // Get the full year

    return `${day}/${month}/${year}`;
  };


  const compareDates = (date1: string, date2: string): number => {
    // Helper function to parse a date string into year, month, and day
    const parseDateComponents = (dateStr: string): { year: number, month: number, day: number } => {
      const [day, month, year] = dateStr.split('/').map(Number);
      return { year, month, day };
    };

    // Parse the input dates into components
    const { year: year1, month: month1, day: day1 } = parseDateComponents(date1);
    const { year: year2, month: month2, day: day2 } = parseDateComponents(date2);
    console.log(year1, month1, day1)
    console.log(year2, month2, day2)
    // Compare years
    if (year1 < year2) {
      return 1;
    } else if (year1 > year2) {
      return 0;
    }

    // If years are the same, compare months
    if (month1 < month2) {
      return 1;
    } else if (month1 > month2) {
      return 0;
    }

    // If months are the same, compare days
    if (day1 < day2) {
      return 1;
    } else if (day1 > day2) {
      return 0;
    }

    // If all components are the same
    return 2;
  };





  const timeToMinutes = (time: string) => {
    const [timePart, period] = time.split(' ');
    const [hours, minutes] = timePart.split(':').map(Number);

    let totalMinutes = 0;

    if (period === 'pm') {
      if (hours === 12) {
        totalMinutes = (hours * 60) + minutes; // 12 PM is 720 minutes
      } else {
        totalMinutes = ((hours + 12) * 60) + minutes; // Convert PM hour to 24-hour format
      }
    } else if (period === 'am') {
      if (hours === 12) {
        totalMinutes = minutes; // 12 AM is 0 minutes
      } else {
        totalMinutes = (hours * 60) + minutes; // Convert AM hour to minutes
      }
    } console.log(totalMinutes)
    return totalMinutes;
  };


  const getCurrentTimeInMinutes = () => {
    const now = new Date();
    const hours = now.getHours();  // Get current hours (0-23)
    const minutes = now.getMinutes();
    console.log((hours * 60) + minutes);  // Get current minutes (0-59)
    return (hours * 60) + minutes;  // Convert hours to minutes and add current minutes
  };




  const checkForRefundWarning = (transaction: Transaction) => {
    const today = new Date();
    const formattedDate = formatDate(today);
    console.log(formattedDate.toString());
    console.log(transaction.date.toString())

    if (formattedDate.toString() === transaction.date.toString()) {
      const minutes = timeToMinutes(transaction.startTime);
      const currentMinutes = getCurrentTimeInMinutes();
      console.log(currentMinutes);
      console.log(minutes)
      console.log(formattedDate.toString());
      console.log(transaction.date.toString());
      if (currentMinutes < minutes) {
        if (minutes - currentMinutes < 40 && minutes - currentMinutes > 0) {
          setShowWarningMessage(true);
          setIsRefundable(false);
        }
        setIsCancellable(true);
      } else {
        setIsCancellable(false);
      }
    } else {
      let res = compareDates(formattedDate.toString(), transaction.date.toString());
      if (res == 1) {
        setIsCancellable(true);
        setIsRefundable(true);
      } else if (res == 0) {
        setIsCancellable(false);
      }
    }
  };



  const sortedTransactions = transactions.length > 0
    ? [...transactions].sort((a, b) => {
      const aTime = new Date(a.createdAt).getTime();
      const bTime = new Date(b.createdAt).getTime();
      return bTime - aTime;
    })
    : [];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <DashNavbar />
      <div className="max-w-7xl mx-auto mt-24 p-10 bg-white shadow-2xl rounded-lg">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl  font-extrabold text-gray-900">Booking History</h1>
          <button
            onClick={handleOpenAboutModal}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors shadow-lg"
          >
            About
          </button>
        </div>
        <div className="overflow-x-auto">
          {sortedTransactions.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-4 text-left text-sm font-semibold">Company</th>
                  <th className="p-4 text-left text-sm font-semibold">Date</th>
                  <th className="p-4 text-left text-sm font-semibold">Start Time</th>
                  <th className="p-4 text-left text-sm font-semibold">End Time</th>
                  <th className="p-4 text-left text-sm font-semibold">Status</th>
                  <th className="p-4 text-left text-sm font-semibold">Payment Method</th>
                  <th className="p-4 text-left text-sm font-semibold">Created At</th>
                  <th className="p-4 text-right text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedTransactions.map((transaction) => (
                  <tr key={transaction._id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="p-4 text-sm text-gray-600">{transaction.companyName}</td>
                    <td className="p-4 text-sm text-gray-600">{transaction.date}</td>
                    <td className="p-4 text-sm text-gray-600">{transaction.startTime}</td>
                    <td className="p-4 text-sm text-gray-600">{transaction.endTime}</td>
                    <td className="p-4 text-sm">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusStyles[transaction.status]}`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm">
                      <span className={`font-semibold ${paymentMethodStyles[transaction.paymentMethod]}`}>
                        {transaction.paymentMethod.replace('_', ' ').toUpperCase()}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-600">{new Date(transaction.createdAt).toLocaleDateString()}</td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => handleViewMore(transaction)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                      >
                        View More
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-8 text-center text-gray-600">
              <p className="text-lg font-semibold">No bookings have been created yet.</p>
            </div>
          )}
        </div>



        {/* Booking Details Modal */}
        {selectedTransaction && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg relative transform transition-transform duration-300">
              <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
              <p><strong>Company:</strong> {selectedTransaction.companyName}</p>
              <p><strong>Space:</strong> {selectedTransaction.spaceName}</p>
              <p><strong>Date:</strong> {selectedTransaction.date}</p>
              <p><strong>Start Time:</strong> {selectedTransaction.startTime}</p>
              <p><strong>End Time:</strong> {selectedTransaction.endTime}</p>
              <p><strong>Status:</strong> {selectedTransaction.status}</p>
              <p><strong>Payment Method:</strong> {selectedTransaction.paymentMethod}</p>
              <p><strong>Credits Spent:</strong> {selectedTransaction.creditsspent}</p>
              <p><strong>Created At:</strong> {new Date(selectedTransaction.createdAt).toLocaleString()}</p>

              {showWarningMessage && (
                <div className="mt-4 p-4 bg-yellow-200 text-yellow-800 rounded-lg shadow-md">
                  Warning: Canceling this booking now will not refund the credits, as it is within 40 minutes of the scheduled start time.
                </div>
              )}

              <div className="mt-8 flex justify-end space-x-4">
                {isCancellable ? (
                  <button
                    onClick={handleOpenCancelConfirmation}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Cancel Booking
                  </button>
                ) : (
                  <div className="text-red-600 font-semibold">
                    Cancellation is no longer available.
                  </div>
                )}
                <button
                  onClick={handleCloseModal}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Cancel Confirmation Modal */}
        {showCancelConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg relative">
              <h2 className="text-2xl font-bold mb-4">Cancel Booking</h2>
              <p>Are you sure you want to cancel this booking?</p>
              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={() => handleCancelTransaction()}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Confirm Cancellation
                </button>
                <button
                  onClick={handleCloseCancelConfirmation}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* About Modal */}
        {showAboutModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg relative">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="mb-6">This is the transaction history page where you can view your booking details. Please note that while you can cancel your booking, cancellations made less than <strong>40 minutes</strong> before the scheduled start time will not be eligible for a credit refund.</p>
              <div className="flex justify-end">
                <button
                  onClick={handleCloseAboutModal}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
