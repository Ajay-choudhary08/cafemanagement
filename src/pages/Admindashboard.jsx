
import React, { useState, useEffect } from 'react';
import './Admindashboard.css'; 
// import './Admindashboard.css'

function Admindashboard() {
  // Dummy data for now
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Temporary static data (replace later with localStorage/Firebase)
    const sampleOrders = [
      {
        id: 1,
        customer: "Ajay",
        items: [
          { name: "Cold Coffee", quantity: 2, price: 120 },
          { name: "Sandwich", quantity: 1, price: 80 }
        ],
        total: 320,
      },
      {
        id: 2,
        customer: "Ravi",
        items: [
          { name: "Latte", quantity: 1, price: 150 }
        ],
        total: 150,
      },
    ];
    setOrders(sampleOrders);
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>☕ Café Management - Admin Dashboard</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total (₹)</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>
                {order.items.map((it, i) => (
                  <div key={i}>
                    {it.name} x {it.quantity}
                  </div>
                ))}
              </td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admindashboard;


// import React from 'react';
// import './Admindashboard.css';

// function Admindashboard() {
//   return (
//     <div className="admin-dashboard">
//       <h1>Admin Dashboard Test Page</h1>
//     </div>
//   );
// }

// export default Admindashboard;
