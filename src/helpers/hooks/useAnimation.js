import { addClass, removeClass } from "../format/classNameModifier";
import { useLayoutEffect } from "react";

const useAnimation = () => {
  useLayoutEffect(() => {
    const animElements = document.querySelectorAll(".anim");
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);

      entries.forEach((entry) => {
        if (entry.target.classList.contains("anim-left")) {
          if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `left-to-right 1s ease-in ${entry.target.dataset.delay} forwards`;
          } else {
            entry.target.style.animation = `none`;
          }
        } else if (entry.target.classList.contains("anim-right")) {
          if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `right-to-left 1s ease-in ${entry.target.dataset.delay} forwards`;
          } else {
            entry.target.style.animation = `none`;
          }
        } else if (entry.target.classList.contains("anim-fade")) {
          if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `fading 1s ease-in ${entry.target.dataset.delay} forwards`;
          } else {
            entry.target.style.animation = `none`;
          }
        }
      });
    });

    animElements.forEach((anim) => {
      observer.observe(anim);
    });

    console.log(animElements);
  });
};

export default useAnimation;
