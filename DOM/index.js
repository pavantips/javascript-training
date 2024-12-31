(function(){
// store images in a folder and call all those images into an array

"use strict";

const myImages = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
  ];
  let currentImage = 0; // always show the first image when the page loads

  document.getElementById("previous").onclick = previousphoto; //capture the click event when clicked on previous
  document.getElementById("next").onclick = nextphoto; //capture the click event when clicked on next

  function nextphoto() {
    // create function to load all images in an order when clicked on next each time
    currentImage++;
    if (currentImage > myImages.length - 1) {
      //if the count of image to be shown goes over limit, then return to first image
      currentImage = 0;
    }
    document.getElementById("myimage").src = myImages[currentImage]; //load the current image into the id myimage which is the source
  }

  function previousphoto() {
    // create function to load all images in an order when clicked on previous each time
    currentImage--;
    if (currentImage < 0) {
      // If the count goes below 0, loop back to the last image
      currentImage = myImages.length - 1;
    }
    document.getElementById("myimage").src = myImages[currentImage]; //load the current image into the id myimage which is the source
  }

}());