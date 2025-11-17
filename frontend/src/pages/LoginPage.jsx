import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Perform mock login check
    if (login(email, password)) {
      // Redirect to the dashboard home route
      navigate("/home");
    } else {
      // Credentials based on frontend/src/utils/auth.js
      setError("Invalid credentials. Try: 123@gmail.com / 123"); 
    }
  };

  return (
    // Centered professional container with a soft background
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      
      {/* Login Card - Clean, premium styling (Material Elevation) */}
      <div className="w-full max-w-sm sm:max-w-md">
        
        {/* Header/Logo Placeholder */}
        <div className="text-center mb-8 space-y-2">
          {/* Logo Icon Placeholder: Clean blue color */}
          <div className="flex items-center justify-center text-blue-700">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2v5m0-10c-1.657 0-3 .895-3 2s1.343 2 3 2m-5 8h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Sign in to Kayaa
          </h2>
        </div>
        
        {/* Login Card */}
        <form className="space-y-6 bg-white p-8 sm:p-10 rounded-xl shadow-xl-2 border border-gray-100" onSubmit={handleSubmit}>
          
          {/* Error Message */}
          {error && (
            <p className="text-sm font-semibold text-red-700 text-center bg-red-50 p-3 rounded-lg border border-red-200 transition-all duration-300">
              {error}
            </p>
          )}

          {/* Email Input - Material Floating Label Style */}
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // Key classes: peer, h-12, pt-4 pb-0, placeholder-transparent
              className="peer w-full h-12 px-4 pt-4 pb-0 border border-gray-300 rounded-lg text-base text-gray-900 placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition duration-200"
              placeholder=" "
            />
            <label
              htmlFor="email"
              // Key classes: absolute, transition-all, peer-placeholder-shown/peer-focus modifiers
              className="absolute left-4 top-1 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600"
            >
              Email address
            </label>
          </div>

          {/* Password Input - Material Floating Label Style */}
          <div className="relative mb-8">
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full h-12 px-4 pt-4 pb-0 border border-gray-300 rounded-lg text-base text-gray-900 placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition duration-200"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-1 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600"
            >
              Password
            </label>
            
            <div className="flex justify-end mt-2">
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition">
                Forgot password?
              </a>
            </div>
          </div>
          
          {/* Sign In Button - Consistent Primary Action */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 rounded-lg shadow-md text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
            >
              Sign In
            </button>
          </div>
        </form>
        
        {/* Footer Text */}
        <div className="text-center text-sm text-gray-500 pt-4">
           Need help? <a href="#" className="font-semibold text-blue-600 hover:text-blue-700 transition">Contact Support</a>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;