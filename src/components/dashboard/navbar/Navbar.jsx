import React, { useEffect, useState } from "react";
import "./Navbar.css";
import navbarlogo from "../../../assets/Frame.png";
import coins from "../../../assets/coins.png";
import social from "../../../assets/social.png";
const Navbar = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div className="nav-bar">
      <div className="d-flex gap-5">
        <img src={navbarlogo} alt="Logo" />
        <div className="px-5">
          <h5 className="fw-semibold m-0 p-0">
            Welcome , {userName ? userName : "Guest"} 👋
          </h5>
        </div>
      </div>

      <div className="d-flex gap-5">
        <div>
          <img src={coins} alt="" />
        </div>
        <div>
          <img src={social} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
