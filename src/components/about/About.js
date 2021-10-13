import React from "react";
import header from '../../assets/images/header.svg';
import ChooseUs from "../whyChoose/ChooseUs";

function About() {
  return (
    <>
      <div
        id="/home"
        class=" header_hero bg-gray relative z-10 overflow-hidden
        lg:flex items-center "
      >
        <div class="container">
          <div class="row">
            <div class="w-full lg:w-1/2">
              <div class="header_hero_content pt-150 lg:pt-0">
                <h2
                  class="
                hero_title
                text-2xl
                sm:text-4xl
                md:text-5xl
                lg:text-4xl
                xl:text-5xl
                font-extrabold
              "
                >
                  Creative Multipurpose Tailwind CSS
                  <span class="text-theme-color">Template</span>
                </h2>
                <p class="mt-8 lg:mr-8">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </p>
                <div class="hero_btn mt-10">
                  <a class="main-btn" href="#0">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header_shape hidden lg:block"></div>

        <div class="header_image flex items-center">
          <div class="image 2xl:pl-25">
            <img src={header} alt="Header Image" />
          </div>
        </div>
      </div>
      <div className="services_area pt-120" id="about">
        <div className="container">
          <div className="row justify-center">
            <div className="w-full lg:w-1/2">
              <div className="section_title text-center pb-6">
                <h5 className="sub_title">About</h5>
                <h4 className="main_title">Work Process</h4>
              </div>
            </div>
          </div>
          <div className="row justify-center">
            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
                <div className="services_icon">
                  <i className="lni lni-write"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="94"
                    height="92"
                    viewBox="0 0 94 92"
                  >
                    <path
                      className="services_shape"
                      id="Polygon_12"
                      data-name="Polygon 12"
                      d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
                    />
                  </svg>
                </div>
                <div className="services_content mt-5">
                  <h3
                    className="
                      uppercase
                      services_title
                      text-black
                      font-semibold
                      text-xl
                      md:text-3xl
                    "
                  >
                    Invest Your Cash
                  </h3>
                  <p className="mt-4">
                    Please come and visit our company. we collect money from
                    investers and invest in our Business
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
                <div className="services_icon">
                  <i className="lni lni-bulb"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="94"
                    height="92"
                    viewBox="0 0 94 92"
                  >
                    <path
                      className="services_shape"
                      id="Polygon_12"
                      data-name="Polygon 12"
                      d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
                    />
                  </svg>
                </div>
                <div className="services_content mt-5">
                  <h3
                    className="
                      services_title
                      text-black
                      font-semibold
                      text-xl
                      md:text-3xl
                      uppercase
                    "
                  >
                    invest in business
                  </h3>
                  <p className="mt-4">
                    We Invest your money in Trending businesses. and don't worry
                    about any loss we will take care of it
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div className="single_services text-center mt-8 mx-3">
                <div className="services_icon">
                  <i className="lni lni-checkmark-circle"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="94"
                    height="92"
                    viewBox="0 0 94 92"
                  >
                    <path
                      className="services_shape"
                      id="Polygon_12"
                      data-name="Polygon 12"
                      d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
                    />
                  </svg>
                </div>
                <div className="services_content mt-5">
                  <h3
                    className="
                      services_title
                      text-black
                      font-semibold
                      text-xl
                      md:text-3xl
                    "
                  >
                    RETURN PROFIT
                  </h3>
                  <p className="mt-4">
                    Our ploicy is return profit on monthly base. you will get
                    more then 8% profit of your investment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChooseUs />
      </div>
    </>
  );
}

export default About;
