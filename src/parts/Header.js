import React from "react";

const Header = () => {
  return (
    <header
      className="bg-blue-800 fixed top-0 right-0 left-0 z-50"
      id="header-section"
    >
      <div className="container mx-auto px-4 h-20 ">
        <div className="h-full w-full flex justify-between items-center">
          {/* START: LOGO */}
          <div className="w-16">
            <img
              src="./images/logo.png"
              alt="Portfolio Logo"
              className="overflow-hidden w-full h-full"
            />
          </div>
          {/* END: LOGO */}

          {/* START: Navbar */}
          <div className="md:block hidden w-80" id="menu">
            <ul className="flex justify-between px-3 ulMenu relative z-50">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white hover:underline transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#my-project"
                  className="text-gray-300 hover:text-white hover:underline transition-all duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white hover:underline transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* END: Navbar */}

          {/* START: Hamburger Menu */}
          <div className="block md:hidden">
            <button
              type="button"
              id="menu-toggler"
              className="  w-8
              h-8
              relative
              flex
              items-center
              justify-center
              text-gray-300
              z-50
              focus:outline-none"
            >
              <svg
                className="fill-current"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.9773 0.461304H1.04219C0.466585 0.461304 0 0.790267 0 1.19609C0 1.60192 0.466668 1.93088 1.04219 1.93088H15.9773C16.5529 1.93088 17.0195 1.60192 17.0195 1.19609C17.0195 0.790208 16.5529 0.461304 15.9773 0.461304Z" />
                <path d="M15.9773 7.68802H1.04219C0.466585 7.68802 0 8.01698 0 8.42281C0 8.82864 0.466668 9.1576 1.04219 9.1576H15.9773C16.5529 9.1576 17.0195 8.82864 17.0195 8.42281C17.0195 8.01692 16.5529 7.68802 15.9773 7.68802Z" />
                <path d="M15.9773 14.9147H1.04219C0.466585 14.9147 0 15.2437 0 15.6495C0 16.0553 0.466668 16.3843 1.04219 16.3843H15.9773C16.5529 16.3843 17.0195 16.0553 17.0195 15.6495C17.0195 15.2436 16.5529 14.9147 15.9773 14.9147Z" />
              </svg>
            </button>
          </div>
          {/* END: Hamburger Menu */}
        </div>
      </div>
    </header>
  );
};

export default Header;
