import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        clg
    }

    return (
        <div className="flex flex-col items-center font-serif justify-center min-h-screen bg-gray-100 ">
            <Link to="/" >
                <button className='bg-orange-300 hover:bg-purple-200 w-72 shadow-red-800 shadow-inner  hover:text-lg hover:text-green-900 hover:shadow-black  hover:shadow-lg rounded-md px-5 py-2 m-10'>
                    Home
                </button>
            </Link>
            <div className="w-full max-w-md">
                <form onSubmit={handleLogin} className="bg-white shadow-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <p className=' text-2xl text-red-600 text-center'>Login Here </p>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 bg-green-100  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-green-100 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold shadow-md shadow-amber-950 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button>
                        <a href="/signup" className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-green-800">
                            Dont't have an account?
                        </a>

                        <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2024 Karan Singh. All rights reserved.
                </p>
            </div>
        </div>
    );
};


export default Login
