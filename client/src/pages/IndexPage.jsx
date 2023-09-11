import React from "react";
import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl">Welcome to Mern-Auth</h1>
      <div className="flex gap-2 mt-10">
        <Link to={"/login"} className="px-3 py-1.5 rounded-md shadow-sm font-semibold text-sm text-white bg-indigo-500 hover:bg-indigo-400 transition cursor-pointer">Login</Link>
        <Link to={"/login"} className="px-3 py-1.5 rounded-md shadow-sm font-semibold text-sm text-white bg-indigo-500 hover:bg-indigo-400 transition cursor-pointer">Register</Link>
      </div>
    </div>
  );
};

export default IndexPage;
