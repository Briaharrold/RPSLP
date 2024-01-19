
let readyBtn = document.getElementById("readyBtn");
//Player one choices------------------------------------------
let player1ChoiceRock = document.getElementById("P1Rock");
let player1ChoicePaper = document.getElementById("P1Paper");
let player1ChoiceSis = document.getElementById("P1Sis");
let player1ChoiceLiz = document.getElementById("P1Liz");
let player1ChoiceSpock = document.getElementById("P1Spock");
//Player 2 choices---------------------------------------------
let player2ChoiceRock = document.getElementById("P2Rock");
let player2ChoicePaper = document.getElementById("P2Paper");
let player2ChoiceSis = document.getElementById("P2Sis");
let player2ChoiceLiz = document.getElementById("P2Liz");
let player2ChoicesSpock = document.getElementById("P2Spock");
//-----------SCORES-------------------------------------------------
let playerOnesScore = document.getElementById("");
let playerTwosScore = document.getElementById("");
//---------------ROUNDS--------------------------------------
let oneRound = document.getElementById("oneRound");
let fiveRounds = document.getElementById("fiveRounds");
let sevenRounds = document.getElementById("sevenRounds");
//-----------------------------------------------------------
let oneV1Playbtn = document.getElementById("1v1Playbtn")
let cpuPlaybtn = document.getElementById("cpuPlaybtn")
let roundCounter = 0;
let guessCounter = 0;
let chosenRound;
//-------------------------------------------------------------
readyBtn.addEventListener("click",(e)=>{
    myFunction()
})
function myFunction() {
    var x = document.getElementById("RoundPage");
    var x = document.getElementById("home");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

// let userChoice = player1ChoiceRock&& player1ChoicePaper&&player1ChoiceSis && player1ChoiceLiz && player1ChoiceSpock;

//create a global variable to store the rounds 
//


// player1ChoiceRock.addEventListener("click",(event)=> {
 
//     Compare();

// });
//---------------ROUNDS--------------------------------------
// oneRound.addEventListener("click",(event)=> {
// chosenRound = 1;
// console.log(chosenRound);
// });
// fiveRounds.addEventListener("click",(event)=> {
//     chosenRound = 5;
//     console.log(chosenRound);

//     });
//     sevenRounds.addEventListener("click",(event)=> {
//         chosenRound = 7;
//         console.log(chosenRound);
//        });

//_______________________________________________________________
function OneRoundGame(){

};

player1ChoiceRock.addEventListener("click",(e)=>{
    Compare();
});
async function Compare(){
   
  let userChoice;

    const promise = await fetch("https://rpslsapi.azurewebsites.net/RPSLS");
    const cpu = await promise.text();
const comChoice = cpu;
    console.log(comChoice);
    //if cpu is going to beat player one
    player1ChoiceRock ="Rock";
    player1ChoicePaper ="Paper";
    player1ChoiceSis = "Scissors";
    player1ChoiceLiz ="Lizard";
    player1ChoiceSpock = "Spock";

    if(comChoice==player1ChoiceRock)
    {
        console.log("d")
       
    }else if(comChoice==player1ChoicePaper){
        console.log("f")
    }
    else if(comChoice==player1ChoiceSis){
        console.log("g")
    }
    else if(comChoice==player1ChoiceLiz){
        console.log("h")
    }
    else if(comChoice==player1ChoiceSpock){
        console.log("i")
    }

    // switch(comChoice){
    //     case "Rock":
    //     player1ChoiceRock
    //     break;
    //     case "Paper":
    //     player1ChoicePaper
    //     break;
    //     case "Scissors":
    //     player1ChoiceSis
    //     break;
    //     case "Lizard":
    //     player1ChoiceLiz
    //     break;
    //     case "Spock":
    //     player1ChoiceSpock
    //     break;
    //     default:
    //     break;
    // }
Compare();
}
