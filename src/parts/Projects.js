import React from "react";

const Projects = () => {
  return (
    <section id="my-project" className="container mx-auto px-4 py-0 md:py-14">
      <div className="w-full ">
        <div className=" flex flex-col items-center justify-center">
          <img
            className="mb-4 object-cover object-center w-14 md:w-20 "
            src="./images/icon-project.png"
            alt="Project Icon"
          />
          <h2 className="text-lg md:text-2xl text-white mb-3">My Projects</h2>
          <p className="text-base text-gray-500">
            Some projects i have worked on
          </p>
        </div>
        {/* start: projects */}
        <div className="grid grid-rows-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-0 md:gap-6 mt-12 md:mt-20">
          {/* start: project 1 */}
          <div className="col-span-1 row-span-1 md:mb-0 mb-4 relative">
            <div className="mb-4 relative">
              <img
                src="./images/project-1.png"
                alt="My First Project, Travel.Lah is a travelling website"
                className="w-full h-full object-cover object-left rounded-xl overflow-hidden"
              />
            </div>
            <h5 className="font-semibold text-white text-sm md:text-base mb-2">
              Travel.Lah:{" "}
              <span className="text-gray-300">
                Indonesian Travelling Website
              </span>
            </h5>
            <p className="text-gray-500 text-sm">Responsive Website</p>
            <a
              href="#"
              className="stretched-link modal-trigger"
              data-content='<div class="flex flex-col justify-center items-center text-center h-full">
              <svg
                class="mb-10 w-14 h-14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8V8ZM9 4C9 4.26522 8.89464 4.51957 8.70711 4.70711C8.51957 4.89464 8.26522 5 8 5C7.73478 5 7.48043 4.89464 7.29289 4.70711C7.10536 4.51957 7 4.26522 7 4C7 3.73478 7.10536 3.48043 7.29289 3.29289C7.48043 3.10536 7.73478 3 8 3C8.26522 3 8.51957 3.10536 8.70711 3.29289C8.89464 3.48043 9 3.73478 9 4ZM7 7C6.73478 7 6.48043 7.10536 6.29289 7.29289C6.10536 7.48043 6 7.73478 6 8C6 8.26522 6.10536 8.51957 6.29289 8.70711C6.48043 8.89464 6.73478 9 7 9V12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H9C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11V8C9 7.73478 8.89464 7.48043 8.70711 7.29289C8.51957 7.10536 8.26522 7 8 7H7Z"
                  fill="white"
                />
              </svg>
              <p class="text-gray-300 mb-4 leading-8 text-sm md:text-base">
              Travel.Lah is a travelling website design that created to introduce the best tourism destionations in Indonesia to all of the travellers over the world. So that, i made this website using english to make them understand about every place.
              </p>
              <p class="text-sm text-gray-500 mb-8">Components: HTML5, CSS3, Vanilla Javascript</p>
              <div class="flex gap-4">
                <a href="https://travel-lah.netlify.app/" target="_blank" class="px-4 py-2 bg-green-500 rounded-lg text-white text-sm md:text-base">View Demo</a>
                <a href="https://github.com/daffabadrant9390/Travel.Lah-Responsive-Travelling-Website-with-Pure-HTML-CSS-and-JS" target="_blank" class="px-4 py-2 bg-red-500 rounded-lg text-white text-sm md:text-base">View Source Codes</a>
              </div>
            </div>'
            ></a>
          </div>
          {/* end: project 1 */}

          {/* start: project 2 */}
          <div className="col-span-1 row-span-1 md:mb-0 mb-4 relative">
            <div className=" mb-4">
              <img
                src="./images/project-2.png"
                alt="My First Project, Travel.Lah is a travelling website"
                className="w-full h-full object-cover object-left rounded-xl overflow-hidden"
              />
            </div>
            <h5 className="font-semibold text-white text-sm md:text-base mb-2">
              LuxSpace:{" "}
              <span className="text-gray-300">
                E-Commerce Website that sells Furnitures
              </span>
            </h5>
            <p className="text-gray-500 text-sm">Responsive Website</p>
            <a
              href="#"
              class="stretched-link modal-trigger"
              data-content='<div class="flex flex-col justify-center items-center text-center h-full">
              <svg
                class="mb-10 w-14 h-14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8V8ZM9 4C9 4.26522 8.89464 4.51957 8.70711 4.70711C8.51957 4.89464 8.26522 5 8 5C7.73478 5 7.48043 4.89464 7.29289 4.70711C7.10536 4.51957 7 4.26522 7 4C7 3.73478 7.10536 3.48043 7.29289 3.29289C7.48043 3.10536 7.73478 3 8 3C8.26522 3 8.51957 3.10536 8.70711 3.29289C8.89464 3.48043 9 3.73478 9 4ZM7 7C6.73478 7 6.48043 7.10536 6.29289 7.29289C6.10536 7.48043 6 7.73478 6 8C6 8.26522 6.10536 8.51957 6.29289 8.70711C6.48043 8.89464 6.73478 9 7 9V12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H9C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11V8C9 7.73478 8.89464 7.48043 8.70711 7.29289C8.51957 7.10536 8.26522 7 8 7H7Z"
                  fill="white"
                />
              </svg>
              <p class="text-gray-300 mb-4 leading-8 text-sm md:text-base">
                LuxSpace is an online E-Commerce website that sells many famous and expensive furnitures over the world. You can find several kinds of furnitures, from chair, tables, glass, etc. All of them are created in the best quality.
              </p>
              <p class="text-sm text-gray-500 mb-8">Components: HTML5, CSS3, Vanilla Javascript</p>
              <div class="flex gap-4">
                <a href="https://luxspace-webapp.netlify.app/" target="_blank" class="px-4 py-2 bg-green-500 rounded-lg text-white text-sm md:text-base">View Demo</a>
                <a href="https://github.com/daffabadrant9390/LuxSpace-Webbapp" target="_blank" class="px-4 py-2 bg-red-500 rounded-lg text-white text-sm md:text-base">View Source Codes</a>
              </div>
            </div>'
            ></a>
          </div>
          {/* end: project 2 */}

          {/* start: project 3 */}
          <div className="col-span-1 row-span-1 md:mb-0 mb-4 relative">
            <div className="mb-4">
              <img
                src="./images/project-3.png"
                alt=""
                className="w-full h-full object-cover object-center overflow-hidden rounded-xl"
              />
            </div>
            <h5 className="font-semibold text-sm md:text-base mb-2 text-white">
              RPS Mini Games:{" "}
              <span className="text-gray-300">
                Website that provides Rock Paper Scissors Game
              </span>
            </h5>
            <p className="text-gray-500 text-sm">Responsive Website</p>
            <a
              href="#"
              class="stretched-link modal-trigger"
              data-content='<div class="flex flex-col justify-center items-center text-center h-full">
              <svg
                class="mb-10 w-14 h-14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8V8ZM9 4C9 4.26522 8.89464 4.51957 8.70711 4.70711C8.51957 4.89464 8.26522 5 8 5C7.73478 5 7.48043 4.89464 7.29289 4.70711C7.10536 4.51957 7 4.26522 7 4C7 3.73478 7.10536 3.48043 7.29289 3.29289C7.48043 3.10536 7.73478 3 8 3C8.26522 3 8.51957 3.10536 8.70711 3.29289C8.89464 3.48043 9 3.73478 9 4ZM7 7C6.73478 7 6.48043 7.10536 6.29289 7.29289C6.10536 7.48043 6 7.73478 6 8C6 8.26522 6.10536 8.51957 6.29289 8.70711C6.48043 8.89464 6.73478 9 7 9V12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H9C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11V8C9 7.73478 8.89464 7.48043 8.70711 7.29289C8.51957 7.10536 8.26522 7 8 7H7Z"
                  fill="white"
                />
              </svg>
              <p class="text-gray-300 mb-4 leading-8 text-sm md:text-base">
                This website called Rock Paper Scissors mini games. Like its names, this website provide you a simple Rock Paper Scissor mini game between you and computer. You can pick one of the three choices, and the computer choice will be generated. The result will be displayed at the result box.
              </p>
              <p class="text-sm text-gray-500 mb-8">Components: HTML5, CSS3, Vanilla Javascript</p>
              <div class="flex gap-4">
                <a href="https://rock-paper-scissors-minigamejs.netlify.app/" target="_blank" class="px-4 py-2 bg-green-500 rounded-lg text-white text-sm md:text-base">View Demo</a>
                <a href="https://github.com/daffabadrant9390/Rock-Paper-Scissor-Game-with-Javascript" target="_blank" class="px-4 py-2 bg-red-500 rounded-lg text-white text-sm md:text-base">View Source Codes</a>
              </div>
            </div>'
            ></a>
          </div>
          {/* end: project 3 */}

          {/* start: project 4 */}
          <div className="col-span-1 row-span-1 md:mb-0 mb-4 relative">
            <div className="mb-4">
              <img
                src="./images/project-4.png"
                alt=""
                className="w-full h-full object-cover object-center overflow-hidden rounded-xl"
              />
            </div>
            <h5 className="font-semibold text-sm md:text-base mb-2 text-white">
              Kuy.Travel:{" "}
              <span className="text-gray-300">
                Responsive Travelling Website using CSS GRID and Flexbox
              </span>
            </h5>
            <p className="text-gray-500 text-sm">Responsive Website</p>
            <a
              href="#"
              class="stretched-link modal-trigger"
              data-content='<div class="flex flex-col justify-center items-center text-center h-full">
              <svg
                class="mb-10 w-14 h-14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8V8ZM9 4C9 4.26522 8.89464 4.51957 8.70711 4.70711C8.51957 4.89464 8.26522 5 8 5C7.73478 5 7.48043 4.89464 7.29289 4.70711C7.10536 4.51957 7 4.26522 7 4C7 3.73478 7.10536 3.48043 7.29289 3.29289C7.48043 3.10536 7.73478 3 8 3C8.26522 3 8.51957 3.10536 8.70711 3.29289C8.89464 3.48043 9 3.73478 9 4ZM7 7C6.73478 7 6.48043 7.10536 6.29289 7.29289C6.10536 7.48043 6 7.73478 6 8C6 8.26522 6.10536 8.51957 6.29289 8.70711C6.48043 8.89464 6.73478 9 7 9V12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H9C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11V8C9 7.73478 8.89464 7.48043 8.70711 7.29289C8.51957 7.10536 8.26522 7 8 7H7Z"
                  fill="white"
                />
              </svg>
              <p class="text-gray-300 mb-4 leading-8 text-sm md:text-base">
                Kuy Travel is another travelling website design that created using combination of CSS Grid and CSS Flexbox. In this website, i used "order" attribute from flexbox to make the responsive design more dynamic. And also used CSS Grid to make auto responsive design for columns and rows.
              </p>
              <p class="text-sm text-gray-500 mb-8">Components: HTML5, CSS3, Vanilla Javascript</p>
              <div class="flex gap-4">
                <a href="https://kuy-travel.netlify.app/" target="_blank" class="px-4 py-2 bg-green-500 rounded-lg text-white text-sm md:text-base">View Demo</a>
                <a href="https://github.com/daffabadrant9390/Kuy-Travel-using-CSS-GRID-and-Flexbox/tree/master" target="_blank" class="px-4 py-2 bg-red-500 rounded-lg text-white text-sm md:text-base">View Source Codes</a>
              </div>
            </div>'
            ></a>
          </div>
          {/* end: project 4 */}
        </div>
        {/* end: projects */}
      </div>
    </section>
  );
};

export default Projects;
