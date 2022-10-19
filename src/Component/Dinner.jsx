import React from 'react'
import dosa from './Images/dosa.jpg'
import idli from './Images/Idli.webp'
import moong from './Images/moongdal.jpg'
import vchicken from './Images/vermicellichicken.webp'
import bchicken from './Images/butterchicken.webp'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Dinner = () => {
  const items={idli:99, vchicken:149,bchicken:199,moongdal:39}
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
    <h1 className='text-center mt-5 text-red-600 font-bold text-4xl'> Welcome to Dinner Order</h1>
    <div className='flex mt-5 w-full'>
      <div className='flex flex-col sm:flex-row mx-auto justify-center items-center container'>

        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <img className='w-60 h-44' src={idli} alt="" />
          <h1 className='px-2 font-bold text-2xl text-red-500'>Oats Idli</h1>
          <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr} className="px-2">-</h1> {num}</h1>
     <h1 onClick={incr} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS 80</h1>
      <h1>Total: {num*items.idli}</h1>
       <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>

        </div>
        <div className='mx-5 max-w-sm rounded overflow-hidden shadow-lg'>
          <img className='w-60 h-44' src={vchicken} alt="" />
          <h1 className='px-2 font-bold text-2xl text-red-500'>Vermicelli chicken</h1>
          <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr2} className="px-2">-</h1> {num2}</h1>
     <h1 onClick={incr2} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS 80</h1>
      <h1>Total: {num2*items.vchicken}</h1>
       <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>

        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <img className='w-60 h-44' src={bchicken} alt="" />
          <h1 className='px-2 font-bold text-2xl text-red-500'>Butter chicken</h1>
          <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr3} className="px-2">-</h1> {num3}</h1>
     <h1 onClick={incr3} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.bchicken}</h1>
      <h1>Total: {num3*items.bchicken}</h1>
       <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>

        </div>
        <div className='mx-5 max-w-sm rounded overflow-hidden shadow-lg'>
          <img className='w-60 h-44' src={moong} alt="" />
          <h1 className='px-2 font-bold text-2xl text-red-500'>Moong dal Khichdi</h1>
          <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr4} className="px-2">-</h1> {num4}</h1>
     <h1 onClick={incr4} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.moongdal}</h1>
      <h1>Total: {num4*items.moongdal}</h1>
       <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>

        </div>

      </div>
    </div>
    </div>

    </>
  )
}

export default Dinner
