import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'

const Welcome = () => {
  return (
    <>
      <div className='bg-blue-300 w-screen h-full overflow-hidden'>
    <div>
    <div className="flex pt-4 gap-10 ">
    <div className='text-white font-extrabold mx-2 w-1/3 '>Welcome</div>
  <div className="mb-3 xl:w-96 ">
    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
      <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
      
    </div>
  </div>
  <div className='absolute right-5'>
  <Link to="/"> <div className='text-lg font-bold text-white bg-black px-2 border-2'>Log out </div> </Link>
  </div>
  
</div>
   
    <nav className='flex border-2  py-2 overscroll-auto overflow-x-auto'>
    <Link to="/Break"> <button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate'>BreakFast</button></Link>
     <Link to="/Lunch"> <button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate'>Lunch</button> </Link>
     <Link to="/Dinner"><button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate'>Dinner</button></Link>
     <Link to="/FastFood"><button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate truncate'>Fast Food</button></Link>
     <Link to="/Vegetarian"><button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate'>Vegetarian</button></Link>
     <Link to="/NonVeg"><button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate'>Non Vegetarian</button></Link>
     <Link to="/SouthIndian"><button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate'>South Indian</button></Link>
     <Link to="/NorthIndian"><button className='ml-2 border-2 py-2 text-lg font-bold px-5 truncate'>Norht Indian</button></Link>
     
     

     

     </nav>
      
    </div>
    <Cards/>
    
    </div>
    <footer class="bg-gray-200 text-center lg:text-left">
  <div class="text-gray-900 text-center font-extrabold py-4">
    © 2022 Copyright:
    <a class="text-gray-800 font-extrabold" href="#">Foody</a>
  </div>
</footer>
    </>
  )
}

export default Welcome
