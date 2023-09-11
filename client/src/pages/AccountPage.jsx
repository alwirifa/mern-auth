import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PacmanLoader } from "react-spinners";

const AccountPage = () => {
  const navigate = useNavigate();
  const { ready, user, setUser } = useContext(UserContext);

  async function logout() {
    await axios.post("/logout");
    navigate("/login");
    setUser(null);
  }

  if (!ready) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <PacmanLoader color="#dbdbdb" />
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <p className="text-2xl font-semibold capitalize">Hello {user.name}!</p>
      </div>
      <div className="mt-6">
        <button
          onClick={logout}
          className="block px-3 py-1.5 rounded-md shadow-sm font-semibold text-sm text-white bg-indigo-500 hover:bg-indigo-400 transition cursor-pointer">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
