'use strict';

const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const btnsShowModal=document.querySelectorAll(".show-modal");
const btnCloseModal=document.querySelector(".close-modal");

const openModal=function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal=function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    btnsShowModal.style.filter="blur(0px)"
}

for (let i = 0; i< btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener("click",openModal);
}

// btnsShowModal.addEventListener("click",openModal);

btnCloseModal.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);

document.addEventListener("keydown",function(e){
    console.log(e);
    if (e.key ==="Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});



const counter=document.querySelector(".counter");
const flower=document.querySelector(".flowers");

var count=1;


setInterval ( () =>{
    if (count < 1000) {
        count++
        counter.innerText=count;
    }
},1);

setTimeout(() => {
    flower.innerHTML="Flowers in instragram!";
}, 4100);


//  BACKGROUND-COLOR-CHANGED-RGB-CLICK-/// 

const button=document.querySelector(".change-btn");
const paragraph=document.querySelector(".para");
const body=document.querySelector("body");
const btns=document.querySelector(".btns");

button.addEventListener("click",changeColor);

function changeColor(){

    const col1=getRandomRgb();
    const col2=getRandomRgb();
    const col3=getRandomRgb();

    const collString = `rgb ( ${col1}, ${col2}, ${col3} )`;
    console.log(collString)
    btns.style.background= collString;
    paragraph.innerText=collString;
}

function getRandomRgb(){
    return Math.floor(Math.random() *256);
};


