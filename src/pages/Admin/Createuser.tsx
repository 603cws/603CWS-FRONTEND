import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

const CreateUser: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { name, email, password, phone };

    try {
      const response = await axios.post("http://localhost:3000/api/v1/users/", data, { withCredentials: true });

      if (response.data.msg === "Invalid Inputs") {
        toast.error("Invalid Inputs!");
        return;
      }
      if (response.data.msg === "Username exists") {
        toast.error("This username already exists");
        return;
      }
      if (response.data.msg === "Email Exists") {
        toast.error("Account with this email already exists");
      }
      if (response.data.msg === "user created") {
        toast.success("User created successfully");
      }
    } catch (e) {
      toast.error("An error occurred while creating the user");
    }
  };

  return (
    <div className='bg-gradient-to-r from-blue-500 to-indigo-600 min-w-screen'>
      <div className="flex justify-center items-center min-h-screen" >
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Create New User</h2>
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-gray-600">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-gray-600">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-gray-600">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 text-gray-600">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
