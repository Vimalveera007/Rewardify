import React, { useState } from "react";
import "./Profile.css";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const Profile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailEditable, setEmailEditable] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    let errors = {};

    if (!name.trim()) {
      errors.name = "Name is required.";
    }

    if (!phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email format.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Profile updated successfully!");
   
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="main-content">
          <div className="profile-container">
            <h2>My Profile</h2>
            <div className="profile-tabs">
              <button className="active">Profile Details</button>
              <button>Shop Details</button>
              <button>My Wallet</button>
              <button>About REWARDIFY</button>
              <button>Logout</button>
            </div>

            <form onSubmit={handleSubmit} className="profile-details">
              <h3>Profile Details</h3>
              <p>Here you can view and edit your details.</p>

              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="error" style={{color:"red"}}>{errors.name}</p>}

              <label htmlFor="phone">Number</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <p className="error" style={{color:"red"}}>{errors.phone}</p>}

              <label htmlFor="email">Email</label>
              <div className="email-section">
                <input
                  type="email"
                  id="email"
                  value={email}
                  readOnly={!emailEditable}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* <span className="change-btn" onClick={() => setEmailEditable(true)}>Change</span> */}
              </div>
              {errors.email && <p className="error " style={{color:"red"}}>{errors.email}</p>}

              <button type="submit" className="btn btn-success float-end mt-5">Submit</button>
             
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
