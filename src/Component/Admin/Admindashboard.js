import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderInfo from './OrderInfo';
import Breakfast from '../Breakfast';
import BreakfastData from './BreakfastData';
import { Link } from 'react-router-dom';

const Admindashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('http://localhost:8000/users');
      console.log(response)
      setUsers(response.data);
    };

    getUsers();
  }, []);

  async function deleteUser(id) {
    alert(id)
    try {
      const result = await axios.delete(`http://localhost:8000/users/${id}`);
      console.log(result);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='bg-gray-500 h-screen p-5'>
    {/* header */}
    <h1 className='text-white text-center text-5xl'>Admin Dashboard</h1>
    <Link to="/breakinfo"><button className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'>BreakFst info page</button></Link>
      <h1>User List</h1>
      <table className='border-separate border border-red-400 '>
        <thead>
          <tr>
            <th className='border'>ID</th>
            <th className='border'>Name</th>
            <th className='border'>Email</th>
            <th className='border'>Actions</th>
          </tr>
        </thead>
        <tbody >
          {users.map(user => (
            <tr key={user._id}>
              <td className='border'>{user._id}</td>
              <td className='border'>{user.username}</td>
              <td className='border'>{user.password}</td>
              <td className='border'>
                <button className='bg-red-500 p-3 rounded-md' onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <OrderInfo/>
      {/* <BreakfastData/> */}
    </div>
  );
};

export default Admindashboard;
