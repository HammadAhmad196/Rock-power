import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav
        className="bg-white shadow-2xl fixed flex z-50 w-full items-center justify-between py-3"
        style={{ fontFamily: "Roboto" }}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-base leading-relaxed inline-block mr-4 py-2 space-nowrap font-bold cursor-pointer"
              to="/"
            >
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="text-sm text-red-400 lg:px-3 py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  to="/home"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="text-sm hover:text-red-400 lg:px-3 py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  to="/about"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="text-sm hover:text-red-400 lg:px-3 py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  to="/services"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="">Services</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="text-sm hover:text-red-400 lg:px-3 py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  to="/pricing"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="">Pricing</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="text-sm hover:text-red-400 lg:px-3 py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  to="/contact"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="">Contact</span>
                </Link>
              </li>
              <Link to="/register">
                <button class="bg-red-400 mr-4 px-6 py-0 hover:bg-red-400 text-white font-bold py-2 px-4 border border-red-700 rounded">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button class="bg-red-400 my-4 lg:my-0 lg:px-6 px-8 py-0 hover:bg-red-400 text-white font-bold py-2 px-4 border border-red-700 rounded">
                  Login
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
