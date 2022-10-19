import React, { useState } from 'react'
import {sendPasswordResetEmail} from 'firebase/auth'
import {auth} from './Fire'

const Forgot = () => {
	const [email,setemail]=useState('')
	const Resetpassword = async (email) => {
		try {
		  await sendPasswordResetEmail(auth, email);
		  alert("Password reset link sent!");
		} catch (err) {
		  console.error(err);
		  alert(err.message);
		}
	  };
  return (
    <>
        <div className='flex flex-col bg-pink-300 h-screen'>
        <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        
        
        <div class="w-full  bg-white p-5 rounded-lg lg:rounded-l-none">
						<div class="px-8 mb-4 text-center">
							<h3 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
							<p class="mb-4 text-sm text-gray-700">
								We get it, stuff happens. Just enter your email address below and we'll send you a
								link to reset your password!
							</p>
						</div>
						<div class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									value={email}
									onChange={e=>setemail(e.target.value)}
									type="email"
									placeholder="Enter Email Address..."
								/>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
									type="button"
									onClick={Resetpassword}
								>
									Reset Password
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="../signup"
								>
									Create an Account!
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="../login"
								>
									Already have an account? Login!
								</a>
							</div>
						</div>
					</div>
            

        </div>
        </div>

        </div>
    </>
  )
}

export default Forgot
