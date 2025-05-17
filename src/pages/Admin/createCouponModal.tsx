// Define the User interface
import React, { useState } from "react";
import axios from "axios";
import "./popup.css";
import toast from "react-hot-toast";

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCouponModal: React.FC<CreateUserModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState<number | undefined>();
  const [expiryDate, setExpiryDate] = useState("");
  const [usageLimit, setUsageLimit] = useState<number | undefined>();

  const PORT = "https://603-bcakend-new.vercel.app";

  //req body for creating a discount code
  // {
  //     "code": "DISCOUNT10",
  //     "discount": 10,
  //     "expiryDate": "2024-12-31T23:59:59Z",
  //     "usageLimit": 100
  //   }

  const handleClose = async () => {
    toast.success("coupon created");
    setCode("");
    setDiscount(undefined);
    setUsageLimit(undefined);
    setExpiryDate("");
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${PORT}/api/v1/coupon/createcoupon`,
        {
          code,
          discount,
          usageLimit,
          expiryDate,
        },
        { withCredentials: true }
      );

      console.log(response);
      if (response.data.message === "success") {
        toast.success("coupon created");
        await handleClose();
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error("coupon already exist");
      console.log(error.message);
    }
    // try {
    //   const response = await axios.post(
    //     "https://603-bcakend-new.vercel.app/api/v1/users/",
    //     {
    //       companyName,
    //       email,
    //       role,
    //       monthlycredits,
    //       username,
    //       location,
    //       password,
    //       phone,
    //       member,
    //     },
    //     { withCredentials: true }
    //   );

    //   console.log(response);
    //   if (response.data.msg === "User created") {
    //     toast.success(response.data.msg);
    //     // navigate("/login", { replace: true });
    //   } else {
    //     toast.error(response.data.msg);
    //   }

    //   //   //for non register user
    //   //   if (!isAuthenticated) {
    //   //     //navigate him to login page
    //   //     navigate("/login");
    //   //   }

    //   onClose();
    // } catch (error) {
    //   toast.error("An error occurred");
    //   console.error("Error creating user:", error);
    // }
  };

  if (!isOpen) return null;
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "fade-in" : "fade-out"
      } z-50`}
    >
      <div className="form-container overflow-y-auto max-h-[650px] bg-white rounded-lg shadow-lg p-8 w-full max-w-md  ">
        <h2 className="text-2xl font-bold mb-4">Create CouponCode</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Coupon Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Discount percentage</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={discount}
              onChange={(e) => setDiscount(+e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Usage Limit</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={usageLimit}
              onChange={(e) => setUsageLimit(+e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Expiry Date</label>
            <input
              type="datetime-local"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCouponModal;
