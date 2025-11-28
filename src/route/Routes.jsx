import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";


import Login from "../page/auth/Login";
import Signup from "../page/auth/Signup";
import MakeNewPassword from "../page/auth/MakeNewPassword";
import ForgetPassword from "../page/auth/ForgetPassword";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/make-new" element={<MakeNewPassword />} />
      <Route path="/forget-pass" element={<ForgetPassword />} />

    </Routes>
  );
};

export default Routers;