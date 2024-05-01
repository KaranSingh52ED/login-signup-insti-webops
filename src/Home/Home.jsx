import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='text-center text-3xl m-20 p-24 bg-green-50 font-serif'>
            Welcome to the Home page, please login or signup.

            <div className='flex-row'>
                <Link to="/login" >
                    <button className='bg-orange-300 hover:bg-purple-200 shadow-red-800 shadow-inner hover:text-lg hover:text-green-900 hover:shadow-black  hover:shadow-lg rounded-md px-5 py-2 m-5'>
                        Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button className='bg-red-300 hover:bg-purple-200 shadow-slate-800 shadow-inner hover:text-lg hover:text-green-900 hover:shadow-black  hover:shadow-lg rounded-md px-5 py-2 m-5'>
                        Signup
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
