(function(){

    "use strict";

    const btn = document.querySelector("button");

    btn.onclick = function () {
      let myTag = document.createElement("p"); //create new paragraph
      let myText = document.createTextNode("here is a new paragraph"); //new text for the paragraph
      myTag.appendChild(myText); //add the new text to the new paragraph
      let myDiv = document.querySelector("div"); //query for the div in the code
      myDiv.appendChild(myTag); //add the new paragraph to the div  ;
    };

}());

