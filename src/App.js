import logo from './logo.svg';
import './App.css';
import Food from './Component/Food';
import { Routes, Route, Link } from "react-router-dom";
import Breakfast  from './Component/Breakfast';
import Lunch from './Component/Lunch';
import Dinner from './Component/Dinner';
import Dashboard from './Component/Dashboard';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Forgot from './Component/Forgot';
import Vegetarian from './Component/Vegetarian';
import NonVegetarina from './Component/NonVegetarina';
import NorthIndian from './Component/NorthIndian';
import SouthIndian from './Component/SouthIndian';
import FastFood from './Component/FastFood';
import DeliveryAddress from './Component/DeliveryAddress';
import Payment from './Component/Payment';
import Thanks from './Component/Thanks';
import Welcome from './Component/Welcome';


function App() {
  return (
   <>
  
   <Routes>
   <Route path='/' element={<Dashboard/>}/>
   <Route path='/Food' element={<Food/>}/>
   <Route path='/Dinner' element={<Dinner/>}/>
   <Route path='/Lunch' element={<Lunch/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/forgot' element={<Forgot/>}/>
   <Route path='/Vegetarian' element={<Vegetarian/>}/>
   <Route path='/Nonveg' element={<NonVegetarina/>}/>
   <Route path='/NorthIndian' element={<NorthIndian/>}/>
   <Route path='/SouthIndian' element ={<SouthIndian/>}/>
   <Route path='/FastFood' element={<FastFood/>}/>
   <Route path='Delivery' element={<DeliveryAddress/>}/>
   <Route path="/Break" element={<Breakfast></Breakfast>}/>
   <Route path="/Payment" element={<Payment/>}/>
   <Route path='/Thanks' element={<Thanks/>}></Route>
   <Route path='/Welcome' element={<Welcome/>}></Route>

   </Routes>
     
   </>
  );
}

export default App;
