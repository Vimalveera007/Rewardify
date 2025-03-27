import React, { useState } from "react";
import "./Order.css";
import { FaSearch, FaPhoneAlt } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import Sidebar from "../dashboard/sidebar/Sidebar";
import Navbar from "../dashboard/navbar/Navbar";

const initialOrders = [
  {
    id: "1001",
    date: "Mar 15, 2024",
    name: "Vimal Raj",
    phone: "9876543210",
    location: "Anna Nagar, Chennai",
    items: [
      { name: "Mango", price: 200 },
      { name: "Banana", price: 80 },
    ],
    total: 280,
    status: "Confirmation",
    pickup: false,
  },
  {
    id: "1002",
    date: "Apr 10, 2024",
    name: "Divya Sharma",
    phone: "8541236987",
    location: "Self-pickup: 02 Apr 2024, 3PM - 5PM",
    items: [
      { name: "Grapes", price: 120 },
      { name: "Pomegranate", price: 150 },
    ],
    total: 270,
    status: "Confirmation",
    pickup: true,
  },
  {
    id: "1003",
    date: "May 05, 2024",
    name: "Arun Kumar",
    phone: "9638527410",
    location: "Peelamedu, Coimbatore",
    items: [
      { name: "Watermelon", price: 250 },
      { name: "Papaya", price: 90 },
    ],
    total: 340,
    status: "Confirmation",
    pickup: false,
  },
  {
    id: "1004",
    date: "Jun 12, 2024",
    name: "Sangeetha Reddy",
    phone: "7894561230",
    location: "Self-pickup: 10 Jun 2024, 11AM - 1PM",
    items: [
      { name: "Strawberry", price: 180 },
      { name: "Blueberry", price: 220 },
    ],
    total: 400,
    status: "Confirmation",
    pickup: true,
  },
  {
    id: "1005",
    date: "Jul 20, 2024",
    name: "Mohan Das",
    phone: "9087654321",
    location: "T. Nagar, Chennai",
    items: [
      { name: "Oranges", price: 150 },
      { name: "Pineapple", price: 200 },
    ],
    total: 350,
    status: "Confirmation",
    pickup: false,
  },
  {
    id: "1006",
    date: "Aug 05, 2024",
    name: "Preethi Verma",
    phone: "8123456789",
    location: "Self-pickup: 04 Aug 2024, 2PM - 4PM",
    items: [
      { name: "Kiwi", price: 250 },
      { name: "Dragon Fruit", price: 300 },
    ],
    total: 550,
    status: "Confirmation",
    pickup: true,
  },
];

const Orders = () => {
    const [orders, setOrders] = useState(initialOrders);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [confirmedOrders, setConfirmedOrders] = useState([]);
  
    // Filter orders based on search query
    const filteredOrders = orders.filter(
      (order) =>
        order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.id.includes(searchQuery)
    );
  
    // Handle order rejection
    const handleRejectOrder = () => {
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== selectedOrderId)
      );
    };
  
    // Handle order confirmation
    const handleConfirmOrder = () => {
      setConfirmedOrders((prev) => [...prev, selectedOrderId]);
    };
  
    return (
      <>
        <Navbar />
        <div className="dashboard-container">
          <Sidebar />
          <main className="main-content">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="header">
                  <h2>My Orders</h2>
                  <button className="refresh-btn">
                    <MdRefresh size={20} />
                  </button>
                </div>
                <p className="update-time">
                  Last Update at: June 02, 2024 | 11:25 PM
                </p>
              </div>
  
              {/* Search Bar */}
              <div className="search-bar">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search for order id or Customer Name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
  
            {/* Orders List */}
            <div className="orders-list">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <div
                    key={order.id}
                    className={`order-card ${
                      confirmedOrders.includes(order.id) ? "confirmed-order" : ""
                    }`}
                  >
                    <p className="order-id">
                      Order Id: {order.id}
                      {order.pickup && " (Self - Pickup)"}
                    </p>
                    <p className="order-date">Date: {order.date}</p>
                    <p className="order-for">Order for:</p>
                    <p className="customer-name">{order.name}</p>
                    <div className="order-contact">
                      <FaPhoneAlt className="phone-icon" /> {order.phone}
                    </div>
                    <p className="order-location">{order.location}</p>
                    <p className="order-items-title">Order Items:</p>
                    <ul className="order-items">
                      {order.items.map((item, index) => (
                        <li key={index}>
                          {item.name} - ₹{item.price}
                        </li>
                      ))}
                    </ul>
                    <p className="order-total">
                      Total Bill Amount: ₹{order.total}{" "}
                      <span className="paid-status">PAID - UPI</span>
                    </p>
  
                    {/* Show buttons only if order is not confirmed */}
                    {!confirmedOrders.includes(order.id) && (
                      <div className="order-actions">
                        <button
                          className="reject-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#rejectOrderModal"
                          onClick={() => setSelectedOrderId(order.id)}
                        >
                          Reject Order
                        </button>
  
                        <button
                          className="confirm-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmOrderModal"
                          onClick={() => setSelectedOrderId(order.id)}
                        >
                          Confirm Order
                        </button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="no-orders">No orders found.</p>
              )}
            </div>
          </main>
        </div>
  
        {/* Modal for Rejection */}
        <div
          className="modal fade"
          id="rejectOrderModal"
          tabIndex="-1"
          aria-labelledby="rejectOrderLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="rejectOrderLabel">
                  Confirm Rejection
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to reject this order?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleRejectOrder}
                  data-bs-dismiss="modal"
                >
                  Reject Order
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Modal for Confirmation */}
        <div
          className="modal fade"
          id="confirmOrderModal"
          tabIndex="-1"
          aria-labelledby="confirmOrderLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="confirmOrderLabel">
                  Confirm Order
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to confirm this order?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleConfirmOrder}
                  data-bs-dismiss="modal"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Orders;
