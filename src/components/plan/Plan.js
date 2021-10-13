import React from "react";
import header from '../../assets/images/header.svg';

function Plan() {
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
    </>
  );
}

export default Plan;
