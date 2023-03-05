import React, { useState } from 'react'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from './Fire'
import Welcome from './Welcome'
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom'
import { Navigate,useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [error,setError]=useState('')
    const [allentry ,setallentry]=useState([])
    const [login ,islogin]=useState(false)
    const navi=useNavigate()
    function submithandler(e){
        e.preventDefault()
        const newentry={email:email,password:password}
        setallentry([...allentry,newentry])
        setemail('')
        setpassword('')
        if(!email){
            alert("something went wrong for email")
            
         }
        if (!password){
            alert("Please fill the password")
        }
    }
    
    const Login = e => {
        
        e.preventDefault()
        console.log("Login")
        if(!email){
            alert("something went wrong for email")
            
         }
        else if (!password){
            alert("Please fill the password")
        }
        else {

       
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          if(!auth.currentUser.emailVerified) {
            sendEmailVerification(auth.currentUser)
            .then(() => {
                
                console.log("errors")
             
              
            })
          .catch(err => alert(err.message))
        }else{
           
           // redirect to code comes hear     
                console.log("Login succssfully")
                    alert('login')
                    islogin(true)
                    navi('/Welcome')
            
            
        }
        })
        .catch(err => console.log("error"))
    }
      }
      

  return (
    <>
         <div class="bg-pink-300 min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Log in</h1>
                    

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        required
                        value={email} 
                            onChange={(e)=>setemail(e.target.value)}
                        />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                            value={password}
                            onChange={(e)=>{setpassword(e.target.value)}}
                        />
                    

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded-full font-bold bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={Login}
                        
                    >Log in</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By log in, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Are you forgot password? 
                    <a class="no-underline border-b border-blue text-blue" href="../forgot/">
                        Forgot
                    </a>.
                </div>
            </div>
        </div>
         
    </>
  )
}

export default Login
