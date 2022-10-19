import React from 'react'
import { Link } from 'react-router-dom'
const DeliveryAddress = () => {
  return (
   <>
       <div className='container mx-auto bg-gray-300 h-fit md:h-screen'>
       <h1 className='text-center text-red-600 font-bold text-4xl'> Delivery Address</h1>
       <div className='mx-5 sm:mx-20 mt-5'>
       <div className='felx '>
       <div>
       {/*This is the first flex for address */}
           <div className='flex flex-col sm:flex-row gap-8'>
            <div><input type="text" className='border-2 h-10 w-full' placeholder='Name' required/></div>
            <div><input type="text" className='border-2 h-10 w-full' placeholder='Contact Number' /></div>
       </div>
       <div className='flex gap-8 mt-5 flex-col sm:flex-row'>
            <div><input type="text" className='border-2 h-10 w-full' placeholder='PinCode' /></div>
            <div><input type="text" className='border-2 h-10 w-full' placeholder='Locality' /></div>
       </div>
       <div className='mt-5'>
           <textarea name="" id="" cols="" rows="5" placeholder='Address (area and street)' className='p-5 w-full sm:w-96'></textarea>
       </div>

       <div className='flex gap-8 mt-5 flex-col sm:flex-row'>
            <div><input type="text" className='border-2 h-10 w-full' placeholder='City/District/Town' /></div>
            <div>
                <select name="" id="" className='h-10 w-44'>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
                </select>            
            </div>
       </div>
       <div className='flex gap-8 mt-5 flex-col sm:flex-row'>
            <div><input type="text" className='border-2 h-10 w-full' placeholder='Landmark (Optional)' /></div>
            <div><input type="tel" className='border-2 h-10 w-full' placeholder='Alternate Phone(optional)' maxLength="4" /></div>
       </div>
       <div className='mt-4 text-2xl font-bold'>
           <p>Address Type</p>
           <div className='flex gap-8'>
            <div>
            <input type="radio" id="html" name="fav_language" value="HTML"/>
<label for="html" className='pl-2'>Home</label>
            </div>

            <div>
            <input type="radio" id="html" name="fav_language" value="HTML"/>
<label for="html" className='pl-2'>Office</label>
            </div>
           

           </div>
           <div className='flex gap-8 mt-5 flex-col sm:flex-row'>
          <Link to="/Payment"> <button type='submit' className='bg-orange-500 text-white px-2 py-2 rounded'>Save and Deliver here</button></Link> 
         <Link to="/">  <button className='bg-orange-500 text-white px-2 py-2 rounded'>Cancel</button></Link> 

            </div>
       </div>

       </div>
       
       
       
      

       </div>
       
       </div>
       </div>
   </>
  )
}

export default DeliveryAddress
