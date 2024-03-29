import React from "react";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import footerlogo from "../../assets/images/footerlogo.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

export default function Footer() {
  const [viewPortEntered] = React.useState(false);
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <footer className="footer_area bg-black relative z-10">
        <div
          className="
          shape
          absolute
          left-0
          top-0
          opacity-5
          h-full
          overflow-hidden
          w-1/3
        "
        >
          <img src={left} alt="footer_shape_left" />
        </div>
        <div
          className="
          shape
          absolute
          right-0
          top-0
          opacity-5
          h-full
          overflow-hidden
          w-1/3
        "
        >
          <img src={right} alt="footer_shape_right" />
        </div>
        <div className="container">
          <div className="footer_widget pt-18 pb-120">
            <div className="row justify-center">
              <div className="w-full md:w-1/2 lg:w-3/12">
                <div className="footer_about mt-13 mx-3">
                  <div className="footer_logo">
                    <a href="#">
                      <img src={footerlogo} alt="footer_logo" />
                    </a>
                  </div>
                  <div className="footer_content mt-8">
                    <p className="text-white">
                      Lorem ipsum dolor sitco nsetetu nonumy eirmod tempor
                      invidunt ut labore et dolore magna uyam erat, sed diam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-5/12">
                <div className="footer_link_wrapper flex flex-wrap mx-3">
                  <div className="footer_link w-1/2 md:pl-13 mt-13">
                    <h2 className="footer_title text-xl font-semibold text-white">
                      Quick Links
                    </h2>
                    <ul className="link pt-4">
                      <li>
                        <a
                          href="#"
                          className="text-white mt-4 hover:text-theme-color"
                        >
                          Company
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white mt-4 hover:text-theme-color"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white mt-4 hover:text-theme-color"
                        >
                          About
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer_link w-1/2 md:pl-13 mt-13">
                    <h2 className="footer_title text-xl font-semibold text-white">
                      Resources
                    </h2>
                    <ul className="link pt-4">
                      <li>
                        <a
                          href="#"
                          className="text-white mt-4 hover:text-theme-color"
                        >
                          Support
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white mt-4 hover:text-theme-color"
                        >
                          Contact
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white mt-4 hover:text-theme-color"
                        >
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 lg:w-4/12">
                <div className="footer_subscribe mt-13 mx-3">
                  <h2 className="footer_title text-xl font-semibold text-white">
                    Newsletter
                  </h2>
                  <div className="subscribe_form text-right mt-9 relative">
                    <form action="#">
                      <input
                        type="text"
                        placeholder="Enter email"
                        className="
                        w-full
                        py-5
                        px-6
                        bg-white
                        text-black
                        rounded-full
                        border-none
                      "
                      />
                      <button className="main-btn subscribe-btn">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="
            footer_copyright
            pt-3
            pb-6
            border-t-2 border-solid border-white border-opacity-10
            sm:flex
            justify-between
          "
          >
            <div className="flex mt-6">
              <i className=" flex items-center justify-center h-12 w-12 mr-1 rounded-full fab fill-current text-white text-xl fa-facebook-f cursor-pointer"></i>
              <i className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fas fill-current text-white text-xl fa-envelope cursor-pointer"></i>
              <i className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-instagram cursor-pointer"></i>
              <i className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-twitter cursor-pointer"></i>
            </div>
            <div className="footer_copyright_content pt-4 text-center">
              <p className="text-white">
                Designed and Developed by
                <a
                  href="https://uideck.com"
                  rel="nofollow"
                  className="text-white hover:text-theme-color"
                >
                  Hammad Ahmad
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <a href="#" class="scroll-top">
        <i class="lni lni-chevron-up"></i>
      </a>
    </>
  );
}
