import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './Fire'
import { Navigate,useNavigate } from 'react-router-dom';

import axios from 'axios';

import * as firebase from "firebase/app"
const Signup = () => {
    const navi=useNavigate()
    const [err,setErr]=useState("")
    const [email,setEmail]=useState('')
    const [name,setname]=useState('')
    const [password,setPassword]=useState('')
    const [cpassword,setConfirmPassword]=useState('')
    const [error,setError]=useState('something woring')
    // this code for firebase
//     const register = async(e) => {
//         console.log("register")
//         console.log(email,password)
//         if(!email || !password || !name)
//         {
//             setErr("all details are necessary")
//         }
//         else 
//         {

        
//         createUserWithEmailAndPassword(auth,
//              email, password,name)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//     navi('/')
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     setErr(error.message)
//     const errorMessage = error.message;
//     // const errorMessage="Something worng";
//     // ..
//   });
//   setEmail('')
//   setPassword('')
//   setConfirmPassword('')
//   setname('')
// }

// }
// This code for nodejs mongodb

const register = async (e) => {
    console.log("register")
    console.log(email, password)
    if (!email || !password || !name) {
      setErr("all details are necessary")
    }
    else {
      console.log(email, password)
      try {
        const response = await fetch('http://localhost:8000/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: email, password: password })
        });
        const data = await response.json(); // Convert the response to JSON format
        alert("Signup successfully")
       
        console.log(data); // Do something with the data
      } catch (error) {
        console.log(error); // Handle any errors that occur
      }
    }
  }
  
  return (
    <>
        
<div class="bg-pink-300 min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name"
                        value={name}
                        onChange={evt => setname(evt.target.value)} />


                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                            value={email}
                            onChange={evt => setEmail(evt.target.value)}
                        />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        value={password}
                            onChange={evt => setPassword(evt.target.value)}
                         />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" 

                        value={cpassword}
                            onChange={evt => setConfirmPassword(evt.target.value)}
                        />

                    <button
                        type="submit"
                        class="w-full rounded-full font-bold text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={register}
                    >Create Account</button>

                    <div className="text-center text-red-700 text-2xl p-2 h1">{err}</div>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup
