// app/auth/page.tsx

'use client';  // This tells Next.js that this component is a Client Component

import React, { useState } from "react";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);  // Toggle between login and signup
  const [email, setEmail] = useState("");  // Store the email
  const [password, setPassword] = useState("");  // Store the password
  const [message, setMessage] = useState("");  // Store success or error message

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      setMessage(isLogin ? "Logged in successfully!" : "Signed up successfully!");
    } else {
      setMessage("Please fill in both fields.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">{isLogin ? "Login" : "Signup"}</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              id="email"
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              id="password"
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-[#2A254B] text-white font-semibold rounded-md hover:bg-[#2A254B] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="ml-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </div>

        {message && (
          <p className="text-center text-red-500 mt-4 text-sm">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
