const button = document.querySelector("#humanButton");
const output = document.querySelector("#output");
button.addEventListener("click",getHumanChoice);

function getComputerChoice(){
    const value = ["rock","paper","scissors"];
    const rand = Math.floor(Math.random() * 3);
    const selection = value[rand];
    console.log("Computer choose :" + selection);
    return selection;
}

function getHumanChoice(){
    let selection = prompt("What is your fighter ? (rock,paper,scissors)")
    console.log("Human choose : "+selection);
    return selection;
}

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
    const v1 = humans.toLowerCase()
    const v2 = computers.toLowerCase()
    const result = fight(v1,v2);
    if(result ==="tie"){
        console.log(`Aw it's a tie!`)
    }else{
        if(result){
            humanScore++;
            console.log(`You WIN! ${v1} beats ${v2}`)
        }else{
            computerScore++;
            console.log(`You lose! ${v2} beats ${v1}`)
        }
    }
}

function playGame(round){
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

let computerScore = 0;
let humanScore = 0;

playGame(5);