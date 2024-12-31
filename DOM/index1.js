(function(){

    "use strict";


    let currentImage = 0;
    const myphotos = [
      "image1.jpg",
      "image2.jpg",
      "image3.jpg",
      "image4.jpg",
      "image5.jpg",
    ];

    const container = document.getElementById("content");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("previous");

    //next button
    nextBtn.addEventListener("click", function (event) {
      event.preventDefault();

      currentImage++;
      if (currentImage > myphotos.length - 1) {
        currentImage = 0;
      }

      swapImage()

    });
    //previous button
    prevBtn.addEventListener("click", function (event) {
      event.preventDefault();

      currentImage--;
      if (currentImage < 0) {
        currentImage = myphotos.length - 1;
      }
      swapImage()

    });

    //function to reuse in 2 placs above for next and previous button
    function swapImage(){
        const newslide = document.createElement("img");
        newslide.src = `slides/${myphotos[currentImage]}`;
        newslide.className = "fadeinimg";
        container.appendChild(newslide);
  
        if (container.children.length < 2) {
          container.removeChild(container.children[0]);
        }
    }
}())