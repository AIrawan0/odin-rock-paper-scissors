function getComputerChoice(){
    const value = ["rock","paper","scissors"];
    const rand = Math.floor(Math.random() * 3);
    const selection = value[rand];
    return selection;
}

// function getHumanChoice(){
//     let selection = prompt("What is your fighter ? (rock,paper,scissors)")
//     console.log("Human choose : "+selection);
//     return selection;
// }

function fight(v1,v2){
    if(v1===v2){
        return "tie"
    }if(v1==="rock"){
        if(v2==="paper"){return false}
        if(v2==="scissors"){return true}
    }if(v1==="paper"){
        if(v2==="scissors"){return false}
        if(v2==="rock"){return true}
    }if(v1==="scissors"){
        if(v2==="paper"){return true}
        if(v2==="rock"){return false}
    }
}

function playRound(humans,computers){
    const listItem = document.querySelector("li");
    const v1 = humans.toLowerCase()
    const v2 = computers.toLowerCase()
    const result = fight(v1,v2);

    if(result ==="tie"){
        addLog(`ROUND ${round+1} : It's a tie`)
    }else{
        if(result){
            humanScore++;
            addLog(`ROUND ${round+1} : ${v1} beats ${v2}`);
        }else{
            computerScore++;
            addLog(`ROUND ${round+1} : ${v2} beats ${v1}`);
        }
    }
    round++;

    if(computerScore >= 5 || humanScore >= 5){
        if(humanScore > computerScore){
            listItem.remove()
            document.querySelector('ul').replaceChildren();
            addLog("YOU WINN!!!")
        }else{
            listItem.remove()
            document.querySelector('ul').replaceChildren();
            addLog("YOU LOSE!!!")
        }
        computerScore = 0;
        humanScore = 0;
        round = 0;
    };
}

function playGame(){
    const round = 5;
    console.log("Lets play rock paper scissors!")
    console.log(`Player=${humanScore} || Computer=${computerScore}`)

    for(let i=1;i<=round;i++){
        console.log(`ROUND ${i}`)
        const humans = getHumanChoice()
        const computers = getComputerChoice()
        playRound(humans,computers);
        console.log(`Player=${humanScore} || Computer=${computerScore}`)
    };
    if(humanScore==computerScore){
        console.log(` `)
        console.log(`AW ITS A TIE!`)
        console.log(`your score is ${humanScore} by computers ${computerScore}`) 
    }else if(humanScore>computerScore){
        console.log(` `)
        console.log(`CONGRATS YOU WIN!!!`)
        console.log(`your score is ${humanScore} by computers ${computerScore}`)
    }else{
        console.log(` `)
        console.log(`AW YOU LOSE...`)
        console.log(`your score is ${humanScore} by computers ${computerScore}`)    }
}

function addLog(msg){
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = msg;
    listItem.appendChild(span);
    list.appendChild(listItem);
}

let round = 0;
let computerScore = 0;
let humanScore = 0;

const btn = document.querySelectorAll(".select");
const list = document.querySelector("#log");
const scorePlayer = document.querySelector("#pscore");
const scoreComputer = document.querySelector("#cscore");

setInterval(() => {
    scorePlayer.textContent = humanScore;
    scoreComputer.textContent = computerScore;
}, 100);

btn.forEach(btn =>{
    btn.addEventListener("click", () => {
        playRound(btn.id,getComputerChoice());
    });
});



