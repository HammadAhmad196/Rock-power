import React from "react";
import contact from "../../assets/images/contact.svg";
import header from "../../assets/images/header.svg";

function Contact() {
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
      <div id="contact" className="contact_area relative pt-18 pb-120">
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
      </div>
    </>
  );
}

export default Contact;
