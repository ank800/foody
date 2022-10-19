import React,{useState} from 'react'
import dosa from './Images/dosa.jpg'
import idli from './Images/Idli.webp'
import hbiryani from './Images/hbiryani.jpg'
import chutney from './Images/coconutchutney.webp'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const SouthIndian = () => {
  const items={Dosa:99,Idli:49,biryani:99,chatni:29}
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
    
    <div className='bg-pink-300 h-full sm:h-screen'>
    <h1 className='font-bold text-4xl text-red-600 text-center'>Welcome to Fast Food</h1>
    <div className='flex mt-5 w-full'>
      <div className='container w-full mx-auto  flex flex-col sm:flex-row  items-center justify-center'>
      <div className=' max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={dosa} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>Dosa</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr} className="px-2">-</h1> {num}</h1>
     <h1 onClick={incr} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      
        
    
      
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.Dosa}/1kg</h1>
    <h1>Total: {num*items.Dosa}</h1>
    <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button onClick={()=>alert("Total Amount:"+(items.Dosa)*num)} className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>

    
      </div>

      <div className='mx-5 max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={idli} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>Idli</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr2} className="px-2">-</h1> {num2}</h1>
     <h1 onClick={incr2} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      
        
    
      
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.Idli}/1kg</h1>
    <h1>Total: {num*items.Idli}</h1>
    <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button onClick={()=>alert("Total Amount:"+(items.Idli)*num2)} className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>



    
      </div>
      <div className=' max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={hbiryani} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>Hyderabad biryani</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr3} className="px-2">-</h1> {num3}</h1>
     <h1 onClick={incr3} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      
        
    
      
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.biryani}/1kg</h1>
    <h1>Total: {num3*items.biryani}</h1>
    <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button onClick={()=>alert("Total Amount:"+(items.biryani)*num3)} className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>

    
    
   
      </div>
      <div className='mx-5 max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-60 h-44' src={chutney} alt="" />
        <h1 className='px-2 font-bold text-2xl text-red-500'>Coconut Chutney</h1>
        <div className='flex px-2'>
     
     <h1 className='flex font-bold text-2xl text-red-500'>QTY :  <h1 onClick={decr4} className="px-2">-</h1> {num4}</h1>
     <h1 onClick={incr4} className="font-bold text-2xl text-red-500 px-2">+</h1>

     </div>
      
        
    
      
    <h1 className='px-2 font-bold text-2xl text-red-500'>Price: RS {items.chatni}/1kg</h1>
    <h1>Total: {num4*items.chatni}</h1>
    <Link to="/Delivery"> <h1 className='text-right mb-5 mt-2 mr-2'><button onClick={()=>alert("Total Amount:"+ (items.chatni)*num4)} className='text-2xl font-bold text-red-500 border-2 px-2'>Order Now</button></h1></Link>

    
      </div>

      </div>

      
    </div>

  </div>
  <Footer/>
  </>
  )
}

export default SouthIndian
