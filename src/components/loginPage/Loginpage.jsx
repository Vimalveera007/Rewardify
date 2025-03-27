import React, { useState } from "react";
import "./Loginpage.css";
import logo from "../../assets/loginlogo.png";
import { Link } from "react-router-dom";

const Loginpage = () => {
  const [contactNo, setContactNo] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSaveData = () => {
    if (!contactNo.trim() || !name.trim()) {
      setMessage("Please enter your name and mobile number.");
      return;
    }

    localStorage.setItem("contactNo", contactNo.trim());
    localStorage.setItem("userName", name.trim());
  };

  return (
    <div className="login-bg">
      <div className="login">
        <div className="d-flex align-items-center">
          <img src={logo} alt="logo" className="py-2" />
        </div>
        <h2 style={{ color: "#030401" }} className="py-2">
          Get started with <br /> REWARDIFY
        </h2>
        <p style={{ color: "#868C9A" }}>
          Enter your mobile number or <br /> Shop ID to get started
        </p>
        <input
          type="text"
          placeholder="Enter your Name"
          className="input-box mt-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter shop ID / Mobile number"
          className="input-box my-2"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          maxLength={10}
        />
       

        <Link to="/dashboard">
          <button className="send-btn mt-2" onClick={handleSaveData}>
            Submit
          </button>
        </Link>

        {message && <p style={{ color: "#ff0000", marginTop: "10px" }}>{message}</p>}

        <p style={{ color: "#979797" }} className="pt-4">
          By clicking, you agree to our{" "}
          <span className="fw-semibold" style={{ color: "black" }}>
            Terms & <br /> Conditions <span style={{ color: "#979797" }}>and</span> Privacy Policy.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
