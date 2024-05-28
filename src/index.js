import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const leftArrowButton = document.querySelector(".arr-left");
  const navDots = document.querySelectorAll(".nav-dot");
  const rightArrowButton = document.querySelector(".arr-right");

  function init() {
    // Initial adjustment
    adjustFrameSizeAndPosition();

    // Adjust on window resize
    window.addEventListener("resize", adjustFrameSizeAndPosition);
  }

  // Add event listeners to buttons
  rightArrowButton.addEventListener("click", moveCarouselRight);
  leftArrowButton.addEventListener("click", moveCarouselLeft);

  navDots.forEach((element, index) => {
    element.addEventListener("click", () => {
      setImage(index);
      setClassSelected(index);
    });
  });

  // Adjusts the frame size to match the image size
  function adjustFrameSizeAndPosition() {
    const frameDiv = document.querySelector(".frame");
    const wideDiv = document.querySelector(".wide");
    const firstImage = document.querySelector(".imgOne");
    const selectedImage = document.querySelector(".selected");
    const selectedImageIndex = Number(selectedImage.dataset.index);
    const firstImageRect = firstImage.getBoundingClientRect();
    const imageWidth = firstImageRect.width;
    const imageHeight = firstImageRect.height;

    // Adjust the frame size to match the image size
    frameDiv.style.width = `${imageWidth}px`;
    frameDiv.style.height = `${imageHeight}px`;

    // Adjust this index to choose a different image
    setImage(selectedImageIndex);
  }

  // Show image in frame
  function setImage(index) {
    const firstImage = document.querySelector(".imgOne");
    const firstImageRect = firstImage.getBoundingClientRect();
    const imageWidth = firstImageRect.width;
    const wideDiv = document.querySelector(".wide");
    const offset = -index * imageWidth;

    wideDiv.style.transform = `translateX(${offset}px)`;
  }

  // Add selected class to image and navigation dots
  function setClassSelected(imageNumber) {
    const images = document.querySelectorAll(".photo");
    const navDots = document.querySelectorAll(".nav-dot");
    images.forEach((element) => {
      element.classList.remove("selected");
    });
    navDots.forEach((element) => {
      element.classList.remove("nav-dot-selected");
    });
    images[imageNumber].classList.add("selected");
    navDots[imageNumber].classList.add("nav-dot-selected");
  }

  function moveCarouselRight() {
    const carouselImages = document.querySelectorAll(".photo");
    const numberOfCarouselImages = carouselImages.length;
    const selectedImage = document.querySelector(".selected");
    const selectedImageIndex = Number(selectedImage.dataset.index);
    if (selectedImageIndex >= numberOfCarouselImages - 1) {
      return;
    } else {
      setImage(selectedImageIndex + 1);
      setClassSelected(selectedImageIndex + 1);
    }
  }

  function moveCarouselLeft() {
    const selectedImage = document.querySelector(".selected");
    const selectedImageIndex = Number(selectedImage.dataset.index);
    if (selectedImageIndex <= 0) {
      return;
    } else {
      setImage(selectedImageIndex - 1);
      setClassSelected(selectedImageIndex - 1);
    }
  }

  init();
});
