 "use strict";

// const mesage=document.querySelector(".message");
// const startBtn=document.querySelector(".start-btn");
// const clickBtn=document.querySelector(".click-btn");

// const winScore=10;

// let count=0;

// startBtn.addEventListener("click", start);

// function start(){
//     count=0;
//     mesage.textContent= count;
//     clickBtn.removeAttribute("disabled"); 
//     startCounting();
// }


// function startCounting(){

// setTimeout ( () => {

//     if (isWin()) {
//         mesage.textContent="You Win";
//     }
//     else{
//         mesage.textContent="You Lost";
//     }
    
//     clickBtn.setAttribute("disabled",true);
// },2000);

// }

// // is this win naki lose check//

// function isWin(){
//     if (count >= winScore) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// clickBtn.addEventListener("click",countNumber);

// function countNumber(){

//     count++;
//     mesage.textContent=count;
// };





const mesage=document.querySelector(".message");
const startBtn=document.querySelector(".start-btn");
const clickBtn=document.querySelector(".click-btn");

const winScore=10;

let count=0;


startBtn.addEventListener("click",start);

function start(){
    count=0;
    mesage.textContent=count;
    clickBtn.removeAttribute("disabled");
    startCounting();
}

function startCounting(){

    setTimeout( ()=>{
        if (isWin()) {
            mesage.textContent="You Win";
        }
        else{
            mesage.textContent="You lose";
        }
        clickBtn.setAttribute("disabled",true);
    },2000);
}

function isWin(){
    if (count > winScore) {
        return true;
    }
    else{
        return false;
    }
};


clickBtn.addEventListener("click",countNumber);

function countNumber(){
    count++;
    mesage.textContent=count;
};