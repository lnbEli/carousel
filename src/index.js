import "./style.css";

function adjustFrameSizeAndPosition() {
  const frameDiv = document.querySelector(".frame");
  const wideDiv = document.querySelector(".wide");
  const firstImage = document.querySelector(".imgOne");

  const firstImageRect = firstImage.getBoundingClientRect();
  const imageWidth = firstImageRect.width;
  const imageHeight = firstImageRect.height;

  // Adjust the frame size to match the image size
  frameDiv.style.width = `${imageWidth}px`;
  frameDiv.style.height = `${imageHeight}px`;

  // Adjust this index to choose a different image
  changeImage(1);
}

// Initial adjustment
adjustFrameSizeAndPosition();
// Adjust on window resize
window.addEventListener("resize", adjustFrameSizeAndPosition);

function changeImage(index) {
  const firstImage = document.querySelector(".imgOne");
  const firstImageRect = firstImage.getBoundingClientRect();
  const imageWidth = firstImageRect.width;
  const wideDiv = document.querySelector(".wide");
  const offset = -index * imageWidth;

  wideDiv.style.transform = `translateX(${offset}px)`;
}
