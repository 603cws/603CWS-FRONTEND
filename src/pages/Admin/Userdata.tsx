import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
// import axios from "axios";
import toast from "react-hot-toast";
import axiosInstance from "../../utils/axiosInstance";

function Userdata() {
  const navigate = useNavigate();
  const { user } = useParams();
  const [credits, setcredits] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [kyc, setKyc] = useState("");
  const [created, setCreated] = useState("");
  //   const PORT = import.meta.env.VITE_BACKEND_URL;
  async function userinfo() {
    const response = await axiosInstance.get(`/api/v1/users/${user}`);
    // const response = await axios.get(`${PORT}/api/v1/users/${user}`, {
    //   headers: {
    //     Authorization: localStorage.getItem("token"),
    //   },
    // });
    const msg = response.data.msg;
    setcredits(msg.credits);
    setEmail(msg.email);
    setKyc(msg.kyc);
    setPhone(msg.phone);
    setUsername(msg.name);
    const createdat = msg.createdAt;
    setCreated(createdat.slice(0, 10));
  }
  async function deleteacc() {
    const response = await axiosInstance.delete(`/api/v1/users/${user}`);
    // const response = await axios.delete(`${PORT}/api/v1/users/${user}`, {
    //   headers: {
    //     Authorization: localStorage.getItem("token"),
    //   },
    // });
    if (response.data.msg == "user deleted") {
      toast.success("user deleted");
      navigate("/admin/dashboard");
    } else {
      toast.error("Some error occoured");
    }
  }
  useEffect(() => {
    userinfo();
  }, []);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <div className="w-full flex justify-end">
            <div className="flex">
              <span
                className="p-1 cursor-pointer"
                onClick={() => {
                  navigate(`/admin/edituser/${username}`);
                }}
              >
                <CiEdit />
              </span>
              <span
                className="p-1 cursor-pointer"
                onClick={() => {
                  deleteacc();
                }}
              >
                <MdDelete />
              </span>
            </div>
          </div>
          <div className="mb-2 flex ">
            <span className="font-bold mr-2">Username: </span>
            <span className="text-gray-700">{username}</span>
          </div>
          <div className="mb-2 flex ">
            <span className="font-bold mr-2">Email: </span>
            <span className="text-gray-700">{email}</span>
          </div>
          <div className="mb-2 flex ">
            <span className="font-bold mr-2">Phone: </span>
            <span className="text-gray-700">{phone}</span>
          </div>
          <div className="mb-2 flex ">
            <span className="font-bold mr-2">credits:</span>
            <span className="text-gray-700">{credits}</span>
          </div>
          <div className="mb-2 flex ">
            <span className="font-bold mr-2">Kyc: </span>
            <span className="text-gray-700">{kyc}</span>
          </div>
          <div className="flex ">
            <span className="font-bold mr-2">Created At:</span>
            <span className="text-gray-700">{created}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userdata;
