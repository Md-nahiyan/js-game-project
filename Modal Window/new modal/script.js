'use strict';

const button=document.querySelector(".button");
const modalParent=document.querySelector(".modal-parent");
const modal=document.querySelector(".modal");
const btn=document.querySelector(".btn");
const section=document.querySelector(".section");
 

button.addEventListener("click",open);

function open(){
    modalParent.style.display="block";
    section.style.filter="blur(10px)";
};

btn.addEventListener("click",closeWindows);

function closeWindows(){
    modalParent.style.display="none";
    section.style.filter= "blur(0px)";
}

modalParent.addEventListener("click",disappear);

function disappear(e){
    if (e.target.className == "modal-parent") {
        modalParent.style.display="none";
    section.style.filter= "blur(0px)";
    }
}










// var parent = document.querySelector(".modal-parent"),
//     btn = document.querySelector("button"),
//     X = document.querySelector(".X"),
//     section = document.querySelector("section");

// btn.addEventListener("click", appear);

// function appear() {
//   parent.style.display = "block";
//   section.style.filter = "blur(10px)"
// }
// X.addEventListener("click", disappearX);
// function disappearX() {
//   parent.style.display = "none";
//   section.style.filter = "blur(0px)"
// }
// parent.addEventListener("click", disappearParent)
// function disappearParent(e) {
//   if (e.target.className == "modal-parent") {
//     parent.style.display = "none";
//     section.style.filter = "blur(0px)"
//   }
// }