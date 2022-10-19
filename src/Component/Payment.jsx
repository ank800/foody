import React from 'react'
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    
    <>
        <div className='bg-gray-100 h-screen -mt-5'>
        <div className=' container w-full flex flex-col mt-5 items-center justify-center '>
        <div className='rounded border-2'>
        <h1 className='text-3xl font-bold mt-5'> Welcome to payment Page</h1>
        <div className='mt-2'>Your total Price is  </div>
        <p className='text-2xl'>Payment Option Available are:</p>
        <div className='flex flex-col  pt-6'>
         <p className='border-y-2 py-4'><input type="radio" className='ml-5' name='Payment' />
          <label htmlFor="" className='px-1'>UPI</label></p> 
          <p className='border-y-2 py-4'><input type="radio" className='ml-5' name='Payment' />
          <label htmlFor="" className='px-1'>Wallet</label></p> 
          <p className='border-y-2 py-4'><input type="radio" className='ml-5' name='Payment' />
          <label htmlFor="" className='px-1'>Debit/Credit</label></p> 
          <p className='border-y-2 py-4'><input type="radio" className='ml-5' name='Payment' />
          <label htmlFor="" className='px-1'>Net Banking</label></p> 
          <p className='border-y-2 py-4'><input type="radio" className='ml-5' name='Payment' />
          <label htmlFor="" className='px-1'>EMI (Easy Installment)</label></p> 
          <p className='border-y-2 py-4'><input type="radio" className='ml-5' name='Payment' />
          <label htmlFor="" className='px-1'>COD</label></p> 
          
        </div>
        <div className='flex my-4 mx-2'>
       <Link to='/Thanks'> <button className='px-5 border-2 rounded text-white bg-orange-500 py-3'>Continue</button></Link>
       <Link to="/"> <button className='px-5 border-2 rounded text-white bg-orange-500 py-3'>Cancel</button></Link>

        </div>

        </div>
       
        </div>
        </div>
    </>
  )
}

export default Payment
