(function(){
    
    'use strict';
    var convertType = "miles";
    var heading = document.querySelector("h1");
    var intro = document.querySelector("p");
    var answerDiv = document.getElementById("answer");
    var form = document.getElementById("convert");

    document.addEventListener("keydown", function () {
      //handle keypress of K or M keys

      var key = event.code;

      if (key === "KeyK") {
        //change heading, change paragraph, change the value of convertype (miles of kms)
        convertType = "kilometers";
        heading.innerHTML = "Kilometers to Miles Converter";
        intro.innerHTML =
          "Type in a number of miles and click the button to convert the distance to miles.";
      } else if (key === "KeyM") {
        //change heading, change paragraph, change the value of convertype (miles of kms)
        convertType = "miles";
        heading.innerHTML = "Miles to Kilometers Converter";
        intro.innerHTML =
          "Type in a number of miles and click the button to convert the distance to kilometers.";
      }
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var distance = parseFloat(document.getElementById("distance").value);

      if (distance) {
        //convert Miles to KM 1.609344
        //convert Kms to Miles 0.621371192

        if (convertType == "miles") {
          var converted = (distance * 1.609344).toFixed(3);
          answer.innerHTML = `${distance} miles converts to ${converted} kilometers`;
        } else {
          var converted = (distance * 0.621371192).toFixed(3);
          answer.innerHTML = `${distance} kilometers converts to ${converted} miles`;
        }
      } else {
        answer.innerHTML = `<h2> Please provide a number</h2>`;
      }

      //handle submission of form and distance conversion
    });


})();