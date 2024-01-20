
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
let playerOnesScore = document.getElementById("1pScore");
let playerTwosScore = document.getElementById("2pScore");
let cpuScore = document.getElementById("")
//---------------ROUNDS--------------------------------------
let oneRound = document.getElementById("oneRound");
let fiveRounds = document.getElementById("fiveRounds");
let sevenRounds = document.getElementById("sevenRounds");
//-----------------------------------------------------------
let oneV1Playbtn = document.getElementById("1v1Playbtn")
let cpuPlaybtn = document.getElementById("cpuPlaybtn")
let twoPlaybtn = document.getElementById("twoPlaybtn");
//---------------------PAGES----------------------------------
let homeScreen= document.getElementById("home");
let modeScreen= document.getElementById("Mode");
let roundScreen= document.getElementById("RoundPage");
let gameScreen= document.getElementById("game");
let gameCpu =document.getElementById("gamecpu");
let endScreen =document.getElementById("endScreen");
let scoreCounter = 0;

let playerIsTrue = true;
let playerOneTurn = true;
let maxScore = 1;
let p1Points = 0;
let p2Points = 0;
let choice1;
let choice2;
let chosenRound;
//-------------------------------------------------------------
readyBtn.addEventListener("click",(e)=>{
    homeScreen.style.display = "none"
    roundScreen.style.display = "none"
    gameScreen.style.display = "none"
    gameCpu.style.display = "none"
});
// -------------------------------------CPU 1v1--------------------------------------------------------
twoPlaybtn.addEventListener('click', function (e) {
    playerIsTrue = true;
    homeScreen.style.display = "none"
    modeScreen.style.display = "none"
    roundScreen.style.display = "block"
    gameScreen.style.display = "none"
    gameCpu.style.display = "none"
   
})
cpuPlaybtn.addEventListener('click', function (e) {
    playerIsTrue = false;
    homeScreen.style.display = "none"
    modeScreen.style.display = "none"
    roundScreen.style.display = "none"
    gameScreen.style.display = "none"
})
// ----------------------------------ROUND SCREENS-----------------------------------------------------------
oneRound.addEventListener('click', function (e) {
    homeScreen.style.display = "none"
    modeScreen.style.display = "none"
    roundScreen.style.display = "none"
    gameScreen.style.display = "block"
    endScreen.style.display = "none"
    gameCpu.style.display = "none"
    maxScore = 1;


})
fiveRounds.addEventListener('click', function (e) {
    homeScreen.style.display = "none"
    modeScreen.style.display = "none"
    roundScreen.style.display = "none"
    gameScreen.style.display = "block"
    endScreen.style.display = "none"
    gameCpu.style.display = "none"
    maxScore = 3;

})
sevenRounds.addEventListener('click', function (e) {
    homeScreen.style.display = "none"
    modeScreen.style.display = "none"
    roundScreen.style.display = "none"
    gameScreen.style.display = "block"
    endScreen.style.display = "none"
    gameCpu.style.display = "none"
    //body.className = "gameBg"
    maxScore = 4;
})
//-------------------------------game--------------------------------------------------------------
player1ChoiceRock.addEventListener('click', async () => {
    if (playerOneTurn && playerIsTrue) {
        choice1 = 'rock';
        playerOneTurn = false;
    } else if (playerOneTurn && playerIsTrue === false) {

        choice1 = 'rock';

        choice2 = await computer();
        compare(choice1, choice2);
        updateScore();
    } else if (playerOneTurn === false && playerIsTrue === true) {
        textOnScreen.textContent = "Player 1's Turn"
        choice2 = 'rock';
        playerOneTurn = true;
        compare(choice1, choice2);
        updateScore()
    }
})
player1ChoicePaper.addEventListener('click', async () => {
    if (playerOneTurn && playerIsTrue) {
        choice1 = 'paper';
        playerOneTurn = false;
    } else if (playerOneTurn && playerIsTrue === false) {

        choice1 = 'paper';

        choice2 = await computer();
        compare(choice1, choice2);
       
    } else if (playerOneTurn === false && playerIsTrue === true) {
        choice2 = 'paper';
        playerOneTurn = true;
        compare(choice1, choice2);
   
    }
})
player1ChoiceSis.addEventListener('click', async () => {
    if (playerOneTurn && playerIsTrue) {
        choice1 = 'scissors';
        playerOneTurn = false;
    } else if (playerOneTurn && playerIsTrue === false) {

        choice1 = 'scissors';
        choice2 = await computer();
        compare(choice1, choice2);
       
    } else if (playerOneTurn === false && playerIsTrue === true) {
        textOnScreen.textContent = "Player 1's Turn"
        choice2 = 'scissors';
        playerOneTurn = true;
        compare(choice1, choice2);
      
    }
})
player1ChoiceLiz.addEventListener('click', async () => {
    if (playerOneTurn && playerIsTrue) {
        textOnScreen.textContent = "Player 2's Turn"
        choice1 = 'lizard';
        playerOneTurn = false;
    } else if (playerOneTurn && playerIsTrue === false) {

        choice1 = 'lizard';

        choice2 = await computer();
        compare(choice1, choice2);
     
    } else if (playerOneTurn === false && playerIsTrue === true) {
        textOnScreen.textContent = "Player 1's Turn"
        choice2 = 'lizard';
        playerOneTurn = true;
        compare(choice1, choice2);
       
    }
})

player1ChoiceSpock.addEventListener('click', async () => {
    if (playerOneTurn && playerIsTrue) {
        textOnScreen.textContent = "Player 2's Turn"
        choice1 = 'spock';
        playerOneTurn = false;
    } else if (playerOneTurn && playerIsTrue === false) {

        choice1 = 'spock';

        choice2 = await computer();
        compare(choice1, choice2);
        textOnScreen.textContent = `Computer chose ${choice2}`
       
    } else if (playerOneTurn === false && playerIsTrue === true) {
        textOnScreen.textContent = "Player 1's Turn"
        choice2 = 'spock';
        playerOneTurn = true;
        compare(choice1, choice2);
        
    }
})


async function computer() {
    const promise = await fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption');

    const data = await promise.text();

    return data.toLowerCase();
}


