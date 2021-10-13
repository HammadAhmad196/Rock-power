import React from "react";
import contact from "../../assets/images/contact.svg";
import header from "../../assets/images/header.svg";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import footerlogo from "../../assets/images/footerlogo.svg";

import ChooseUs from "../../components/whyChoose/ChooseUs";

function Home() {
  return (
    <>
      {/* Home Section */}
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
      {/* About Section */}
      <section className="services_area pt-120" id="about">
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
      </section>
      {/* Our Services Section */}
      <section id="services" class="services_area pt-120 pb-120">
        <div class="container">
          <div class="row justify-center">
            <div class="w-full lg:w-1/2">
              <div class="section_title text-center pb-6">
                <h5 class="sub_title">What We Do</h5>
                <h4 class="main_title">Our Services</h4>
              </div>
            </div>
          </div>
          <div class="row justify-center">
            <div class="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div class="single_services text-center mt-8 mx-3">
                <div class="services_icon">
                  <i class="lni lni-layout"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="94"
                    height="92"
                    viewBox="0 0 94 92"
                  >
                    <path
                      class="services_shape"
                      id="Polygon_12"
                      data-name="Polygon 12"
                      d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
                    />
                  </svg>
                </div>
                <div class="services_content mt-5 xl:mt-10">
                  <h3
                    class="
                    services_title
                    text-black
                    font-semibold
                    text-xl
                    md:text-2xl
                    lg:text-xl
                    xl:text-3xl
                  "
                  >
                    Web Design
                  </h3>
                  <p class="mt-4">
                    Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat,
                    sed diam voluptua. At vero eos accusam et justo duo dolores
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div class="single_services text-center mt-8 mx-3">
                <div class="services_icon">
                  <i class="lni lni-bullhorn"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="94"
                    height="92"
                    viewBox="0 0 94 92"
                  >
                    <path
                      class="services_shape"
                      id="Polygon_12"
                      data-name="Polygon 12"
                      d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
                    />
                  </svg>
                </div>
                <div class="services_content mt-5 xl:mt-10">
                  <h3
                    class="
                    services_title
                    text-black
                    font-semibold
                    text-xl
                    md:text-2xl
                    lg:text-xl
                    xl:text-3xl
                  "
                  >
                    Digital Marketing
                  </h3>
                  <p class="mt-4">
                    Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat,
                    sed diam voluptua. At vero eos accusam et justo duo dolores
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div class="single_services text-center mt-8 mx-3">
                <div class="services_icon">
                  <i class="lni lni-mobile"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="94"
                    height="92"
                    viewBox="0 0 94 92"
                  >
                    <path
                      class="services_shape"
                      id="Polygon_12"
                      data-name="Polygon 12"
                      d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
                    />
                  </svg>
                </div>
                <div class="services_content mt-5 xl:mt-10">
                  <h3
                    class="
                    services_title
                    text-black
                    font-semibold
                    text-xl
                    md:text-2xl
                    lg:text-xl
                    xl:text-3xl
                  "
                  >
                    Mobile Apps
                  </h3>
                  <p class="mt-4">
                    Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat,
                    sed diam voluptua. At vero eos accusam et justo duo dolores
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div class="single_services text-center mt-8 mx-3">
                <div class="services_icon">
                  <i class="lni lni-seo"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="94"
                    height="92"
                    viewBox="0 0 94 92"
                  >
                    <path
                      class="services_shape"
                      id="Polygon_12"
                      data-name="Polygon 12"
                      d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
                    />
                  </svg>
                </div>
                <div class="services_content mt-5 xl:mt-10">
                  <h3
                    class="
                    services_title
                    text-black
                    font-semibold
                    text-xl
                    md:text-2xl
                    lg:text-xl
                    xl:text-3xl
                  "
                  >
                    SEO Consultancy
                  </h3>
                  <p class="mt-4">
                    Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat,
                    sed diam voluptua. At vero eos accusam et justo duo dolores
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div class="single_services text-center mt-8 mx-3">
                <div class="services_icon">
                  <i class="lni lni-layers"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="94"
                    height="92"
                    viewBox="0 0 94 92"
                  >
                    <path
                      class="services_shape"
                      id="Polygon_12"
                      data-name="Polygon 12"
                      d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
                    />
                  </svg>
                </div>
                <div class="services_content mt-5 xl:mt-10">
                  <h3
                    class="
                    services_title
                    text-black
                    font-semibold
                    text-xl
                    md:text-2xl
                    lg:text-xl
                    xl:text-3xl
                  "
                  >
                    Graphic Design
                  </h3>
                  <p class="mt-4">
                    Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat,
                    sed diam voluptua. At vero eos accusam et justo duo dolores
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
              <div class="single_services text-center mt-8 mx-3">
                <div class="services_icon">
                  <i class="lni lni-briefcase"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="94"
                    height="92"
                    viewBox="0 0 94 92"
                  >
                    <path
                      class="services_shape"
                      id="Polygon_12"
                      data-name="Polygon 12"
                      d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"
                    />
                  </svg>
                </div>
                <div class="services_content mt-5 xl:mt-10">
                  <h3
                    class="
                    services_title
                    text-black
                    font-semibold
                    text-xl
                    md:text-2xl
                    lg:text-xl
                    xl:text-3xl
                  "
                  >
                    Business Consultancy
                  </h3>
                  <p class="mt-4">
                    Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat,
                    sed diam voluptua. At vero eos accusam et justo duo dolores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Plan Section */}
      <section id="pricing" class="pricing_area pt-120 pb-120">
        <div class="container">
          <div class="row justify-center">
            <div class="w-full lg:w-1/2">
              <div class="section_title text-center pb-6">
                <h5 class="sub_title">Pricing Plans</h5>
                <h4 class="main_title">Choose Your Plan</h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="w-full">
              <div class="pricing_menu mt-8 pb-8">
                <ul class="flex justify-center">
                  <li class="nav-item">
                    <button
                      class="
                      active
                      bg-gray
                      text-body-color
                      py-3
                      px-8
                      rounded-tl-full rounded-bl-full
                    "
                      data-tab-target="#monthlyPlan"
                    >
                      Monthly
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="
                      bg-gray
                      text-body-color
                      py-3
                      px-8
                      rounded-tr-full rounded-br-full
                    "
                      data-tab-target="#yearlyPlan"
                    >
                      Yearly
                    </button>
                  </li>
                </ul>
              </div>

              <div class="pricing_content mt-6_area">
                <div class="tab-content">
                  <div
                    class="active tab-pane"
                    id="monthlyPlan"
                    data-tab-content
                  >
                    <div class="row justify-center">
                      <div class="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                        <div class="single_pricing text-center mt-8 mx-3">
                          <div class="pricing_title relative inline-block">
                            <h4 class="title group-hover:text-white">Basic</h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="112"
                              height="110"
                              viewBox="0 0 112 110"
                            >
                              <path
                                class="services_shape"
                                id="Polygon_15"
                                data-name="Polygon 15"
                                d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                fill="#f94f4f"
                              />
                            </svg>
                          </div>
                          <div class="pricing_content mt-6">
                            <span class="pricing_price font-bold text-black text-4xl">
                              $19.00
                            </span>
                            <p class="mt-4 leading-9">
                              Lorem ipsum dolor sit am consetetur sadi aliquyam
                              erat sed diam voluptua vero eos accusam et justo
                              duo dolores
                            </p>
                            <a href="" class="main-btn pricing_btn">
                              Choose Plan
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                        <div class="single_pricing text-center mt-8 mx-3 active">
                          <div class="pricing_title relative inline-block">
                            <h4 class="title group-hover:text-white">
                              Standard
                            </h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="112"
                              height="110"
                              viewBox="0 0 112 110"
                            >
                              <path
                                class="services_shape"
                                id="Polygon_15"
                                data-name="Polygon 15"
                                d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                fill="#f94f4f"
                              />
                            </svg>
                          </div>
                          <div class="pricing_content mt-6">
                            <span class="pricing_price font-bold text-black text-4xl">
                              $39.00
                            </span>
                            <p class="mt-4 leading-9">
                              Lorem ipsum dolor sit am consetetur sadi aliquyam
                              erat sed diam voluptua vero eos accusam et justo
                              duo dolores
                            </p>
                            <a href="" class="main-btn pricing_btn">
                              Choose Plan
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                        <div class="single_pricing text-center mt-8 mx-3">
                          <div class="pricing_title relative inline-block">
                            <h4 class="title group-hover:text-white">
                              Premium
                            </h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="112"
                              height="110"
                              viewBox="0 0 112 110"
                            >
                              <path
                                class="services_shape"
                                id="Polygon_15"
                                data-name="Polygon 15"
                                d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                fill="#f94f4f"
                              />
                            </svg>
                          </div>
                          <div class="pricing_content mt-6">
                            <span class="pricing_price font-bold text-black text-4xl">
                              $99.00
                            </span>
                            <p class="mt-4 leading-9">
                              Lorem ipsum dolor sit am consetetur sadi aliquyam
                              erat sed diam voluptua vero eos accusam et justo
                              duo dolores
                            </p>
                            <a href="" class="main-btn pricing_btn">
                              Choose Plan
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="yearlyPlan" data-tab-content>
                    <div class="row justify-center">
                      <div class="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                        <div class="single_pricing text-center mt-8 mx-3">
                          <div class="pricing_title relative inline-block">
                            <h4 class="title group-hover:text-white">Basic</h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="112"
                              height="110"
                              viewBox="0 0 112 110"
                            >
                              <path
                                class="services_shape"
                                id="Polygon_15"
                                data-name="Polygon 15"
                                d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                fill="#f94f4f"
                              />
                            </svg>
                          </div>
                          <div class="pricing_content mt-6">
                            <span class="pricing_price font-bold text-black text-4xl">
                              $99.00
                            </span>
                            <p class="mt-4 leading-9">
                              Lorem ipsum dolor sit am consetetur sadi aliquyam
                              erat sed diam voluptua vero eos accusam et justo
                              duo dolores
                            </p>
                            <a href="" class="main-btn pricing_btn">
                              Choose Plan
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                        <div class="single_pricing text-center mt-8 mx-3 active">
                          <div class="pricing_title relative inline-block">
                            <h4 class="title group-hover:text-white">
                              Standard
                            </h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="112"
                              height="110"
                              viewBox="0 0 112 110"
                            >
                              <path
                                class="services_shape"
                                id="Polygon_15"
                                data-name="Polygon 15"
                                d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                fill="#f94f4f"
                              />
                            </svg>
                          </div>
                          <div class="pricing_content mt-6">
                            <span class="pricing_price font-bold text-black text-4xl">
                              $199.00
                            </span>
                            <p class="mt-4 leading-9">
                              Lorem ipsum dolor sit am consetetur sadi aliquyam
                              erat sed diam voluptua vero eos accusam et justo
                              duo dolores
                            </p>
                            <a href="" class="main-btn pricing_btn">
                              Choose Plan
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                        <div class="single_pricing text-center mt-8 mx-3">
                          <div class="pricing_title relative inline-block">
                            <h4 class="title group-hover:text-white">
                              Premium
                            </h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="112"
                              height="110"
                              viewBox="0 0 112 110"
                            >
                              <path
                                class="services_shape"
                                id="Polygon_15"
                                data-name="Polygon 15"
                                d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z"
                                fill="#f94f4f"
                              />
                            </svg>
                          </div>
                          <div class="pricing_content mt-6">
                            <span class="pricing_price font-bold text-black text-4xl">
                              $499.00
                            </span>
                            <p class="mt-4 leading-9">
                              Lorem ipsum dolor sit am consetetur sadi aliquyam
                              erat sed diam voluptua vero eos accusam et justo
                              duo dolores
                            </p>
                            <a href="" class="main-btn pricing_btn">
                              Choose Plan
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact US */}
      <section id="contact" className="contact_area relative pt-18 pb-120">
        <div className="contact_image flex items-center justify-end">
          <div className="image lg:pr-13">
            <img src={contact} alt="about" />
          </div>
        </div>
        <div className="container">
          <div className="row justify-end">
            <div className="w-full lg:w-1/2">
              <div className="contact_wrapper mt-11">
                <div className="section_title pb-4">
                  <h5 className="sub_title">Contact</h5>
                  <h4 className="main_title">Get In Touch</h4>
                  <p>
                    Lorem ipsum dolor sitrg amet, consetetur sadipscing elitr
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna.
                  </p>
                </div>

                <div className="contact_form">
                  <form id="contact-form">
                    <div className="row">
                      <div className="w-full md:w-1/2">
                        <div className="mx-3">
                          <div className="single_form mt-8">
                            <input
                              name="name"
                              id="name"
                              type="text"
                              placeholder="Name"
                              className="
                            w-full
                            rounded-md
                            py-4
                            px-6
                            border border-solid border-body-color
                          "
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2">
                        <div className="mx-3">
                          <div className="single_form mt-8">
                            <input
                              name="email"
                              id="email"
                              type="email"
                              placeholder="Email"
                              className="
                            w-full
                            rounded-md
                            py-4
                            px-6
                            border border-solid border-body-color
                          "
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="mx-3">
                          <div className="single_form mt-8">
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Message"
                              rows="5"
                              className="
                            w-full
                            rounded-md
                            py-4
                            px-6
                            border border-solid border-body-color
                            resize-none
                          "
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <p className="form-message mx-3"></p>
                      <div className="w-full">
                        <div className="mx-3">
                          <div className="single_form mt-8">
                            <button
                              type="submit"
                              className="main-btn contact-btn"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
