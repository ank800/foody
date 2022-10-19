import React ,{useState}from 'react'
import malpua from './Images/malpua.jpg'
import jalebi from './Images/jalebi.jpg'
import rasgulla from './Images/rasgulla.jpg'
import sattu from './Images/sattu.webp'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const NorthIndian = () => {
  const items={malpua:149,jalebi:125,spratha:50,Rasgulla:29}
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

    <div className='bg-pink-300 h-screen'>
    <h1 className='font-bold text-4xl text-red-600 text-center'>Welcome to North Indian Food</h1>
    <div className='flex mt-5 w-full'>
      <div className='container w-full mx-auto  flex flex-col sm:flex-row  items-center justify-center'>
      <div className=' max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={malpua} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>Malpua</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr} className="px-2">-</h1> {num}</h1>
     <h1 onClick={incr} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      
        
    
      
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.malpua}/1kg</h1>
    <h1>Total: {num*items.malpua}</h1>
    <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>
    
      </div>

      <div className='mx-5 max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={jalebi} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>Jalebi</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr2} className="px-2">-</h1> {num2}</h1>
     <h1 onClick={incr2} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      
        
    
      
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.jalebi}/1kg</h1>
    <h1>Total: {num2*items.jalebi}</h1>
    <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>
      </div>
      <div className=' max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={sattu} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>sattu Pratha</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr3} className="px-2">-</h1> {num3}</h1>
     <h1 onClick={incr3} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      
        
    
      
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.spratha}/1kg</h1>
    <h1>Total: {num3*items.spratha}</h1>
    <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>
    
      </div>
      <div className='mx-5 max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={rasgulla} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>Rasgulla</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr4} className="px-2">-</h1> {num4}</h1>
     <h1 onClick={incr4} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      
        
    
      
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.Rasgulla}/2pc</h1>
    <h1>Total: {num4*items.Rasgulla}</h1>
    <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>
    
      </div>

      </div>

      
    </div>

  </div>
  <Footer/>
  </>
  )
}

export default NorthIndian
