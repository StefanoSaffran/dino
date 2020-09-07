window.addEventListener('load', start);

let character = null;
let block = null;
let score = null;
let interval = null;


function start() {
    character = document.getElementById("character");
    block = document.getElementById("block");
    score = document.querySelector("#score");

    window.addEventListener('keypress', startGame);
}

function startGame(e) {
    if(e.key === 'Enter') {
        block.classList.add("animateBlock");
        block.style.display = "block";
        startScore();
    }
}

function startScore() {
    clearInterval(interval);
    score.textContent = 0;
    interval = setInterval(() => {
        const value = Number(score.textContent);
        score.textContent = value+1;
    }, 100);
}

function jump() {
    if (character.classList != "animateJump") {
        character.classList.add("animateJump");
    }
        setTimeout(function(){
            character.classList.remove("animateJump");
    },500);
}

var checkDead = setInterval(function() {
        var characterTop = 
        parseInt (window.getComputedStyle(character).getPropertyValue("top"));
        var blockLeft = 
        parseInt (window.getComputedStyle(block).getPropertyValue("left"));
        
        if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
                block.classList.remove("animateBlock");
                block.style.display = "none";
                clearInterval(interval);
                alert("YOU LOSE!")
            }

}, 10);
    
   
    
