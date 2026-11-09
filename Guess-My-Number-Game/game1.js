 "use strict"
 // we are building a game where we have to guess number between 1 to 20
 const correct  = document.querySelector(".correct")
// here's the logic of if use clicks on check button
let guess;
let secretNumber = Math.floor(Math.random()*20)+1;
console.log(`secrete number is genereted before again clicks: ${secretNumber}`);
let score  = 20;
let highestScore = 0;
const body = document.querySelector("body");
let gameOver = false;

const showCorrectMessage = function(message){
  correct.textContent = message;
}

 document.querySelector(".input-field-2").addEventListener("click" , function(){
 if(gameOver) return;
   guess =Number(document.querySelector(".guess").value);

  // Number("") is equal to 0
  if(!guess){ // !0 is a true value 
   //  correct.textContent= "⛔ Enter the Number";
   showCorrectMessage( "⛔ Enter the Number");
  }else if(guess>20 || guess < 1){
       //  correct.textContent= "⛔ Enter the Number Between 1 to 20";
       showCorrectMessage( "⛔ Enter the Number Between 1 to 20");
         return;

   } else if(guess !==secretNumber){
      //correct.textContent = (guess>secretNumber)? "⚡ Too High" : "🌟 Too Low";
      showCorrectMessage((guess>secretNumber)? "⚡ Too High" : "🌟 Too Low");
      score--;
       document.querySelector(".score-point").textContent = score;
       if(score===0){
   // correct.textContent = "🔥 You Lost The Game";
   showCorrectMessage( "🔥 You Lost The Game");
    document.querySelector(".score-point").textContent = score;
    gameOver = true;
    return;
   }
 //  else if(guess>secretNumber){
  //        correct.textContent= "⚡ Too High";
  //        score--;
  //    document.querySelector(".score-point").textContent = score;
  //      if(score===0){
  //   correct.textContent = "🔥 You Lost The Game";
  //   document.querySelector(".score-point").textContent = score;
  //   gameOver = true;
  //   return;
  // }
  // }else if(guess<secretNumber){
  //   correct.textContent="🌟 Too Low"
  //   score--;
  //   document.querySelector(".score-point").textContent = score;
  //      if(score===0){
  //   correct.textContent = "🔥 You Lost The Game";
  //   document.querySelector(".score-point").textContent = score;
  //   gameOver = true;
  
  //   return;
  //    }

  // }
  
  }else if(guess===secretNumber){
        // correct.textContent= "😀 Your guessed right";
        showCorrectMessage( "😀 Your guessed right");
         gameOver = true;
         document.querySelector("body").style.backgroundColor = "green";
         document.querySelector(".display-box").textContent = guess;
        document.querySelector(".display-box").style.padding = "1.2rem 12rem";
          if(score>highestScore){
      highestScore = score;
    }
    document.querySelector(".highest-score").textContent = highestScore;

  }

 });



// my initial works ,, shows some bugs 

//  document.querySelector(".input-field-2").addEventListener("click" , function(){
//                   document.querySelector(".guess").style.border = "2px solid white";

//   // termination after score becomes 0
//     if(gameOver) return;

//     // the value of iput field comes it ,is always return string so we have to convert into number
//       guess = Number(document.querySelector(".guess").value); 
//      console.log(`your input value is ${guess}`);
//      // if user put nothing into the input box
//      // 1. keep the input border red
//      // 2 show the text "Enter a number"
//     if(!guess){  //here remember (!0) is a true value.
//         document.querySelector(".guess").style.border = "2px solid red";
//      correct.textContent="🛑 Enter a Number !!" // our game is to guess 1 to 20 not include zero
//      return;
//     } else if(secretNumber === guess){
//         correct.textContent = "😀 Your guessed right";
//         document.querySelector("body").style.backgroundColor="#32a834";
//       //  if in 20 trials user guessed multiplex time correct so we want take his highest score value
//        highestScore += guess;
//              document.querySelector(".display-box").textContent = highestScore;
//         document.querySelector(".highest-score").textContent = highestScore;

//     }else if(guess>secretNumber){
       
//     }
//      else {
//         correct.textContent="try again"
//         document.querySelector("body").style.backgroundColor =  'rgb(37, 135, 102)';
//       }
//             score--;
//             console.log(`scorwa is ${score}`);
//             document.querySelector(".score-point").textContent= score;
//        if(score===0){
   
//             correct.textContent="Match Over , Click Again to Restart The Game"
//             // body.classList.add("body-full");
//                document.querySelector("body").style.backgroundColor =  'rgb(212, 31, 31)';

//             document.querySelector(".display-box").textContent = `Highest Score: ${highestScore}`;

//                document.querySelector(".guess").value="";
//             gameOver = true;
        
//     }
          
   
//  });


// adding event on again button
//1. when user want to restart this game , can click on again icon on the game
document.querySelector(".again").addEventListener("click", function(){
secretNumber = Math.floor(Math.random()*20)+1;
console.log(`the secrete number after clicking agian button ${secretNumber}`)
 gameOver = false;
 score = 20;
 document.querySelector(".score-point").textContent = score;
 //correct.textContent= "Start Guessing !!";
 showCorrectMessage( "Start Guessing !!");
document.querySelector(".guess").value="";
 document.querySelector(".display-box").textContent ="?";
document.querySelector("body").style.backgroundColor = " rgb(37, 135, 102)";
document.querySelector(".display-box").style.padding = "1rem 6rem";


 

});
