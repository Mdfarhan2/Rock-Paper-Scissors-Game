let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
 let options = ["rock", "paper", "scissors"];
 const randIdx = Math.floor(Math.random() * 3);
 return options[randIdx];
};

const drawGame = () => {
   
    msg.innerHTML = "Game Draw Paly again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
     msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
     msg.style.backgroundColor = "green";
    }else{
        
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerHTML = `You lose! ${compChoice} beats Your $ {userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
   //Generate Computer choice
   const compChoice = genCompChoice();


   if(userChoice === compChoice){
    //Drow Game
    drawGame();
    } else {
    let userWin = true;
    if(userChoice === "rock") {
        //scissor, paper
       userWin =  compChoice === "paper" ? false : true;
   } else if(userChoice === "paper") {
      // rock, scissor
     userWin = compChoice === "scissor" ? false :true;
   }else {
      //rock,paper
    userWin = compChoice === "rock" ? false : true;
   }
   showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
     choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id");
   
     playGame(userChoice);
    });
});