import { addClass, removeClass } from "helpers/format/classNameModifier";
import { useLayoutEffect } from "react";

const useMenuToggler = () => {
  useLayoutEffect(() => {
    const useMenuToggler = (element) => {
      const menuId = document.getElementById("menu");
      const ulMenu = menuId.querySelector(".ulMenu");

      console.log(menuId);
      console.log(ulMenu);

      if (menuId.className.includes("hidden")) {
        const menuOverlay = document.createElement("div");
        addClass(menuOverlay, "fixed inset-0 bg-black opacity-35 z-40");
        removeClass(menuId, "hidden");
        addClass(
          ulMenu,
          "fixed top-0 right-0 bottom-0 flex-col items-center justify-center gap-10 bg-gray-800 w-1/2 transition-all duration-300"
        );
        removeClass(ulMenu, "relative justify-between");

        element.target.innerHTML = `
            <svg
            class="fill-current"
            width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5021 8.95478L17.595 3.26807C17.8618 3.01846 18.0117 2.67991 18.0117 2.32691C18.0117 1.97391 17.8618 1.63536 17.595 1.38575C17.3282 1.13614 16.9663 0.995911 16.589 0.995911C16.2116 0.995911 15.8497 1.13614 15.5829 1.38575L9.50414 7.08572L3.42537 1.38575C3.15855 1.13614 2.79666 0.995911 2.41932 0.995911C2.04198 0.995911 1.6801 1.13614 1.41328 1.38575C1.14646 1.63536 0.996559 1.97391 0.996559 2.32691C0.996559 2.67991 1.14646 3.01846 1.41328 3.26807L7.50622 8.95478L1.41328 14.6415C1.28047 14.7647 1.17505 14.9113 1.10312 15.0729C1.03118 15.2344 0.994141 15.4077 0.994141 15.5827C0.994141 15.7576 1.03118 15.9309 1.10312 16.0924C1.17505 16.254 1.28047 16.4006 1.41328 16.5238C1.545 16.6481 1.70172 16.7467 1.87439 16.814C2.04706 16.8813 2.23226 16.9159 2.41932 16.9159C2.60638 16.9159 2.79158 16.8813 2.96425 16.814C3.13692 16.7467 3.29364 16.6481 3.42537 16.5238L9.50414 10.8238L15.5829 16.5238C15.7146 16.6481 15.8714 16.7467 16.044 16.814C16.2167 16.8813 16.4019 16.9159 16.589 16.9159C16.776 16.9159 16.9612 16.8813 17.1339 16.814C17.3066 16.7467 17.4633 16.6481 17.595 16.5238C17.7278 16.4006 17.8332 16.254 17.9052 16.0924C17.9771 15.9309 18.0141 15.7576 18.0141 15.5827C18.0141 15.4077 17.9771 15.2344 17.9052 15.0729C17.8332 14.9113 17.7278 14.7647 17.595 14.6415L11.5021 8.95478Z"/>
            </svg>
    `;

        menuOverlay.addEventListener("click", function () {
          addClass(menuId, "hidden");
          removeClass(
            ulMenu,
            "fixed top-0 right-0 bottom-0 flex-col items-center justify-center gap-10 bg-gray-800 w-1/2 transition-all duration-300"
          );
          addClass(ulMenu, "relative justify-between");

          element.target.innerHTML = `
            <svg
            class="fill-current"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M15.9773 0.461304H1.04219C0.466585 0.461304 0 0.790267 0 1.19609C0 1.60192 0.466668 1.93088 1.04219 1.93088H15.9773C16.5529 1.93088 17.0195 1.60192 17.0195 1.19609C17.0195 0.790208 16.5529 0.461304 15.9773 0.461304Z"
            />
            <path
                d="M15.9773 7.68802H1.04219C0.466585 7.68802 0 8.01698 0 8.42281C0 8.82864 0.466668 9.1576 1.04219 9.1576H15.9773C16.5529 9.1576 17.0195 8.82864 17.0195 8.42281C17.0195 8.01692 16.5529 7.68802 15.9773 7.68802Z"
            />
            <path
                d="M15.9773 14.9147H1.04219C0.466585 14.9147 0 15.2437 0 15.6495C0 16.0553 0.466668 16.3843 1.04219 16.3843H15.9773C16.5529 16.3843 17.0195 16.0553 17.0195 15.6495C17.0195 15.2436 16.5529 14.9147 15.9773 14.9147Z"
            />
            </svg>
            `;
        });

        console.log(menuOverlay);
        menuId.append(menuOverlay);
      } else {
        addClass(menuId, "hidden");
        removeClass(
          ulMenu,
          "fixed top-0 right-0 bottom-0 flex-col items-center justify-center gap-10 bg-gray-800 w-1/2 transition-all duration-300"
        );
        addClass(ulMenu, "relative justify-between");

        element.target.innerHTML = `
            <svg
            class="fill-current"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M15.9773 0.461304H1.04219C0.466585 0.461304 0 0.790267 0 1.19609C0 1.60192 0.466668 1.93088 1.04219 1.93088H15.9773C16.5529 1.93088 17.0195 1.60192 17.0195 1.19609C17.0195 0.790208 16.5529 0.461304 15.9773 0.461304Z"
            />
            <path
                d="M15.9773 7.68802H1.04219C0.466585 7.68802 0 8.01698 0 8.42281C0 8.82864 0.466668 9.1576 1.04219 9.1576H15.9773C16.5529 9.1576 17.0195 8.82864 17.0195 8.42281C17.0195 8.01692 16.5529 7.68802 15.9773 7.68802Z"
            />
            <path
                d="M15.9773 14.9147H1.04219C0.466585 14.9147 0 15.2437 0 15.6495C0 16.0553 0.466668 16.3843 1.04219 16.3843H15.9773C16.5529 16.3843 17.0195 16.0553 17.0195 15.6495C17.0195 15.2436 16.5529 14.9147 15.9773 14.9147Z"
            />
            </svg>
            `;
      }
    };

    const btnToggler = document.getElementById("menu-toggler");
    btnToggler.addEventListener("click", useMenuToggler);
  }, []);
};

export default useMenuToggler;
