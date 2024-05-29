# Carousel

Run: npm install webpack webpack-cli --save-dev

Main Learnings:

Responsive Design:
Ensures the carousel and images scale appropriately with the window size.
Uses CSS properties like min-width, height, and overflow to handle resizing.
DOM Manipulation:

Uses JavaScript to dynamically adjust the size and position of the carousel elements.
getBoundingClientRect() is used to get the dimensions of the images for resizing the frame.
Event Handling:

Listens for click events on the navigation arrows and dots.
Listens for the resize event on the window to adjust the carousel size dynamically.

The autoChangeImages function uses setInterval and the closure created around the counter to increment the function call.

Summary:

This application is an image carousel or slideshow. 
The main features include:
Image Carousel: Displays a series of images that can be navigated using left and right arrows.
Navigation Dots: Indicates the current image in view and allows users to click on dots to jump to specific images.
Responsive Design: Adjusts the size of the carousel frame and images dynamically when the window is resized.
Smooth Transitions: Uses CSS transformations for smooth transitions between images.
JavaScript:
Manages the interactivity of the carousel, including navigation and resizing.
Handles DOM manipulation to adjust the size of the carousel and to switch between images.
Uses event listeners to handle user interactions (click events on arrows and dots, window resize events).





