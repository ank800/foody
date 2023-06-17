import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderInfo = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('http://localhost:8000/orderget');
      console.log(response);
      setOrders(response.data);
    };

    getUsers();
  }, []);

  async function deleteOrder(id) {
    alert(id)
    try {
      const result = await axios.delete(`http://localhost:8000/orders/${id}`);
      console.log(result);
      setOrders(orders.filter((user) => user._id !== id));
      alert("Order rejected and removed from the database")
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
    <h1 className='text-center text-white text-4xl'>Order Info</h1>
      <table className='border-separate border border-red-400'>
        <thead>
          <tr>
            <th className='border'>S.NO</th>
            <th className='border'>Name</th>
            <th className='border'>Price</th>
            <th className='border'>Phone</th>
            <th className='border'>Address</th>
            <th className='border'>Pincode</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <td className='border'>{index + 1}</td>
              <td className='border'>{order.name}</td>
              <td className='border'>{order.price}</td>
              <td className='border'>{order.phone}</td>
              <td className='border'>{order.address}</td>
              <td className='border'>{order.pin}</td>
              <td className='border'>
                <button className='bg-green-500 p-3 m-1 rounded-md' onClick={()=>alert("Order Accepted ")}>Accept</button>
              </td>
              <td className='border'>
                <button className='bg-red-500 p-3 m-1 rounded-md' onClick={() => deleteOrder(order._id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderInfo;
