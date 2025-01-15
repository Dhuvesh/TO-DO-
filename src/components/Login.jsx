import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username }));
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 transform hover:scale-105 transition-transform duration-500">
        <div className="bg-white rounded-3xl shadow-2xl p-10 animate-fadeIn">
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-green-600 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-green-400 rounded-2xl transform -rotate-6"></div>
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Do</span>
              </div>
            </div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-2">
              Welcome Back!
            </h2>
            <p className="text-center text-gray-500 text-sm">
              Please sign in to access your account
            </p>
          </div>
          
          <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-purple-500"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none relative block w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-purple-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                Sign in
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <Link 
              to="/" 
              className="font-medium text-green-500 hover:text-green-600 transition-colors duration-300"
            >
              New user? Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;