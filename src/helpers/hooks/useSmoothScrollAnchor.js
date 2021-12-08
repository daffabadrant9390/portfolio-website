import { useLayoutEffect } from "react";

const useSmoothScrollAnchor = () => {
  useLayoutEffect(() => {
    // Grab all anchor elements that have href attribute started by "#"
    const anchorElements = document.querySelectorAll("a[href^='#']");

    anchorElements.forEach((anchorElement) => {
      anchorElement.addEventListener("click", function (e) {
        e.preventDefault();

        console.log(this.getAttribute("href").replace("#", ""));
        if (
          document.getElementById(this.getAttribute("href").replace("#", ""))
        ) {
          document
            .getElementById(this.getAttribute("href").replace("#", ""))
            .scrollIntoView({
              behavior: "smooth",
            });
        }
      });
    });
  }, []);
};

export default useSmoothScrollAnchor;
