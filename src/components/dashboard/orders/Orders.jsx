import React from "react";
import "./Orders.css";

const ordersData = [
  {
    id: "12345",
    customer: "Rajesh Kannan",
    items: "1 x Ooty apple, 5 x White Egg",
    total: "₹150.00",
  },
  {
    id: "12346",
    customer: "Vimal Karthick",
    items: "2 x Mango, 10 x Banana",
    total: "₹250.00",
  },
  {
    id: "12347",
    customer: "Anand Kumar",
    items: "3 x Orange, 1 x Watermelon",
    total: "₹300.00",
  },
];

const Orders = () => {
  return (
    <div className="orders-container">
      <h2 className="orders-title">My Orders</h2>
      <div className="orders-list">
        {ordersData.map((order) => (
          <div key={order.id} className="order-card">
            <p className="order-text">
              Order Id: <span className="order-highlight">{order.id}</span>
            </p>
            <p className="order-text">
              Order for: <span className="order-bold">{order.customer}</span>
            </p>
            <p className="order-text">Items: {order.items}</p>
            <p className="order-text">
              Total: <span className="order-highlight">{order.total}</span>
            </p>
            <div className="order-buttons">
              <button className="reject-button">Reject</button>
              <button className="confirm-button">Confirm</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
