import React from "react";

const ThirdPartyCookiesPrompt: React.FC = () => {
  const handleAccept = () => {
    // Logic to handle accepting cookies
    localStorage.setItem("cookiesAccepted", "true");
    window.location.reload(); // Refresh to apply changes
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">We use third-party cookies</h2>
        <p className="mb-4">To enhance your browsing experience, we use cookies from third-party services. Please accept cookies to continue using our site.</p>
        <button
          onClick={handleAccept}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default ThirdPartyCookiesPrompt;
