import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
  return (
    <div>
       <nav className="w-full bg-blue-900 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-xl font-bold border-2 border-gray-500 px-5 md:px-0 lg:px-5 py-2 hover:bg-pink-400 text-white">Foody</h2>
                        </a>
                        {/* Mobile view navbar */}
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 "
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-1 lg:space-x-4 md:space-y-0 text-white text-lg md:text-xs lg:text-base  xl:text-xl">
                            
                        <Link to="/FastFood"><li className=" hover:text-indigo-200">
                     Fast Food
                            </li></Link>
                            <Link to="/vegetarian"><li className=" hover:text-indigo-200">
                                <a href="javascript:void(0)">Vegetarian</a>
                            </li></Link>
                            <Link to="/Nonveg"><li className=" hover:text-indigo-200">
                                <a href="javascript:void(0)">Non Vegetarian</a>
                            </li></Link>
                            <Link to="/NorthIndian"><li className=" hover:text-indigo-200">
                                <a href="javascript:void(0)">North Indian</a>
                            </li></Link>
                            <Link to="/SouthIndian"><li className=" hover:text-indigo-200">
                                <a href="javascript:void(0)">South Indian</a>
                            </li></Link>
                            <Link to="/Break"><li className=" hover:text-indigo-200">
                                <a href="javascript:void(0)">BreakFast</a>
                            </li></Link>
                            <Link to="/lunch"><li className=" hover:text-indigo-200">
                                <a href="javascript:void(0)">Lunch</a>
                            </li></Link>
                        </ul>

                        <div className="mt-3 space-y-2 md:hidden ">
                 <Link to="/login">  <a
                        href="javascript:void(0)"
                        className="inline-block w-full px-4 py-2 text-center border hover:text-white font-bold  rounded-md shadow hover:bg-pink-400 bg:white border-pink-400 hover:border-white"
                    >
                        Sign in
                    </a></Link> 
                <Link to="/signup">   <a
                        href="javascript:void(0)"
                        className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white hover:bg-pink-400 border border-pink-400 text-white font-bold hover:text-white hover:border-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </a></Link> 
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                  <Link to='/login' >  <a
                        href="javascript:void(0)"
                        className="px-4 py-2  bg-white text-pink-400 hover:text-white rounded-md shadow hover:bg-pink-400 font-bold border-2 border-pink-400 hover:border-white"
                    >
                        Sign in
                    </a></Link>
                   <Link to="/signup"> <a
                        href="javascript:void(0)"
                        className="px-4 py-2  bg-white text-pink-400 hover:text-white rounded-md shadow hover:bg-pink-400 font-bold border-2 border-pink-400 hover:border-white"
                    >
                        Sign up
                    </a></Link>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
