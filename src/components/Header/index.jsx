import React from "react";
import Navbar from "./Navbar";

// import img from '/logo.png'
const Header = () => {
  return (
    <div>
      <Navbar isLoggedIn={false} name="Faisal" image="/logoemart.png" />
    </div>
  );
};

export default Header;
