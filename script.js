let userScore=0;
let computerScore=0;
let dispayMessage=document.querySelector("#message-display")
let userScoreDisplay=document.querySelector("#user-score")
let comScoreDisplay=document.querySelector("#computer-score")
let resetGame=document.querySelector("#reset-btn")

resetGame.addEventListener("click",()=>{
    userScore=0;
    computerScore=0;
    userScoreDisplay.innerText=userScore
    comScoreDisplay.innerText=computerScore
    dispayMessage.innerText="Play your move"

})

const genCompChoice=()=>{
    let arr=["rock","paper","scissor"]
    let idx=Math.floor(Math.random()*3)
    return arr[idx]
}
const drawGame=()=>{
    console.log("game is draw");
    dispayMessage.innerText="Game was draw"
    dispayMessage.style.backgroundColor="yellow"
    dispayMessage.style.color="black"
    
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreDisplay.innerText=userScore
       
        dispayMessage.innerText=`Yeey!! you win!! ${userChoice} beats ${compChoice}`
        dispayMessage.style.backgroundColor="green"
        dispayMessage.style.color="black"
    }
    else{
        computerScore++;
        comScoreDisplay.innerText=computerScore
        console.log("you lose");
        dispayMessage.innerText=`You lose the game.${compChoice} beats ${userChoice}`
        dispayMessage.style.backgroundColor="red"
        dispayMessage.style.color="black"
        
    }
}

 const playgame=(userChoice)=>{
    //here we will get the users choice but we need to generate computers choice
 const compChoice=genCompChoice()
 if(userChoice===compChoice){
    drawGame()
 }
 else{
    let userWin=true;
    if(userChoice=="rock"){
        //scissor,paper
       userWin= compChoice=="scissor"? true:false
    }
    else if(userChoice=="paper"){
        //rock,scissor
        userWin=compChoice=="rock"?true:false
    }
    else{
        //rock,paper
        userWin=compChoice=="rock"?false:true
    }
    showWinner(userWin,userChoice,compChoice)
 }
 
}

let choices=document.querySelectorAll(".choice")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id")
        playgame(userChoice)
    })
})