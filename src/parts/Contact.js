import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-8 md:py-14">
      <div className="flex flex-col items-center justify-center">
        <img
          src="./images/icon-contact.png"
          alt="Contact Icon"
          className="object-cover mb-4 w-14 md:w-20"
        />
        <h2 className="text-lg md:text-2xl font-semibold text-white mb-3">
          Contact Me
        </h2>
        <p className="text-gray-500 text-sm">
          Feel free to contact me if you have something to ask for
        </p>
      </div>
      <div className="flex justify-center items-center mt-12 md:mt-20">
        {/* START: IMAGE CONTACT */}
        <div className="hidden md:block w-1/2">
          <img
            src="./images/contact-img.png"
            alt="Contact Illustration Img"
            className="w-96 object-cover object-center overflow-hidden"
          />
        </div>
        {/* END: IMAGE CONTACT */}

        {/* START: CONTACT FORM FIELD */}
        <div className="w-full md:w-1/3 md:px-4">
          <div className="px-4 py-2 md:p-4 ">
            <form action="#">
              {/* start: name */}
              <div className="flex flex-col mb-4">
                <label
                  for="complete-name"
                  className="text-sm mb-2 text-gray-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  data-input
                  id="complete-name"
                  className="px-4 py-3 bg-gray-800 text-sm text-white focus:outline-none rounded-lg"
                  placeholder="Type your full name..."
                />
              </div>
              {/* end: name */}
              {/* start: email address */}
              <div className="flex flex-col mb-4">
                <label for="email" className="text-sm mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="text"
                  data-input
                  id="email"
                  className="px-4 py-3 bg-gray-800 text-sm text-white focus:outline-none rounded-lg"
                  placeholder="Type your email address..."
                />
              </div>
              {/* end: email address */}
              {/* start: message field */}
              <div className="flex flex-col mb-4">
                <label for="messages" className="mb-2 text-sm text-gray-300">
                  Messages
                </label>
                <textarea
                  cols="30"
                  rows="5"
                  id="messages"
                  className="px-4 py-3 text-sm text-white bg-gray-800 rounded-lg focus:outline-none"
                  placeholder="Type your messages..."
                ></textarea>
              </div>
              {/* end: message field */}

              {/* start:submit button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled
                  className="px-4 py-2 rounded-full bg-blue-400 focus:outline-none focus:bg-gray-800 transition-all duration-300 text-lg w-full text-white"
                >
                  Submit
                </button>
              </div>
              {/* end:submit button */}
            </form>
          </div>
        </div>
        {/* END: CONTACT FORM FIELD */}
      </div>
    </section>
  );
};

export default Contact;
