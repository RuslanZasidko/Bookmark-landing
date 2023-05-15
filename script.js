// MODAL JS
const modal = document.querySelector(".modal");
const modalOpener = document.querySelector(".hamburger-svg");
const modalCloser = document.querySelector(".modal-close-button");
const modalNavigation = document.querySelector(".modal-navigation");
const modalNavigationLinks = modalNavigation.querySelectorAll("a");
const closeModalHandler = () => {
  modal.style.display = "none";
};
const openModalHandler = () => {
  modal.style.display = "flex";
};
modalCloser.addEventListener("click", closeModalHandler);
modalOpener.addEventListener("click", openModalHandler);

modalNavigationLinks.forEach((item) => {
  item.addEventListener("click", closeModalHandler);
});
// modal JS end

// CODE FOR FEATURES  SLIDERS
const sliderContent = document.querySelectorAll(
  ".features-section-tabs-content"
);
const sliderActivator = document.querySelectorAll(".slider-activator");

//  click handler FUNCTION
function onclickHandler(event) {
  const indexofSlider = Array.from(sliderActivator).indexOf(event.target);
  const correspondingSliderContent = sliderContent.item(indexofSlider);

  sliderActivator.forEach((item, i) => {
    if (i === indexofSlider) {
      item.classList.add("clicked");
    } else {
      item.classList.remove("clicked");
    }
  });
  sliderContent.forEach((item) => {
    if (item === correspondingSliderContent) {
      item.classList.remove("display");
      item.classList.add("fade-in");
    } else {
      item.classList.add("display");
      item.classList.remove("fade-in");
    }
  });
}

sliderActivator.forEach((item) => {
  item.addEventListener("click", onclickHandler);
  item.addEventListener("touchstart", onclickHandler, { passive: true });
});
// CODE FOR FAQ  ACCORDIONS
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(faqItems);
    const paragraph = item.querySelector("p");
    const svg = item.querySelector("svg");
    const path = item.querySelector("path");
    if (event.target.tagName === "P") {
      return;
    } else {
      if (paragraph.classList.contains("display")) {
        paragraph.classList.remove("display");
        path.style.stroke = "#fa5959";
        svg.style.transform = "rotateX(180deg)";
      } else {
        paragraph.classList.add("display");
        path.style.stroke = "#5267DF";
        svg.style.transform = "rotateX(0deg)";
      }
    }
  });
});

//  EMAIL FORM VALIDATION CODE

const emailForm = document.querySelector("form");
const emailInput = document.querySelector("#email");
const validEmailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const inputWrapper = document.querySelector(".input-wrapper");
const input = document.querySelector("input");
emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validEmailRegex.test(emailInput.value) || emailInput.value === "") {
    inputWrapper.classList.add("invalid");
    document.querySelector("#svgg").style.display = "block";
    input.style.border = "2px solid var(--soft-red)";
  } else {
    inputWrapper.classList.remove("invalid");
    document.querySelector("#svgg").style.display = "none";
    input.style.border = "none";
    window.location.href =
      "mailto:boomarkcontact@gmail.com?subject=Email from " + emailInput.value;
  }
});
input.addEventListener("blur", (event) => {
  inputWrapper.classList.remove("invalid");
  document.querySelector("#svgg").style.display = "none";
  input.style.border = "none";
  input.placeholder = "Enter your email";
});
