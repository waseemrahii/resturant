import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Loginwithphone from "./Loginwithphone";
import Forgotpassword from "./Forgotpassword";
import Login from "./Login";

const FormMain = () => {
  return (
    <div>
      <Routes>
        {" "}
        <Route path="/signin" element={<SignUp />} />
        <Route path="/phone" element={<Loginwithphone />} />
        <Route path="/forget" element={<Forgotpassword />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default FormMain;
