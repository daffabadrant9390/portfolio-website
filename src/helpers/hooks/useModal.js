import { addClass, removeClass } from "helpers/format/classNameModifier";
import { useLayoutEffect } from "react";

const useModal = () => {
  useLayoutEffect(() => {
    const useModal = (element) => {
      element.preventDefault();

      const headerSection = document.getElementById("header-section");

      // Create modalWrapper
      const modalWrapper = document.createElement("div");
      // Add class for modalWrapper
      addClass(
        modalWrapper,
        "fixed inset-0 flex items-center justify-center min-h-screen z-20"
      );

      // Create modalOverlay
      const modalOverlay = document.createElement("div");
      // Add class for modalOverlay
      addClass(modalOverlay, "fixed inset-0 bg-black opacity-35 z-20");

      // Create modalContent
      const modalContent = document.createElement("div");
      // Add class for modalContent
      addClass(modalContent, "bg-gray-800 mx-4 p-6 z-30 w-120 h-96 rounded-xl");
      // Add innerHTML for modalContent
      modalContent.innerHTML =
        element.target.attributes?.["data-content"]?.value;

      // When modalOverlay clicked, remove modalWrapper
      modalOverlay.addEventListener("click", function () {
        modalWrapper.remove();
        if (headerSection.classList.contains("z-10")) {
          removeClass(headerSection, "z-10");
          addClass(headerSection, "z-50");
        }
      });

      modalWrapper.append(modalOverlay);
      modalWrapper.append(modalContent);
      document.body.append(modalWrapper);

      addClass(headerSection, "z-10");
      removeClass(headerSection, "z-50");
    };

    const modalTriggerBtns = document.querySelectorAll("a.modal-trigger");
    modalTriggerBtns.forEach((modalTriggerBtn) => {
      modalTriggerBtn.addEventListener("click", useModal);
    });

    return () => {};
  }, []);
};

export default useModal;
