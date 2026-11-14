"use strict"
const model = document.querySelectorAll(".model")
const messageBox = document.querySelector(".message-box")
const overlay = document.querySelector(".overlay")
// model.addEventListener("click" ,function(){
// messageBox.classList.remove("hidden");

// });

model.forEach(function(items){
    items.addEventListener("click" , function(){
        messageBox.classList.remove("hidden");
        overlay.classList.remove("hidden");
    })
})

//closing model box by clicking crossIcon button
const crossIcon = document.querySelector(".cross-icon");
crossIcon.addEventListener("click" , function(){
    messageBox.classList.add("hidden");
    overlay.classList.add("hidden");
})
// closing model box by clicking  overlay div
const overlayRemove = overlay.addEventListener("click", function(){
   messageBox.classList.add("hidden");
    overlay.classList.add("hidden");
})

// closing model box by using escape button
document.addEventListener("keydown" ,function(e){
 if(e.key=== "Escape"){
      messageBox.classList.add("hidden");
    overlay.classList.add("hidden");
 }
})