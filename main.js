const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scisButton = document.getElementById('scissors');
const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');

const score1 = document.getElementById('playerScore');
const score2 = document.getElementById('computerScore');

const panel1 = document.getElementById('panel1');
const panel2 = document.getElementById('panel2');

const demo = document.getElementById('demo');
const restart = document.getElementById('again');
const giveName = document.getElementById('giveName');


const iconArray = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"]

let nameInput = prompt("Enter your name");



if (nameInput===""){
    alert("Enter valid name")
}

else{
    giveName.innerHTML = `${nameInput} :`
}


gameWinner=()=>{
    if(score1.innerHTML==="3"){
        demo.innerHTML = "You win!!!"
        document.body.style.backgroundColor="green"
        rockButton.disabled=true
        paperButton.disabled=true
        scisButton.disabled=true
        panel1.style.backgroundColor="rgb(41, 40, 40)"
        panel2.style.backgroundColor="rgb(41, 40, 40)"
    return
    }
    if(score2.innerHTML==="3"){
        demo.innerHTML = "You lost!!!"
        document.body.style.backgroundColor="yellow"
        rockButton.disabled=true
        paperButton.disabled=true
        scisButton.disabled=true
        panel1.style.backgroundColor="rgb(41, 40, 40)"
        panel2.style.backgroundColor="rgb(41, 40, 40)"
        return
    }
}


playGame=()=>{
    if((icon1.className === "fas fa-hand-rock" && icon2.className.includes("paper")) 
    || (icon1.className === "fas fa-hand-paper" && icon2.className.includes("scissors"))
    || (icon1.className === "fas fa-hand-scissors" && icon2.className.includes("rock")) ){
        score2.innerHTML++
        panel1.style.backgroundColor="red"
        panel2.style.backgroundColor="green"
        
    }
    else if((icon1.className === "fas fa-hand-paper" && icon2.className.includes("rock")) || (icon1.className === "fas fa-hand-rock" && icon2.className.includes("scissors")) || (icon1.className === "fas fa-hand-scissors" && icon2.className.includes("paper"))){
        score1.innerHTML++
        panel1.style.backgroundColor="green"
        panel2.style.backgroundColor="red"
    }
    else{
        panel1.style.backgroundColor=""
        panel2.style.backgroundColor=""
    }
}


game=()=>{
    const randomNum =()=> Math.floor(Math.random()*iconArray.length);
    
rockButton.onclick=()=>{
    icon1.className = "fas fa-hand-rock";
    icon2.className = iconArray[randomNum()];
    playGame();
    gameWinner();

}

paperButton.onclick=()=>{
    icon1.className = "fas fa-hand-paper";
    icon2.className = `${iconArray[randomNum()]}`;
    playGame();
    gameWinner();
}

scisButton.onclick=()=>{
    icon1.className = "fas fa-hand-scissors";
    icon2.className = `${iconArray[randomNum()]}`;
    playGame();
    gameWinner();
}

restart.onclick=()=>{
    score1.innerHTML = "0"
    score2.innerHTML = "0"
    demo.innerHTML = "Try your luck !"
    rockButton.disabled=false
    paperButton.disabled=false
    scisButton.disabled=false
    document.body.style.backgroundColor = "white";
    panel1.style.backgroundColor="rgb(41, 40, 40)"
    panel2.style.backgroundColor="rgb(41, 40, 40)"

}
}

game();


