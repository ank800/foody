import React,{useState} from 'react'
import fingers from './Images/chickenfingers.webp'
import bchicken from './Images/butterchicken.webp'
import mutton from './Images/muttonkorma.webp'
import chickenfry from './Images/chickenfry.jpg'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'


const NonVegetarina = () => {
  const items={bchicken:149,chickenfry:125,mkorma:50,cfinger:149}
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
    <h1 className='font-bold text-4xl text-red-600 text-center'>Welcome to NonVeg Food</h1>
    <div className='flex mt-5 w-full'>
      <div className='container w-full mx-auto  flex flex-col sm:flex-row  items-center justify-center'>
      <div className=' max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={bchicken} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>Butter chicken</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr} className="px-2">-</h1> {num}</h1>
     <h1 onClick={incr} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      
        
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: Rs {items.bchicken}</h1>
    <h1>Total: {num*items.bchicken}</h1>
    
    <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>
      </div>

      <div className='mx-5 max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={chickenfry} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>chicken Fry</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr2} className="px-2">-</h1> {num2}</h1>
     <h1 onClick={incr2} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
        
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.chickenfry}</h1>
    <h1>Total: {num2*items.chickenfry}</h1>
    <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>
      </div>
      <div className=' max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={mutton} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>Mutton Korma</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr3} className="px-2">-</h1> {num3}</h1>
     <h1 onClick={incr3} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
        
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.mkorma}</h1>
    <h1>Total: {num3*items.mkorma}</h1>
    
    <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>

      </div>
      <div className='mx-5 max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={fingers} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>Chicken fingers</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr4} className="px-2">-</h1> {num4}</h1>
     <h1 onClick={incr4} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
        
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.chickenfry}</h1>
    <h1>Total: {num4*items.cfinger}</h1>
    
    <Link to="/Delivery"><Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link></Link>
      </div>

      </div>

      
    </div>

  </div>
  
  <Footer/>
  </>
  )
}

export default NonVegetarina
