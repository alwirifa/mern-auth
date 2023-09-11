import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import AccountPage from "./pages/AccountPage";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "https://mern-auth-alpha.vercel.app/";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;
