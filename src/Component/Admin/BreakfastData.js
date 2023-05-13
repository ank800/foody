import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const BreakfastData = () => {
    const [breakfast,setBreakfast]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/getbreakfast')
        .then(response => setBreakfast(response.data))
        .catch(error => console.log(error));

        
    },[])

    const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the entered values using the 'name', 'price', and 'image' variables
    console.log(name, price, image);
  
    try {
      const response = await axios.post('http://localhost:8000/breakfast', {
        name: name,
        price: price,
        image: image
      });
      alert('Add food done');
      console.log(response.data); // Do something with the data
    } catch (error) {
      console.log(error); // Handle any errors that occur
    }
  };
  
  return (
    <div className='bg-gray-500 h-screen p-5'>
    <div className="max-w-md mx-auto">
      {!isOpen ? (
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => setIsOpen(true)}
        >
          Add Product
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-2 font-bold text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block mb-2 font-bold text-gray-700">
              Image
            </label>
            <input
              type="text"
              id="image"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="flex">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 mr-2"
            >
              Submit
            </button>
            <button
              type="button"
              className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
<table className='border-separate border border-red-400'>
        <thead>
          <tr>
            <th className='border'>S.NO</th>
            <th className='border'>Item</th>
            <th className='border'>Price</th>
            <th className='border'>Image</th>
        
          </tr>
        </thead>
        <tbody>
          {breakfast.map((order, index) => (
            <tr key={order._id}>
              <td className='border'>{index + 1}</td>
              <td className='border'>{order.name}</td>
              <td className='border'>{order.price}</td>
              <td className='border'><img src={order.image} alt="" className='h-20 w-20' /></td>
             
              <td className='border'>
                <button className='bg-green-500 p-3 m-1 rounded-md'>Edit</button>
              </td>
              <td className='border'>
                <button className='bg-red-500 p-3 m-1 rounded-md'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default BreakfastData
