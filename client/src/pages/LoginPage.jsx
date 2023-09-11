import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import toast from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);

  async function handleLogin(ev) {
    ev.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setUser(data);
        toast.success("Login Successfull");
        // Refresh the page
        navigate("/account");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center mb-4">Login</h1>

      <div className="mt-10 w-full mx-auto max-w-xs sm:max-w-sm ">
        <form
          onSubmit={handleLogin}
          className="space-y-6"
          action="#"
          method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 pl-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="w-full rounded-md border-0 py-1.5 pl-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Dont have an account?{" "}
          <Link
            to={"/register"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
