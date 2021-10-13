import React from "react";
import { Link } from "react-router-dom";
import contact from "../../assets/images/contact.svg";

function Login() {
  return (
    <div className="py-32 flex bg-gray-50">
      <div className="items-center justify-center shadow-2xl flex-1 max-w-4xl mx-auto bg-white rounded-lg ">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-20 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                Sign In
              </h1>
              <div className="mt-4">
                <label className="block text-sm">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label className="block mt-4 text-sm">Password</label>
                <input
                  className="w-full px-4 py-2 text-sm border rounded-md focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <button
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-red-400 border border-transparent rounded-lg active:bg-red-400 hover:bg-red-600 focus:outline-none"
                href="#"
              >
                Sign in
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm">
                  Don't have an account yet?{" "}
                  <Link to="/register" className="text-red-400 hover:underline">
                    {" "}
                    Sign up.
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              className="object-cover w-full h-full"
              src={contact}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
