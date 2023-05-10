import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Breakfast() {
  const [breakfastItems, setBreakfastItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/getbreakfast')
      .then(response => setBreakfastItems(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='bg-pink-500 h-screen p-5'>
          <h1 className='text-center text-red-100 p-5 font-bold text-4xl'>Order your Break Fast</h1>

    <div className="grid grid-cols-4 gap-4">
      {breakfastItems.map(item => (
        <div key={item.id} className="card bg-gray-100">
          {/* <img src={item.image} alt={item.name} className="card-image" />
          <div className="card-details">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-price">${item.price}</p>
          </div> */}

          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <img className='w-60 h-44' src={item.image} alt="" />
          <h1 className='px-2 font-bold text-2xl text-red-500'>{item.name}</h1>
          <div className='flex px-2'>
     
    
     </div>
      <h1 className='px-2 font-bold text-2xl text-red-500'>Rs: {item.price}</h1>

      <Link to="/Delivery" state={{price:item.price}}> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>

        </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Breakfast;
