import React, { useState } from 'react';
import DashNavbar from '../components/DashBoardNavbar/DashNavbar';
import './Transactioncss.css';

interface Transaction {
  user: string;
  startTime: string;
  endTime: string;
  date: string;
  status: 'confirmed' | 'cancelled';
  paymentMethod: 'credits' | 'credit_card' | 'paypal';
  createdAt?: Date;
}

const transactions: Transaction[] = [
  {
    user: '610c5f7b3f497b0017e3b0c8',
    startTime: '10:00 AM',
    endTime: '11:00 AM',
    date: '2024-08-01',
    status: 'confirmed',
    paymentMethod: 'credit_card',
    createdAt: new Date('2024-07-31T08:30:00'),
  },
  {
    user: '610c5f7b3f497b0017e3b0c9',
    startTime: '01:00 PM',
    endTime: '02:00 PM',
    date: '2024-08-02',
    status: 'cancelled',
    paymentMethod: 'paypal',
    createdAt: new Date('2024-08-01T09:45:00'),
  },
  {
    user: '610c5f7b3f497b0017e3b0d0',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    date: '2024-08-03',
    status: 'cancelled',
    paymentMethod: 'credits',
    createdAt: new Date('2024-08-02T10:15:00'),
  },
  {
    user: '610c5f7b3f497b0017e3b0d1',
    startTime: '04:30 PM',
    endTime: '05:30 PM',
    date: '2024-08-04',
    status: 'confirmed',
    paymentMethod: 'credit_card',
    createdAt: new Date('2024-08-03T11:20:00'),
  },
];

const statusStyles = {
  confirmed: 'bg-green-600 text-white',
  cancelled: 'bg-red-600 text-white',
};

const paymentMethodStyles = {
  credits: 'text-blue-600',
  credit_card: 'text-indigo-600',
  paypal: 'text-teal-600',
};

//useEffect(() => {
//}, [])

const Transactions: React.FC = () => {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [showAboutModal, setShowAboutModal] = useState<boolean>(false);

  const handleCancelTransaction = (userId: string) => {
    console.log(`Transaction for user ${userId} cancelled`);
  };

  const handleViewMore = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleCloseModal = () => {
    setSelectedTransaction(null);
  };

  const handleOpenAboutModal = () => {
    setShowAboutModal(true);
  };

  const handleCloseAboutModal = () => {
    setShowAboutModal(false);
  };

  // Sort transactions by createdAt in descending order
  const sortedTransactions = [...transactions].sort((a, b) => (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0));

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <DashNavbar />
      <div className="max-w-7xl mx-auto mt-24 p-10 bg-white shadow-2xl rounded-lg">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Booking History</h1>
          <button
            onClick={handleOpenAboutModal}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors shadow-lg"
          >
            About
          </button>
        </div>
        <table className="w-full table-auto border-separate border-spacing-0 border border-gray-200">
          <thead>
            <tr className="text-left text-gray-700 bg-gray-100">
              <th className="p-4 border-b-2">Date</th>
              <th className="p-4 border-b-2">Start Time</th>
              <th className="p-4 border-b-2">End Time</th>
              <th className="p-4 border-b-2">Status</th>
              <th className="p-4 border-b-2">Payment Method</th>
              <th className="p-4 border-b-2">Created At</th>
              <th className="p-4 text-right border-b-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map((transaction) => (
              <tr key={transaction.user} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="p-4 border-b">{transaction.date}</td>
                <td className="p-4 border-b">{transaction.startTime}</td>
                <td className="p-4 border-b">{transaction.endTime}</td>
                <td className="p-4 border-b">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusStyles[transaction.status]}`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="p-4 border-b">
                  <span className={`font-semibold ${paymentMethodStyles[transaction.paymentMethod]}`}>
                    {transaction.paymentMethod.replace('_', ' ').toUpperCase()}
                  </span>
                </td>
                <td className="p-4 border-b">{transaction.createdAt?.toLocaleDateString()}</td>
                <td className="p-4 border-b text-right space-x-2">
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

        {/* Booking Details Modal */}
        {selectedTransaction && (
          <div className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 ${selectedTransaction ? 'modal-enter' : 'modal-exit'}`}>
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg relative transform scale-100 transition-transform duration-300 ease-in-out">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Details</h2>
              <p className="mb-2"><strong>Date:</strong> {selectedTransaction.date}</p>
              <p className="mb-2"><strong>Start Time:</strong> {selectedTransaction.startTime}</p>
              <p className="mb-2"><strong>End Time:</strong> {selectedTransaction.endTime}</p>
              <p className="mb-2"><strong>Status:</strong> {selectedTransaction.status}</p>
              <p className="mb-2"><strong>Payment Method:</strong> {selectedTransaction.paymentMethod.replace('_', ' ').toUpperCase()}</p>
              <p className="mb-2"><strong>Created At:</strong> {selectedTransaction.createdAt?.toLocaleDateString()}</p>
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  onClick={() => handleCancelTransaction(selectedTransaction.user)}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors shadow-lg"
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        )}

        {/* About Modal */}
        {showAboutModal && (
          <div className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 ${showAboutModal ? 'modal-enter' : 'modal-exit'}`}>
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg relative transform scale-100 transition-transform duration-300 ease-in-out">
              <button
                onClick={handleCloseAboutModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="mb-4">This application allows you to manage and view booking transactions. You can see details about each booking, cancel transactions, and get more information about the application using the About button.</p>
              {/* Add any additional information you want to include about your application here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
