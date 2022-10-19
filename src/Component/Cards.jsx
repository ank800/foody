import React from 'react'
import { Link } from 'react-router-dom'
import zom from './Images/zom.webp'
import bchicken from './Images/butterchicken.webp';
import dosa from './Images/dosa.jpg'
import malpua from './Images/malpua.jpg'
import pizza from './Images/pizza.webp'

const Cards = () => {
  return (
  <>
  <div className='flex items-stretch mt-5 '>
  <div class="container w-full mx-auto  flex  flex-col sm:flex-row items-center justify-center ">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className='w-96 h-72' src={zom} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <h1 className='font-bold text-lg'>Order Online</h1>
    <p>stay home door at your door step</p>
  </div>

</div>
<Link to="/Vegetarian">
<div class="max-w-sm rounded overflow-hidden shadow-lg ml-1">
  <img className='w-96 h-72' src={zom} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
  <h1 className='font-bold text-lg'>Vegetarian</h1>
    <p>stay home door at your door step</p>
    
  </div>


</div>
</Link>
<Link to="/Nonveg">
<div class="max-w-sm rounded overflow-hidden shadow-lg ml-1">
  <img className='w-96 h-72' src={bchicken} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <h1 className='font-bold text-lg'>Non vegetarian</h1>
    <p>stay home door at your door step</p>
  </div>

</div>
</Link>
</div>

</div>
{/* This is second row in dashboard <section></section> */}
<div className='flex mt-5'>
<div className='flex  flex-col sm:flex-row w-full justify-center items-center'>
<Link to="/SouthIndian">
<div className='max-w-sm rounded overflow-hidden shadow-lg'>
<img src={dosa} alt=""  className='w-96 h-72'/>
<div class="px-6 py-4">
    <h1 className='font-bold text-lg'>South Indian</h1>
    <p>stay home door at your door step</p>
  </div>

</div></Link>

<Link to="/NorthIndian">
<div className='mx-1 max-w-sm rounded overflow-hidden shadow-lg'>
<img src={malpua} alt=""  className='w-96 h-72'/>
<div class="px-6 py-4">
    <h1 className='font-bold text-lg'>North Indian</h1>
    <p>stay home door at your door step</p>
  </div>

</div></Link>

<Link to="/FastFood">
<div className='max-w-sm rounded overflow-hidden shadow-lg'>
<img src={pizza} alt=""  className='w-96 h-72'/>
<div class="px-6 py-4">
    <h1 className='font-bold text-lg'>Fast Food</h1>
    <p>stay home door at your door step</p>
  </div>

</div>
</Link>

</div>

</div>
  </>
  )
}

export default Cards
