import React from 'react'
import mpaneer from './Images/matarpaneer.jpg'
import gobhialoo from './Images/gobhialoo.png'
import mbiryani from './Images/makhanibiryani.webp'
import bhindi from './Images/bhindi.webp'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const Vegetarian = () => {
  const items={paneer:149,mixveg:125,mbiryani:50,bfry:149}
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
<Header/>
    
    <div className='bg-pink-300 h-fit sm:h-screen'>
    <h1 className='font-bold text-4xl text-red-600 text-center'>Welcome to Vegetarian Food</h1>
    <div className='flex mt-5 w-full'>
      <div className='container w-full mx-auto  flex flex-col sm:flex-row items-center justify-center'>
      <div className=' max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={mpaneer} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>paneer</h1>

        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr} className="px-2">-</h1> {num}</h1>
     <h1 onClick={incr} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      
        
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: Rs {items.Paneer}</h1>
    <h1>Total: {num*items.Paneer}</h1>
    <Link to="/Delivery" state={{price:"100"}}><h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>
      </div>

      <div className='mx-5 max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={gobhialoo} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>Gobhialoo</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr2} className="px-2">-</h1> {num2}</h1>
     <h1 onClick={incr2} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.mixveg}</h1>
    <h1>Total: {num2*items.mixveg}</h1>
    <Link to="/Delivery" state={{price:"100"}}> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>
      </div>
      <div className=' max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={mbiryani} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>Makhani Biryani</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr4} className="px-2">-</h1> {num4}</h1>
     <h1 onClick={incr4} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.mbiryani}</h1>
    <h1>Total: {num4*items.mbiryani}</h1>

    
    <Link to="/Delivery" state={{price:"100"}}> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>
      </div>
      <div className='mx-5 max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={bhindi} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>Bhindi fry</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr3} className="px-2">-</h1> {num3}</h1>
     <h1 onClick={incr3} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.bfry}</h1>
    <h1>Total: {num3*items.bfry}</h1>
    
    <Link to="/Delivery" state={{price:"100"}}> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>
      </div>

      </div>

      
    </div>

  </div>
  <Footer/>
  </>
  )
}

export default Vegetarian
