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

    // Start auto image change carousel
    autoChangeImages(5000);
  }

  // Add event listeners to buttons
  rightArrowButton.addEventListener("click", moveCarouselRight);
  leftArrowButton.addEventListener("click", moveCarouselLeft);

  navDots.forEach((element, index) => {
    element.addEventListener("click", () => {
      setImageAndClass(index);
    });
  });

  // Adjusts the frame size to match the image size
  function adjustFrameSizeAndPosition() {
    const frameDiv = document.querySelector(".frame");
    // const wideDiv = document.querySelector(".wide");
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
  function setClassSelected(index) {
    const images = document.querySelectorAll(".photo");
    const navDots = document.querySelectorAll(".nav-dot");
    images.forEach((element) => {
      element.classList.remove("selected");
    });
    navDots.forEach((element) => {
      element.classList.remove("nav-dot-selected");
    });
    images[index].classList.add("selected");
    navDots[index].classList.add("nav-dot-selected");
  }

  function setImageAndClass(index) {
    setImage(index);
    setClassSelected(index);
  }

  function moveCarouselRight() {
    const carouselImages = document.querySelectorAll(".photo");
    const numberOfCarouselImages = carouselImages.length;
    const selectedImage = document.querySelector(".selected");
    const selectedImageIndex = Number(selectedImage.dataset.index);
    if (selectedImageIndex >= numberOfCarouselImages - 1) {
      setImageAndClass(0);
    } else {
      setImageAndClass(selectedImageIndex + 1);
    }
  }

  function moveCarouselLeft() {
    const carouselImages = document.querySelectorAll(".photo");
    const numberOfCarouselImages = carouselImages.length;
    const selectedImage = document.querySelector(".selected");
    const selectedImageIndex = Number(selectedImage.dataset.index);
    if (selectedImageIndex <= 0) {
      setImageAndClass(numberOfCarouselImages - 1);
    } else {
      setImageAndClass(selectedImageIndex - 1);
    }
  }

  function autoChangeImages(time) {
    const carouselImages = document.querySelectorAll(".photo");
    const numberOfCarouselImages = carouselImages.length;
    let counter = 1;
    setInterval(() => {
      setImageAndClass(counter);
      if (counter >= numberOfCarouselImages - 1) {
        counter = 0;
      } else {
        counter++;
      }
    }, time);
  }

  init();
});
