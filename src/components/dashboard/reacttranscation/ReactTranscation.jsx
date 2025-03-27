import React from 'react'
import './Recent.css';
const transactions = [
    { id: 1, phone: "+91956598562", amount: "+500.00", method: "QR Scan", time: "2hr ago" },
    { id: 2, phone: "+91956598562", amount: "+1000.00", method: "UPI", time: "4hr ago" },
    { id: 3, phone: "+91956598562", amount: "+2000.00", method: "UPI", time: "8hr ago" },
    { id: 4, phone: "+91956598562", amount: "+1400.00", method: "UPI ID", time: "10hr ago" },
  ];
const ReactTranscation = () => {
    return (
        <div className="recent-transactions">
          <h2 className="recent-transactions-title">Recent Transactions</h2>
          <p className="recent-transactions-update">Last Update: June 02, 2024 | 11:25 PM</p>
          <div className="recent-transactions-list">
            {transactions.map((tx) => (
              <div key={tx.id} className="transaction-item">
                <div>
                  <p className="transaction-phone">{tx.phone} Send a Payment</p>
                  <p className="transaction-method">{tx.method}</p>
                </div>
                <p className="transaction-amount">{tx.amount}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default ReactTranscation