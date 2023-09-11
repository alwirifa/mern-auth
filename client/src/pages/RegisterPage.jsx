import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function registerUser(ev) {
    const { name, email, password } = data;
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.promise(
          Promise.resolve(), // Gantilah ini dengan promise yang sesuai jika perlu
          {
            loading: "Registering...",
            success: <b>Registration Successful!</b>,
            error: <b>Registration Failed.</b>,
          }
        );
        navigate("/login");
      }
    } catch (e) {
      toast.error('Registration Failed.')
      console.log(e);
    }
  }
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center mb-4">Register</h1>

      <div className="mt-10 w-full mx-auto max-w-xs sm:max-w-sm ">
        <form action="#" onSubmit={registerUser} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="text-sm font-semibold leading-6 text-gray-900">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              autoComplete="name"
              className="w-full mt-2 py-1.5 pl-2 rounded-md border-0 ring-1 ring-inset outline-none text-sm leading-6 shadow-sm ring-gray-300 focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              autoComplete="email"
              className="w-full mt-2 py-1.5 pl-2 rounded-md border-0 ring-1 ring-inset outline-none text-sm leading-6 shadow-sm ring-gray-300 focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-semibold leading-6 text-gray-900">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              autoComplete="current-password"
              className="w-full mt-2 py-1.5 pl-2 rounded-md border-0 ring-1 ring-inset outline-none text-sm leading-6 shadow-sm ring-gray-300 focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-400"
            />
          </div>

          <div>
            <button className="w-full py-1.5 border-0 rounded-md shadow-md text-sm text-white font-semibold bg-indigo-500 hover:bg-indigo-400">
              Sign Up
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-semibold leading-6 text-indigo-500 hover:text-indigo-400 cursor-pointer">
              Login
            </Link>
            `
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
