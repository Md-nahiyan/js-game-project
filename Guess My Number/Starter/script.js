'use strict';

// const message=document.querySelector('.message');
// const guess=document.querySelector('.guess');
// const check=document.querySelector('.check');
// const scoreResult=document.querySelector('.score');
// const highscoreResult=document.querySelector('.highscore');
// const again=document.querySelector('.again');
// const toggle=document.querySelector('.toggle');
// const number=document.querySelector('.number');
// const body=document.querySelector('body');

// let secretNumber=Math.trunc(Math.random() *20) +1;
// let score=20;
// let highscore=0;



// check.addEventListener("click",function(){
//     let guessedNumber=Number(guess.value);
    
//     if (!guessedNumber) {
//         message.textContent="No number";
//     }
//     else if( guessedNumber === secretNumber){
//         message.textContent="Correct Answer";
//         if (score>highscore) {
//             highscore=score;
//             highscoreResult.textContent=highscore;
//     }
//         body.style.backgroundColor= '#60b347';
//         number.textContent=guessedNumber;
//         number.style.width='32rem';
//     }
//     else{
//       if (score >1) {
//         message.textContent=guessedNumber>secretNumber ? "To high" : "To low" ;
//         score--;
//         scoreResult.textContent=score;
//         }
//         else{
//             body.style.backgroundColor='#ff0e0e';
//             message.textContent="You Lost";
//             scoreResult.textContent=0;
//         }
//     }
    
// });


// again.addEventListener("click", function() {
//     secretNumber=Math.trunc(Math.random() *20) +1;
//     message.textContent="Start guessing...";
//     scoreResult.textContent="20";
//     score=0;
//     guess.value="";
//     body.style.backgroundColor="";
//     number.textContent="?";
//     number.style.width="15rem";
// });


// toggle.addEventListener("click", function (){
//     body.classList.toggle("light");
//     if (toggle.textContent="🌛") {
//         toggle.textContent="🌞";
//     }else{
//         toggle.textContent="🌛";
//     }
// });










const number=document.querySelector(".number");
const guess=document.querySelector(".guess");
const check=document.querySelector(".check");
const message=document.querySelector(".message");
const scoreResult=document.querySelector(".score");
const highscoreResult=document.querySelector(".highscore");
const again=document.querySelector(".again");
const toggle=document.querySelector(".toggle");
const body=document.querySelector("body");

let secretNumber=Math.trunc(Math.random()*20 )+1 ;

let score=20;
let highscore=0;

check.addEventListener("click", function(){
    let guessedNumber=Number(guess.value);
    
    if (!guessedNumber) {
        message.textContent="No number";
    }
    else if(guessedNumber===secretNumber){
        message.textContent="Corect Answer";
        if (score>highscore) {
            highscore=score;
            highscoreResult.textContent=highscore;
        }
        body.style.backgroundColor="#60b347";
        number.textContent=guessedNumber;
        number.style.width="32rem";
    }
    else{
        if(score>1){
            message.textContent=guessedNumber>secretNumber? "Too high": "Too Low";
            score--;
            scoreResult.textContent=score;
        }
        else{
            message.textContent="To Lost";
            body.style.backgroundColor="#ff0e0e";
            scoreResult.textContent="0";
        }
    }
});

again.addEventListener("click", function(){
    secretNumber=Math.trunc(Math.random()*20 ) +1;
    body.style.backgroundColor="";
    number.textContent="?";
    message.textContent="Start guessing...";
    guess.value="";
    scoreResult.textContent="20";
    score-20;
    highscoreResult.textContent="0";
    number.style.width="15rem";
});

toggle.addEventListener("click", function(){
    body.classList.toggle("light");
    if(toggle.textContent="🌛"){
        toggle.textContent="🌞";
    }
    else{
        toggle.textContent="🌞";
    }
});