import React from "react";
import "./Dashboard.css";
import Sidebar from "./sidebar/Sidebar";
import QuickActions from "./quickactions/Quickaction";
import ReactTranscation from "./reacttranscation/ReactTranscation";
import Orders from "./orders/Orders";
import Navbar from "./navbar/Navbar";
const Dashboard = () => {
  return (
    <>
    <Navbar/>
       <div className="d-flex">
      <Sidebar />
      <div>
        <div className="d-flex flex-wrap">
          <div>
            <QuickActions />
            <ReactTranscation />
          </div>
          <Orders />
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Dashboard;
