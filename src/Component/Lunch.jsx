import React from 'react'
import dal from './Images/dalmakhani.jpg'
import bhindi from './Images/bhindi.webp'
import Rajma from './Images/Rajma.webp'
import dosa from './Images/dosa.jpg'
import { Link } from 'react-router-dom'
import {useState} from 'react'
const Lunch = () => {
  const items={dalmakhani:99, bhindi:49,Rajma:69,dosa:99}
  const [num,setnum]=useState(1)
  const [num2,setnum2]=useState(1)
  const [num3,setnum3]=useState(1)
  const [num4,setnum4]=useState(1)
  function incr(){
    
    setnum(num+1)
    
  }
  function incr2(){
    
    
    setnum2(num2+1)
  }
  function incr3(){
    
    
    setnum3(num3+1)
  }
  function incr4(){
    
    
    setnum4(num4+1)
  }
  function decr(){
    
    setnum(num-1)
    
    
  }
  function decr2(){
    
    setnum2(num2-1)
    
    
  }
  function decr3(){
    
    setnum3(num3-1)
    
    
  }
  function decr4(){
    
    setnum4(num4-1)
    
    
  }
  return (
   

    <>
    <div className='bg-pink-300 h-fit sm:h-screen'>
      <h1 className='text-center text-red-600 font-bold text-4xl'> Welcome to Lunch Order</h1>
      <div className='flex mt-5  w-full'>
    <div class="container w-full mx-auto flex  flex-col sm:flex-row  items-center justify-center ">
    <div className='bg-sky-400 max-w-sm rounded overflow-hidden shadow-lg '>
      <img className='w-60 h-44' src={dal} alt="" />
     
      <h1 className='px-2 font-bold text-2xl text-red-500'>Dal Makhani</h1>
      <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr} className="px-2">-</h1> {num}</h1>
     <h1 onClick={incr} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.dalmakhani}</h1>
      <h1>Total: {num*items.dalmakhani}</h1>
      <Link to="/Delivery"><h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>
    </div>

    <div className=' max-w-sm rounded overflow-hidden shadow-lg mx-5 '>
      <img className='w-60 h-44' src={bhindi} alt="" />
     
      <h1 className='px-2 font-bold text-2xl text-red-500'>Masala Bhindi</h1>

      <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr2} className="px-2">-</h1> {num2}</h1>
     <h1 onClick={incr2} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.bhindi}</h1>
      <h1>Total: {num2*items.bhindi}</h1>
      <Link to="/Delivery"><h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>

    </div>

    <div className=' max-w-sm rounded overflow-hidden shadow-lg '>
      <img className='w-60 h-44' src={Rajma} alt="" />
     
      <h1 className='px-2 font-bold text-2xl text-red-500'>Kashmiri Rajma</h1>
      <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr3} className="px-2">-</h1> {num3}</h1>
     <h1 onClick={incr3} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.Rajma}</h1>
      <h1>Total: {num3*items.Rajma}</h1>
      <Link to="/Delivery"><h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>
    </div>

    <div className=' max-w-sm rounded overflow-hidden shadow-lg mx-5'>
      <img className='w-60 h-44' src={dosa} alt="" />
     
      <h1 className='px-2 font-bold text-2xl text-red-500'>Dosa</h1>
      <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr4} className="px-2">-</h1> {num4}</h1>
     <h1 onClick={incr4} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.dosa}</h1>
      <h1>Total: {num4*items.dosa}</h1>
      <Link to="/Delivery"><h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Lunch
