import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation ,useNavigate} from "react-router-dom";
import axios from "axios";
const DeliveryAddress = () => {
  const location = useLocation();
  const propsData = location.state;
  console.log(propsData);
  const navigate=useNavigate()

  const [name,setName]=useState("ab")
  const [price,setPrice]=useState(propsData.price)
  const [address,setAddress]=useState("Ab")
  const [pin,setPin]=useState("Ab")
  const [phone,setPhone]=useState("Ab")
  const dadress=async()=>{
    const orderData = {
        name: name,
        price: price,
        phone: phone,
        pin: pin,
        address: address
      };
    
      axios.post('http://localhost:8000/order', orderData)
        .then(response => {
          // Handle the successful response
          console.log(response.data);
          alert("order succesfully")
          navigate("/Payment")
        })
        .catch(error => {
          // Handle the error
          console.log(error);
        });


  }
  return (
    <>
      <div className="container mx-auto bg-gray-300 h-fit md:h-screen">
        <h1 className="text-center text-red-600 font-bold text-4xl">
          {" "}
          Delivery Address
        </h1>
        <div className="mx-5 sm:mx-20 mt-5">
          {propsData.price ? <div>Total Price :{propsData.price}</div> : null}
          <div className="felx ">
            <div>
              {/*This is the first flex for address */}
              <div className="flex flex-col sm:flex-row gap-8">
                <div>
                  <input
                    type="text"
                    className="border-2 h-10 w-full"
                    placeholder="Name"
                    required
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="border-2 h-10 w-full"
                    placeholder="Contact Number"
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-8 mt-5 flex-col sm:flex-row">
                <div>
                  <input
                    type="text"
                    className="border-2 h-10 w-full"
                    placeholder="PinCode"
                    onChange={(e)=>setPin(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="border-2 h-10 w-full"
                    placeholder="Locality"
                  />
                </div>
              </div>
              <div className="mt-5">
                <textarea
                  name=""
                  id=""
                  cols=""
                  rows="5"
                  placeholder="Address (area and street)"
                  className="p-5 w-full sm:w-96"

                  onChange={(e)=>setAddress(e.target.value)}
                ></textarea>
              </div>

             
              <div className="flex gap-8 mt-5 flex-col sm:flex-row">
                <div>
                  <input
                    type="text"
                    className="border-2 h-10 w-full"
                    placeholder="Landmark (Optional)"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    className="border-2 h-10 w-full"
                    placeholder="Alternate Phone(optional)"
                    maxLength="4"
                  />
                </div>
              </div>
              <div className="mt-4 text-2xl font-bold">
                <p>Address Type</p>
                <div className="flex gap-8">
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label for="html" className="pl-2">
                      Home
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <label for="html" className="pl-2">
                      Office
                    </label>
                  </div>
                </div>
                <div className="flex gap-8 mt-5 flex-col sm:flex-row">
                  {/* <Link to="/Payment"> */}
                    {" "}
                    <button
                      type="submit"
                      className="bg-orange-500 text-white px-2 py-2 rounded"
                    onClick={()=>dadress()}
                    >
                      Save and Deliver here
                    </button>
                  {/* </Link> */}
                  <Link to="/">
                    {" "}
                    <button className="bg-orange-500 text-white px-2 py-2 rounded">
                      Cancel
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryAddress;
