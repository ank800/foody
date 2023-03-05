import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import Footer from './Footer'
import Header from './Header'

const Dashboard = () => {
  return (
      <>
      <Header/>
      <div className='bg-pink-400 w-screen h-full overflow-hidden'>
      
    <div>
    <div className="flex justify-center pt-4 ">
  {/* <div className="mb-3 xl:w-96">
    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
      <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
      
    </div>
  </div> */}
  {/* <div className='ml-10'>
  <Link to="/login"> <div className='text-lg font-bold text-white bg-black px-2 border-2'>Login </div> </Link>
  </div>
  <div className='ml-10'>
  <Link to="/signup"> <div className='text-lg font-bold text-white borer-2 bg-black px-2'>Sign up </div> </Link>
  </div> */}
  {/* <span className='absolute right-4  pr-5 text-green-800 '>
  <Link to="/login"> <p className='text-lg font-bold text-white bg-black px-2 border-2'>Login </p> </Link>
  <Link to="/signup"> <p className='text-lg font-bold text-white borer-2 bg-black px-2'>Sign up </p> </Link>
  </span> */}
  
</div>
   
    {/* <nav className='flex border-2  py-2 overscroll-auto overflow-x-auto'>
    <Link to="/Break"> <button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate'>BreakFast</button></Link>
     <Link to="/Lunch"> <button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate'>Lunch</button> </Link>
     <Link to="/Dinner"><button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate'>Dinner</button></Link>
     <Link to="/FastFood"><button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate truncate'>Fast Food</button></Link>
     <Link to="/Vegetarian"><button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate'>Vegetarian</button></Link>
     <Link to="/NonVeg"><button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate'>Non Vegetarian</button></Link>
     <Link to="/SouthIndian"><button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate'>South Indian</button></Link>
     <Link to="/NorthIndian"><button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate'>Norht Indian</button></Link>
     
     
     
     </nav> */}
      
    </div>
    <Cards/>
    
    </div>
   
<Footer/>
    

    
    </>
  )
}

export default Dashboard