import React from 'react'
import Breakfast from './Breakfast'
import { Link } from 'react-router-dom'
import Lunch from './Lunch'
const Food = () => {
  return (
 <>
     
     <hr />
     <div className='flex '>
    <Link to="/Break"> <button className='ml-2'>BreakFast</button></Link>
     <Link to="/Lunch"> <button className='ml-2'>Lunch</button> </Link>
     <Link to="/Dinner"><button className='ml-2'>Dinner</button></Link>
     <button className='pl-2'>Meals</button>

     </div>
     <Breakfast/>
     <Lunch/>
 </>
  )
}

export default Food
